'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import { portfolioProjects, clients, testimonials, services } from '@/lib/data';
import { ArrowRight, ChevronDown, Quote, MessageSquare, Plus } from 'lucide-react';

interface Props {
  locale: string;
  heroVideoUrl?: string;
  heroImageUrl?: string;
}

export default function HomePageClient({ locale, heroVideoUrl, heroImageUrl }: Props) {
  const isRtl = locale === 'ar';
  return (
    <main style={{ background: '#080808', color: '#fff', overflowX: 'hidden' }}>
      <HeroSection locale={locale} isRtl={isRtl} heroVideoUrl={heroVideoUrl} heroImageUrl={heroImageUrl} />
      <StatsBar isRtl={isRtl} />
      <ServicesSection locale={locale} isRtl={isRtl} />
      <PortfolioSection locale={locale} isRtl={isRtl} />
      <AboutSection locale={locale} isRtl={isRtl} />
      <ClientsSection isRtl={isRtl} />
      <TestimonialsSection isRtl={isRtl} />
      <CTASection locale={locale} isRtl={isRtl} />
    </main>
  );
}

function HeroSection({ locale, isRtl, heroVideoUrl, heroImageUrl }: { locale: string; isRtl: boolean; heroVideoUrl?: string; heroImageUrl?: string }) {
  const t = useTranslations('hero');
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);
  const fallback = heroImageUrl || 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=90';

  useEffect(() => {
    if (videoRef.current) videoRef.current.play().catch(() => setVideoError(true));
  }, []);

  return (
    <section style={{ position: 'relative', height: '100vh', minHeight: 640, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {heroVideoUrl && !videoError ? (
        <video ref={videoRef} src={heroVideoUrl} autoPlay muted loop playsInline onError={() => setVideoError(true)}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }} />
      ) : (
        <Image src={fallback} alt="Expo Time Exhibition" fill style={{ objectFit: 'cover', zIndex: 0 }} priority quality={90} />
      )}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.72) 100%)', zIndex: 1 }} />

      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '0 1.5rem', maxWidth: 860 }}>
        <div style={{ display: 'inline-block', border: '1px solid rgba(201,168,76,0.55)', padding: '0.3rem 1.2rem', marginBottom: '2rem', letterSpacing: '0.22em', fontSize: '0.68rem', color: '#C9A84C', textTransform: 'uppercase', fontWeight: 700 }}>
          {isRtl ? 'منذ عام 2005' : 'Est. 2005'}
        </div>
        <h1 style={{ fontSize: 'clamp(2.6rem, 6.5vw, 5.5rem)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-0.025em', marginBottom: '1.5rem', color: '#fff' }}>
          {isRtl ? (
            <><span style={{ color: '#C9A84C' }}>نصنع</span>{' '}التجارب التي لا تُنسى</>
          ) : (
            <>We Create <span style={{ color: '#C9A84C' }}>Experiences</span> That Last</>
          )}
        </h1>
        <p style={{ fontSize: 'clamp(1rem, 2.2vw, 1.2rem)', color: 'rgba(255,255,255,0.72)', lineHeight: 1.75, maxWidth: 580, margin: '0 auto 2.75rem' }}>
          {t('subtitle')}
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href={`/${locale}/portfolio`}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.55rem', padding: '0.95rem 2.4rem', background: '#C9A84C', color: '#000', fontWeight: 800, fontSize: '0.85rem', letterSpacing: '0.07em', textTransform: 'uppercase', textDecoration: 'none' }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = '#b8963b'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = '#C9A84C'}>
            {isRtl ? 'أعمالنا' : 'Our Work'} <ArrowRight size={15} />
          </Link>
          <Link href={`/${locale}/contact`}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.55rem', padding: '0.95rem 2.4rem', background: 'transparent', color: '#fff', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.07em', textTransform: 'uppercase', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.38)' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#C9A84C'; (e.currentTarget as HTMLElement).style.color = '#C9A84C'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.38)'; (e.currentTarget as HTMLElement).style.color = '#fff'; }}>
            {isRtl ? 'تواصل معنا' : 'Contact Us'}
          </Link>
        </div>
      </div>

      <div style={{ position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)', zIndex: 2 }}>
        <ChevronDown size={20} style={{ color: 'rgba(255,255,255,0.45)', animation: 'heroBounce 2s infinite' }} />
      </div>
      <style>{`@keyframes heroBounce{0%,100%{transform:translateY(0)}50%{transform:translateY(7px)}}`}</style>
    </section>
  );
}

function StatsBar({ isRtl }: { isRtl: boolean }) {
  const stats = [
    { target: 5000, suffix: '+', ar: 'مشروع منجز', en: 'Projects Completed' },
    { target: 5000, suffix: '+', ar: 'عميل راضٍ', en: 'Happy Clients' },
    { target: 20,   suffix: '+', ar: 'سنة خبرة',  en: 'Years Experience' },
    { target: 15,   suffix: '+', ar: 'معرض دولي', en: 'International Expos' },
  ];
  return (
    <section style={{ background: '#C9A84C' }}>
      <div className="container-custom" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', textAlign: 'center' }}>
        {stats.map((s, i) => (
          <div key={i} style={{ padding: '2.25rem 1rem', borderRight: i < 3 ? '1px solid rgba(0,0,0,0.14)' : 'none' }}>
            <div style={{ fontSize: 'clamp(2rem,3.5vw,2.8rem)', fontWeight: 900, color: '#000', lineHeight: 1 }}>
              <AnimatedCounter target={s.target} suffix={s.suffix} />
            </div>
            <div style={{ fontSize: '0.72rem', color: 'rgba(0,0,0,0.58)', marginTop: '0.35rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              {isRtl ? s.ar : s.en}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ServicesSection({ locale, isRtl }: { locale: string; isRtl: boolean }) {
  const top = services.slice(0, 6);
  return (
    <section style={{ background: '#0d0d0d', padding: '7rem 1.5rem' }}>
      <div className="container-custom">
        <SectionLabel ar="خدماتنا" en="What We Do" isRtl={isRtl} />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', flexWrap: 'wrap', gap: '1.5rem' }}>
          <h2 style={{ fontSize: 'clamp(2rem,4vw,3.4rem)', fontWeight: 900, color: '#fff', lineHeight: 1.08, maxWidth: 520, margin: 0 }}>
            {isRtl ? 'خدمات احترافية لكل تجربة' : 'Professional Services for Every Experience'}
          </h2>
          <Link href={`/${locale}/services`}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', color: '#C9A84C', fontWeight: 700, fontSize: '0.8rem', textDecoration: 'none', letterSpacing: '0.1em', textTransform: 'uppercase', borderBottom: '1px solid rgba(201,168,76,0.45)', paddingBottom: 2, whiteSpace: 'nowrap' }}>
            {isRtl ? 'كل الخدمات' : 'All Services'} <ArrowRight size={13} />
          </Link>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 1, background: 'rgba(255,255,255,0.04)' }}>
          {top.map((s, i) => <SvcCard key={i} s={s} isRtl={isRtl} locale={locale} />)}
        </div>
      </div>
    </section>
  );
}

function SvcCard({ s, isRtl, locale }: { s: typeof services[0]; isRtl: boolean; locale: string }) {
  const [h, setH] = useState(false);
  return (
    <Link href={`/${locale}/${s.slug}`} style={{ textDecoration: 'none' }}>
      <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
        style={{ background: h ? '#181818' : '#111', padding: '2.75rem 2.25rem', transition: 'all 0.3s', borderBottom: h ? '2px solid #C9A84C' : '2px solid transparent', cursor: 'pointer', minHeight: 220, position: 'relative' }}>
        <div style={{ fontSize: '2.2rem', marginBottom: '1.1rem' }}>{s.icon}</div>
        <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: h ? '#C9A84C' : '#fff', marginBottom: '0.65rem', transition: 'color 0.3s', lineHeight: 1.3 }}>
          {isRtl ? s.titleAr : s.titleEn}
        </h3>
        <p style={{ fontSize: '0.82rem', color: '#555', lineHeight: 1.65 }}>
          {(isRtl ? s.descAr : s.descEn)?.slice(0, 90)}…
        </p>
        <div style={{ position: 'absolute', top: '2.25rem', [isRtl ? 'left' : 'right']: '2.25rem', opacity: h ? 1 : 0, transition: 'opacity 0.3s' }}>
          <ArrowRight size={15} style={{ color: '#C9A84C' }} />
        </div>
      </div>
    </Link>
  );
}

function PortfolioSection({ locale, isRtl }: { locale: string; isRtl: boolean }) {
  const items = portfolioProjects.slice(0, 6);
  return (
    <section style={{ background: '#080808', padding: '7rem 1.5rem' }}>
      <div className="container-custom">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <SectionLabel ar="أعمالنا" en="Our Work" isRtl={isRtl} />
            <h2 style={{ fontSize: 'clamp(2rem,4vw,3.4rem)', fontWeight: 900, color: '#fff', margin: 0, lineHeight: 1.08 }}>
              {isRtl ? 'مشاريع تتحدث عن نفسها' : 'Projects That Speak'}
            </h2>
          </div>
          <Link href={`/${locale}/portfolio`}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', color: '#C9A84C', fontWeight: 700, fontSize: '0.8rem', textDecoration: 'none', letterSpacing: '0.1em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
            {isRtl ? 'عرض الكل' : 'View All'} <ArrowRight size={13} />
          </Link>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 6 }}>
          {items.map((p, i) => <PfCard key={p.id} p={p} isRtl={isRtl} locale={locale} tall={i === 0 || i === 5} />)}
        </div>
      </div>
    </section>
  );
}

function PfCard({ p, isRtl, locale, tall }: { p: typeof portfolioProjects[0]; isRtl: boolean; locale: string; tall: boolean }) {
  const [h, setH] = useState(false);
  return (
    <Link href={`/${locale}/portfolio`} style={{ textDecoration: 'none' }}>
      <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
        style={{ position: 'relative', aspectRatio: tall ? '3/4' : '4/3', overflow: 'hidden', cursor: 'pointer', display: 'block' }}>
        <Image src={p.image} alt={isRtl ? p.titleAr : p.titleEn} fill
          style={{ objectFit: 'cover', transition: 'transform 0.65s ease', transform: h ? 'scale(1.07)' : 'scale(1)' }}
          sizes="(max-width:768px) 100vw, 33vw" />
        <div style={{ position: 'absolute', inset: 0, background: h ? 'rgba(0,0,0,0.62)' : 'rgba(0,0,0,0.22)', transition: 'background 0.4s', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '1.5rem' }}>
          <div style={{ transform: h ? 'translateY(0)' : 'translateY(6px)', transition: 'transform 0.4s' }}>
            <div style={{ fontSize: '0.65rem', color: '#C9A84C', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 700, marginBottom: '0.25rem' }}>
              {isRtl ? p.categoryAr : p.categoryEn} · {p.year}
            </div>
            <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#fff', margin: 0, lineHeight: 1.3 }}>
              {isRtl ? p.titleAr : p.titleEn}
            </h3>
          </div>
          {h && (
            <div style={{ marginTop: '0.65rem', display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#C9A84C', fontSize: '0.72rem', fontWeight: 700 }}>
              <Plus size={11} /> {isRtl ? 'عرض التفاصيل' : 'View Details'}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}

function AboutSection({ locale, isRtl }: { locale: string; isRtl: boolean }) {
  const pts = isRtl
    ? ['تصميم داخلي متكامل', 'هياكل معيارية ومخصصة', 'إدارة المعارض والفعاليات', 'حلول التسويق التجريبي', 'إنتاج الفيديو والمحتوى', 'تنفيذ وتركيب احترافي']
    : ['Full Interior Design', 'Modular & Custom Structures', 'Exhibition & Event Management', 'Experiential Marketing', 'Video & Content Production', 'Professional Installation'];
  return (
    <section style={{ background: '#0d0d0d', padding: '7rem 1.5rem' }}>
      <div className="container-custom" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
        <div style={{ order: isRtl ? 2 : 1 }}>
          <SectionLabel ar="عن إكسبو تايم" en="About Expo Time" isRtl={isRtl} />
          <h2 style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 900, color: '#fff', lineHeight: 1.1, marginBottom: '1.5rem' }}>
            {isRtl ? 'شركاؤك في صناعة المعارض منذ 2005' : 'Your Exhibition Partner Since 2005'}
          </h2>
          <p style={{ color: '#666', fontSize: '0.975rem', lineHeight: 1.85, marginBottom: '2rem' }}>
            {isRtl
              ? 'إكسبو تايم شركة سعودية رائدة في تصميم وتنفيذ أجنحة المعارض والفعاليات. نجمع بين الإبداع والتقنية لنقدم تجارب لا تُنسى لعملائنا في المملكة وحول العالم.'
              : 'Expo Time is a leading Saudi company specializing in exhibition stand design and fabrication. We blend creativity and technology to deliver unforgettable experiences.'}
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2.75rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.7rem' }}>
            {pts.map((f, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#999', fontSize: '0.85rem' }}>
                <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#C9A84C', flexShrink: 0 }} />{f}
              </li>
            ))}
          </ul>
          <Link href={`/${locale}/about`}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.875rem 2.1rem', border: '1px solid #C9A84C', color: '#C9A84C', fontWeight: 700, fontSize: '0.82rem', textDecoration: 'none', letterSpacing: '0.07em', textTransform: 'uppercase' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#C9A84C'; (e.currentTarget as HTMLElement).style.color = '#000'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.color = '#C9A84C'; }}>
            {isRtl ? 'اعرف أكثر' : 'Learn More'} <ArrowRight size={13} />
          </Link>
        </div>
        <div style={{ order: isRtl ? 1 : 2, position: 'relative' }}>
          <div style={{ position: 'relative', aspectRatio: '4/5', overflow: 'hidden' }}>
            <Image src="https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&q=85" alt="Expo Time" fill style={{ objectFit: 'cover' }} sizes="50vw" />
          </div>
          <div style={{ position: 'absolute', bottom: '2.5rem', [isRtl ? 'right' : 'left']: '-2rem', background: '#C9A84C', padding: '1.75rem 2.25rem' }}>
            <div style={{ fontSize: '2.8rem', fontWeight: 900, color: '#000', lineHeight: 1 }}>20+</div>
            <div style={{ fontSize: '0.7rem', color: 'rgba(0,0,0,0.65)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: 3 }}>
              {isRtl ? 'سنة خبرة' : 'Years of Experience'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ClientsSection({ isRtl }: { isRtl: boolean }) {
  return (
    <section style={{ background: '#080808', padding: '5rem 1.5rem', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
      <div className="container-custom">
        <p style={{ textAlign: 'center', fontSize: '0.7rem', color: '#3a3a3a', textTransform: 'uppercase', letterSpacing: '0.22em', marginBottom: '3rem', fontWeight: 700 }}>
          {isRtl ? 'عملاؤنا من كبرى المؤسسات السعودية والدولية' : 'Trusted by leading Saudi & global institutions'}
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
          {clients.map((c, i) => (
            <div key={i}
              style={{ padding: '0.65rem 1.6rem', border: '1px solid rgba(255,255,255,0.07)', color: '#484848', fontSize: '0.82rem', fontWeight: 600, letterSpacing: '0.03em', transition: 'all 0.2s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#C9A84C'; (e.currentTarget as HTMLElement).style.color = '#C9A84C'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)'; (e.currentTarget as HTMLElement).style.color = '#484848'; }}>
              {isRtl ? c.nameAr : c.nameEn}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection({ isRtl }: { isRtl: boolean }) {
  return (
    <section style={{ background: '#0d0d0d', padding: '7rem 1.5rem' }}>
      <div className="container-custom">
        <SectionLabel ar="آراء العملاء" en="Testimonials" isRtl={isRtl} />
        <h2 style={{ fontSize: 'clamp(2rem,4vw,3.2rem)', fontWeight: 900, color: '#fff', marginBottom: '3.5rem', lineHeight: 1.1 }}>
          {isRtl ? 'ماذا يقول عملاؤنا' : 'What Our Clients Say'}
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.25rem' }}>
          {testimonials.slice(0, 3).map((t, i) => (
            <div key={i} style={{ background: '#111', padding: '2.25rem', borderTop: '2px solid #C9A84C' }}>
              <Quote size={22} style={{ color: '#C9A84C', marginBottom: '1.25rem', opacity: 0.55 }} />
              <p style={{ color: '#777', fontSize: '0.88rem', lineHeight: 1.78, marginBottom: '1.75rem', fontStyle: 'italic' }}>
                &ldquo;{isRtl ? t.textAr : t.textEn}&rdquo;
              </p>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <div style={{ width: 42, height: 42, borderRadius: '50%', background: '#C9A84C', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, color: '#000', fontSize: '1.1rem', flexShrink: 0 }}>
                  {(isRtl ? t.nameAr : t.nameEn).charAt(0)}
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: '#fff', fontSize: '0.875rem' }}>{isRtl ? t.nameAr : t.nameEn}</div>
                  <div style={{ fontSize: '0.72rem', color: '#484848', marginTop: 2 }}>{isRtl ? t.titleAr : t.titleEn}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection({ locale, isRtl }: { locale: string; isRtl: boolean }) {
  return (
    <section style={{ background: '#C9A84C', padding: '5.5rem 1.5rem', textAlign: 'center' }}>
      <div style={{ maxWidth: 680, margin: '0 auto' }}>
        <h2 style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 900, color: '#000', marginBottom: '1rem', lineHeight: 1.1 }}>
          {isRtl ? 'جاهز لبناء جناحك؟' : "Ready to Build Your Stand?"}
        </h2>
        <p style={{ color: 'rgba(0,0,0,0.6)', fontSize: '1.05rem', marginBottom: '2.75rem', lineHeight: 1.65 }}>
          {isRtl ? 'تواصل معنا اليوم واحصل على استشارة مجانية وعرض أسعار خلال 24 ساعة' : 'Contact us today for a free consultation and quote within 24 hours'}
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href={`/${locale}/contact`}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '1rem 2.5rem', background: '#000', color: '#C9A84C', fontWeight: 800, fontSize: '0.85rem', letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none' }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = '#111'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = '#000'}>
            {isRtl ? 'اطلب عرض سعر' : 'Request a Quote'} <ArrowRight size={14} />
          </Link>
          <a href="https://wa.me/966551016181"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '1rem 2.5rem', background: 'transparent', color: '#000', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none', border: '1px solid rgba(0,0,0,0.3)' }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'rgba(0,0,0,0.08)'}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}>
            <MessageSquare size={14} /> WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

function SectionLabel({ ar, en, isRtl }: { ar: string; en: string; isRtl: boolean }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', marginBottom: '1rem' }}>
      <span style={{ display: 'inline-block', width: 22, height: 2, background: '#C9A84C', flexShrink: 0 }} />
      <span style={{ fontSize: '0.68rem', color: '#C9A84C', textTransform: 'uppercase', letterSpacing: '0.22em', fontWeight: 700 }}>
        {isRtl ? ar : en}
      </span>
    </div>
  );
}
