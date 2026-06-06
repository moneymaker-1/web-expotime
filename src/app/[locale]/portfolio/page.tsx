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
        <section style={{ background: '#fff', paddingTop: '8rem', paddingBottom: '4rem', borderBottom: '1px solid #f0f0f0' }}>
          <div className="container-custom" style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '0.8rem', fontWeight: 700, color: '#8DC63F', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.75rem' }}>
              {isRtl ? 'أعمالنا' : 'Our Work'}
            </p>
            <h1 style={{ fontSize: 'clamp(2rem,4vw,3.5rem)', fontWeight: 900, color: '#1a1a1a', marginBottom: '1.25rem', lineHeight: 1.15 }}>
              {isRtl ? 'أعمالنا' : 'Our Portfolio'}
            </h1>
            <p style={{ color: '#555', fontSize: '1.1rem', lineHeight: 1.7, maxWidth: 680, margin: '0 auto' }}>
              {isRtl ? '5000+ مشروع ناجح في أبرز المعارض السعودية والدولية' : '5000+ successful projects at Saudi Arabia\'s most prominent exhibitions'}
            </p>
          </div>
        </section>

        <section className="section-padding" style={{ backgroundColor: '#f8f8f8' }}>
          <div className="container-custom">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1.75rem' }}>
              {portfolioProjects.map((p) => (
                <div key={p.id} style={{ background: '#fff', border: '1px solid #eee', borderRadius: '1rem', overflow: 'hidden' }}>
                  <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden', background: '#f8f8f8' }}>
                    <Image src={p.image} alt={isRtl ? p.titleAr : p.titleEn} fill style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.5))' }} />
                    <div style={{ position: 'absolute', top: '1rem', [isRtl ? 'right' : 'left']: '1rem' }}>
                      <span style={{ background: '#8DC63F', color: '#fff', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 700 }}>
                        {isRtl ? p.categoryAr : p.categoryEn}
                      </span>
                    </div>
                  </div>
                  <div style={{ padding: '1.5rem' }}>
                    <h3 style={{ fontWeight: 700, color: '#1a1a1a', marginBottom: '0.75rem', lineHeight: 1.4 }}>
                      {isRtl ? p.titleAr : p.titleEn}
                    </h3>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ color: '#8DC63F', fontWeight: 600, fontSize: '0.85rem' }}>{p.client}</span>
                      <span style={{ color: '#aaa', fontSize: '0.8rem' }}>{p.area} • {p.year}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div style={{ textAlign: 'center', marginTop: '4rem', padding: '3rem', background: '#fff', border: '1px solid #eee', borderRadius: '1rem' }}>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#1a1a1a', marginBottom: '1rem' }}>
                {isRtl ? 'هل أنت مستعد لإنشاء جناح معرض استثنائي؟' : 'Ready to Create an Extraordinary Exhibition Stand?'}
              </h2>
              <p style={{ color: '#555', marginBottom: '2rem' }}>
                {isRtl ? 'تواصل معنا اليوم واحصل على استشارة مجانية' : 'Contact us today for a free consultation'}
              </p>
              <Link href={`/${locale}/contact`} style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.875rem 2.5rem',
                background: '#8DC63F',
                color: '#fff', fontWeight: 800, borderRadius: '0.75rem', textDecoration: 'none',
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
