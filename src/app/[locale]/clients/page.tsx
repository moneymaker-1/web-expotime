import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { generatePageMetadata } from '@/lib/seo';
import { clients } from '@/lib/data';
import Link from 'next/link';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata(locale, 'عملاؤنا | إكسبو تايم', 'Our Clients | Expo Time',
    'أبرز عملاء إكسبو تايم من كبرى الشركات والجهات الحكومية في المملكة العربية السعودية',
    'Expo Time\'s top clients from leading companies and government entities in Saudi Arabia', '/clients');
}

export default async function ClientsPage({ params }: Props) {
  const { locale } = await params;
  const isRtl = locale === 'ar';

  return (
    <>
      <Header />
      <main>
        <section style={{ background: 'linear-gradient(180deg, #0a1520 0%, #0f1e2d 100%)', paddingTop: '8rem', paddingBottom: '4rem' }}>
          <div className="container-custom" style={{ textAlign: 'center' }}>
            <h1 className="section-title" style={{ marginBottom: '1rem' }}>{isRtl ? 'عملاؤنا' : 'Our Clients'}</h1>
            <p className="section-subtitle">{isRtl ? 'نفخر بثقة أبرز الشركات والجهات في المملكة' : 'We are proud to serve Saudi Arabia\'s most prominent companies and institutions'}</p>
          </div>
        </section>
        <section className="section-padding" style={{ backgroundColor: '#0f1e2d' }}>
          <div className="container-custom">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1.25rem' }}>
              {clients.map((c) => (
                <div key={c.nameEn} className="card" style={{ padding: '2rem', textAlign: 'center' }}>
                  <div style={{ width: 60, height: 60, borderRadius: '0.75rem', background: 'linear-gradient(135deg, rgba(243,199,22,0.15), rgba(243,199,22,0.05))', border: '1px solid rgba(243,199,22,0.2)', margin: '0 auto 1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.75rem' }}>🏢</div>
                  <div style={{ fontWeight: 700, color: '#F9FAFB', fontSize: '1rem', marginBottom: '0.375rem' }}>{isRtl ? c.nameAr : c.nameEn}</div>
                  <div style={{ fontSize: '0.75rem', color: '#6B7280', textTransform: 'capitalize' }}>{c.sector}</div>
                </div>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '4rem' }}>
              <p style={{ color: '#9CA3AF', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                {isRtl ? 'أكثر من 200 عميل وضعوا ثقتهم فينا' : 'Over 200 clients have placed their trust in us'}
              </p>
              <Link href={`/${locale}/contact`} style={{
                display: 'inline-block', padding: '0.875rem 2.5rem',
                background: 'linear-gradient(135deg, #f3c716, #d4a800)',
                color: '#0f1e2d', fontWeight: 800, borderRadius: '0.625rem', textDecoration: 'none',
              }}>
                {isRtl ? 'انضم إلى قائمة عملائنا' : 'Join Our Client List'}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
