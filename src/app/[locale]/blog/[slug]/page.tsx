import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { generatePageMetadata } from '@/lib/seo';
import { blogPosts } from '@/lib/data';
import { notFound } from 'next/navigation';
import { Calendar, Clock, ArrowLeft, ArrowRight } from 'lucide-react';

type Props = { params: Promise<{ locale: string; slug: string }> };

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return generatePageMetadata(locale, post.titleAr, post.titleEn, post.excerptAr, post.excerptEn, `/blog/${slug}`);
}

export default async function BlogPostPage({ params }: Props) {
  const { locale, slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();
  const isRtl = locale === 'ar';

  return (
    <>
      <Header />
      <main>
        <article>
          <section style={{ background: 'linear-gradient(180deg, #0a1520 0%, #0f1e2d 100%)', paddingTop: '8rem', paddingBottom: '3rem' }}>
            <div className="container-custom" style={{ maxWidth: '860px' }}>
              <Link href={`/${locale}/blog`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#f3c716', textDecoration: 'none', marginBottom: '2rem', fontSize: '0.875rem' }}>
                {isRtl ? <ArrowRight size={16} /> : <ArrowLeft size={16} />}
                {isRtl ? 'العودة للمدونة' : 'Back to Blog'}
              </Link>
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                <span style={{ background: 'rgba(243,199,22,0.15)', color: '#f3c716', padding: '0.375rem 1rem', borderRadius: '9999px', fontSize: '0.8rem', fontWeight: 700 }}>
                  {isRtl ? post.categoryAr : post.categoryEn}
                </span>
                <span style={{ color: '#6B7280', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                  <Calendar size={14} /> {post.date}
                </span>
                <span style={{ color: '#6B7280', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                  <Clock size={14} /> {isRtl ? post.readTimeAr : post.readTimeEn}
                </span>
              </div>
              <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 900, color: '#F9FAFB', lineHeight: 1.2, marginBottom: '2rem' }}>
                {isRtl ? post.titleAr : post.titleEn}
              </h1>
            </div>
          </section>

          <section style={{ backgroundColor: '#0f1e2d', paddingBottom: '5rem' }}>
            <div className="container-custom" style={{ maxWidth: '860px' }}>
              <div style={{ borderRadius: '1.25rem', overflow: 'hidden', marginBottom: '3rem', aspectRatio: '16/7', position: 'relative' }}>
                <Image src={post.image} alt={isRtl ? post.titleAr : post.titleEn} fill style={{ objectFit: 'cover' }} />
              </div>
              <div
                style={{ color: '#D1D5DB', lineHeight: 1.9, fontSize: '1.05rem' }}
                dangerouslySetInnerHTML={{ __html: isRtl ? post.contentAr : post.contentEn }}
              />

              {/* CTA */}
              <div style={{ marginTop: '4rem', padding: '2.5rem', background: 'rgba(243,199,22,0.06)', border: '1px solid rgba(243,199,22,0.2)', borderRadius: '1.25rem', textAlign: 'center' }}>
                <h3 style={{ color: '#F9FAFB', fontWeight: 800, fontSize: '1.5rem', marginBottom: '0.75rem' }}>
                  {isRtl ? 'هل تريد جناح معرض استثنائي؟' : 'Want an Extraordinary Exhibition Stand?'}
                </h3>
                <p style={{ color: '#9CA3AF', marginBottom: '1.5rem' }}>
                  {isRtl ? 'تواصل معنا الآن واحصل على استشارة مجانية' : 'Contact us now for a free consultation'}
                </p>
                <Link href={`/${locale}/contact`} style={{
                  display: 'inline-block', padding: '0.875rem 2.5rem',
                  background: 'linear-gradient(135deg, #f3c716, #d4a800)',
                  color: '#0f1e2d', fontWeight: 800, borderRadius: '0.625rem', textDecoration: 'none',
                }}>
                  {isRtl ? 'احصل على عرض سعر' : 'Get a Quote'}
                </Link>
              </div>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
