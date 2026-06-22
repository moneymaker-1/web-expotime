'use client';

import { useRef, type MutableRefObject } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { ContactShadows } from '@react-three/drei';
import { EffectComposer, DepthOfField, Bloom, Vignette } from '@react-three/postprocessing';
import * as THREE from 'three';
import Booth from './Booth';
import { booths as boothData, HALL, type Booth as BoothData } from '@/lib/booths';

interface Props {
  progress: MutableRefObject<number>;
  locale: string;
  onSelect: (b: BoothData) => void;
  quality: 'high' | 'low';
  reduced: boolean;
}

const BG = '#0a0a0c';

export default function Hall({ progress, locale, onSelect, quality, reduced }: Props) {
  return (
    <>
      <color attach="background" args={[BG]} />
      <fogExp2 attach="fog" args={[BG, 0.022]} />

      {/* Soft, premium lighting */}
      <ambientLight intensity={0.35} />
      <hemisphereLight intensity={0.5} color="#cfe8ff" groundColor="#0a0a0c" />
      <directionalLight position={[12, 24, 8]} intensity={1.1} color="#ffffff" />
      <directionalLight position={[-14, 10, -10]} intensity={0.5} color="#8DC63F" />
      <pointLight position={[0, 18, 6]} intensity={120} distance={60} color="#9fd8ff" />

      <Rig progress={progress} />

      <Floor />

      {boothData.map((b) => (
        <Booth key={b.id} booth={b} locale={locale} onSelect={onSelect} reduced={reduced} />
      ))}

      <ContactShadows
        position={[0, 0.01, -HALL.depth / 2]}
        scale={Math.max(HALL.depth + 30, 60)}
        resolution={quality === 'high' ? 1024 : 512}
        far={20}
        blur={3}
        opacity={0.5}
        color="#000000"
      />

      {quality === 'high' && (
        <EffectComposer enableNormalPass={false}>
          <DepthOfField focusDistance={0.012} focalLength={0.04} bokehScale={4} height={480} />
          <Bloom intensity={0.55} luminanceThreshold={0.55} luminanceSmoothing={0.3} mipmapBlur />
          <Vignette offset={0.2} darkness={0.85} />
        </EffectComposer>
      )}
    </>
  );
}

/* Scroll-driven cinematic camera: flies above the floor in an isometric arc. */
function Rig({ progress }: { progress: MutableRefObject<number> }) {
  const { camera } = useThree();
  const target = useRef(new THREE.Vector3(0, 0, 0));
  const desired = useRef(new THREE.Vector3());
  const lookTarget = useRef(new THREE.Vector3());

  useFrame(() => {
    const p = THREE.MathUtils.clamp(progress.current, 0, 1);
    // The point on the floor the camera is looking at travels down the hall.
    const focusZ = -p * HALL.depth;
    target.current.set(0, 0.5, focusZ);

    // Isometric offset above + to the side; sweeps gently across as you travel.
    const sway = Math.sin(p * Math.PI) * 4;
    desired.current.set(sway, 17 - p * 2, focusZ + 15);

    camera.position.lerp(desired.current, 0.06);
    lookTarget.current.lerp(target.current, 0.08);
    camera.lookAt(lookTarget.current);
  });

  return null;
}

function Floor() {
  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, -HALL.depth / 2]} receiveShadow>
        <planeGeometry args={[160, HALL.depth + 120]} />
        <meshStandardMaterial color="#0c0d10" metalness={0.4} roughness={0.6} />
      </mesh>
      {/* Subtle guide grid for depth perception */}
      <gridHelper
        args={[200, 80, '#1c1f26', '#141619']}
        position={[0, 0.02, -HALL.depth / 2]}
      />
    </group>
  );
}
