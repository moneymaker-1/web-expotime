'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { X, Phone, Mail, Globe, Play } from 'lucide-react';
import type { Booth } from '@/lib/booths';

interface Props {
  booth: Booth;
  locale: string;
  onClose: () => void;
}

export default function BoothPanel({ booth, locale, onClose }: Props) {
  const isRtl = locale === 'ar';
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    ref.current?.focus();
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  const name = isRtl ? booth.nameAr : booth.nameEn;
  const desc = isRtl ? booth.descAr : booth.descEn;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      role="dialog"
      aria-modal="true"
      aria-label={name}
      dir={isRtl ? 'rtl' : 'ltr'}
      style={{
        position: 'fixed', inset: 0, zIndex: 1200,
        display: 'flex', justifyContent: isRtl ? 'flex-start' : 'flex-end',
      }}
    >
      {/* Backdrop — keeps the hall faintly visible behind */}
      <motion.button
        aria-label={isRtl ? 'إغلاق' : 'Close'}
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          position: 'absolute', inset: 0, border: 'none', cursor: 'pointer',
          background: 'linear-gradient(90deg, rgba(8,8,10,0) 0%, rgba(8,8,10,0.45) 40%, rgba(8,8,10,0.7) 100%)',
          backdropFilter: 'blur(2px)',
        }}
      />

      {/* Sliding immersive panel */}
      <motion.div
        ref={ref}
        tabIndex={-1}
        initial={{ x: isRtl ? '-100%' : '100%' }}
        animate={{ x: 0 }}
        exit={{ x: isRtl ? '-100%' : '100%' }}
        transition={{ type: 'spring', damping: 30, stiffness: 240 }}
        style={{
          position: 'relative',
          width: 'min(640px, 100%)',
          height: '100%',
          overflowY: 'auto',
          background: 'rgba(12,12,15,0.92)',
          backdropFilter: 'blur(18px)',
          borderInlineStart: `1px solid ${booth.accent}55`,
          color: '#fff',
          outline: 'none',
        }}
      >
        {/* Header */}
        <div style={{ position: 'sticky', top: 0, zIndex: 2, background: 'rgba(12,12,15,0.85)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.25rem 1.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem' }}>
              {/* Logo mark */}
              <div style={{
                width: 46, height: 46, borderRadius: 12, flexShrink: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: booth.accent, color: '#0a0a0c', fontWeight: 900, fontSize: '1.2rem',
              }}>
                {name.charAt(0)}
              </div>
              <div>
                <div style={{ fontSize: '0.65rem', letterSpacing: 2, textTransform: 'uppercase', color: booth.accent, fontWeight: 700 }}>
                  {isRtl ? 'جناح' : 'Booth'} {String(booth.id).padStart(2, '0')}
                </div>
                <h2 style={{ margin: 0, fontSize: '1.35rem', fontWeight: 800, letterSpacing: '-0.01em' }}>{name}</h2>
              </div>
            </div>
            <button
              onClick={onClose}
              aria-label={isRtl ? 'إغلاق' : 'Close'}
              style={{
                width: 40, height: 40, borderRadius: '50%', flexShrink: 0,
                background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)',
                color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >
              <X size={18} />
            </button>
          </div>
        </div>

        <div style={{ padding: '1.75rem' }}>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.75, color: '#d6d6d8', margin: '0 0 2rem' }}>{desc}</p>

          <Gallery title={isRtl ? 'مراحل التنفيذ' : 'Execution'} images={booth.execution} accent={booth.accent} />
          <Gallery title={isRtl ? 'التسليم النهائي' : 'Handover'} images={booth.handover} accent={booth.accent} />

          {/* Video */}
          <SectionTitle accent={booth.accent}>{isRtl ? 'فيديو المشروع' : 'Project Film'}</SectionTitle>
          <div style={{ position: 'relative', borderRadius: 14, overflow: 'hidden', background: '#000', marginBottom: '2rem', aspectRatio: '16/9' }}>
            <video
              src={booth.video}
              controls
              preload="none"
              poster={booth.execution[0]}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
            <div style={{ position: 'absolute', top: 12, insetInlineStart: 12, display: 'flex', alignItems: 'center', gap: 6, pointerEvents: 'none', color: '#fff', fontSize: '0.7rem', fontWeight: 700, background: 'rgba(0,0,0,0.4)', padding: '0.3rem 0.6rem', borderRadius: 20 }}>
              <Play size={12} fill="#fff" /> {isRtl ? 'شغّل' : 'Play'}
            </div>
          </div>

          {/* Contact */}
          <SectionTitle accent={booth.accent}>{isRtl ? 'تواصل' : 'Contact'}</SectionTitle>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <ContactRow icon={<Phone size={15} />} href={`tel:${booth.contact.phone.replace(/\s/g, '')}`} accent={booth.accent}>
              {booth.contact.phone}
            </ContactRow>
            <ContactRow icon={<Mail size={15} />} href={`mailto:${booth.contact.email}`} accent={booth.accent}>
              {booth.contact.email}
            </ContactRow>
            <ContactRow icon={<Globe size={15} />} href={booth.contact.website} accent={booth.accent} external>
              {booth.contact.website.replace(/^https?:\/\//, '')}
            </ContactRow>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Gallery({ title, images, accent }: { title: string; images: string[]; accent: string }) {
  return (
    <>
      <SectionTitle accent={accent}>{title}</SectionTitle>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.6rem', marginBottom: '2rem' }}>
        {images.map((src, i) => (
          <div key={i} style={{ position: 'relative', aspectRatio: '3/4', borderRadius: 10, overflow: 'hidden', background: '#1a1a1e' }}>
            <Image src={src} alt={`${title} ${i + 1}`} fill sizes="200px" style={{ objectFit: 'cover' }} loading="lazy" />
          </div>
        ))}
      </div>
    </>
  );
}

function SectionTitle({ children, accent }: { children: React.ReactNode; accent: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
      <span style={{ width: 6, height: 6, borderRadius: '50%', background: accent }} />
      <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: 2.5, textTransform: 'uppercase', color: '#9a9a9d' }}>{children}</span>
    </div>
  );
}

function ContactRow({
  icon, href, children, accent, external,
}: {
  icon: React.ReactNode; href: string; children: React.ReactNode; accent: string; external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      style={{
        display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '0.85rem 1rem',
        borderRadius: 12, border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.02)',
        color: '#e6e6e8', textDecoration: 'none', fontSize: '0.9rem', transition: 'border-color 0.2s, background 0.2s',
      }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = accent; e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; }}
    >
      <span style={{ color: accent, display: 'flex' }}>{icon}</span>
      {children}
    </a>
  );
}
