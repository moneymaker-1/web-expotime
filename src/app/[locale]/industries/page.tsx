import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { generatePageMetadata } from '@/lib/seo';
import { industries } from '@/lib/data';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata(locale, 'القطاعات | إكسبو تايم', 'Industries | Expo Time',
    'إكسبو تايم تخدم جميع القطاعات الاقتصادية في المملكة من التقنية إلى الطاقة والرعاية الصحية',
    'Expo Time serves all economic sectors in Saudi Arabia from technology to energy and healthcare', '/industries');
}

export default async function IndustriesPage({ params }: Props) {
  const { locale } = await params;
  const isRtl = locale === 'ar';

  return (
    <>
      <Header />
      <main>
        <section style={{ background: '#fff', paddingTop: '8rem', paddingBottom: '4rem', borderBottom: '1px solid #f0f0f0' }}>
          <div className="container-custom" style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '0.8rem', fontWeight: 700, color: '#8DC63F', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.75rem' }}>
              {isRtl ? 'القطاعات' : 'Industries'}
            </p>
            <h1 style={{ fontSize: 'clamp(2rem,4vw,3.5rem)', fontWeight: 900, color: '#1a1a1a', marginBottom: '1.25rem', lineHeight: 1.15 }}>
              {isRtl ? 'القطاعات التي نخدمها' : 'Industries We Serve'}
            </h1>
            <p style={{ color: '#555', fontSize: '1.1rem', lineHeight: 1.7, maxWidth: 680, margin: '0 auto' }}>
              {isRtl ? 'خبرة عميقة في خدمة جميع القطاعات الاقتصادية' : 'Deep expertise serving all economic sectors'}
            </p>
          </div>
        </section>
        <section className="section-padding" style={{ backgroundColor: '#f8f8f8' }}>
          <div className="container-custom">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {industries.map((ind) => (
                <div key={ind.slugEn} style={{ background: '#fff', border: '1px solid #eee', borderRadius: '1rem', padding: '2rem' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '1.25rem' }}>{ind.icon}</div>
                  <h3 style={{ fontWeight: 700, color: '#1a1a1a', fontSize: '1.1rem', marginBottom: '0.75rem' }}>
                    {isRtl ? ind.nameAr : ind.nameEn}
                  </h3>
                  <p style={{ color: '#555', fontSize: '0.875rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                    {isRtl
                      ? `نقدم حلول أجنحة معارض متخصصة لقطاع ${ind.nameAr} في المملكة العربية السعودية`
                      : `We deliver specialized exhibition stand solutions for the ${ind.nameEn} sector in Saudi Arabia`}
                  </p>
                  <Link href={`/${locale}/contact`} style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', color: '#8DC63F', fontSize: '0.875rem', fontWeight: 600, textDecoration: 'none' }}>
                    {isRtl ? 'احصل على عرض سعر' : 'Get a Quote'} <ArrowRight size={14} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
