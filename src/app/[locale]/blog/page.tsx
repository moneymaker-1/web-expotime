import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { generatePageMetadata } from '@/lib/seo';
import { blogPosts } from '@/lib/data';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata(locale,
    'المدونة | إكسبو تايم', 'Blog | Expo Time',
    'مقالات ونصائح خبراء أجنحة المعارض في المملكة العربية السعودية',
    'Articles and expert tips from Saudi Arabia\'s exhibition stand industry',
    '/blog'
  );
}

export default async function BlogPage({ params }: Props) {
  const { locale } = await params;
  const isRtl = locale === 'ar';

  return (
    <>
      <Header />
      <main>
        <section style={{ background: 'linear-gradient(180deg, #0a1520 0%, #0f1e2d 100%)', paddingTop: '8rem', paddingBottom: '4rem' }}>
          <div className="container-custom" style={{ textAlign: 'center' }}>
            <h1 className="section-title" style={{ marginBottom: '1rem' }}>{isRtl ? 'المدونة' : 'Blog'}</h1>
            <p className="section-subtitle">{isRtl ? 'مقالات ونصائح خبراء صناعة المعارض' : 'Articles and expert tips from the exhibition industry'}</p>
          </div>
        </section>
        <section className="section-padding" style={{ backgroundColor: '#0f1e2d' }}>
          <div className="container-custom">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1.75rem' }}>
              {blogPosts.map((post) => (
                <Link key={post.slug} href={`/${locale}/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
                  <div className="card" style={{ overflow: 'hidden', height: '100%' }}>
                    <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden', background: '#162534' }}>
                      <Image src={post.image} alt={isRtl ? post.titleAr : post.titleEn} fill style={{ objectFit: 'cover' }} />
                      <div style={{ position: 'absolute', top: '1rem', [isRtl ? 'right' : 'left']: '1rem' }}>
                        <span style={{ background: 'rgba(243,199,22,0.9)', color: '#0f1e2d', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 700 }}>
                          {isRtl ? post.categoryAr : post.categoryEn}
                        </span>
                      </div>
                    </div>
                    <div style={{ padding: '1.5rem' }}>
                      <div style={{ display: 'flex', gap: '1rem', color: '#6B7280', fontSize: '0.8rem', marginBottom: '0.875rem' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}><Calendar size={13} /> {post.date}</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}><Clock size={13} /> {isRtl ? post.readTimeAr : post.readTimeEn}</span>
                      </div>
                      <h2 style={{ fontWeight: 700, color: '#F9FAFB', lineHeight: 1.4, marginBottom: '0.75rem' }}>
                        {isRtl ? post.titleAr : post.titleEn}
                      </h2>
                      <p style={{ color: '#9CA3AF', fontSize: '0.875rem', lineHeight: 1.7 }}>
                        {isRtl ? post.excerptAr : post.excerptEn}
                      </p>
                      <div style={{ marginTop: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.375rem', color: '#f3c716', fontSize: '0.875rem', fontWeight: 600 }}>
                        {isRtl ? 'اقرأ المزيد' : 'Read More'} <ArrowRight size={14} />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
