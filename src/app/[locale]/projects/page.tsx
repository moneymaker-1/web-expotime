import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { generatePageMetadata } from '@/lib/seo';
import { portfolioProjects } from '@/lib/data';
import { ArrowRight } from 'lucide-react';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata(locale, 'المشاريع | إكسبو تايم', 'Projects | Expo Time',
    'استعرض أبرز مشاريع إكسبو تايم في تصميم وتنفيذ أجنحة المعارض في المملكة العربية السعودية',
    'Explore Expo Time\'s landmark projects in designing and executing exhibition stands across Saudi Arabia',
    '/projects');
}

export default async function ProjectsPage({ params }: Props) {
  const { locale } = await params;
  const isRtl = locale === 'ar';

  return (
    <>
      <Header />
      <main>
        <section style={{ background: 'linear-gradient(180deg, #0a1520 0%, #0f1e2d 100%)', paddingTop: '8rem', paddingBottom: '4rem' }}>
          <div className="container-custom" style={{ textAlign: 'center' }}>
            <h1 className="section-title" style={{ marginBottom: '1rem' }}>{isRtl ? 'المشاريع' : 'Projects'}</h1>
            <p className="section-subtitle">
              {isRtl
                ? 'نماذج من أعمالنا المنفذة في كبرى المعارض والفعاليات بالمملكة العربية السعودية'
                : 'Samples of our executed work at major exhibitions and events across Saudi Arabia'}
            </p>
          </div>
        </section>

        <section className="section-padding" style={{ backgroundColor: '#0f1e2d' }}>
          <div className="container-custom">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1.75rem' }}>
              {portfolioProjects.map((project) => (
                <div key={project.id} className="card" style={{ overflow: 'hidden' }}>
                  <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden', background: '#162534' }}>
                    <Image
                      src={project.image}
                      alt={isRtl ? project.titleAr : project.titleEn}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                    {project.featured && (
                      <div style={{ position: 'absolute', top: '1rem', [isRtl ? 'right' : 'left']: '1rem' }}>
                        <span style={{ background: 'rgba(243,199,22,0.9)', color: '#0f1e2d', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 700 }}>
                          {isRtl ? 'مميز' : 'Featured'}
                        </span>
                      </div>
                    )}
                  </div>
                  <div style={{ padding: '1.5rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                      <span style={{ background: 'rgba(243,199,22,0.1)', color: '#f3c716', padding: '0.2rem 0.6rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 600 }}>
                        {isRtl ? project.categoryAr : project.categoryEn}
                      </span>
                      <span style={{ color: '#6B7280', fontSize: '0.8rem' }}>{project.year}</span>
                    </div>
                    <h3 style={{ fontWeight: 700, color: '#F9FAFB', lineHeight: 1.4, marginBottom: '0.5rem' }}>
                      {isRtl ? project.titleAr : project.titleEn}
                    </h3>
                    <div style={{ display: 'flex', gap: '1rem', color: '#9CA3AF', fontSize: '0.8rem', marginBottom: '1.25rem' }}>
                      <span>{project.client}</span>
                      <span>{project.area}</span>
                    </div>
                    <Link href={`/${locale}/contact`} style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', color: '#f3c716', fontSize: '0.875rem', fontWeight: 600, textDecoration: 'none' }}>
                      {isRtl ? 'طلب مشروع مماثل' : 'Request Similar Project'} <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '4rem' }}>
              <p style={{ color: '#9CA3AF', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                {isRtl ? 'هل أنت مستعد لمشروعك القادم؟' : 'Ready for your next project?'}
              </p>
              <Link href={`/${locale}/contact`} style={{
                display: 'inline-block', padding: '0.875rem 2.5rem',
                background: 'linear-gradient(135deg, #f3c716, #d4a800)',
                color: '#0f1e2d', fontWeight: 800, borderRadius: '0.625rem', textDecoration: 'none',
              }}>
                {isRtl ? 'ابدأ مشروعك' : 'Start Your Project'}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
