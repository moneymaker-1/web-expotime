import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CursorGlow from '@/components/ui/CursorGlow';
import FloatingParticles from '@/components/ui/FloatingParticles';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import { portfolioProjects, clients, testimonials, services, faqs } from '@/lib/data';
import { generatePageMetadata } from '@/lib/seo';
import { ArrowRight, Star, Phone, MessageSquare, Award, Users, Clock, Globe, CheckCircle, Zap } from 'lucide-react';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata(
    locale,
    'إكسبو تايم | تصميم وتنفيذ أجنحة المعارض في السعودية',
    'Expo Time | Exhibition Stand Design & Fabrication Saudi Arabia',
    'إكسبو تايم — الشريك الاستراتيجي لتصميم وتنفيذ أجنحة المعارض والفعاليات في المملكة العربية السعودية.',
    "Expo Time — Saudi Arabia's premier exhibition stand design and fabrication company.",
    ''
  );
}

function HeroSection({ locale }: { locale: string }) {
  const t = useTranslations('hero');
  const isRtl = locale === 'ar';

  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #050d14 0%, #0a1520 40%, #0f1e2d 100%)',
    }}>
      {/* Animated gradient mesh */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: [
          'radial-gradient(ellipse 80% 60% at 20% 30%, rgba(243,199,22,0.09) 0%, transparent 60%)',
          'radial-gradient(ellipse 60% 50% at 80% 70%, rgba(98,177,182,0.07) 0%, transparent 60%)',
          'radial-gradient(ellipse 50% 40% at 50% 50%, rgba(41,61,80,0.5) 0%, transparent 70%)',
        ].join(','),
        animation: 'meshPulse 8s ease-in-out infinite alternate',
      }} />
      {/* Grid lines */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(243,199,22,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(243,199,22,0.035) 1px, transparent 1px)',
        backgroundSize: '70px 70px',
        maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
      }} />

      <div className="container-custom" style={{ position: 'relative', zIndex: 2, paddingTop: '8rem', paddingBottom: '5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>

          {/* Text side */}
          <div style={{ order: isRtl ? 2 : 1 }} className="reveal-left">
            {/* Badge */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.625rem',
              padding: '0.5rem 1.25rem 0.5rem 0.625rem',
              background: 'rgba(243,199,22,0.08)',
              border: '1px solid rgba(243,199,22,0.25)',
              borderRadius: '9999px',
              marginBottom: '2rem',
              backdropFilter: 'blur(8px)',
            }}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                width: 24, height: 24, borderRadius: '50%',
                background: 'rgba(243,199,22,0.2)',
              }}>
                <Zap size={12} style={{ color: '#f3c716' }} />
              </span>
              <span style={{ color: '#f3c716', fontSize: '0.8rem', fontWeight: 600 }}>{t('badge')}</span>
            </div>

            {/* Headline */}
            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4.25rem)',
              fontWeight: 900, lineHeight: 1.05,
              marginBottom: '1.5rem', color: '#F9FAFB',
              letterSpacing: '-0.02em',
            }}>
              {t('title')}{' '}
              <span style={{
                background: 'linear-gradient(135deg, #f3c716, #ffd740)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'block',
              }}>{t('titleHighlight')}</span>
            </h1>

            <p style={{ fontSize: '1.1rem', color: '#94a3b8', lineHeight: 1.8, marginBottom: '2.5rem', maxWidth: '460px' }}>
              {t('subtitle')}
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3.5rem' }}>
              <Link href={`/${locale}/contact`} style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '1rem 2.25rem',
                background: 'linear-gradient(135deg, #f3c716 0%, #d4a800 100%)',
                color: '#0a1520', fontWeight: 800, fontSize: '1rem',
                borderRadius: '0.75rem', textDecoration: 'none',
                boxShadow: '0 8px 32px rgba(243,199,22,0.35), 0 2px 8px rgba(0,0,0,0.3)',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(243,199,22,0.45), 0 4px 12px rgba(0,0,0,0.3)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(243,199,22,0.35), 0 2px 8px rgba(0,0,0,0.3)'; }}
              >
                {t('cta')} <ArrowRight size={18} />
              </Link>
              <Link href={`/${locale}/portfolio`} style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '1rem 2.25rem',
                border: '1px solid rgba(98,177,182,0.4)',
                color: '#62b1b6', fontWeight: 700, fontSize: '1rem',
                borderRadius: '0.75rem', textDecoration: 'none',
                backdropFilter: 'blur(8px)',
                background: 'rgba(98,177,182,0.05)',
                transition: 'background 0.2s, border-color 0.2s, transform 0.2s',
              }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(98,177,182,0.12)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(98,177,182,0.05)'; e.currentTarget.style.transform = 'none'; }}
              >
                {t('ctaSecondary')}
              </Link>
            </div>

            {/* Trust stats */}
            <div style={{ display: 'flex', gap: '2.5rem', flexWrap: 'wrap' }}>
              {[
                { target: 500, suffix: '+', label: isRtl ? 'مشروع منجز' : 'Projects Done' },
                { target: 200, suffix: '+', label: isRtl ? 'عميل راضٍ' : 'Happy Clients' },
                { target: 20, suffix: '+', label: isRtl ? 'سنة خبرة' : 'Years Exp.' },
              ].map((s) => (
                <div key={s.label} style={{ borderLeft: isRtl ? 'none' : '2px solid rgba(243,199,22,0.3)', borderRight: isRtl ? '2px solid rgba(243,199,22,0.3)' : 'none', paddingLeft: isRtl ? 0 : '1.5rem', paddingRight: isRtl ? '1.5rem' : 0 }}>
                  <div style={{ fontSize: '2rem', fontWeight: 900, color: '#f3c716', lineHeight: 1, fontVariantNumeric: 'tabular-nums' }}>
                    <AnimatedCounter target={s.target} suffix={s.suffix} />
                  </div>
                  <div style={{ fontSize: '0.78rem', color: '#64748b', marginTop: '0.25rem', fontWeight: 500 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image / visual side */}
          <div style={{ order: isRtl ? 1 : 2, position: 'relative' }} className="reveal-right">
            {/* Main image card */}
            <div style={{
              borderRadius: '1.75rem',
              overflow: 'hidden',
              border: '1px solid rgba(243,199,22,0.15)',
              boxShadow: '0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.03)',
              aspectRatio: '4/3',
              position: 'relative',
              background: '#0a1520',
              transition: 'transform 0.4s ease',
            }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'perspective(1200px) rotateY(-2deg) rotateX(2deg) scale(1.02)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; }}
            >
              <Image
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900&q=85"
                alt={isRtl ? 'تصميم جناح معرض' : 'Exhibition Stand Design'}
                fill style={{ objectFit: 'cover' }} priority
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(10,21,32,0.3) 0%, transparent 50%, rgba(10,21,32,0.5) 100%)' }} />

              {/* Floating stat badge */}
              <div style={{
                position: 'absolute', bottom: '1.5rem', [isRtl ? 'right' : 'left']: '1.5rem',
                background: 'rgba(10,21,32,0.85)',
                border: '1px solid rgba(243,199,22,0.3)',
                borderRadius: '1rem', padding: '1rem 1.5rem',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                  <Award size={14} style={{ color: '#f3c716' }} />
                  <span style={{ color: '#f3c716', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    {isRtl ? 'جائزة التميز 2025' : 'Excellence Award 2025'}
                  </span>
                </div>
                <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#F9FAFB', lineHeight: 1 }}>500+</div>
                <div style={{ fontSize: '0.7rem', color: '#64748b', marginTop: '2px' }}>{isRtl ? 'مشروع ناجح' : 'Successful Projects'}</div>
              </div>

              {/* Top-right tag */}
              <div style={{
                position: 'absolute', top: '1.5rem', [isRtl ? 'left' : 'right']: '1.5rem',
                background: 'rgba(98,177,182,0.15)',
                border: '1px solid rgba(98,177,182,0.35)',
                borderRadius: '0.625rem', padding: '0.5rem 0.875rem',
                backdropFilter: 'blur(12px)',
              }}>
                <span style={{ color: '#62b1b6', fontSize: '0.75rem', fontWeight: 700 }}>
                  {isRtl ? '🏆 الرياض، السعودية' : '🏆 Riyadh, KSA'}
                </span>
              </div>
            </div>

            {/* Decorative rings */}
            <div style={{ position: 'absolute', top: -30, [isRtl ? 'left' : 'right']: -30, width: 100, height: 100, borderRadius: '50%', border: '1.5px solid rgba(243,199,22,0.2)', zIndex: -1 }} />
            <div style={{ position: 'absolute', top: -50, [isRtl ? 'left' : 'right']: -50, width: 140, height: 140, borderRadius: '50%', border: '1px solid rgba(243,199,22,0.08)', zIndex: -1 }} />
            <div style={{ position: 'absolute', bottom: -20, [isRtl ? 'right' : 'left']: -20, width: 80, height: 80, borderRadius: '50%', border: '1.5px solid rgba(98,177,182,0.2)', zIndex: -1 }} />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', animation: 'bounce 2s infinite' }}>
        <div style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, rgba(243,199,22,0.5), transparent)' }} />
        <div style={{ fontSize: '0.65rem', color: '#64748b', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Scroll</div>
      </div>

      <style>{`
        @keyframes meshPulse { 0%{opacity:0.8} 100%{opacity:1} }
        @keyframes bounce { 0%,100%{transform:translateX(-50%) translateY(0)} 50%{transform:translateX(-50%) translateY(-6px)} }
        @media (max-width: 768px) {
          section > div > div { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          section > div > div > div:last-child { order: 1 !important; }
          section > div > div > div:first-child { order: 2 !important; }
        }
      `}</style>
    </section>
  );
}

function StatsSection({ locale }: { locale: string }) {
  const isRtl = locale === 'ar';
  const stats = [
    { target: 500, suffix: '+', labelAr: 'مشروع منجز', labelEn: 'Projects Completed', Icon: Award },
    { target: 200, suffix: '+', labelAr: 'عميل راضٍ', labelEn: 'Happy Clients', Icon: Users },
    { target: 20, suffix: '+', labelAr: 'سنة خبرة', labelEn: 'Years of Excellence', Icon: Clock },
    { target: 15, suffix: '+', labelAr: 'معرض دولي', labelEn: 'International Fairs', Icon: Globe },
  ];

  return (
    <section style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(135deg, #0a1520 0%, #0d1a27 100%)', padding: '4rem 0', borderTop: '1px solid rgba(243,199,22,0.08)', borderBottom: '1px solid rgba(243,199,22,0.08)' }}>
      {/* Glow line */}
      <div style={{ position: 'absolute', top: 0, left: '10%', right: '10%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(243,199,22,0.5), rgba(98,177,182,0.5), transparent)' }} />
      <div className="container-custom">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.5rem' }}>
          {stats.map(({ target, suffix, labelAr, labelEn, Icon }) => (
            <div key={labelEn} className="reveal" style={{
              textAlign: 'center', padding: '2rem 1rem',
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.04)',
              borderRadius: '1.25rem',
              transition: 'background 0.3s, border-color 0.3s, transform 0.3s',
            }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(243,199,22,0.05)'; e.currentTarget.style.borderColor = 'rgba(243,199,22,0.2)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.04)'; e.currentTarget.style.transform = 'none'; }}
            >
              <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'rgba(243,199,22,0.08)', border: '1px solid rgba(243,199,22,0.15)', margin: '0 auto 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon size={22} style={{ color: '#f3c716' }} />
              </div>
              <div style={{ fontSize: '2.75rem', fontWeight: 900, color: '#f3c716', lineHeight: 1, fontVariantNumeric: 'tabular-nums' }}>
                <AnimatedCounter target={target} suffix={suffix} />
              </div>
              <div style={{ color: '#64748b', fontSize: '0.85rem', marginTop: '0.5rem', fontWeight: 500 }}>
                {isRtl ? labelAr : labelEn}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: 0, left: '10%', right: '10%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(98,177,182,0.4), rgba(243,199,22,0.4), transparent)' }} />
    </section>
  );
}

function ServicesSection({ locale }: { locale: string }) {
  const t = useTranslations('services');
  const isRtl = locale === 'ar';

  return (
    <section className="section-padding" style={{ backgroundColor: '#0f1e2d', position: 'relative', overflow: 'hidden' }}>
      {/* Background pattern */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(243,199,22,0.05) 1px, transparent 0)', backgroundSize: '32px 32px', opacity: 0.5 }} />
      <div className="container-custom" style={{ position: 'relative' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }} className="reveal">
          <div style={{ display: 'inline-block', padding: '0.35rem 1rem', background: 'rgba(98,177,182,0.08)', border: '1px solid rgba(98,177,182,0.2)', borderRadius: '9999px', marginBottom: '1rem' }}>
            <span style={{ color: '#62b1b6', fontSize: '0.8rem', fontWeight: 600 }}>{isRtl ? 'خدماتنا' : 'Our Services'}</span>
          </div>
          <h2 className="section-title">{t('title')}</h2>
          <p className="section-subtitle" style={{ marginTop: '1rem' }}>{t('subtitle')}</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {services.map((s, i) => (
            <Link key={s.slug} href={`/${locale}/${s.slug}`} style={{ textDecoration: 'none' }} className="reveal">
              <div style={{
                padding: '2rem', height: '100%', cursor: 'pointer',
                background: '#162534',
                border: '1px solid rgba(255,255,255,0.05)',
                borderRadius: '1.25rem',
                transition: 'all 0.35s cubic-bezier(0.4,0,0.2,1)',
                position: 'relative', overflow: 'hidden',
              }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.background = '#1a2d3f';
                  el.style.borderColor = 'rgba(243,199,22,0.3)';
                  el.style.transform = 'translateY(-6px)';
                  el.style.boxShadow = '0 20px 50px rgba(0,0,0,0.4), 0 0 0 1px rgba(243,199,22,0.1)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.background = '#162534';
                  el.style.borderColor = 'rgba(255,255,255,0.05)';
                  el.style.transform = 'none';
                  el.style.boxShadow = 'none';
                }}
              >
                {/* Number watermark */}
                <div style={{ position: 'absolute', top: '1rem', [isRtl ? 'left' : 'right']: '1rem', fontSize: '3rem', fontWeight: 900, color: 'rgba(255,255,255,0.03)', lineHeight: 1 }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div style={{ fontSize: '2.5rem', marginBottom: '1.25rem' }}>{s.icon}</div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#F9FAFB', marginBottom: '0.75rem', lineHeight: 1.3 }}>
                  {isRtl ? s.titleAr : s.titleEn}
                </h3>
                <p style={{ color: '#64748b', fontSize: '0.875rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                  {isRtl ? s.descAr : s.descEn}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', color: '#f3c716', fontSize: '0.8rem', fontWeight: 600 }}>
                  {isRtl ? 'اعرف المزيد' : 'Learn More'} <ArrowRight size={13} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUsSection({ locale }: { locale: string }) {
  const isRtl = locale === 'ar';
  const points = [
    { icon: '🏆', ar: 'جائزة أفضل شركة تصميم أجنحة 2025', en: 'Best Stand Design Company Award 2025' },
    { icon: '⚡', ar: 'التسليم في الوقت المحدد 100%', en: '100% On-Time Delivery' },
    { icon: '🔧', ar: 'فريق هندسي متخصص من 50+ محترف', en: 'Team of 50+ Specialized Engineers' },
    { icon: '🌍', ar: 'خبرة في 15+ معرض دولي', en: 'Experience in 15+ International Fairs' },
    { icon: '💡', ar: 'تصاميم مبتكرة بتقنية 3D', en: 'Innovative 3D Design Technology' },
    { icon: '🤝', ar: 'خدمة متكاملة من التصميم للتركيب', en: 'Full Service: Design to Installation' },
  ];

  return (
    <section className="section-padding" style={{ background: 'linear-gradient(135deg, #0a1520 0%, #0d1a27 100%)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '50%', [isRtl ? 'right' : 'left']: '-100px', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(243,199,22,0.06) 0%, transparent 70%)', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
      <div className="container-custom">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
          <div style={{ order: isRtl ? 2 : 1 }} className="reveal-left">
            <div style={{ display: 'inline-block', padding: '0.35rem 1rem', background: 'rgba(243,199,22,0.08)', border: '1px solid rgba(243,199,22,0.2)', borderRadius: '9999px', marginBottom: '1.25rem' }}>
              <span style={{ color: '#f3c716', fontSize: '0.8rem', fontWeight: 600 }}>{isRtl ? 'لماذا إكسبو تايم؟' : 'Why Expo Time?'}</span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', fontWeight: 900, color: '#F9FAFB', lineHeight: 1.15, marginBottom: '1.25rem', letterSpacing: '-0.02em' }}>
              {isRtl ? 'نصنع التجارب التي لا تُنسى' : 'We Craft Unforgettable Experiences'}
            </h2>
            <p style={{ color: '#64748b', lineHeight: 1.85, marginBottom: '2rem', fontSize: '1rem' }}>
              {isRtl
                ? 'منذ 2005 ونحن نحول أفكار عملائنا إلى أجنحة معارض استثنائية تجذب الزوار وتعزز الحضور التجاري في كل معرض.'
                : 'Since 2005, we transform our clients\' ideas into exceptional exhibition stands that attract visitors and strengthen business presence at every fair.'}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              {points.map((p) => (
                <div key={p.en} style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', padding: '0.875rem 1.25rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)', borderRadius: '0.75rem', transition: 'all 0.2s' }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(243,199,22,0.04)'; e.currentTarget.style.borderColor = 'rgba(243,199,22,0.15)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.04)'; }}
                >
                  <span style={{ fontSize: '1.25rem', flexShrink: 0 }}>{p.icon}</span>
                  <span style={{ color: '#D1D5DB', fontSize: '0.9rem', fontWeight: 500 }}>{isRtl ? p.ar : p.en}</span>
                  <CheckCircle size={15} style={{ color: '#f3c716', flexShrink: 0, marginLeft: 'auto', marginRight: isRtl ? 'auto' : undefined }} />
                </div>
              ))}
            </div>
          </div>
          <div style={{ order: isRtl ? 1 : 2 }} className="reveal-right">
            <div style={{ position: 'relative' }}>
              <div style={{ borderRadius: '1.5rem', overflow: 'hidden', border: '1px solid rgba(98,177,182,0.2)', aspectRatio: '3/4', position: 'relative', boxShadow: '0 30px 60px rgba(0,0,0,0.5)' }}>
                <Image src="https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=700&q=85" alt={isRtl ? 'فريق إكسبو تايم' : 'Expo Time Team'} fill style={{ objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,21,32,0.6) 0%, transparent 50%)' }} />
              </div>
              {/* Floating card */}
              <div style={{
                position: 'absolute', bottom: '2rem', [isRtl ? 'left' : 'right']: '-2rem',
                background: 'rgba(10,21,32,0.92)',
                border: '1px solid rgba(243,199,22,0.25)',
                borderRadius: '1rem', padding: '1.25rem 1.5rem',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 12px 30px rgba(0,0,0,0.4)',
                minWidth: 180,
              }}>
                <div style={{ color: '#64748b', fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
                  {isRtl ? 'رضا العملاء' : 'Client Satisfaction'}
                </div>
                <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#f3c716', lineHeight: 1 }}>98%</div>
                <div style={{ display: 'flex', gap: '2px', marginTop: '0.5rem' }}>
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={12} fill="#f3c716" style={{ color: '#f3c716' }} />)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){.container-custom>div{grid-template-columns:1fr!important;gap:2.5rem!important}}`}</style>
    </section>
  );
}

function PortfolioSection({ locale }: { locale: string }) {
  const t = useTranslations('portfolio');
  const isRtl = locale === 'ar';
  const featured = portfolioProjects.filter(p => p.featured);

  return (
    <section className="section-padding" style={{ backgroundColor: '#0f1e2d', position: 'relative' }}>
      <div className="container-custom">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3.5rem', flexWrap: 'wrap', gap: '1rem' }} className="reveal">
          <div>
            <div style={{ display: 'inline-block', padding: '0.35rem 1rem', background: 'rgba(98,177,182,0.08)', border: '1px solid rgba(98,177,182,0.2)', borderRadius: '9999px', marginBottom: '1rem' }}>
              <span style={{ color: '#62b1b6', fontSize: '0.8rem', fontWeight: 600 }}>{isRtl ? 'أعمالنا' : 'Our Work'}</span>
            </div>
            <h2 className="section-title">{t('title')}</h2>
            <p style={{ color: '#64748b', marginTop: '0.75rem', fontSize: '0.95rem' }}>{t('subtitle')}</p>
          </div>
          <Link href={`/${locale}/portfolio`} style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            color: '#f3c716', fontWeight: 700, textDecoration: 'none', fontSize: '0.9rem',
            border: '1px solid rgba(243,199,22,0.25)', padding: '0.625rem 1.25rem', borderRadius: '0.625rem',
            transition: 'background 0.2s',
          }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(243,199,22,0.08)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
          >
            {t('viewAll')} <ArrowRight size={15} />
          </Link>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1.75rem' }}>
          {featured.map((p, i) => (
            <div key={p.id} className="reveal" style={{
              borderRadius: '1.25rem', overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.05)',
              background: '#162534',
              transition: 'all 0.35s cubic-bezier(0.4,0,0.2,1)',
              animationDelay: `${i * 0.1}s`,
            }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = '0 24px 60px rgba(0,0,0,0.5)'; e.currentTarget.style.borderColor = 'rgba(243,199,22,0.2)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; }}
            >
              <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden' }}>
                <Image src={p.image} alt={isRtl ? p.titleAr : p.titleEn} fill style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.08)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,21,32,0.7) 0%, transparent 60%)' }} />
                <div style={{ position: 'absolute', top: '1rem', [isRtl ? 'right' : 'left']: '1rem' }}>
                  <span style={{ background: 'rgba(243,199,22,0.9)', color: '#0a1520', padding: '0.25rem 0.875rem', borderRadius: '9999px', fontSize: '0.73rem', fontWeight: 700 }}>
                    {isRtl ? p.categoryAr : p.categoryEn}
                  </span>
                </div>
              </div>
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ fontWeight: 700, color: '#F9FAFB', marginBottom: '0.5rem', fontSize: '1rem', lineHeight: 1.3 }}>
                  {isRtl ? p.titleAr : p.titleEn}
                </h3>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#64748b', fontSize: '0.78rem' }}>
                  <span>{p.client}</span>
                  <span style={{ color: '#f3c716', fontWeight: 600 }}>{p.area} • {p.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClientsSection({ locale }: { locale: string }) {
  const t = useTranslations('clients');
  const isRtl = locale === 'ar';

  return (
    <section className="section-padding" style={{ background: 'linear-gradient(135deg, #0a1520 0%, #0d1a27 100%)', position: 'relative', overflow: 'hidden' }}>
      <div className="container-custom">
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }} className="reveal">
          <h2 className="section-title">{t('title')}</h2>
          <p className="section-subtitle" style={{ marginTop: '0.75rem' }}>{t('subtitle')}</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '1rem' }}>
          {clients.map((c, i) => (
            <div key={c.nameEn} className="reveal" style={{
              padding: '1.5rem 1rem',
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.05)',
              borderRadius: '1rem', textAlign: 'center',
              transition: 'all 0.25s',
              animationDelay: `${i * 0.05}s`,
            }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(243,199,22,0.05)'; e.currentTarget.style.borderColor = 'rgba(243,199,22,0.2)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.transform = 'none'; }}
            >
              <div style={{ width: 40, height: 40, borderRadius: '0.625rem', background: 'rgba(243,199,22,0.08)', margin: '0 auto 0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>🏢</div>
              <div style={{ fontWeight: 600, color: '#D1D5DB', fontSize: '0.82rem', lineHeight: 1.3 }}>{isRtl ? c.nameAr : c.nameEn}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection({ locale }: { locale: string }) {
  const t = useTranslations('testimonials');
  const isRtl = locale === 'ar';

  return (
    <section className="section-padding" style={{ backgroundColor: '#0f1e2d', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(98,177,182,0.04) 0%, transparent 70%)' }} />
      <div className="container-custom" style={{ position: 'relative' }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }} className="reveal">
          <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>⭐</div>
          <h2 className="section-title">{t('title')}</h2>
          <p className="section-subtitle" style={{ marginTop: '0.75rem' }}>{t('subtitle')}</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {testimonials.map((tm, i) => (
            <div key={tm.nameEn} className="reveal" style={{
              padding: '2rem',
              background: '#162534',
              border: '1px solid rgba(255,255,255,0.05)',
              borderRadius: '1.25rem',
              transition: 'all 0.3s',
              position: 'relative', overflow: 'hidden',
              animationDelay: `${i * 0.1}s`,
            }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(243,199,22,0.2)'; e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              {/* Quote mark */}
              <div style={{ position: 'absolute', top: '-0.5rem', [isRtl ? 'left' : 'right']: '1.5rem', fontSize: '5rem', color: 'rgba(243,199,22,0.07)', lineHeight: 1, fontFamily: 'Georgia, serif', pointerEvents: 'none' }}>&ldquo;</div>
              <div style={{ display: 'flex', gap: '0.2rem', marginBottom: '1.25rem' }}>
                {Array.from({ length: tm.rating }).map((_, j) => (
                  <Star key={j} size={14} fill="#f3c716" style={{ color: '#f3c716' }} />
                ))}
              </div>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.85, marginBottom: '1.5rem', fontStyle: 'italic', position: 'relative' }}>
                &ldquo;{isRtl ? tm.textAr : tm.textEn}&rdquo;
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'linear-gradient(135deg, rgba(243,199,22,0.2), rgba(98,177,182,0.2))', border: '1px solid rgba(243,199,22,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', flexShrink: 0 }}>👤</div>
                <div>
                  <div style={{ fontWeight: 700, color: '#F9FAFB', fontSize: '0.9rem' }}>{isRtl ? tm.nameAr : tm.nameEn}</div>
                  <div style={{ color: '#62b1b6', fontSize: '0.75rem', marginTop: '2px' }}>{isRtl ? tm.titleAr : tm.titleEn}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection({ locale }: { locale: string }) {
  const t = useTranslations('faq');
  const faqList = faqs[locale as 'ar' | 'en'] || faqs.ar;

  return (
    <section className="section-padding" style={{ background: 'linear-gradient(135deg, #0a1520 0%, #0d1a27 100%)' }}>
      <div className="container-custom">
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }} className="reveal">
          <h2 className="section-title">{t('title')}</h2>
          <p className="section-subtitle" style={{ marginTop: '0.75rem' }}>{t('subtitle')}</p>
        </div>
        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqList.map((faq, i) => (
            <div key={i} className="reveal" style={{
              background: 'rgba(22,37,52,0.8)',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: '1rem',
              padding: '1.5rem',
              transition: 'border-color 0.2s',
            }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(243,199,22,0.2)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; }}
            >
              <h3 style={{ fontWeight: 700, color: '#F9FAFB', marginBottom: '0.75rem', fontSize: '0.95rem', lineHeight: 1.4 }}>{faq.q}</h3>
              <p style={{ color: '#64748b', lineHeight: 1.8, fontSize: '0.875rem' }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection({ locale }: { locale: string }) {
  const t = useTranslations('cta');

  return (
    <section style={{ padding: '6rem 0', background: 'linear-gradient(135deg, #0a1520 0%, #050d14 100%)', position: 'relative', overflow: 'hidden' }}>
      {/* Animated rings */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 600, height: 600, borderRadius: '50%', border: '1px solid rgba(243,199,22,0.06)', animation: 'spin 30s linear infinite', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 400, height: 400, borderRadius: '50%', border: '1px solid rgba(98,177,182,0.08)', animation: 'spin 20s linear infinite reverse', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 700, height: 700, background: 'radial-gradient(circle, rgba(243,199,22,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div className="container-custom" style={{ position: 'relative', textAlign: 'center' }} >
        <div className="reveal" style={{
          background: 'rgba(243,199,22,0.04)',
          border: '1px solid rgba(243,199,22,0.15)',
          borderRadius: '2rem', padding: '5rem 2rem',
          backdropFilter: 'blur(20px)',
          boxShadow: '0 0 80px rgba(243,199,22,0.04)',
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '1.25rem' }}>🚀</div>
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', fontWeight: 900, color: '#F9FAFB', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
            {t('title')}
          </h2>
          <p style={{ color: '#64748b', fontSize: '1.05rem', marginBottom: '2.5rem', maxWidth: '560px', margin: '0 auto 2.5rem', lineHeight: 1.8 }}>
            {t('subtitle')}
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href={`/${locale}/contact`} style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.625rem',
              padding: '1.125rem 2.75rem',
              background: 'linear-gradient(135deg, #f3c716, #d4a800)',
              color: '#0a1520', fontWeight: 800, fontSize: '1.05rem',
              borderRadius: '0.875rem', textDecoration: 'none',
              boxShadow: '0 8px 32px rgba(243,199,22,0.4)',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)'; e.currentTarget.style.boxShadow = '0 16px 48px rgba(243,199,22,0.5)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(243,199,22,0.4)'; }}
            >
              <MessageSquare size={20} /> {t('button')}
            </Link>
            <a href="tel:+966112393255" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.625rem',
              padding: '1.125rem 2.75rem',
              border: '1px solid rgba(243,199,22,0.3)',
              color: '#f3c716', fontWeight: 700, fontSize: '1.05rem',
              borderRadius: '0.875rem', textDecoration: 'none',
              background: 'rgba(243,199,22,0.04)',
              transition: 'all 0.2s',
            }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(243,199,22,0.1)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(243,199,22,0.04)'; e.currentTarget.style.transform = 'none'; }}
            >
              <Phone size={20} /> {t('buttonSecondary')}
            </a>
          </div>
        </div>
      </div>
      <style>{`@keyframes spin{from{transform:translate(-50%,-50%) rotate(0deg)}to{transform:translate(-50%,-50%) rotate(360deg)}}`}</style>
    </section>
  );
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;

  return (
    <>
      <CursorGlow />
      <FloatingParticles />
      <Header />
      <main>
        <HeroSection locale={locale} />
        <StatsSection locale={locale} />
        <ServicesSection locale={locale} />
        <WhyUsSection locale={locale} />
        <PortfolioSection locale={locale} />
        <ClientsSection locale={locale} />
        <TestimonialsSection locale={locale} />
        <FAQSection locale={locale} />
        <CTASection locale={locale} />
      </main>
      <Footer />
    </>
  );
}
