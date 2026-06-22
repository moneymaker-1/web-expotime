'use client';

import { useEffect, useRef, useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useProgress } from '@react-three/drei';
import { AnimatePresence, motion } from 'framer-motion';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hall from './Hall';
import BoothPanel from './BoothPanel';
import { booths, type Booth } from '@/lib/booths';

interface Props {
  locale: string;
}

export default function ExhibitionExperience({ locale }: Props) {
  const isRtl = locale === 'ar';
  const progress = useRef(0);
  const [uiProgress, setUiProgress] = useState(0);
  const [selected, setSelected] = useState<Booth | null>(null);
  const [dirOpen, setDirOpen] = useState(false);
  const lenisRef = useRef<Lenis | null>(null);

  // Quality / accessibility detection (client-only).
  const [quality, setQuality] = useState<'high' | 'low'>('high');
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mobile = window.matchMedia('(max-width: 820px)').matches;
    const lowMem = (navigator as Navigator & { deviceMemory?: number }).deviceMemory;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setQuality(mobile || (lowMem !== undefined && lowMem <= 4) ? 'low' : 'high');
    setReduced(prefersReduced);
  }, []);

  // Smooth scrolling (Lenis) wired into GSAP ScrollTrigger — canonical integration.
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.08, wheelMultiplier: 0.9, smoothWheel: true });
    lenisRef.current = lenis;
    gsap.registerPlugin(ScrollTrigger);

    let rafId = 0;
    let queued = false;
    lenis.on('scroll', (e: Lenis) => {
      progress.current = Number.isFinite(e.progress) ? e.progress : 0;
      ScrollTrigger.update();
      if (!queued) {
        queued = true;
        requestAnimationFrame(() => {
          setUiProgress(progress.current);
          queued = false;
        });
      }
    });

    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Freeze scroll while a booth panel is open so the hall holds its position.
  useEffect(() => {
    const lenis = lenisRef.current;
    if (!lenis) return;
    if (selected || dirOpen) lenis.stop();
    else lenis.start();
  }, [selected, dirOpen]);

  const openBooth = (b: Booth) => {
    setDirOpen(false);
    setSelected(b);
  };

  return (
    <div style={{ background: '#0a0a0c' }}>
      {/* Tall scroll track gives Lenis room to travel the camera across the hall */}
      <div style={{ height: `${Math.max(booths.length * 16, 800)}vh` }} aria-hidden="true" />

      {/* Fixed WebGL stage */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0 }}>
        <Canvas
          dpr={[1, quality === 'high' ? 2 : 1.5]}
          camera={{ position: [0, 17, 15], fov: 42, near: 0.1, far: 220 }}
          gl={{ antialias: quality === 'high', powerPreference: 'high-performance' }}
        >
          <Suspense fallback={null}>
            <Hall progress={progress} locale={locale} onSelect={openBooth} quality={quality} reduced={reduced} />
          </Suspense>
        </Canvas>
      </div>

      {/* Loading veil */}
      <Loader isRtl={isRtl} />

      {/* ---- UI overlay (non-blocking) ---- */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 10, pointerEvents: 'none' }} dir={isRtl ? 'rtl' : 'ltr'}>
        {/* Brand */}
        <div style={{ position: 'absolute', top: 'clamp(1.25rem,4vh,2rem)', insetInlineStart: 'clamp(1.25rem,4vw,2.5rem)' }}>
          <div style={{ color: '#fff', fontWeight: 900, fontSize: '1.1rem', letterSpacing: '0.04em' }}>EXPO TIME</div>
          <div style={{ color: '#8DC63F', fontSize: '0.6rem', fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase' }}>
            {isRtl ? 'المعرض التفاعلي' : 'The Interactive Hall'}
          </div>
        </div>

        {/* Directory toggle (also the accessible entry point to every booth) */}
        <button
          onClick={() => setDirOpen(true)}
          style={{
            position: 'absolute', top: 'clamp(1.25rem,4vh,2rem)', insetInlineEnd: 'clamp(1.25rem,4vw,2.5rem)',
            pointerEvents: 'auto', cursor: 'pointer',
            padding: '0.55rem 1.1rem', borderRadius: '2rem',
            background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.18)',
            color: '#fff', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.04em', backdropFilter: 'blur(8px)',
          }}
        >
          {isRtl ? 'الدليل' : 'Directory'}
        </button>

        {/* Progress rail */}
        <div style={{ position: 'absolute', bottom: 'clamp(1.5rem,5vh,2.5rem)', insetInlineStart: 'clamp(1.25rem,4vw,2.5rem)', insetInlineEnd: 'clamp(1.25rem,4vw,2.5rem)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8, color: 'rgba(255,255,255,0.6)', fontSize: '0.65rem', letterSpacing: 2, textTransform: 'uppercase' }}>
            <span>{isRtl ? 'الدخول' : 'Entrance'}</span>
            <span>{Math.round(uiProgress * 100)}%</span>
            <span>{isRtl ? 'النهاية' : 'Finale'}</span>
          </div>
          <div style={{ height: 2, background: 'rgba(255,255,255,0.12)', borderRadius: 2 }}>
            <div style={{ height: '100%', width: `${uiProgress * 100}%`, background: 'linear-gradient(90deg,#8DC63F,#D4E600)', borderRadius: 2 }} />
          </div>
        </div>

        {/* Scroll hint (fades after travel begins) */}
        <motion.div
          animate={{ opacity: uiProgress > 0.02 ? 0 : 1, y: uiProgress > 0.02 ? 10 : 0 }}
          transition={{ duration: 0.5 }}
          style={{ position: 'absolute', bottom: 'clamp(4.5rem,11vh,6rem)', insetInlineStart: 0, insetInlineEnd: 0, textAlign: 'center', color: 'rgba(255,255,255,0.7)', fontSize: '0.78rem', letterSpacing: 2, textTransform: 'uppercase' }}
        >
          {isRtl ? 'مرّر للطيران فوق المعرض' : 'Scroll to fly across the hall'}
        </motion.div>
      </div>

      {/* Booth panel */}
      <AnimatePresence>
        {selected && <BoothPanel booth={selected} locale={locale} onClose={() => setSelected(null)} />}
      </AnimatePresence>

      {/* Directory overlay */}
      <AnimatePresence>
        {dirOpen && (
          <Directory
            isRtl={isRtl}
            onClose={() => setDirOpen(false)}
            onPick={openBooth}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

/* DOM loading veil driven by R3F asset progress. */
function Loader({ isRtl }: { isRtl: boolean }) {
  const { active, progress } = useProgress();
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (!active && progress >= 100) {
      const t = setTimeout(() => setHidden(true), 600);
      return () => clearTimeout(t);
    }
  }, [active, progress]);

  if (hidden) return null;
  return (
    <motion.div
      animate={{ opacity: !active && progress >= 100 ? 0 : 1 }}
      transition={{ duration: 0.6 }}
      style={{
        position: 'fixed', inset: 0, zIndex: 1500, background: '#0a0a0c',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1.5rem',
      }}
    >
      <div style={{ color: '#fff', fontWeight: 900, fontSize: '1.4rem', letterSpacing: '0.1em' }}>EXPO TIME</div>
      <div style={{ width: 180, height: 2, background: 'rgba(255,255,255,0.12)', borderRadius: 2, overflow: 'hidden' }}>
        <div style={{ height: '100%', width: `${progress}%`, background: 'linear-gradient(90deg,#8DC63F,#D4E600)', transition: 'width 0.2s' }} />
      </div>
      <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.7rem', letterSpacing: 2, textTransform: 'uppercase' }}>
        {isRtl ? 'جارٍ تجهيز المعرض' : 'Preparing the hall'} {Math.round(progress)}%
      </div>
    </motion.div>
  );
}

/* Accessible directory: keyboard/SR entry point to every booth. */
function Directory({
  isRtl, onClose, onPick,
}: {
  isRtl: boolean; onClose: () => void; onPick: (b: Booth) => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      role="dialog" aria-modal="true" aria-label={isRtl ? 'دليل الأجنحة' : 'Booth directory'}
      dir={isRtl ? 'rtl' : 'ltr'}
      style={{ position: 'fixed', inset: 0, zIndex: 1300, background: 'rgba(8,8,10,0.92)', backdropFilter: 'blur(16px)', overflowY: 'auto' }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: 'clamp(1.5rem,5vw,3rem)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <h2 style={{ color: '#fff', fontSize: 'clamp(1.4rem,4vw,2.2rem)', fontWeight: 800, margin: 0 }}>
            {isRtl ? 'دليل الأجنحة' : 'Booth Directory'}
          </h2>
          <button
            onClick={onClose}
            aria-label={isRtl ? 'إغلاق' : 'Close'}
            style={{ padding: '0.5rem 1.1rem', borderRadius: '2rem', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.18)', color: '#fff', cursor: 'pointer', fontWeight: 700, fontSize: '0.8rem' }}
          >
            {isRtl ? 'إغلاق' : 'Close'}
          </button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '0.6rem' }}>
          {booths.map((b) => (
            <button
              key={b.id}
              onClick={() => onPick(b)}
              style={{
                display: 'flex', alignItems: 'center', gap: '0.75rem', textAlign: isRtl ? 'right' : 'left',
                padding: '0.85rem 1rem', borderRadius: 12, cursor: 'pointer',
                background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', color: '#fff',
                transition: 'border-color 0.2s, background 0.2s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = b.accent; e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; }}
            >
              <span style={{ width: 30, height: 30, flexShrink: 0, borderRadius: 8, background: b.accent, color: '#0a0a0c', fontWeight: 900, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem' }}>
                {(isRtl ? b.nameAr : b.nameEn).charAt(0)}
              </span>
              <span style={{ fontSize: '0.85rem', fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {isRtl ? b.nameAr : b.nameEn}
              </span>
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
