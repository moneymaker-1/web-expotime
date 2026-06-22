'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';
import { portfolioProjects, clients, testimonials, services } from '@/lib/data';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

interface Props {
  locale: string;
  heroVideoUrl?: string;
  heroImageUrl?: string;
}

/* ------------------------------------------------------------------ */
/*  Scroll-reveal primitive — fades + lifts children into view        */
/* ------------------------------------------------------------------ */
function Reveal({
  children,
  delay = 0,
  y = 40,
  as = 'div',
  style,
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  as?: 'div' | 'span' | 'li';
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShown(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const Tag = as as 'div';
  return (
    <Tag
      ref={ref as React.RefObject<HTMLDivElement>}
      style={{
        ...style,
        opacity: shown ? 1 : 0,
        transform: shown ? 'translateY(0)' : `translateY(${y}px)`,
        transition: `opacity 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 1s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </Tag>
  );
}

export default function HomePageClient({ locale, heroVideoUrl, heroImageUrl }: Props) {
  const isRtl = locale === 'ar';
  const [progress, setProgress] = useState(0);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  // Top scroll-progress indicator (chapter-style reading bar)
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop / (h.scrollHeight - h.clientHeight || 1);
      setProgress(Math.min(Math.max(scrolled, 0), 1));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div style={{ marginLeft: 44, overflowX: 'hidden', background: '#0a0a0a' }} dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Reading progress bar */}
      <div style={{ position: 'fixed', top: 0, left: 44, right: 0, height: 3, zIndex: 1100, background: 'transparent' }}>
        <div style={{ height: '100%', width: `${progress * 100}%`, background: 'linear-gradient(90deg,#8DC63F,#D4E600)', transition: 'width 0.1s linear' }} />
      </div>

      {/* Fixed Left Sidebar */}
      <aside style={{
        position: 'fixed', top: 0, left: 0, width: 44, height: '100vh',
        backgroundColor: '#0a0a0a', zIndex: 900, display: 'flex',
        flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between',
        padding: '1.5rem 0', borderRight: '1px solid rgba(255,255,255,0.06)',
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <div style={{ display: 'flex', gap: 3, marginBottom: 8 }}>
            <span style={{ width: 2, height: 16, background: '#8DC63F', borderRadius: 1 }} />
            <span style={{ width: 2, height: 16, background: '#8DC63F', borderRadius: 1 }} />
            <span style={{ width: 2, height: 16, background: '#8DC63F', borderRadius: 1 }} />
          </div>
          <span style={{ fontSize: 10, color: '#888', letterSpacing: 2, writingMode: 'vertical-rl', transform: 'rotate(180deg)', userSelect: 'none' }}>MENU</span>
        </div>

        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <a href="mailto:info@expo-time.co" style={{
            fontSize: 9, color: '#666', letterSpacing: 1.5,
            writingMode: 'vertical-rl', transform: 'rotate(180deg)',
            textDecoration: 'none', transition: 'color 0.2s',
          }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#8DC63F')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#666')}
          >
            info@expo-time.co
          </a>
        </div>

        <button onClick={scrollToTop} style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
          background: 'none', border: 'none', cursor: 'pointer', padding: '0 0 4px',
        }}>
          <span style={{ fontSize: 8, color: '#555', letterSpacing: 1.5, writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>SCROLL TO TOP</span>
          <div style={{ width: 1, height: 24, background: '#444', margin: '4px 0' }} />
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#8DC63F' }} />
        </button>
      </aside>

      {/* Chapters */}
      <HeroSection heroVideoUrl={heroVideoUrl} heroImageUrl={heroImageUrl} isRtl={isRtl} />
      <ManifestoSection isRtl={isRtl} />
      <ClientsStrip isRtl={isRtl} />
      <PortfolioSection locale={locale} isRtl={isRtl} />
      <CapabilitiesSection isRtl={isRtl} locale={locale} />
      <NumbersSection isRtl={isRtl} />
      <ProcessSection isRtl={isRtl} />
      <MarqueeSection />
      <TestimonialsSection isRtl={isRtl} />
      <CTABanner isRtl={isRtl} locale={locale} />

      <FloatingButtons isRtl={isRtl} locale={locale} />

      <style>{`
        @keyframes marquee-ltr { from { transform: translateX(0) } to { transform: translateX(-50%) } }
        @keyframes marquee-rtl { from { transform: translateX(-50%) } to { transform: translateX(0) } }
        @keyframes blink { 0%,100% { opacity: 1 } 50% { opacity: 0 } }
        @keyframes heroRise { from { opacity: 0; transform: translateY(110%); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes bob { 0%,100% { transform: translateY(0) } 50% { transform: translateY(8px) } }
        @media (max-width: 768px) {
          .sidebar-hide { display: none !important; }
          div[style*="margin-left: 44px"], div[style*="marginLeft: 44"] { margin-left: 0 !important; }
        }
      `}</style>
    </div>
  );
}

/* ================================================================== */
/*  CHAPTER 00 — CINEMATIC HERO                                        */
/* ================================================================== */
function HeroSection({ heroVideoUrl, heroImageUrl, isRtl }: { heroVideoUrl?: string; heroImageUrl?: string; isRtl: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);
  const [offset, setOffset] = useState(0);
  const fallback = heroImageUrl || 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=90';

  useEffect(() => {
    if (videoRef.current) videoRef.current.play().catch(() => setVideoError(true));
  }, []);

  // Subtle parallax on the hero media
  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY * 0.4);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const lines = isRtl
    ? ['نُصمّم', 'تجارب', 'لا تُنسى']
    : ['We craft', 'unforgettable', 'experiences'];

  return (
    <section style={{ position: 'relative', height: '100vh', minHeight: 660, backgroundColor: '#000', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, transform: `translateY(${offset}px) scale(1.08)` }}>
        {heroVideoUrl && !videoError ? (
          <video ref={videoRef} src={heroVideoUrl} autoPlay muted loop playsInline
            onError={() => setVideoError(true)}
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
          />
        ) : (
          <Image src={fallback} alt="Expo Time" fill style={{ objectFit: 'cover' }} priority quality={90} />
        )}
      </div>

      {/* Cinematic overlay */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 35%, rgba(0,0,0,0.8) 100%)' }} />

      {/* Kicker top */}
      <div style={{ position: 'absolute', top: 'clamp(2rem,8vh,5rem)', left: 0, right: 0, padding: '0 clamp(1.5rem,5vw,4rem)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', animation: 'fadeIn 1.2s ease 0.3s both' }}>
        <span style={{ color: '#8DC63F', fontSize: '0.7rem', fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase' }}>
          {isRtl ? 'إكسبو تايم — منذ ٢٠٠٤' : 'Expo Time — Est. 2004'}
        </span>
        <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.7rem', fontWeight: 600, letterSpacing: 3, textTransform: 'uppercase' }}>
          {isRtl ? 'المملكة العربية السعودية' : 'Riyadh · Saudi Arabia'}
        </span>
      </div>

      {/* Headline */}
      <div style={{ position: 'absolute', bottom: 'clamp(5rem,16vh,9rem)', left: 0, right: 0, padding: '0 clamp(1.5rem,5vw,4rem)' }}>
        <h1 style={{ margin: 0, color: '#fff', fontWeight: 900, lineHeight: 0.92, fontSize: 'clamp(2.75rem, 9vw, 8.5rem)', letterSpacing: '-0.03em' }}>
          {lines.map((line, i) => (
            <span key={i} style={{ display: 'block', overflow: 'hidden' }}>
              <span style={{ display: 'inline-block', animation: `heroRise 1s cubic-bezier(0.16,1,0.3,1) ${0.4 + i * 0.15}s both`, color: i === lines.length - 1 ? '#8DC63F' : '#fff' }}>
                {line}
              </span>
            </span>
          ))}
        </h1>
        <p style={{ marginTop: '1.5rem', maxWidth: 540, color: 'rgba(255,255,255,0.78)', fontSize: 'clamp(0.95rem,1.5vw,1.15rem)', lineHeight: 1.7, animation: 'fadeIn 1.2s ease 1.1s both' }}>
          {isRtl
            ? 'نُحوّل أفكار العلامات التجارية إلى أجنحة معارض وفعاليات تأسر الأنظار في جميع أنحاء المملكة.'
            : 'We turn brand ambitions into exhibition stands and live events that command attention across the Kingdom.'}
        </p>
      </div>

      {/* Scroll cue */}
      <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, animation: 'fadeIn 1.2s ease 1.4s both' }}>
        <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.65rem', letterSpacing: 3, textTransform: 'uppercase' }}>{isRtl ? 'اسحب للأسفل' : 'Scroll'}</span>
        <div style={{ width: 1, height: 36, background: 'linear-gradient(to bottom, #8DC63F, transparent)', animation: 'bob 1.8s ease-in-out infinite' }} />
      </div>
    </section>
  );
}

/* ================================================================== */
/*  MANIFESTO — large editorial statement on dark                     */
/* ================================================================== */
function ManifestoSection({ isRtl }: { isRtl: boolean }) {
  const words = isRtl
    ? 'من الفكرة الأولى إلى آخر تفصيلة — نبني مساحات تروي قصة علامتك التجارية وتترك انطباعاً يدوم.'
    : 'From the first sketch to the final detail — we build spaces that tell your brand story and leave a lasting impression.';

  return (
    <section style={{ background: '#0a0a0a', padding: 'clamp(6rem,14vh,11rem) clamp(1.5rem,5vw,4rem)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <Reveal>
          <p style={{ color: '#8DC63F', fontSize: '0.75rem', fontWeight: 700, letterSpacing: 4, textTransform: 'uppercase', marginBottom: '2.5rem' }}>
            {isRtl ? '٠٠ — من نحن' : '00 — Who We Are'}
          </p>
        </Reveal>
        <Reveal delay={120} y={30}>
          <p style={{
            color: '#f4f4f4', fontWeight: 300, lineHeight: 1.35,
            fontSize: 'clamp(1.5rem, 4vw, 3.25rem)', letterSpacing: '-0.02em', margin: 0,
          }}>
            {words}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ================================================================== */
/*  CLIENTS STRIP                                                      */
/* ================================================================== */
function ClientsStrip({ isRtl }: { isRtl: boolean }) {
  const allClients = [...clients, ...clients];
  return (
    <section style={{ backgroundColor: '#0a0a0a', padding: '2rem 0', borderTop: '1px solid rgba(255,255,255,0.07)', borderBottom: '1px solid rgba(255,255,255,0.07)', overflow: 'hidden' }}>
      <div style={{ overflow: 'hidden', whiteSpace: 'nowrap' }}>
        <div style={{ display: 'inline-flex', gap: '3.5rem', alignItems: 'center', animation: `marquee-ltr 38s linear infinite` }}>
          {allClients.map((c, i) => (
            <span key={i} style={{ fontSize: '0.9rem', color: '#777', fontWeight: 600, letterSpacing: 1, whiteSpace: 'nowrap' }}>
              {isRtl ? c.nameAr : c.nameEn}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================================================== */
/*  CHAPTER 01 — SELECTED WORK (cinematic alternating rows)           */
/* ================================================================== */
function PortfolioSection({ locale, isRtl }: { locale: string; isRtl: boolean }) {
  const typingWordsAr = ['أجنحة متميزة', 'معارض دولية', 'أجنحة مخصصة'];
  const typingWordsEn = ['Premium Stands', 'International Expos', 'Custom Booths'];
  const [wordIdx, setWordIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);
  const [cursor, setCursor] = useState(true);

  useEffect(() => {
    const iv = setInterval(() => setCursor((c) => !c), 500);
    return () => clearInterval(iv);
  }, []);

  useEffect(() => {
    const typingWords = isRtl ? typingWordsAr : typingWordsEn;
    const word = typingWords[wordIdx] ?? '';
    if (typing) {
      if (displayed.length < word.length) {
        const t = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 90);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 1500);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 50);
        return () => clearTimeout(t);
      } else {
        setWordIdx((i) => (i + 1) % typingWords.length);
        setTyping(true);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [displayed, typing, wordIdx, isRtl]);

  const featured = portfolioProjects.slice(0, 5);

  return (
    <section style={{ backgroundColor: '#0a0a0a', padding: 'clamp(5rem,12vh,9rem) clamp(1.5rem,5vw,4rem)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <Reveal>
          <p style={{ fontSize: '0.75rem', color: '#8DC63F', fontWeight: 700, letterSpacing: 4, textTransform: 'uppercase', marginBottom: '1rem' }}>
            {isRtl ? '٠١ — أعمالنا' : '01 — Selected Work'}
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 800, color: '#fff', lineHeight: 1.05, margin: '0 0 4rem', letterSpacing: '-0.02em' }}>
            {isRtl ? (
              <>أعمالنا <span style={{ color: '#8DC63F' }}>{displayed}</span><span style={{ color: '#8DC63F', animation: 'blink 1s infinite' }}>{cursor ? '|' : ' '}</span></>
            ) : (
              <>Our <span style={{ color: '#8DC63F' }}>{displayed}</span><span style={{ color: '#8DC63F', animation: 'blink 1s infinite' }}>{cursor ? '|' : ' '}</span></>
            )}
          </h2>
        </Reveal>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(3rem,7vh,6rem)' }}>
          {featured.map((p, i) => {
            const wide = i % 3 === 0;
            return (
              <Reveal key={p.id} y={60}>
                <Link href={`/${locale}/portfolio`} style={{ textDecoration: 'none', display: 'block' }}>
                  <div className="proj-row" style={{
                    display: 'grid',
                    gridTemplateColumns: wide ? '1fr' : (i % 2 === 0 ? '1.4fr 1fr' : '1fr 1.4fr'),
                    gap: '2rem', alignItems: 'center',
                  }}>
                    {/* Image (order flips) */}
                    <div className="proj-img" style={{
                      position: 'relative', overflow: 'hidden', borderRadius: 12,
                      aspectRatio: wide ? '21/9' : '4/3', order: (!wide && i % 2 !== 0) ? 2 : 1,
                    }}>
                      <Image src={p.image} alt={isRtl ? p.titleAr : p.titleEn} fill quality={85}
                        style={{ objectFit: 'cover', transition: 'transform 0.9s cubic-bezier(0.16,1,0.3,1)' }}
                        onMouseEnter={(e) => ((e.currentTarget as HTMLImageElement).style.transform = 'scale(1.06)')}
                        onMouseLeave={(e) => ((e.currentTarget as HTMLImageElement).style.transform = 'scale(1)')}
                      />
                      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.35), transparent 50%)' }} />
                    </div>

                    {/* Caption */}
                    <div className="proj-cap" style={{ order: (!wide && i % 2 !== 0) ? 1 : 2, padding: wide ? '1.5rem 0 0' : '0' }}>
                      <span style={{ fontSize: '0.7rem', color: '#8DC63F', fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase' }}>
                        {isRtl ? p.categoryAr : p.categoryEn} · {p.year}
                      </span>
                      <h3 style={{ fontSize: 'clamp(1.4rem,2.8vw,2.4rem)', fontWeight: 800, color: '#fff', margin: '0.75rem 0', lineHeight: 1.1, letterSpacing: '-0.01em' }}>
                        {isRtl ? p.titleAr : p.titleEn}
                      </h3>
                      <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', color: '#888', fontSize: '0.85rem', flexWrap: 'wrap' }}>
                        <span>{p.client}</span>
                        <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#8DC63F' }} />
                        <span>{p.area}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <div style={{ textAlign: 'center', marginTop: 'clamp(3rem,7vh,5rem)' }}>
            <Link href={`/${locale}/portfolio`} style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.75rem', padding: '1rem 2.5rem',
              border: '1px solid rgba(141,198,63,0.5)', color: '#8DC63F', borderRadius: '3rem',
              fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none', transition: 'all 0.3s',
            }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#8DC63F'; e.currentTarget.style.color = '#0a0a0a'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#8DC63F'; }}
            >
              {isRtl ? 'عرض جميع الأعمال' : 'View All Projects'}
              <span style={{ transform: isRtl ? 'rotate(180deg)' : 'none' }}>→</span>
            </Link>
          </div>
        </Reveal>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .proj-row { grid-template-columns: 1fr !important; }
          .proj-img { order: 1 !important; aspect-ratio: 4/3 !important; }
          .proj-cap { order: 2 !important; }
        }
      `}</style>
    </section>
  );
}

/* ================================================================== */
/*  CHAPTER 02 — CAPABILITIES (editorial hover-preview list)          */
/* ================================================================== */
function CapabilitiesSection({ isRtl, locale }: { isRtl: boolean; locale: string }) {
  const list = services.slice(0, 8);
  const [hovered, setHovered] = useState<number | null>(null);
  const previews = [
    'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900&q=80',
    'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=900&q=80',
    'https://images.unsplash.com/photo-1511578314322-379afb476865?w=900&q=80',
    'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=900&q=80',
    'https://images.unsplash.com/photo-1531058020387-3be344556be6?w=900&q=80',
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80',
    'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=900&q=80',
    'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=900&q=80',
  ];

  return (
    <section style={{ backgroundColor: '#0f0f0f', padding: 'clamp(5rem,12vh,9rem) clamp(1.5rem,5vw,4rem)', position: 'relative' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <Reveal>
          <p style={{ fontSize: '0.75rem', color: '#8DC63F', fontWeight: 700, letterSpacing: 4, textTransform: 'uppercase', marginBottom: '1rem' }}>
            {isRtl ? '٠٢ — قدراتنا' : '02 — Capabilities'}
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 800, color: '#fff', margin: '0 0 3.5rem', letterSpacing: '-0.02em', lineHeight: 1.05 }}>
            {isRtl ? 'كل ما تحتاجه تحت سقف واحد' : 'Everything under one roof'}
          </h2>
        </Reveal>

        <div style={{ position: 'relative' }}>
          {/* Floating preview image (desktop) */}
          {hovered !== null && (
            <div className="cap-preview" style={{
              position: 'absolute', top: 0, [isRtl ? 'left' : 'right']: 0, width: 'min(38vw, 460px)',
              aspectRatio: '4/3', borderRadius: 12, overflow: 'hidden', pointerEvents: 'none',
              zIndex: 5, boxShadow: '0 30px 80px rgba(0,0,0,0.6)',
              transform: `translateY(${hovered * 16}px)`, transition: 'transform 0.5s cubic-bezier(0.16,1,0.3,1)',
            }}>
              <Image src={previews[hovered] ?? previews[0]!} alt="" fill style={{ objectFit: 'cover' }} />
            </div>
          )}

          <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {list.map((s, i) => (
              <Reveal key={s.slug} as="li" y={24} delay={i * 40}>
                <Link href={`/${locale}/${s.slug}`} style={{ textDecoration: 'none' }}>
                  <div
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                    style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      gap: '1.5rem', padding: 'clamp(1.25rem,3vw,2rem) 0',
                      borderTop: '1px solid rgba(255,255,255,0.1)',
                      transition: 'padding 0.4s ease',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '1.5rem', minWidth: 0 }}>
                      <span style={{ color: hovered === i ? '#8DC63F' : '#555', fontSize: '0.8rem', fontWeight: 700, transition: 'color 0.3s', flexShrink: 0 }}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <h3 style={{
                        margin: 0, fontWeight: 700, letterSpacing: '-0.01em',
                        fontSize: 'clamp(1.4rem, 3.5vw, 2.75rem)',
                        color: hovered === i ? '#fff' : '#999',
                        transform: hovered === i ? `translateX(${isRtl ? '-' : ''}12px)` : 'none',
                        transition: 'color 0.3s, transform 0.4s cubic-bezier(0.16,1,0.3,1)',
                      }}>
                        {isRtl ? s.titleAr : s.titleEn}
                      </h3>
                    </div>
                    <span style={{
                      color: '#8DC63F', fontSize: '1.5rem', flexShrink: 0,
                      opacity: hovered === i ? 1 : 0.25,
                      transform: hovered === i ? 'translateX(0)' : `translateX(${isRtl ? '8px' : '-8px'})`,
                      transition: 'opacity 0.3s, transform 0.4s', display: 'inline-block',
                    }}>{isRtl ? '←' : '→'}</span>
                  </div>
                </Link>
              </Reveal>
            ))}
            <li style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }} />
          </ul>
        </div>
      </div>
      <style>{`@media (max-width: 860px){ .cap-preview { display: none !important; } }`}</style>
    </section>
  );
}

/* ================================================================== */
/*  CHAPTER 03 — BY THE NUMBERS                                        */
/* ================================================================== */
function NumbersSection({ isRtl }: { isRtl: boolean }) {
  const stats = isRtl ? [
    { value: 20, suffix: '+', label: 'سنة خبرة' },
    { value: 500, suffix: '+', label: 'مشروع منجز' },
    { value: 300, suffix: '+', label: 'عميل راضٍ' },
    { value: 15, suffix: '+', label: 'معرض دولي' },
  ] : [
    { value: 20, suffix: '+', label: 'Years of Experience' },
    { value: 500, suffix: '+', label: 'Projects Delivered' },
    { value: 300, suffix: '+', label: 'Happy Clients' },
    { value: 15, suffix: '+', label: 'International Expos' },
  ];

  return (
    <section style={{ backgroundColor: '#0a0a0a', padding: 'clamp(5rem,12vh,9rem) clamp(1.5rem,5vw,4rem)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <Reveal>
          <p style={{ fontSize: '0.75rem', color: '#8DC63F', fontWeight: 700, letterSpacing: 4, textTransform: 'uppercase', marginBottom: '3rem' }}>
            {isRtl ? '٠٣ — بالأرقام' : '03 — By the Numbers'}
          </p>
        </Reveal>
        <div className="num-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: 'rgba(255,255,255,0.1)' }}>
          {stats.map((s, i) => (
            <Reveal key={i} delay={i * 80} style={{ background: '#0a0a0a' }}>
              <div style={{ padding: 'clamp(2rem,5vw,3rem) clamp(1rem,2vw,2rem)' }}>
                <div style={{ fontSize: 'clamp(2.75rem, 7vw, 5.5rem)', fontWeight: 900, color: '#8DC63F', lineHeight: 1, letterSpacing: '-0.03em' }}>
                  <AnimatedCounter target={s.value} suffix={s.suffix} />
                </div>
                <p style={{ marginTop: '1rem', color: '#888', fontSize: '0.95rem', fontWeight: 500 }}>{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <style>{`@media (max-width:640px){ .num-grid { grid-template-columns: repeat(2,1fr) !important; } }`}</style>
    </section>
  );
}

/* ================================================================== */
/*  CHAPTER 04 — PROCESS                                               */
/* ================================================================== */
function ProcessSection({ isRtl }: { isRtl: boolean }) {
  const steps = isRtl ? [
    { num: '01', title: 'الاستماع', desc: 'نبدأ بفهم علامتك التجارية وأهدافك من المشاركة في المعرض بعمق.' },
    { num: '02', title: 'التصميم', desc: 'نُحوّل رؤيتك إلى تصاميم ثلاثية الأبعاد مبهرة تعكس هويتك الفريدة.' },
    { num: '03', title: 'التنفيذ', desc: 'فريقنا يُصنّع ويبني كل تفصيلة بأعلى معايير الجودة والدقة.' },
    { num: '04', title: 'التسليم', desc: 'نُركّب الجناح في الموقع ونتولّى كل شيء حتى الفك والشحن.' },
  ] : [
    { num: '01', title: 'Listen', desc: 'We start by deeply understanding your brand and your goals for the show.' },
    { num: '02', title: 'Design', desc: 'We translate your vision into striking 3D concepts that reflect your identity.' },
    { num: '03', title: 'Build', desc: 'Our team fabricates and builds every detail to the highest standards.' },
    { num: '04', title: 'Deliver', desc: 'We install on-site and handle everything through dismantling and shipping.' },
  ];

  return (
    <section style={{ backgroundColor: '#0f0f0f', padding: 'clamp(5rem,12vh,9rem) clamp(1.5rem,5vw,4rem)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <Reveal>
          <p style={{ fontSize: '0.75rem', color: '#8DC63F', fontWeight: 700, letterSpacing: 4, textTransform: 'uppercase', marginBottom: '1rem' }}>
            {isRtl ? '٠٤ — كيف نعمل' : '04 — How We Work'}
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 800, color: '#fff', margin: '0 0 3.5rem', letterSpacing: '-0.02em' }}>
            {isRtl ? 'من الفكرة إلى الواقع' : 'From idea to reality'}
          </h2>
        </Reveal>
        <div className="proc-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2.5rem' }}>
          {steps.map((s, i) => (
            <Reveal key={s.num} delay={i * 90} y={40}>
              <div>
                <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#8DC63F', marginBottom: '1.25rem', letterSpacing: 1 }}>{s.num}</div>
                <div style={{ height: 1, background: 'rgba(141,198,63,0.3)', marginBottom: '1.25rem' }} />
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff', margin: '0 0 0.75rem' }}>{s.title}</h3>
                <p style={{ fontSize: '0.9rem', color: '#888', lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width:860px){ .proc-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width:480px){ .proc-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

/* ================================================================== */
/*  MARQUEE                                                            */
/* ================================================================== */
function MarqueeSection() {
  const row1 = ['تصميم أجنحة', 'Exhibition Design', 'معارض دولية', 'Custom Stands', 'تنفيذ احترافي', 'Event Production'];
  const row2 = ['إدارة الفعاليات', 'Brand Activations', 'أجنحة مخصصة', 'Conference Management', 'إنتاج الفعاليات', 'Stand Design'];

  return (
    <section style={{ backgroundColor: '#8DC63F', padding: '2.5rem 0', overflow: 'hidden' }}>
      <div style={{ overflow: 'hidden', marginBottom: '0.5rem' }}>
        <div style={{ display: 'inline-flex', gap: '3rem', animation: 'marquee-ltr 25s linear infinite', whiteSpace: 'nowrap' }}>
          {[...row1, ...row1].map((t, i) => (
            <span key={i} style={{ fontSize: 'clamp(1.5rem,3vw,2.5rem)', fontWeight: 900, letterSpacing: '-0.01em', color: i % 2 === 0 ? '#0a0a0a' : 'rgba(10,10,10,0.35)' }}>{t}</span>
          ))}
        </div>
      </div>
      <div style={{ overflow: 'hidden' }}>
        <div style={{ display: 'inline-flex', gap: '3rem', animation: 'marquee-rtl 25s linear infinite', whiteSpace: 'nowrap' }}>
          {[...row2, ...row2].map((t, i) => (
            <span key={i} style={{ fontSize: 'clamp(1.5rem,3vw,2.5rem)', fontWeight: 900, letterSpacing: '-0.01em', color: i % 2 === 0 ? 'rgba(10,10,10,0.35)' : '#0a0a0a' }}>{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================================================== */
/*  TESTIMONIALS                                                       */
/* ================================================================== */
function TestimonialsSection({ isRtl }: { isRtl: boolean }) {
  return (
    <section style={{ backgroundColor: '#0a0a0a', padding: 'clamp(5rem,12vh,9rem) clamp(1.5rem,5vw,4rem)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <Reveal>
          <p style={{ fontSize: '0.75rem', color: '#8DC63F', fontWeight: 700, letterSpacing: 4, textTransform: 'uppercase', marginBottom: '1rem' }}>
            {isRtl ? '٠٥ — آراء عملائنا' : '05 — Testimonials'}
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 800, color: '#fff', marginBottom: '3.5rem', letterSpacing: '-0.02em' }}>
            {isRtl ? 'من يثق بنا' : 'Who trusts us'}
          </h2>
        </Reveal>

        <div className="test-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 70} y={36}>
              <div style={{
                padding: '2.5rem', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 14,
                background: '#0f0f0f', height: '100%', boxSizing: 'border-box',
                transition: 'border-color 0.3s, transform 0.4s',
              }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(141,198,63,0.4)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.transform = 'none'; }}
              >
                <div style={{ display: 'flex', gap: 3, marginBottom: '1.25rem' }}>
                  {[...Array(t.rating)].map((_, j) => (<span key={j} style={{ color: '#8DC63F', fontSize: '1rem' }}>★</span>))}
                </div>
                <p style={{ fontSize: '1rem', color: '#ccc', lineHeight: 1.8, marginBottom: '1.75rem' }}>
                  &ldquo;{isRtl ? t.textAr : t.textEn}&rdquo;
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
                  <div style={{ width: 42, height: 42, borderRadius: '50%', background: '#8DC63F', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0a0a0a', fontWeight: 800, fontSize: '1rem', flexShrink: 0 }}>
                    {(isRtl ? t.nameAr : t.nameEn).charAt(0)}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: '#fff', fontSize: '0.9rem' }}>{isRtl ? t.nameAr : t.nameEn}</div>
                    <div style={{ fontSize: '0.78rem', color: '#888' }}>{isRtl ? t.titleAr : t.titleEn}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================================================== */
/*  CTA                                                                */
/* ================================================================== */
function CTABanner({ isRtl, locale }: { isRtl: boolean; locale: string }) {
  return (
    <section style={{ backgroundColor: '#0a0a0a', padding: 'clamp(5rem,14vh,11rem) clamp(1.5rem,5vw,4rem)', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <Reveal>
          <p style={{ color: '#8DC63F', fontSize: '0.75rem', fontWeight: 700, letterSpacing: 4, textTransform: 'uppercase', marginBottom: '1.5rem' }}>
            {isRtl ? 'لنبدأ' : "Let's talk"}
          </p>
        </Reveal>
        <Reveal delay={120}>
          <h2 style={{ fontSize: 'clamp(2.25rem, 7vw, 5.5rem)', fontWeight: 900, color: '#fff', marginBottom: '2.5rem', lineHeight: 1.02, letterSpacing: '-0.03em' }}>
            {isRtl ? 'حوّل رؤيتك إلى واقع' : 'Turn your vision into reality'}
          </h2>
        </Reveal>
        <Reveal delay={220}>
          <Link href={`/${locale}/contact`} style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.75rem', padding: '1.1rem 3rem',
            backgroundColor: '#8DC63F', color: '#0a0a0a',
            borderRadius: '3rem', fontWeight: 800, fontSize: '1.05rem',
            textDecoration: 'none', transition: 'all 0.3s',
          }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(141,198,63,0.35)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
          >
            {isRtl ? 'احصل على تصميم مجاني' : 'Get a Free Design'}
            <span style={{ transform: isRtl ? 'rotate(180deg)' : 'none' }}>→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* ================================================================== */
/*  FLOATING BUTTONS                                                   */
/* ================================================================== */
function FloatingButtons({ isRtl }: { isRtl: boolean; locale: string }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div style={{ position: 'fixed', bottom: 24, right: 24, display: 'flex', flexDirection: 'column', gap: '0.75rem', zIndex: 1000, alignItems: 'flex-end' }}>
      <a href="https://wa.me/966112393255" target="_blank" rel="noopener noreferrer" style={{
        display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.25rem', borderRadius: '3rem',
        background: '#8DC63F', color: '#0a0a0a', fontWeight: 700, fontSize: '0.85rem', textDecoration: 'none',
        boxShadow: '0 4px 20px rgba(141,198,63,0.4)', transition: 'transform 0.2s',
      }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'none')}
      >
        <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18}>
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        {isRtl ? 'احصل على تصميم مجاني' : 'Free Design Consultation'}
      </a>

      {visible && (
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{
          width: 44, height: 44, borderRadius: '50%', background: '#fff', color: '#0a0a0a', border: 'none', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 16px rgba(0,0,0,0.3)', transition: 'transform 0.2s',
        }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'none')}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width={20} height={20}>
            <polyline points="18 15 12 9 6 15" />
          </svg>
        </button>
      )}
    </div>
  );
}
