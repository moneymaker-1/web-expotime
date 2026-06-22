'use client';

import { useRef, useState, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { RoundedBox, Html, useCursor } from '@react-three/drei';
import * as THREE from 'three';
import type { Booth as BoothData } from '@/lib/booths';

interface Props {
  booth: BoothData;
  locale: string;
  onSelect: (b: BoothData) => void;
  reduced?: boolean;
}

const BASE_COLOR = '#17181c';

export default function Booth({ booth, locale, onSelect, reduced }: Props) {
  const group = useRef<THREE.Group>(null);
  const accentRefs = useRef<THREE.MeshStandardMaterial[]>([]);
  const [hovered, setHovered] = useState(false);
  const isRtl = locale === 'ar';
  useCursor(hovered);

  // Per-booth deterministic timing offset so float motion is desynchronised.
  const phase = useMemo(() => (booth.id % 12) * 0.5, [booth.id]);

  useFrame((state) => {
    const g = group.current;
    if (!g) return;
    const t = state.clock.elapsedTime;
    // Gentle idle float + lift/scale reaction on hover.
    const targetY = hovered ? 0.6 : 0;
    const floatY = reduced ? 0 : Math.sin(t * 0.6 + phase) * 0.08;
    g.position.y += (targetY + floatY - g.position.y) * 0.08;
    const targetScale = hovered ? 1.06 : 1;
    const s = g.scale.x + (targetScale - g.scale.x) * 0.1;
    g.scale.setScalar(s);
    if (!reduced) g.rotation.y += (Math.sin(t * 0.15 + phase) * 0.04 - g.rotation.y) * 0.02;

    const intensity = hovered ? 1.4 : 0.45;
    for (const m of accentRefs.current) {
      if (m) m.emissiveIntensity += (intensity - m.emissiveIntensity) * 0.12;
    }
  });

  const registerAccent = (m: THREE.MeshStandardMaterial | null) => {
    if (m && !accentRefs.current.includes(m)) accentRefs.current.push(m);
  };

  const accentMat = (
    <meshStandardMaterial
      ref={registerAccent}
      color={booth.accent}
      emissive={booth.accent}
      emissiveIntensity={0.45}
      metalness={0.3}
      roughness={0.4}
      toneMapped={false}
    />
  );

  const baseMat = (
    <meshStandardMaterial color={BASE_COLOR} metalness={0.65} roughness={0.35} envMapIntensity={0.6} />
  );

  return (
    <group
      ref={group}
      position={[booth.x, 0, booth.z]}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
      }}
      onPointerOut={() => setHovered(false)}
      onClick={(e) => {
        e.stopPropagation();
        onSelect(booth);
      }}
    >
      <ShapeGeometry shape={booth.shape} baseMat={baseMat} accentMat={accentMat} />

      {/* Glow disc on the floor beneath each booth */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.02, 0]}>
        <circleGeometry args={[3.2, 48]} />
        <meshBasicMaterial color={booth.accent} transparent opacity={hovered ? 0.16 : 0.05} toneMapped={false} />
      </mesh>

      {hovered && (
        <Html center distanceFactor={18} position={[0, 5.4, 0]} zIndexRange={[40, 0]} pointerEvents="none">
          <div
            dir={isRtl ? 'rtl' : 'ltr'}
            style={{
              whiteSpace: 'nowrap',
              padding: '0.4rem 0.9rem',
              borderRadius: '2rem',
              background: 'rgba(10,10,12,0.7)',
              border: `1px solid ${booth.accent}`,
              backdropFilter: 'blur(8px)',
              color: '#fff',
              fontSize: '0.8rem',
              fontWeight: 700,
              letterSpacing: '0.02em',
              transform: 'translateZ(0)',
              boxShadow: `0 4px 24px ${booth.accent}40`,
            }}
          >
            {isRtl ? booth.nameAr : booth.nameEn}
          </div>
        </Html>
      )}
    </group>
  );
}

/* ------------------------------------------------------------------ */
/*  Sculptural archetypes — clean, abstract, minimal geometry         */
/* ------------------------------------------------------------------ */
function ShapeGeometry({
  shape,
  baseMat,
  accentMat,
}: {
  shape: BoothData['shape'];
  baseMat: React.ReactNode;
  accentMat: React.ReactNode;
}) {
  switch (shape) {
    case 'tower':
      return (
        <group>
          <RoundedBox args={[2.6, 4.2, 2.6]} radius={0.18} smoothness={4} position={[0, 2.1, 0]} castShadow receiveShadow>
            {baseMat}
          </RoundedBox>
          <RoundedBox args={[1.6, 1.4, 1.6]} radius={0.14} smoothness={4} position={[0, 4.9, 0]} castShadow>
            {baseMat}
          </RoundedBox>
          <mesh position={[0, 4.2, 0]}>
            <torusGeometry args={[1.55, 0.06, 12, 48]} />
            {accentMat}
          </mesh>
        </group>
      );
    case 'arch':
      return (
        <group>
          <mesh position={[-1.5, 2, 0]} castShadow>
            <cylinderGeometry args={[0.4, 0.4, 4, 24]} />
            {baseMat}
          </mesh>
          <mesh position={[1.5, 2, 0]} castShadow>
            <cylinderGeometry args={[0.4, 0.4, 4, 24]} />
            {baseMat}
          </mesh>
          <mesh position={[0, 4, 0]} rotation={[0, 0, Math.PI / 2]}>
            <torusGeometry args={[1.5, 0.4, 16, 32, Math.PI]} />
            {baseMat}
          </mesh>
          <mesh position={[0, 0.05, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <ringGeometry args={[1.9, 2.1, 48]} />
            {accentMat}
          </mesh>
        </group>
      );
    case 'rings':
      return (
        <group>
          {[0.8, 2.0, 3.2].map((y, i) => (
            <mesh key={i} position={[0, y, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow>
              <torusGeometry args={[1.8 - i * 0.35, 0.28, 16, 48]} />
              {i === 1 ? accentMat : baseMat}
            </mesh>
          ))}
          <mesh position={[0, 0.8, 0]}>
            <cylinderGeometry args={[0.25, 0.25, 3, 16]} />
            {baseMat}
          </mesh>
        </group>
      );
    case 'monolith':
      return (
        <group rotation={[0, 0, -0.08]}>
          <RoundedBox args={[2.2, 5, 0.7]} radius={0.1} smoothness={4} position={[0, 2.5, 0]} castShadow receiveShadow>
            {baseMat}
          </RoundedBox>
          <mesh position={[0, 2.5, 0.4]}>
            <planeGeometry args={[1.4, 4]} />
            {accentMat}
          </mesh>
        </group>
      );
    case 'pavilion':
      return (
        <group>
          {[
            [-1.8, -1.8],
            [1.8, -1.8],
            [-1.8, 1.8],
            [1.8, 1.8],
          ].map(([px, pz], i) => (
            <mesh key={i} position={[px!, 1.4, pz!]} castShadow>
              <cylinderGeometry args={[0.18, 0.18, 2.8, 16]} />
              {baseMat}
            </mesh>
          ))}
          <RoundedBox args={[4.6, 0.5, 4.6]} radius={0.12} smoothness={4} position={[0, 3, 0]} castShadow>
            {baseMat}
          </RoundedBox>
          <mesh position={[0, 3.28, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <ringGeometry args={[1.0, 1.4, 48]} />
            {accentMat}
          </mesh>
        </group>
      );
    case 'helix':
    default:
      return (
        <group>
          {[0, 1, 2, 3, 4].map((i) => (
            <RoundedBox
              key={i}
              args={[2.6, 0.7, 2.6]}
              radius={0.1}
              smoothness={4}
              position={[0, 0.7 + i * 0.85, 0]}
              rotation={[0, (i * Math.PI) / 7, 0]}
              castShadow
            >
              {i === 2 ? accentMat : baseMat}
            </RoundedBox>
          ))}
        </group>
      );
  }
}
