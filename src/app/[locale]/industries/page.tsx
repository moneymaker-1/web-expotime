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
        <section style={{ background: 'linear-gradient(180deg, #060A14 0%, #0A0E1A 100%)', paddingTop: '8rem', paddingBottom: '4rem' }}>
          <div className="container-custom" style={{ textAlign: 'center' }}>
            <h1 className="section-title" style={{ marginBottom: '1rem' }}>{isRtl ? 'القطاعات التي نخدمها' : 'Industries We Serve'}</h1>
            <p className="section-subtitle">{isRtl ? 'خبرة عميقة في خدمة جميع القطاعات الاقتصادية' : 'Deep expertise serving all economic sectors'}</p>
          </div>
        </section>
        <section className="section-padding" style={{ backgroundColor: '#0A0E1A' }}>
          <div className="container-custom">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {industries.map((ind) => (
                <div key={ind.slugEn} className="card" style={{ padding: '2rem' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '1.25rem' }}>{ind.icon}</div>
                  <h3 style={{ fontWeight: 700, color: '#F9FAFB', fontSize: '1.1rem', marginBottom: '0.75rem' }}>
                    {isRtl ? ind.nameAr : ind.nameEn}
                  </h3>
                  <p style={{ color: '#9CA3AF', fontSize: '0.875rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                    {isRtl
                      ? `نقدم حلول أجنحة معارض متخصصة لقطاع ${ind.nameAr} في المملكة العربية السعودية`
                      : `We deliver specialized exhibition stand solutions for the ${ind.nameEn} sector in Saudi Arabia`}
                  </p>
                  <Link href={`/${locale}/contact`} style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', color: '#C9A84C', fontSize: '0.875rem', fontWeight: 600, textDecoration: 'none' }}>
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
