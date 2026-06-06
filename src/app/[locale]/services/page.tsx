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
        <section style={{ background: '#fff', paddingTop: '8rem', paddingBottom: '4rem', borderBottom: '1px solid #f0f0f0' }}>
          <div className="container-custom" style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '0.8rem', fontWeight: 700, color: '#8DC63F', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.75rem' }}>
              {isRtl ? 'ما نقدمه' : 'What We Offer'}
            </p>
            <h1 style={{ fontSize: 'clamp(2rem,4vw,3.5rem)', fontWeight: 900, color: '#1a1a1a', marginBottom: '1.25rem', lineHeight: 1.15 }}>
              {isRtl ? 'خدماتنا المتكاملة' : 'Our Comprehensive Services'}
            </h1>
            <p style={{ color: '#555', fontSize: '1.1rem', lineHeight: 1.7, maxWidth: 680, margin: '0 auto' }}>
              {isRtl
                ? 'نقدم حلولاً شاملة لأجنحة المعارض والفعاليات تغطي كل احتياجاتك من الفكرة إلى التنفيذ'
                : 'We provide comprehensive exhibition stand and event solutions covering all your needs from concept to execution'}
            </p>
          </div>
        </section>

        {/* Services grid */}
        <section className="section-padding" style={{ backgroundColor: '#f8f8f8' }}>
          <div className="container-custom">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.75rem' }}>
              {services.map((s) => (
                <Link key={s.slug} href={`/${locale}/${s.slug}`} style={{ textDecoration: 'none' }}>
                  <div style={{ background: '#fff', border: '1px solid #eee', borderRadius: '1rem', padding: '2.25rem', height: '100%', cursor: 'pointer' }}>
                    <div style={{ fontSize: '2.75rem', marginBottom: '1.25rem' }}>{s.icon}</div>
                    <h2 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#1a1a1a', marginBottom: '0.875rem', lineHeight: 1.3 }}>
                      {isRtl ? s.titleAr : s.titleEn}
                    </h2>
                    <p style={{ color: '#555', fontSize: '0.9rem', lineHeight: 1.75, marginBottom: '1.5rem' }}>
                      {isRtl ? s.descAr : s.descEn}
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', color: '#8DC63F', fontSize: '0.875rem', fontWeight: 700 }}>
                      {isRtl ? 'اعرف المزيد' : 'Learn More'} <ArrowRight size={14} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why choose us */}
        <section className="section-padding" style={{ backgroundColor: '#fff' }}>
          <div className="container-custom">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 style={{ fontSize: 'clamp(1.5rem,3vw,2.25rem)', fontWeight: 800, color: '#1a1a1a' }}>
                {isRtl ? 'لماذا تختار إكسبو تايم؟' : 'Why Choose Expo Time?'}
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
              {[
                { icon: '🏆', titleAr: '20+ سنة خبرة', titleEn: '20+ Years Experience', descAr: 'خبرة عميقة في صناعة المعارض السعودية والدولية', descEn: 'Deep expertise in Saudi and international exhibition industry' },
                { icon: '⭐', titleAr: '5000+ مشروع ناجح', titleEn: '5000+ Successful Projects', descAr: 'سجل حافل من المشاريع الناجحة لكبرى الشركات', descEn: 'Proven track record of successful projects for top companies' },
                { icon: '🎯', titleAr: 'تصميم مخصص', titleEn: 'Custom Design', descAr: 'كل جناح مصمم خصيصاً لهويتك التجارية وأهدافك', descEn: 'Every stand designed specifically for your brand identity and goals' },
                { icon: '🚀', titleAr: 'التسليم في الوقت', titleEn: 'On-Time Delivery', descAr: 'نلتزم دائماً بالجدول الزمني المتفق عليه', descEn: 'We always commit to the agreed timeline' },
              ].map((item) => (
                <div key={item.titleEn} style={{ background: '#fff', border: '1px solid #eee', borderRadius: '1rem', padding: '2rem', textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{item.icon}</div>
                  <h3 style={{ fontWeight: 700, color: '#1a1a1a', marginBottom: '0.625rem' }}>{isRtl ? item.titleAr : item.titleEn}</h3>
                  <p style={{ color: '#555', fontSize: '0.875rem', lineHeight: 1.6 }}>{isRtl ? item.descAr : item.descEn}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: '4rem 0', backgroundColor: '#111111' }}>
          <div className="container-custom" style={{ textAlign: 'center' }}>
            <div style={{ background: 'rgba(141,198,63,0.08)', border: '1px solid rgba(141,198,63,0.25)', borderRadius: '1.5rem', padding: '3.5rem 2rem' }}>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 900, color: '#fff', marginBottom: '1rem' }}>
                {isRtl ? 'هل أنت جاهز لبدء مشروعك؟' : 'Ready to Start Your Project?'}
              </h2>
              <p style={{ color: '#aaa', marginBottom: '2rem', fontSize: '1.05rem' }}>
                {isRtl ? 'تواصل معنا الآن واحصل على استشارة مجانية وعرض سعر مخصص' : 'Contact us now for a free consultation and customized quote'}
              </p>
              <Link href={`/${locale}/contact`} style={{ display: 'inline-block', padding: '1rem 2.5rem', background: '#8DC63F', color: '#fff', fontWeight: 800, fontSize: '1rem', borderRadius: '0.75rem', textDecoration: 'none' }}>
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
