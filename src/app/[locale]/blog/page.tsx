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
        <section style={{ background: '#fff', paddingTop: '8rem', paddingBottom: '4rem', borderBottom: '1px solid #f0f0f0' }}>
          <div className="container-custom" style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '0.8rem', fontWeight: 700, color: '#8DC63F', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.75rem' }}>
              {isRtl ? 'المدونة' : 'Blog'}
            </p>
            <h1 style={{ fontSize: 'clamp(2rem,4vw,3.5rem)', fontWeight: 900, color: '#1a1a1a', marginBottom: '1.25rem', lineHeight: 1.15 }}>
              {isRtl ? 'المدونة' : 'Blog'}
            </h1>
            <p style={{ color: '#555', fontSize: '1.1rem', lineHeight: 1.7, maxWidth: 680, margin: '0 auto' }}>
              {isRtl ? 'مقالات ونصائح خبراء صناعة المعارض' : 'Articles and expert tips from the exhibition industry'}
            </p>
          </div>
        </section>
        <section className="section-padding" style={{ backgroundColor: '#f8f8f8' }}>
          <div className="container-custom">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1.75rem' }}>
              {blogPosts.map((post) => (
                <Link key={post.slug} href={`/${locale}/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
                  <div style={{ background: '#fff', border: '1px solid #eee', borderRadius: '1rem', overflow: 'hidden', height: '100%' }}>
                    <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden', background: '#f8f8f8' }}>
                      <Image src={post.image} alt={isRtl ? post.titleAr : post.titleEn} fill style={{ objectFit: 'cover' }} />
                      <div style={{ position: 'absolute', top: '1rem', [isRtl ? 'right' : 'left']: '1rem' }}>
                        <span style={{ background: '#8DC63F', color: '#fff', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 700 }}>
                          {isRtl ? post.categoryAr : post.categoryEn}
                        </span>
                      </div>
                    </div>
                    <div style={{ padding: '1.5rem' }}>
                      <div style={{ display: 'flex', gap: '1rem', color: '#aaa', fontSize: '0.8rem', marginBottom: '0.875rem' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}><Calendar size={13} /> {post.date}</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}><Clock size={13} /> {isRtl ? post.readTimeAr : post.readTimeEn}</span>
                      </div>
                      <h2 style={{ fontWeight: 700, color: '#1a1a1a', lineHeight: 1.4, marginBottom: '0.75rem' }}>
                        {isRtl ? post.titleAr : post.titleEn}
                      </h2>
                      <p style={{ color: '#555', fontSize: '0.875rem', lineHeight: 1.7 }}>
                        {isRtl ? post.excerptAr : post.excerptEn}
                      </p>
                      <div style={{ marginTop: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.375rem', color: '#8DC63F', fontSize: '0.875rem', fontWeight: 600 }}>
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
