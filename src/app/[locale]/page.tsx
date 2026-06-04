import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { portfolioProjects, clients, testimonials, services, faqs } from '@/lib/data';
import { generatePageMetadata } from '@/lib/seo';
import { ArrowRight, Star, Phone, MessageSquare, Award, Users, Clock, Globe } from 'lucide-react';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata(
    locale,
    'إكسبو تايم | تصميم وتنفيذ أجنحة المعارض في السعودية',
    'Expo Time | Exhibition Stand Design & Fabrication Saudi Arabia',
    'إكسبو تايم — الشريك الاستراتيجي لتصميم وتنفيذ أجنحة المعارض والفعاليات في المملكة العربية السعودية. أجنحة مخصصة ونمطية وإدارة فعاليات بمعايير عالمية.',
    "Expo Time — Saudi Arabia's premier exhibition stand design and fabrication company. Custom stands, modular booths, event management with world-class standards.",
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
      backgroundColor: '#0A0E1A',
    }}>
      {/* Background grid */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(201, 168, 76, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201, 168, 76, 0.04) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />
      {/* Gold glow */}
      <div style={{
        position: 'absolute', top: '20%', [isRtl ? 'right' : 'left']: '5%',
        width: 600, height: 600,
        background: 'radial-gradient(circle, rgba(201, 168, 76, 0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', [isRtl ? 'left' : 'right']: '5%',
        width: 400, height: 400,
        background: 'radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container-custom" style={{ position: 'relative', zIndex: 1, paddingTop: '7rem', paddingBottom: '4rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          {/* Left/Text side */}
          <div style={{ order: isRtl ? 2 : 1 }}>
            {/* Badge */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              padding: '0.5rem 1.25rem',
              background: 'rgba(201, 168, 76, 0.12)',
              border: '1px solid rgba(201, 168, 76, 0.3)',
              borderRadius: '9999px',
              marginBottom: '1.75rem',
            }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#C9A84C', display: 'inline-block' }} />
              <span style={{ color: '#C9A84C', fontSize: '0.875rem', fontWeight: 600 }}>{t('badge')}</span>
            </div>

            {/* Headline */}
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '1.5rem', color: '#F9FAFB' }}>
              {t('title')}{' '}
              <span style={{ color: '#C9A84C', display: 'block' }}>{t('titleHighlight')}</span>
            </h1>

            <p style={{ fontSize: '1.1rem', color: '#9CA3AF', lineHeight: 1.8, marginBottom: '2.5rem', maxWidth: '480px' }}>
              {t('subtitle')}
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
              <Link href={`/${locale}/contact`} style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.875rem 2rem',
                background: 'linear-gradient(135deg, #C9A84C, #B8960A)',
                color: '#0A0E1A', fontWeight: 800, fontSize: '1rem',
                borderRadius: '0.625rem', textDecoration: 'none',
                boxShadow: '0 4px 20px rgba(201, 168, 76, 0.3)',
              }}>
                {t('cta')} <ArrowRight size={18} />
              </Link>
              <Link href={`/${locale}/portfolio`} style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.875rem 2rem',
                border: '1px solid rgba(201, 168, 76, 0.4)',
                color: '#C9A84C', fontWeight: 700, fontSize: '1rem',
                borderRadius: '0.625rem', textDecoration: 'none',
                backgroundColor: 'transparent',
              }}>
                {t('ctaSecondary')}
              </Link>
            </div>

            {/* Trust indicators */}
            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
              {[
                { num: '5000+', label: isRtl ? 'مشروع' : 'Projects' },
                { num: '5000+', label: isRtl ? 'عميل' : 'Clients' },
                { num: '20+', label: isRtl ? 'سنة خبرة' : 'Years' },
              ].map((s) => (
                <div key={s.num}>
                  <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#C9A84C', lineHeight: 1 }}>{s.num}</div>
                  <div style={{ fontSize: '0.8rem', color: '#6B7280', marginTop: '0.25rem' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right/Image side */}
          <div style={{ order: isRtl ? 1 : 2, position: 'relative' }}>
            <div style={{
              borderRadius: '1.5rem',
              overflow: 'hidden',
              border: '1px solid rgba(201, 168, 76, 0.2)',
              boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
              aspectRatio: '4/3',
              position: 'relative',
              background: '#111827',
            }}>
              <Image
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80"
                alt={isRtl ? 'تصميم جناح معرض' : 'Exhibition Stand Design'}
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to bottom, transparent 50%, rgba(10, 14, 26, 0.6))',
              }} />
              {/* Floating badge */}
              <div style={{
                position: 'absolute', bottom: '1.5rem', [isRtl ? 'right' : 'left']: '1.5rem',
                background: 'rgba(201, 168, 76, 0.95)',
                borderRadius: '0.75rem', padding: '0.75rem 1.25rem',
                backdropFilter: 'blur(10px)',
              }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#0A0E1A', lineHeight: 1 }}>5000+</div>
                <div style={{ fontSize: '0.75rem', color: '#0A0E1A', fontWeight: 700 }}>
                  {isRtl ? 'مشروع ناجح' : 'Successful Projects'}
                </div>
              </div>
            </div>

            {/* Decorative element */}
            <div style={{
              position: 'absolute', top: -20, [isRtl ? 'left' : 'right']: -20,
              width: 80, height: 80,
              border: '2px solid rgba(201, 168, 76, 0.3)',
              borderRadius: '50%',
              zIndex: -1,
            }} />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          section > div > div { grid-template-columns: 1fr !important; }
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
    { num: '5000+', labelAr: 'مشروع منجز', labelEn: 'Completed Projects', Icon: Award },
    { num: '5000+', labelAr: 'عميل راضٍ', labelEn: 'Satisfied Clients', Icon: Users },
    { num: '20+', labelAr: 'سنة خبرة', labelEn: 'Years Experience', Icon: Clock },
    { num: '15+', labelAr: 'معرض دولي', labelEn: 'International Exhibitions', Icon: Globe },
  ];

  return (
    <section style={{ backgroundColor: '#060A14', padding: '3rem 0', borderTop: '1px solid rgba(201,168,76,0.1)', borderBottom: '1px solid rgba(201,168,76,0.1)' }}>
      <div className="container-custom">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '2rem' }}>
          {stats.map(({ num, labelAr, labelEn, Icon }) => (
            <div key={num} style={{ textAlign: 'center', padding: '1.5rem' }}>
              <Icon size={28} style={{ color: '#C9A84C', margin: '0 auto 0.75rem' }} />
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#C9A84C', lineHeight: 1 }}>{num}</div>
              <div style={{ color: '#9CA3AF', fontSize: '0.9rem', marginTop: '0.5rem' }}>
                {isRtl ? labelAr : labelEn}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection({ locale }: { locale: string }) {
  const t = useTranslations('services');
  const isRtl = locale === 'ar';

  return (
    <section className="section-padding" style={{ backgroundColor: '#0A0E1A' }}>
      <div className="container-custom">
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <h2 className="section-title">{t('title')}</h2>
          <p className="section-subtitle" style={{ marginTop: '1rem' }}>{t('subtitle')}</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {services.map((s) => (
            <Link key={s.slug} href={`/${locale}/${s.slug}`} style={{ textDecoration: 'none' }}>
              <div className="card" style={{ padding: '2rem', height: '100%', cursor: 'pointer' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{s.icon}</div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#F9FAFB', marginBottom: '0.75rem' }}>
                  {isRtl ? s.titleAr : s.titleEn}
                </h3>
                <p style={{ color: '#9CA3AF', fontSize: '0.875rem', lineHeight: 1.7 }}>
                  {isRtl ? s.descAr : s.descEn}
                </p>
                <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.375rem', color: '#C9A84C', fontSize: '0.875rem', fontWeight: 600 }}>
                  {isRtl ? 'اعرف المزيد' : 'Learn More'} <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function PortfolioSection({ locale }: { locale: string }) {
  const t = useTranslations('portfolio');
  const isRtl = locale === 'ar';
  const featured = portfolioProjects.filter(p => p.featured);

  return (
    <section className="section-padding" style={{ backgroundColor: '#060A14' }}>
      <div className="container-custom">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <h2 className="section-title">{t('title')}</h2>
            <p style={{ color: '#9CA3AF', marginTop: '0.75rem' }}>{t('subtitle')}</p>
          </div>
          <Link href={`/${locale}/portfolio`} style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            color: '#C9A84C', fontWeight: 700, textDecoration: 'none', fontSize: '0.9rem',
          }}>
            {t('viewAll')} <ArrowRight size={16} />
          </Link>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1.5rem' }}>
          {featured.map((p) => (
            <div key={p.id} className="card" style={{ overflow: 'hidden' }}>
              <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden' }}>
                <Image src={p.image} alt={isRtl ? p.titleAr : p.titleEn} fill style={{ objectFit: 'cover', transition: 'transform 0.4s ease' }} />
                <div style={{ position: 'absolute', top: '1rem', [isRtl ? 'right' : 'left']: '1rem' }}>
                  <span style={{ background: 'rgba(201, 168, 76, 0.9)', color: '#0A0E1A', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 700 }}>
                    {isRtl ? p.categoryAr : p.categoryEn}
                  </span>
                </div>
              </div>
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ fontWeight: 700, color: '#F9FAFB', marginBottom: '0.5rem', fontSize: '1rem' }}>
                  {isRtl ? p.titleAr : p.titleEn}
                </h3>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#6B7280', fontSize: '0.8rem' }}>
                  <span>{p.client}</span>
                  <span>{p.area} • {p.year}</span>
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
    <section className="section-padding" style={{ backgroundColor: '#0A0E1A' }}>
      <div className="container-custom">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 className="section-title">{t('title')}</h2>
          <p className="section-subtitle" style={{ marginTop: '0.75rem' }}>{t('subtitle')}</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '1rem' }}>
          {clients.map((c) => (
            <div key={c.nameEn} style={{
              padding: '1.5rem',
              background: '#111827',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: '0.75rem',
              textAlign: 'center',
              transition: 'border-color 0.2s',
            }}>
              <div style={{ width: 44, height: 44, borderRadius: '0.5rem', background: 'rgba(201,168,76,0.1)', margin: '0 auto 0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem' }}>
                🏢
              </div>
              <div style={{ fontWeight: 700, color: '#F9FAFB', fontSize: '0.9rem' }}>{isRtl ? c.nameAr : c.nameEn}</div>
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
    <section className="section-padding" style={{ backgroundColor: '#060A14' }}>
      <div className="container-custom">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 className="section-title">{t('title')}</h2>
          <p className="section-subtitle" style={{ marginTop: '0.75rem' }}>{t('subtitle')}</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {testimonials.map((tm) => (
            <div key={tm.nameEn} className="card" style={{ padding: '2rem' }}>
              <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1.25rem' }}>
                {Array.from({ length: tm.rating }).map((_, i) => (
                  <Star key={i} size={16} fill="#C9A84C" style={{ color: '#C9A84C' }} />
                ))}
              </div>
              <p style={{ color: '#D1D5DB', fontSize: '0.9rem', lineHeight: 1.8, marginBottom: '1.5rem', fontStyle: 'italic' }}>
                &ldquo;{isRtl ? tm.textAr : tm.textEn}&rdquo;
              </p>
              <div>
                <div style={{ fontWeight: 700, color: '#F9FAFB' }}>{isRtl ? tm.nameAr : tm.nameEn}</div>
                <div style={{ color: '#6B7280', fontSize: '0.8rem', marginTop: '0.25rem' }}>{isRtl ? tm.titleAr : tm.titleEn}</div>
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
    <section className="section-padding" style={{ backgroundColor: '#0A0E1A' }}>
      <div className="container-custom">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 className="section-title">{t('title')}</h2>
          <p className="section-subtitle" style={{ marginTop: '0.75rem' }}>{t('subtitle')}</p>
        </div>
        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqList.map((faq, i) => (
            <div key={i} style={{
              background: '#111827',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: '0.75rem',
              padding: '1.5rem',
            }}>
              <h3 style={{ fontWeight: 700, color: '#F9FAFB', marginBottom: '0.75rem', fontSize: '1rem' }}>
                {faq.q}
              </h3>
              <p style={{ color: '#9CA3AF', lineHeight: 1.7, fontSize: '0.9rem' }}>{faq.a}</p>
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
    <section style={{ padding: '5rem 0', background: 'linear-gradient(135deg, #0A0E1A 0%, #1a1208 50%, #0A0E1A 100%)' }}>
      <div className="container-custom" style={{ textAlign: 'center' }}>
        <div style={{
          background: 'linear-gradient(135deg, rgba(201,168,76,0.12), rgba(201,168,76,0.04))',
          border: '1px solid rgba(201,168,76,0.25)',
          borderRadius: '2rem',
          padding: '4rem 2rem',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%,-50%)',
            width: 600, height: 600,
            background: 'radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', fontWeight: 900, color: '#F9FAFB', marginBottom: '1rem', position: 'relative' }}>
            {t('title')}
          </h2>
          <p style={{ color: '#9CA3AF', fontSize: '1.1rem', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.7, position: 'relative' }}>
            {t('subtitle')}
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', position: 'relative' }}>
            <Link href={`/${locale}/contact`} style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              padding: '1rem 2.5rem',
              background: 'linear-gradient(135deg, #C9A84C, #B8960A)',
              color: '#0A0E1A', fontWeight: 800, fontSize: '1.05rem',
              borderRadius: '0.625rem', textDecoration: 'none',
              boxShadow: '0 8px 25px rgba(201,168,76,0.4)',
            }}>
              <MessageSquare size={20} /> {t('button')}
            </Link>
            <a href="tel:+966112345678" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              padding: '1rem 2.5rem',
              border: '1px solid rgba(201,168,76,0.4)',
              color: '#C9A84C', fontWeight: 700, fontSize: '1.05rem',
              borderRadius: '0.625rem', textDecoration: 'none',
            }}>
              <Phone size={20} /> {t('buttonSecondary')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;

  return (
    <>
      <Header />
      <main>
        <HeroSection locale={locale} />
        <StatsSection locale={locale} />
        <ServicesSection locale={locale} />
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
