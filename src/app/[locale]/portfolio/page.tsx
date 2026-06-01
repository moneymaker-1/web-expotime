import type { Metadata } from 'next';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { generatePageMetadata } from '@/lib/seo';
import { portfolioProjects } from '@/lib/data';
import Link from 'next/link';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata(locale,
    'أعمالنا | إكسبو تايم', 'Portfolio | Expo Time',
    'استعرض أبرز مشاريع إكسبو تايم في تصميم وتنفيذ أجنحة المعارض في المملكة العربية السعودية',
    'Explore Expo Time\'s top exhibition stand design and fabrication projects in Saudi Arabia',
    '/portfolio'
  );
}

export default async function PortfolioPage({ params }: Props) {
  const { locale } = await params;
  const isRtl = locale === 'ar';

  return (
    <>
      <Header />
      <main>
        <section style={{ background: 'linear-gradient(180deg, #0a1520 0%, #0f1e2d 100%)', paddingTop: '8rem', paddingBottom: '4rem' }}>
          <div className="container-custom" style={{ textAlign: 'center' }}>
            <h1 className="section-title" style={{ marginBottom: '1rem' }}>
              {isRtl ? 'أعمالنا' : 'Our Portfolio'}
            </h1>
            <p className="section-subtitle">
              {isRtl ? '500+ مشروع ناجح في أبرز المعارض السعودية والدولية' : '500+ successful projects at Saudi Arabia\'s most prominent exhibitions'}
            </p>
          </div>
        </section>

        <section className="section-padding" style={{ backgroundColor: '#0f1e2d' }}>
          <div className="container-custom">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1.75rem' }}>
              {portfolioProjects.map((p) => (
                <div key={p.id} className="card" style={{ overflow: 'hidden' }}>
                  <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden', background: '#162534' }}>
                    <Image src={p.image} alt={isRtl ? p.titleAr : p.titleEn} fill style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.7))' }} />
                    <div style={{ position: 'absolute', top: '1rem', [isRtl ? 'right' : 'left']: '1rem' }}>
                      <span style={{ background: 'rgba(243,199,22,0.92)', color: '#0f1e2d', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 700 }}>
                        {isRtl ? p.categoryAr : p.categoryEn}
                      </span>
                    </div>
                  </div>
                  <div style={{ padding: '1.5rem' }}>
                    <h3 style={{ fontWeight: 700, color: '#F9FAFB', marginBottom: '0.75rem', lineHeight: 1.4 }}>
                      {isRtl ? p.titleAr : p.titleEn}
                    </h3>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ color: '#f3c716', fontWeight: 600, fontSize: '0.85rem' }}>{p.client}</span>
                      <span style={{ color: '#6B7280', fontSize: '0.8rem' }}>{p.area} • {p.year}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div style={{ textAlign: 'center', marginTop: '4rem', padding: '3rem', background: 'rgba(243,199,22,0.06)', border: '1px solid rgba(243,199,22,0.15)', borderRadius: '1.25rem' }}>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#F9FAFB', marginBottom: '1rem' }}>
                {isRtl ? 'هل أنت مستعد لإنشاء جناح معرض استثنائي؟' : 'Ready to Create an Extraordinary Exhibition Stand?'}
              </h2>
              <p style={{ color: '#9CA3AF', marginBottom: '2rem' }}>
                {isRtl ? 'تواصل معنا اليوم واحصل على استشارة مجانية' : 'Contact us today for a free consultation'}
              </p>
              <Link href={`/${locale}/contact`} style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.875rem 2.5rem',
                background: 'linear-gradient(135deg, #f3c716, #d4a800)',
                color: '#0f1e2d', fontWeight: 800, borderRadius: '0.625rem', textDecoration: 'none',
              }}>
                {isRtl ? 'احصل على عرض سعر' : 'Get a Quote'}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
