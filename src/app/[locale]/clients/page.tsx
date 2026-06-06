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
        <section style={{ background: '#fff', paddingTop: '8rem', paddingBottom: '4rem', borderBottom: '1px solid #f0f0f0' }}>
          <div className="container-custom" style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '0.8rem', fontWeight: 700, color: '#8DC63F', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.75rem' }}>
              {isRtl ? 'عملاؤنا' : 'Our Clients'}
            </p>
            <h1 style={{ fontSize: 'clamp(2rem,4vw,3.5rem)', fontWeight: 900, color: '#1a1a1a', marginBottom: '1.25rem', lineHeight: 1.15 }}>
              {isRtl ? 'عملاؤنا' : 'Our Clients'}
            </h1>
            <p style={{ color: '#555', fontSize: '1.1rem', lineHeight: 1.7, maxWidth: 680, margin: '0 auto' }}>
              {isRtl ? 'نفخر بثقة أبرز الشركات والجهات في المملكة' : 'We are proud to serve Saudi Arabia\'s most prominent companies and institutions'}
            </p>
          </div>
        </section>
        <section className="section-padding" style={{ backgroundColor: '#f8f8f8' }}>
          <div className="container-custom">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1.25rem' }}>
              {clients.map((c) => (
                <div key={c.nameEn} style={{ background: '#fff', border: '1px solid #eee', borderRadius: '1rem', padding: '2rem', textAlign: 'center' }}>
                  <div style={{ width: 60, height: 60, borderRadius: '0.75rem', background: 'rgba(141,198,63,0.1)', border: '1px solid rgba(141,198,63,0.2)', margin: '0 auto 1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.75rem' }}>🏢</div>
                  <div style={{ fontWeight: 700, color: '#1a1a1a', fontSize: '1rem', marginBottom: '0.375rem' }}>{isRtl ? c.nameAr : c.nameEn}</div>
                  <div style={{ fontSize: '0.75rem', color: '#aaa', textTransform: 'capitalize' }}>{c.sector}</div>
                </div>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '4rem' }}>
              <p style={{ color: '#555', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                {isRtl ? 'أكثر من 5000 عميل وضعوا ثقتهم فينا' : 'Over 5000 clients have placed their trust in us'}
              </p>
              <Link href={`/${locale}/contact`} style={{
                display: 'inline-block', padding: '0.875rem 2.5rem',
                background: '#8DC63F',
                color: '#fff', fontWeight: 800, borderRadius: '0.75rem', textDecoration: 'none',
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
