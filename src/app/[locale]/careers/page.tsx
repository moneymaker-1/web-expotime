import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { generatePageMetadata } from '@/lib/seo';
import Link from 'next/link';
import { Briefcase, MapPin, Clock } from 'lucide-react';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata(locale, 'الوظائف | إكسبو تايم', 'Careers | Expo Time',
    'انضم إلى فريق إكسبو تايم — وظائف في تصميم المعارض وإدارة المشاريع في الرياض',
    'Join the Expo Time team — careers in exhibition design and project management in Riyadh', '/careers');
}

export default async function CareersPage({ params }: Props) {
  const { locale } = await params;
  const isRtl = locale === 'ar';

  const openings = [
    { titleAr: 'مصمم أجنحة معارض أول', titleEn: 'Senior Exhibition Stand Designer', deptAr: 'التصميم', deptEn: 'Design', typeAr: 'دوام كامل', typeEn: 'Full-time', cityAr: 'الرياض', cityEn: 'Riyadh' },
    { titleAr: 'مدير مشاريع', titleEn: 'Project Manager', deptAr: 'العمليات', deptEn: 'Operations', typeAr: 'دوام كامل', typeEn: 'Full-time', cityAr: 'الرياض', cityEn: 'Riyadh' },
    { titleAr: 'مهندس تنفيذ معارض', titleEn: 'Exhibition Execution Engineer', deptAr: 'الهندسة', deptEn: 'Engineering', typeAr: 'دوام كامل', typeEn: 'Full-time', cityAr: 'الرياض / جدة', cityEn: 'Riyadh / Jeddah' },
    { titleAr: 'منسق فعاليات', titleEn: 'Events Coordinator', deptAr: 'الفعاليات', deptEn: 'Events', typeAr: 'دوام كامل', typeEn: 'Full-time', cityAr: 'الرياض', cityEn: 'Riyadh' },
  ];

  return (
    <>
      <Header />
      <main>
        <section style={{ background: 'linear-gradient(180deg, #0a1520 0%, #0f1e2d 100%)', paddingTop: '8rem', paddingBottom: '4rem' }}>
          <div className="container-custom" style={{ textAlign: 'center' }}>
            <h1 className="section-title" style={{ marginBottom: '1rem' }}>{isRtl ? 'انضم إلى فريقنا' : 'Join Our Team'}</h1>
            <p className="section-subtitle">{isRtl ? 'نحن دائماً نبحث عن المواهب المتميزة' : 'We are always looking for exceptional talent'}</p>
          </div>
        </section>

        <section className="section-padding" style={{ backgroundColor: '#0f1e2d' }}>
          <div className="container-custom">
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#F9FAFB', marginBottom: '2rem' }}>
              {isRtl ? 'الوظائف المتاحة' : 'Open Positions'}
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {openings.map((job) => (
                <div key={job.titleEn} className="card" style={{ padding: '1.75rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                      <Briefcase size={18} style={{ color: '#f3c716' }} />
                      <h3 style={{ fontWeight: 700, color: '#F9FAFB', fontSize: '1.05rem' }}>{isRtl ? job.titleAr : job.titleEn}</h3>
                    </div>
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                      <span style={{ color: '#9CA3AF', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                        <MapPin size={13} /> {isRtl ? job.cityAr : job.cityEn}
                      </span>
                      <span style={{ color: '#9CA3AF', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                        <Clock size={13} /> {isRtl ? job.typeAr : job.typeEn}
                      </span>
                      <span style={{ color: '#f3c716', fontSize: '0.8rem', background: 'rgba(243,199,22,0.1)', padding: '0.2rem 0.6rem', borderRadius: '9999px' }}>
                        {isRtl ? job.deptAr : job.deptEn}
                      </span>
                    </div>
                  </div>
                  <Link href={`/${locale}/contact`} style={{
                    padding: '0.625rem 1.5rem', background: 'linear-gradient(135deg, #f3c716, #d4a800)',
                    color: '#0f1e2d', fontWeight: 700, borderRadius: '0.5rem', textDecoration: 'none', fontSize: '0.875rem',
                  }}>
                    {isRtl ? 'تقدم الآن' : 'Apply Now'}
                  </Link>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '3rem', padding: '2.5rem', background: '#162534', border: '1px solid rgba(243,199,22,0.15)', borderRadius: '1.25rem', textAlign: 'center' }}>
              <h3 style={{ color: '#F9FAFB', fontWeight: 700, fontSize: '1.25rem', marginBottom: '0.75rem' }}>
                {isRtl ? 'لم تجد وظيفتك المناسبة؟' : "Didn't Find the Right Position?"}
              </h3>
              <p style={{ color: '#9CA3AF', marginBottom: '1.5rem' }}>
                {isRtl ? 'أرسل سيرتك الذاتية وسنتواصل معك عند توفر فرصة مناسبة' : 'Send your CV and we will contact you when a suitable opportunity arises'}
              </p>
              <Link href={`/${locale}/contact`} style={{
                display: 'inline-block', padding: '0.75rem 2rem',
                border: '1px solid rgba(243,199,22,0.4)',
                color: '#f3c716', fontWeight: 700, borderRadius: '0.5rem', textDecoration: 'none',
              }}>
                {isRtl ? 'أرسل سيرتك الذاتية' : 'Send Your CV'}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
