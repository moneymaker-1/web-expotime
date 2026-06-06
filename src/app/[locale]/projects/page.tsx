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
        <section style={{ background: '#fff', paddingTop: '8rem', paddingBottom: '4rem', borderBottom: '1px solid #f0f0f0' }}>
          <div className="container-custom" style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '0.8rem', fontWeight: 700, color: '#8DC63F', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.75rem' }}>
              {isRtl ? 'المشاريع' : 'Projects'}
            </p>
            <h1 style={{ fontSize: 'clamp(2rem,4vw,3.5rem)', fontWeight: 900, color: '#1a1a1a', marginBottom: '1.25rem', lineHeight: 1.15 }}>
              {isRtl ? 'المشاريع' : 'Projects'}
            </h1>
            <p style={{ color: '#555', fontSize: '1.1rem', lineHeight: 1.7, maxWidth: 680, margin: '0 auto' }}>
              {isRtl
                ? 'نماذج من أعمالنا المنفذة في كبرى المعارض والفعاليات بالمملكة العربية السعودية'
                : 'Samples of our executed work at major exhibitions and events across Saudi Arabia'}
            </p>
          </div>
        </section>

        <section className="section-padding" style={{ backgroundColor: '#f8f8f8' }}>
          <div className="container-custom">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1.75rem' }}>
              {portfolioProjects.map((project) => (
                <div key={project.id} style={{ background: '#fff', border: '1px solid #eee', borderRadius: '1rem', overflow: 'hidden' }}>
                  <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden', background: '#f8f8f8' }}>
                    <Image src={project.image} alt={isRtl ? project.titleAr : project.titleEn} fill style={{ objectFit: 'cover' }} />
                    {project.featured && (
                      <div style={{ position: 'absolute', top: '1rem', [isRtl ? 'right' : 'left']: '1rem' }}>
                        <span style={{ background: '#8DC63F', color: '#fff', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 700 }}>
                          {isRtl ? 'مميز' : 'Featured'}
                        </span>
                      </div>
                    )}
                  </div>
                  <div style={{ padding: '1.5rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                      <span style={{ background: 'rgba(141,198,63,0.1)', color: '#8DC63F', padding: '0.2rem 0.6rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 600 }}>
                        {isRtl ? project.categoryAr : project.categoryEn}
                      </span>
                      <span style={{ color: '#aaa', fontSize: '0.8rem' }}>{project.year}</span>
                    </div>
                    <h3 style={{ fontWeight: 700, color: '#1a1a1a', lineHeight: 1.4, marginBottom: '0.5rem' }}>
                      {isRtl ? project.titleAr : project.titleEn}
                    </h3>
                    <div style={{ display: 'flex', gap: '1rem', color: '#aaa', fontSize: '0.8rem', marginBottom: '1.25rem' }}>
                      <span>{project.client}</span>
                      <span>{project.area}</span>
                    </div>
                    <Link href={`/${locale}/contact`} style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', color: '#8DC63F', fontSize: '0.875rem', fontWeight: 600, textDecoration: 'none' }}>
                      {isRtl ? 'طلب مشروع مماثل' : 'Request Similar Project'} <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '4rem' }}>
              <p style={{ color: '#555', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                {isRtl ? 'هل أنت مستعد لمشروعك القادم؟' : 'Ready for your next project?'}
              </p>
              <Link href={`/${locale}/contact`} style={{
                display: 'inline-block', padding: '0.875rem 2.5rem',
                background: '#8DC63F',
                color: '#fff', fontWeight: 800, borderRadius: '0.75rem', textDecoration: 'none',
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
