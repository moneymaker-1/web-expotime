'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';
import { portfolioProjects, clients, testimonials, services } from '@/lib/data';

interface Props {
  locale: string;
  heroVideoUrl?: string;
  heroImageUrl?: string;
}

export default function HomePageClient({ locale, heroVideoUrl, heroImageUrl }: Props) {
  const isRtl = locale === 'ar';

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div style={{ marginLeft: 44, overflowX: 'hidden' }} dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Fixed Left Sidebar */}
      <aside style={{
        position: 'fixed', top: 0, left: 0, width: 44, height: '100vh',
        backgroundColor: '#111111', zIndex: 900, display: 'flex',
        flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between',
        padding: '1.5rem 0', borderRight: '1px solid rgba(255,255,255,0.06)',
      }}>
        {/* Top: Menu */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <div style={{ display: 'flex', gap: 3, marginBottom: 8 }}>
            <span style={{ width: 2, height: 16, background: '#8DC63F', borderRadius: 1 }} />
            <span style={{ width: 2, height: 16, background: '#8DC63F', borderRadius: 1 }} />
            <span style={{ width: 2, height: 16, background: '#8DC63F', borderRadius: 1 }} />
          </div>
          <span style={{ fontSize: 10, color: '#888', letterSpacing: 2, writingMode: 'vertical-rl', transform: 'rotate(180deg)', userSelect: 'none' }}>MENU</span>
        </div>

        {/* Middle: Email */}
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

        {/* Bottom: Scroll to top */}
        <button onClick={scrollToTop} style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
          background: 'none', border: 'none', cursor: 'pointer', padding: '0 0 4px',
        }}>
          <span style={{ fontSize: 8, color: '#555', letterSpacing: 1.5, writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>SCROLL TO TOP</span>
          <div style={{ width: 1, height: 24, background: '#444', margin: '4px 0' }} />
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#8DC63F' }} />
        </button>
      </aside>

      {/* Hero Section */}
      <HeroSection heroVideoUrl={heroVideoUrl} heroImageUrl={heroImageUrl} />

      {/* Clients Strip */}
      <ClientsStrip isRtl={isRtl} />

      {/* Portfolio */}
      <PortfolioSection locale={locale} isRtl={isRtl} />

      {/* Services Grid */}
      <ServicesGrid isRtl={isRtl} locale={locale} />

      {/* Key Offerings */}
      <KeyOfferings isRtl={isRtl} />

      {/* CTA Banner */}
      <CTABanner isRtl={isRtl} locale={locale} />

      {/* Marquee */}
      <MarqueeSection isRtl={isRtl} />

      {/* Stats Bar */}
      <StatsBar isRtl={isRtl} />

      {/* Testimonials */}
      <TestimonialsSection isRtl={isRtl} />

      {/* Floating Buttons */}
      <FloatingButtons isRtl={isRtl} locale={locale} />

      <style>{`
        @keyframes marquee-ltr { from { transform: translateX(0) } to { transform: translateX(-50%) } }
        @keyframes marquee-rtl { from { transform: translateX(-50%) } to { transform: translateX(0) } }
        @keyframes blink { 0%,100% { opacity: 1 } 50% { opacity: 0 } }
        @media (max-width: 768px) {
          .sidebar-hide { display: none !important; }
          div[style*="margin-left: 44px"], div[style*="marginLeft: 44"] { margin-left: 0 !important; }
        }
      `}</style>
    </div>
  );
}

function HeroSection({ heroVideoUrl, heroImageUrl }: { heroVideoUrl?: string; heroImageUrl?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);
  const fallback = heroImageUrl || 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=90';

  useEffect(() => {
    if (videoRef.current) videoRef.current.play().catch(() => setVideoError(true));
  }, []);

  return (
    <section style={{
      position: 'relative', height: '100vh', minHeight: 640,
      backgroundColor: '#000000', overflow: 'hidden',
    }}>
      {heroVideoUrl && !videoError ? (
        <video ref={videoRef} src={heroVideoUrl} autoPlay muted loop playsInline
          onError={() => setVideoError(true)}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
      ) : (
        <Image src={fallback} alt="Expo Time" fill style={{ objectFit: 'cover' }} priority quality={90} />
      )}
      {/* Subtle bottom gradient */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 120, background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)' }} />
    </section>
  );
}

function ClientsStrip({ isRtl }: { isRtl: boolean }) {
  const allClients = [...clients, ...clients];
  return (
    <section style={{ backgroundColor: '#ffffff', padding: '2.5rem 0', borderBottom: '1px solid #f0f0f0', overflow: 'hidden' }}>
      <div style={{ overflow: 'hidden', whiteSpace: 'nowrap' }}>
        <div style={{
          display: 'inline-flex', gap: '3rem', alignItems: 'center',
          animation: `marquee-ltr 35s linear infinite`,
        }}>
          {allClients.map((c, i) => (
            <span key={i} style={{ fontSize: '0.9rem', color: '#999', fontWeight: 600, letterSpacing: 1, whiteSpace: 'nowrap' }}>
              {isRtl ? c.nameAr : c.nameEn}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

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

  const featured = portfolioProjects.slice(0, 8);

  return (
    <section style={{ backgroundColor: '#ffffff', padding: '6rem 3rem' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Heading */}
        <div style={{ marginBottom: '3rem' }}>
          <p style={{ fontSize: '0.8rem', color: '#8DC63F', fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            {isRtl ? 'معرض الأعمال' : 'Our Work'}
          </p>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#1a1a1a', lineHeight: 1.2, margin: 0 }}>
            {isRtl ? (
              <>أعمالنا <span style={{ color: '#8DC63F' }}>{displayed}</span><span style={{ color: '#8DC63F', animation: 'blink 1s infinite' }}>{cursor ? '|' : ' '}</span> الأخيرة</>
            ) : (
              <>Our <span style={{ color: '#8DC63F' }}>{displayed}</span><span style={{ color: '#8DC63F', animation: 'blink 1s infinite' }}>{cursor ? '|' : ' '}</span> Recent Work</>
            )}
          </h2>
        </div>

        {/* 4-col grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.25rem' }}>
          {featured.map((p) => (
            <Link key={p.id} href={`/${locale}/portfolio`} style={{ textDecoration: 'none', display: 'block' }}>
              <div style={{ borderRadius: '1rem', overflow: 'hidden', position: 'relative', aspectRatio: '4/3', cursor: 'pointer', transition: 'transform 0.3s' }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-6px)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'none')}
              >
                <Image src={p.image} alt={isRtl ? p.titleAr : p.titleEn} fill style={{ objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)', opacity: 0, transition: 'opacity 0.3s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = '0')}
                >
                  <div style={{ position: 'absolute', bottom: 16, left: 16, right: 16 }}>
                    <p style={{ color: '#8DC63F', fontSize: '0.7rem', fontWeight: 700, margin: '0 0 4px', textTransform: 'uppercase' }}>
                      {isRtl ? p.categoryAr : p.categoryEn}
                    </p>
                    <p style={{ color: '#fff', fontSize: '0.875rem', fontWeight: 700, margin: 0 }}>
                      {isRtl ? p.titleAr : p.titleEn}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link href={`/${locale}/portfolio`} style={{
            display: 'inline-block', padding: '0.875rem 2.5rem',
            border: '2px solid #2D5A27', color: '#2D5A27', borderRadius: '2rem',
            fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none', transition: 'all 0.3s',
          }}
            onMouseEnter={(e) => { e.currentTarget.style.background = '#2D5A27'; e.currentTarget.style.color = '#fff'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#2D5A27'; }}
          >
            {isRtl ? 'عرض جميع الأعمال' : 'View All Projects'}
          </Link>
        </div>
      </div>
    </section>
  );
}

function ServicesGrid({ isRtl, locale }: { isRtl: boolean; locale: string }) {
  const displayed = services.slice(0, 6);

  const svgIcons: Record<string, string> = {
    'exhibition-stand-design': `<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="4" y="10" width="24" height="16" rx="1"/><path d="M4 10l12-6 12 6"/><line x1="12" y1="10" x2="12" y2="26"/><line x1="20" y1="10" x2="20" y2="26"/></svg>`,
    'exhibition-booth-fabrication': `<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="6" y="12" width="20" height="14" rx="1"/><path d="M6 12l10-6 10 6"/><line x1="16" y1="6" x2="16" y2="12"/><circle cx="16" cy="18" r="3"/></svg>`,
    'exhibition-contractor': `<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="4" y="8" width="10" height="18"/><rect x="18" y="14" width="10" height="12"/><line x1="14" y1="8" x2="18" y2="14"/><line x1="4" y1="26" x2="28" y2="26"/></svg>`,
    'conference-management': `<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="4" y="8" width="24" height="16" rx="1"/><line x1="16" y1="24" x2="16" y2="28"/><line x1="10" y1="28" x2="22" y2="28"/><line x1="4" y1="14" x2="28" y2="14"/></svg>`,
    'event-management': `<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="4" y="8" width="24" height="22" rx="1"/><line x1="4" y1="14" x2="28" y2="14"/><line x1="10" y1="4" x2="10" y2="10"/><line x1="22" y1="4" x2="22" y2="10"/><circle cx="10" cy="20" r="1.5" fill="currentColor"/><circle cx="16" cy="20" r="1.5" fill="currentColor"/><circle cx="22" cy="20" r="1.5" fill="currentColor"/></svg>`,
    'event-production': `<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="6,4 26,16 6,28"/></svg>`,
  };

  return (
    <section style={{ backgroundColor: '#ffffff', padding: '6rem 3rem', borderTop: '1px solid #f0f0f0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ marginBottom: '3rem' }}>
          <p style={{ fontSize: '0.8rem', color: '#8DC63F', fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            {isRtl ? 'ما نقدمه' : 'What We Offer'}
          </p>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', fontWeight: 800, color: '#1a1a1a', margin: 0 }}>
            {isRtl ? 'خدماتنا المتخصصة' : 'Our Specialized Services'}
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: '#e8e8e8' }}>
          {displayed.map((s) => (
            <Link key={s.slug} href={`/${locale}/${s.slug}`} style={{ textDecoration: 'none' }}>
              <div style={{ background: '#fff', padding: '2.5rem 2rem', transition: 'background 0.3s', cursor: 'pointer' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.background = '#f9faf5'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.background = '#fff'; }}
              >
                <div style={{ width: 44, height: 44, color: '#2D5A27', marginBottom: '1.25rem' }}
                  dangerouslySetInnerHTML={{ __html: svgIcons[s.slug] || `<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="16" cy="16" r="12"/></svg>` }}
                />
                <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#1a1a1a', marginBottom: '0.5rem' }}>
                  {isRtl ? s.titleAr : s.titleEn}
                </h3>
                <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: 1.6, margin: 0 }}>
                  {isRtl ? s.descAr : s.descEn}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          div[style*="grid-template-columns: repeat(3"] { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          div[style*="grid-template-columns: repeat(3"] { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}

function KeyOfferings({ isRtl }: { isRtl: boolean }) {
  const offerings = isRtl ? [
    { num: '01', title: 'تصميم مخصص', desc: 'نصمم كل جناح خصيصاً لعلامتك التجارية، مع مراعاة كل التفاصيل من الألوان إلى المواد.' },
    { num: '02', title: 'تنفيذ احترافي', desc: 'فريق من المحترفين يتولى تصنيع الجناح وتركيبه بأعلى معايير الجودة وفي الوقت المحدد.' },
    { num: '03', title: 'خدمة متكاملة', desc: 'من التصميم إلى الفك والشحن — نقدم حلاً شاملاً لجميع احتياجاتك في المعارض.' },
  ] : [
    { num: '01', title: 'Custom Design', desc: 'Every stand is designed uniquely for your brand, considering every detail from colors to materials.' },
    { num: '02', title: 'Professional Build', desc: 'A team of experts handles fabrication and installation with the highest quality standards on time.' },
    { num: '03', title: 'Full-Service', desc: 'From design to dismantling and shipping — a complete solution for all your exhibition needs.' },
  ];

  return (
    <section style={{ backgroundColor: '#ffffff', padding: '6rem 3rem', borderTop: '1px solid #f0f0f0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ marginBottom: '3rem' }}>
          <p style={{ fontSize: '0.8rem', color: '#8DC63F', fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            Key Offerings
          </p>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', fontWeight: 800, color: '#1a1a1a', margin: 0 }}>
            {isRtl ? 'لماذا إكسبو تايم؟' : 'Why Expo Time?'}
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
          {offerings.map((o) => (
            <div key={o.num} style={{ position: 'relative', padding: '2rem', border: '1px solid #f0f0f0', borderRadius: '1rem', overflow: 'hidden', transition: 'box-shadow 0.3s' }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 8px 32px rgba(45,90,39,0.12)')}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'none')}
            >
              {/* Faded number */}
              <span style={{ position: 'absolute', top: -10, [isRtl ? 'left' : 'right']: 12, fontSize: '5rem', fontWeight: 900, color: '#8DC63F', opacity: 0.08, lineHeight: 1, userSelect: 'none' }}>
                {o.num}
              </span>
              {/* Lime circle icon */}
              <div style={{ width: 48, height: 48, borderRadius: '50%', background: '#D4E600', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#2D5A27" strokeWidth="2" width={22} height={22}>
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 800, color: '#1a1a1a', marginBottom: '0.75rem' }}>{o.title}</h3>
              <p style={{ fontSize: '0.875rem', color: '#666', lineHeight: 1.7, margin: 0 }}>{o.desc}</p>
            </div>
          ))}
        </div>

        <style>{`
          @media (max-width: 768px) {
            div[style*="grid-template-columns: repeat(3, 1fr)"] { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </div>
    </section>
  );
}

function CTABanner({ isRtl, locale }: { isRtl: boolean; locale: string }) {
  return (
    <section style={{ backgroundColor: '#D4E600', padding: '5rem 3rem', textAlign: 'center' }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, color: '#1a1a1a', marginBottom: '2rem', lineHeight: 1.2 }}>
          {isRtl ? 'حول رؤيتك إلى واقع معنا' : 'Turn Your Vision Into Reality'}
        </h2>
        <Link href={`/${locale}/contact`} style={{
          display: 'inline-block', padding: '1rem 3rem',
          backgroundColor: '#2D5A27', color: '#fff',
          borderRadius: '3rem', fontWeight: 800, fontSize: '1rem',
          textDecoration: 'none', transition: 'all 0.3s',
          boxShadow: '0 4px 20px rgba(45,90,39,0.3)',
        }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(45,90,39,0.4)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(45,90,39,0.3)'; }}
        >
          {isRtl ? 'احصل على تصميم مجاني' : 'Get a Free Design'}
        </Link>
      </div>
    </section>
  );
}

function MarqueeSection(_: { isRtl: boolean }) {
  const row1 = ['تصميم أجنحة', 'Exhibition Design', 'معارض دولية', 'Custom Stands', 'تنفيذ احترافي', 'Event Production'];
  const row2 = ['إدارة الفعاليات', 'Brand Activations', 'أجنحة مخصصة', 'Conference Management', 'إنتاج الفعاليات', 'Stand Design'];

  return (
    <section style={{ backgroundColor: '#111', padding: '2.5rem 0', overflow: 'hidden' }}>
      {/* Row 1 */}
      <div style={{ overflow: 'hidden', marginBottom: '0.75rem' }}>
        <div style={{ display: 'inline-flex', gap: '3rem', animation: 'marquee-ltr 25s linear infinite', whiteSpace: 'nowrap' }}>
          {[...row1, ...row1].map((t, i) => (
            <span key={i} style={{ fontSize: '0.85rem', fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: i % 2 === 0 ? '#8DC63F' : '#555' }}>
              {t}
            </span>
          ))}
        </div>
      </div>
      {/* Row 2 */}
      <div style={{ overflow: 'hidden' }}>
        <div style={{ display: 'inline-flex', gap: '3rem', animation: 'marquee-rtl 25s linear infinite', whiteSpace: 'nowrap' }}>
          {[...row2, ...row2].map((t, i) => (
            <span key={i} style={{ fontSize: '0.85rem', fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: i % 2 === 0 ? '#555' : '#8DC63F' }}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsBar({ isRtl }: { isRtl: boolean }) {
  const stats = isRtl ? [
    { value: '+20', label: 'سنة خبرة' },
    { value: '+500', label: 'مشروع منجز' },
    { value: '+300', label: 'عميل راضٍ' },
    { value: '+15', label: 'معرض دولي' },
  ] : [
    { value: '20+', label: 'Years Experience' },
    { value: '500+', label: 'Projects Completed' },
    { value: '300+', label: 'Happy Clients' },
    { value: '15+', label: 'International Expos' },
  ];

  return (
    <section style={{ backgroundColor: '#f5f5f5', padding: '4rem 3rem' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem', textAlign: 'center' }}>
        {stats.map((s, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
            {/* Green circle icon */}
            <div style={{ width: 56, height: 56, borderRadius: '50%', border: '2px solid #8DC63F', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.5rem' }}>
              <div style={{ width: 24, height: 24, borderRadius: '50%', background: '#8DC63F' }} />
            </div>
            <span style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 900, color: '#2D5A27', lineHeight: 1 }}>{s.value}</span>
            <span style={{ fontSize: '0.9rem', color: '#666', fontWeight: 500 }}>{s.label}</span>
          </div>
        ))}
      </div>
      <style>{`
        @media (max-width: 640px) {
          div[style*="grid-template-columns: repeat(4"] { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}

function TestimonialsSection({ isRtl }: { isRtl: boolean }) {
  return (
    <section style={{ backgroundColor: '#ffffff', padding: '6rem 3rem' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
          {/* Green quote icon */}
          <svg viewBox="0 0 32 32" fill="#8DC63F" width={32} height={32}>
            <path d="M4 20c0-4.4 3.6-8 8-8v4c-2.2 0-4 1.8-4 4v4H4v-4zm16 0c0-4.4 3.6-8 8-8v4c-2.2 0-4 1.8-4 4v4h-8v-4z" />
          </svg>
          <span style={{ fontSize: '0.8rem', color: '#8DC63F', fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase' }}>Testimonials</span>
        </div>
        <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', fontWeight: 800, color: '#1a1a1a', marginBottom: '3rem' }}>
          {isRtl ? 'من يثق بنا' : 'Who Trusts Us'}
        </h2>

        {/* Masonry-style grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {testimonials.map((t, i) => (
            <div key={i} style={{
              padding: '2rem', border: '1px solid #f0f0f0', borderRadius: '1rem',
              background: i % 3 === 0 ? '#f9fdf4' : '#fff',
              transition: 'box-shadow 0.3s',
            }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.08)')}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'none')}
            >
              {/* Stars */}
              <div style={{ display: 'flex', gap: 3, marginBottom: '1rem' }}>
                {[...Array(t.rating)].map((_, j) => (
                  <span key={j} style={{ color: '#8DC63F', fontSize: '1rem' }}>★</span>
                ))}
              </div>
              <p style={{ fontSize: '0.9rem', color: '#444', lineHeight: 1.8, marginBottom: '1.5rem', fontStyle: 'italic' }}>
                &ldquo;{isRtl ? t.textAr : t.textEn}&rdquo;
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: '#8DC63F', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800, fontSize: '1rem', flexShrink: 0 }}>
                  {(isRtl ? t.nameAr : t.nameEn).charAt(0)}
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: '#1a1a1a', fontSize: '0.9rem' }}>{isRtl ? t.nameAr : t.nameEn}</div>
                  <div style={{ fontSize: '0.75rem', color: '#888' }}>{isRtl ? t.titleAr : t.titleEn}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FloatingButtons({ isRtl }: { isRtl: boolean; locale: string }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div style={{ position: 'fixed', bottom: 24, right: 24, display: 'flex', flexDirection: 'column', gap: '0.75rem', zIndex: 1000, alignItems: 'flex-end' }}>
      {/* WhatsApp pill */}
      <a href="https://wa.me/966112393255" target="_blank" rel="noopener noreferrer" style={{
        display: 'flex', alignItems: 'center', gap: '0.5rem',
        padding: '0.75rem 1.25rem', borderRadius: '3rem',
        background: '#8DC63F', color: '#fff',
        fontWeight: 700, fontSize: '0.85rem', textDecoration: 'none',
        boxShadow: '0 4px 20px rgba(141,198,63,0.4)',
        transition: 'transform 0.2s',
      }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'none')}
      >
        <svg viewBox="0 0 24 24" fill="white" width={18} height={18}>
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        {isRtl ? 'احصل على تصميم مجاني' : 'Free Design Consultation'}
      </a>

      {/* Scroll to top circle */}
      {visible && (
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{
          width: 44, height: 44, borderRadius: '50%',
          background: '#111', color: '#fff', border: 'none', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 16px rgba(0,0,0,0.3)', transition: 'transform 0.2s',
        }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'none')}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" width={20} height={20}>
            <polyline points="18 15 12 9 6 15" />
          </svg>
        </button>
      )}
    </div>
  );
}
