import type { Metadata } from 'next';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { generatePageMetadata } from '@/lib/seo';
import { Calendar } from 'lucide-react';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata(locale, 'الأخبار | إكسبو تايم', 'News | Expo Time',
    'آخر أخبار إكسبو تايم وصناعة المعارض في المملكة العربية السعودية',
    'Latest news from Expo Time and the Saudi Arabia exhibition industry', '/news');
}

export default async function NewsPage({ params }: Props) {
  const { locale } = await params;
  const isRtl = locale === 'ar';

  const news = [
    { titleAr: 'إكسبو تايم تفوز بجائزة أفضل شركة تصميم أجنحة في المملكة 2026', titleEn: 'Expo Time Wins Best Exhibition Stand Design Company in KSA 2026', date: '2026-04-15', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80', categoryAr: 'جوائز', categoryEn: 'Awards' },
    { titleAr: 'إطلاق خدمة الأجنحة الذكية المتكاملة مع تقنيات الذكاء الاصطناعي', titleEn: 'Launch of Smart Stands Service Integrated with AI Technologies', date: '2026-03-20', image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&q=80', categoryAr: 'إطلاق خدمات', categoryEn: 'Service Launch' },
    { titleAr: 'إكسبو تايم تشارك في معرض البيج 5 السعودي 2026', titleEn: 'Expo Time Participates in Big 5 Saudi 2026', date: '2026-02-10', image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80', categoryAr: 'فعاليات', categoryEn: 'Events' },
  ];

  return (
    <>
      <Header />
      <main>
        <section style={{ background: 'linear-gradient(180deg, #060A14 0%, #0A0E1A 100%)', paddingTop: '8rem', paddingBottom: '4rem' }}>
          <div className="container-custom" style={{ textAlign: 'center' }}>
            <h1 className="section-title" style={{ marginBottom: '1rem' }}>{isRtl ? 'الأخبار' : 'News'}</h1>
            <p className="section-subtitle">{isRtl ? 'آخر أخبار إكسبو تايم وصناعة المعارض' : 'Latest news from Expo Time and the exhibition industry'}</p>
          </div>
        </section>
        <section className="section-padding" style={{ backgroundColor: '#0A0E1A' }}>
          <div className="container-custom">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1.75rem' }}>
              {news.map((item, i) => (
                <div key={i} className="card" style={{ overflow: 'hidden' }}>
                  <div style={{ position: 'relative', aspectRatio: '16/9', background: '#111827' }}>
                    <Image src={item.image} alt={isRtl ? item.titleAr : item.titleEn} fill style={{ objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', top: '1rem', [isRtl ? 'right' : 'left']: '1rem' }}>
                      <span style={{ background: 'rgba(201,168,76,0.9)', color: '#0A0E1A', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 700 }}>
                        {isRtl ? item.categoryAr : item.categoryEn}
                      </span>
                    </div>
                  </div>
                  <div style={{ padding: '1.5rem' }}>
                    <span style={{ color: '#6B7280', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.375rem', marginBottom: '0.75rem' }}>
                      <Calendar size={13} /> {item.date}
                    </span>
                    <h2 style={{ fontWeight: 700, color: '#F9FAFB', lineHeight: 1.4 }}>{isRtl ? item.titleAr : item.titleEn}</h2>
                  </div>
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
