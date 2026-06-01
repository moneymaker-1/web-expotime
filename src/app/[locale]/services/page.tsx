import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { generatePageMetadata } from '@/lib/seo';
import { services } from '@/lib/data';
import { ArrowRight } from 'lucide-react';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata(
    locale,
    'خدماتنا | إكسبو تايم',
    'Our Services | Expo Time',
    'خدمات إكسبو تايم الشاملة: تصميم وتنفيذ أجنحة المعارض، الأجنحة المخصصة والنمطية، إدارة الفعاليات والمؤتمرات، تفعيل العلامات التجارية في المملكة العربية السعودية.',
    "Expo Time's comprehensive services: exhibition stand design and fabrication, custom and modular booths, event and conference management, brand activations in Saudi Arabia.",
    '/services'
  );
}

export default async function ServicesPage({ params }: Props) {
  const { locale } = await params;
  const isRtl = locale === 'ar';

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section
          style={{
            background: 'linear-gradient(180deg, #060A14 0%, #0A0E1A 100%)',
            paddingTop: '8rem',
            paddingBottom: '4rem',
          }}
        >
          <div className="container-custom" style={{ textAlign: 'center' }}>
            <div className="badge" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>
              {isRtl ? 'ما نقدمه' : 'What We Offer'}
            </div>
            <h1 className="section-title" style={{ marginBottom: '1.25rem' }}>
              {isRtl ? 'خدماتنا المتكاملة' : 'Our Comprehensive Services'}
            </h1>
            <p className="section-subtitle">
              {isRtl
                ? 'نقدم حلولاً شاملة لأجنحة المعارض والفعاليات تغطي كل احتياجاتك من الفكرة إلى التنفيذ'
                : 'We provide comprehensive exhibition stand and event solutions covering all your needs from concept to execution'}
            </p>
          </div>
        </section>

        {/* Services grid */}
        <section className="section-padding" style={{ backgroundColor: '#0A0E1A' }}>
          <div className="container-custom">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                gap: '1.75rem',
              }}
            >
              {services.map((s) => (
                <Link key={s.slug} href={`/${locale}/${s.slug}`} style={{ textDecoration: 'none' }}>
                  <div
                    className="card"
                    style={{ padding: '2.25rem', height: '100%', cursor: 'pointer' }}
                  >
                    <div style={{ fontSize: '2.75rem', marginBottom: '1.25rem' }}>{s.icon}</div>
                    <h2
                      style={{
                        fontSize: '1.15rem',
                        fontWeight: 700,
                        color: '#F9FAFB',
                        marginBottom: '0.875rem',
                        lineHeight: 1.3,
                      }}
                    >
                      {isRtl ? s.titleAr : s.titleEn}
                    </h2>
                    <p
                      style={{
                        color: '#9CA3AF',
                        fontSize: '0.9rem',
                        lineHeight: 1.75,
                        marginBottom: '1.5rem',
                      }}
                    >
                      {isRtl ? s.descAr : s.descEn}
                    </p>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.375rem',
                        color: '#C9A84C',
                        fontSize: '0.875rem',
                        fontWeight: 700,
                      }}
                    >
                      {isRtl ? 'اعرف المزيد' : 'Learn More'}{' '}
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why choose us */}
        <section className="section-padding" style={{ backgroundColor: '#060A14' }}>
          <div className="container-custom">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 className="section-title">
                {isRtl ? 'لماذا تختار إكسبو تايم؟' : 'Why Choose Expo Time?'}
              </h2>
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '1.5rem',
              }}
            >
              {[
                {
                  icon: '🏆',
                  titleAr: '20+ سنة خبرة',
                  titleEn: '20+ Years Experience',
                  descAr: 'خبرة عميقة في صناعة المعارض السعودية والدولية',
                  descEn: 'Deep expertise in Saudi and international exhibition industry',
                },
                {
                  icon: '⭐',
                  titleAr: '500+ مشروع ناجح',
                  titleEn: '500+ Successful Projects',
                  descAr: 'سجل حافل من المشاريع الناجحة لكبرى الشركات',
                  descEn: 'Proven track record of successful projects for top companies',
                },
                {
                  icon: '🎯',
                  titleAr: 'تصميم مخصص',
                  titleEn: 'Custom Design',
                  descAr: 'كل جناح مصمم خصيصاً لهويتك التجارية وأهدافك',
                  descEn: 'Every stand designed specifically for your brand identity and goals',
                },
                {
                  icon: '🚀',
                  titleAr: 'التسليم في الوقت',
                  titleEn: 'On-Time Delivery',
                  descAr: 'نلتزم دائماً بالجدول الزمني المتفق عليه',
                  descEn: 'We always commit to the agreed timeline',
                },
              ].map((item) => (
                <div key={item.titleEn} className="card" style={{ padding: '2rem', textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{item.icon}</div>
                  <h3 style={{ fontWeight: 700, color: '#F9FAFB', marginBottom: '0.625rem' }}>
                    {isRtl ? item.titleAr : item.titleEn}
                  </h3>
                  <p style={{ color: '#9CA3AF', fontSize: '0.875rem', lineHeight: 1.6 }}>
                    {isRtl ? item.descAr : item.descEn}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: '4rem 0', backgroundColor: '#0A0E1A' }}>
          <div className="container-custom" style={{ textAlign: 'center' }}>
            <div
              style={{
                background: 'rgba(201,168,76,0.06)',
                border: '1px solid rgba(201,168,76,0.2)',
                borderRadius: '1.5rem',
                padding: '3.5rem 2rem',
              }}
            >
              <h2
                style={{
                  fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                  fontWeight: 900,
                  color: '#F9FAFB',
                  marginBottom: '1rem',
                }}
              >
                {isRtl
                  ? 'هل أنت جاهز لبدء مشروعك؟'
                  : 'Ready to Start Your Project?'}
              </h2>
              <p style={{ color: '#9CA3AF', marginBottom: '2rem', fontSize: '1.05rem' }}>
                {isRtl
                  ? 'تواصل معنا الآن واحصل على استشارة مجانية وعرض سعر مخصص'
                  : 'Contact us now for a free consultation and customized quote'}
              </p>
              <Link
                href={`/${locale}/contact`}
                style={{
                  display: 'inline-block',
                  padding: '1rem 2.5rem',
                  background: 'linear-gradient(135deg, #C9A84C, #B8960A)',
                  color: '#0A0E1A',
                  fontWeight: 800,
                  fontSize: '1rem',
                  borderRadius: '0.625rem',
                  textDecoration: 'none',
                }}
              >
                {isRtl ? 'احصل على عرض مجاني' : 'Get a Free Quote'}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
