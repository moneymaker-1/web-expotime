import type { Metadata } from 'next';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { generatePageMetadata } from '@/lib/seo';
import { CheckCircle, Target, Eye, Award, Users, Clock, Globe } from 'lucide-react';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata(locale,
    'من نحن | إكسبو تايم', 'About Us | Expo Time',
    'تعرف على إكسبو تايم — شركة رائدة في تصميم وتنفيذ أجنحة المعارض في المملكة العربية السعودية منذ عام 2015',
    'Learn about Expo Time — a leading exhibition stand design and fabrication company in Saudi Arabia since 2015',
    '/about'
  );
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  const isRtl = locale === 'ar';

  const values = [
    { icon: '🎯', titleAr: 'الجودة', titleEn: 'Quality', descAr: 'نلتزم بأعلى معايير الجودة في كل مشروع', descEn: 'We commit to the highest quality standards in every project' },
    { icon: '💡', titleAr: 'الابتكار', titleEn: 'Innovation', descAr: 'نستخدم أحدث التقنيات والأساليب الإبداعية', descEn: 'We use the latest technologies and creative methods' },
    { icon: '🤝', titleAr: 'الشراكة', titleEn: 'Partnership', descAr: 'نبني علاقات طويلة الأمد مع عملائنا', descEn: 'We build long-term relationships with our clients' },
    { icon: '⚡', titleAr: 'الالتزام', titleEn: 'Commitment', descAr: 'نلتزم بالمواعيد ونتجاوز التوقعات دائماً', descEn: 'We meet deadlines and always exceed expectations' },
    { icon: '🌱', titleAr: 'الاستدامة', titleEn: 'Sustainability', descAr: 'نحرص على استخدام مواد صديقة للبيئة', descEn: 'We prioritize eco-friendly materials and practices' },
    { icon: '🏆', titleAr: 'التميز', titleEn: 'Excellence', descAr: 'نسعى للتميز في كل ما نقدمه', descEn: 'We strive for excellence in everything we deliver' },
  ];

  const team = [
    { nameAr: 'م. عبدالله الحارثي', nameEn: 'Eng. Abdullah Al-Harthy', roleAr: 'المدير التنفيذي', roleEn: 'CEO' },
    { nameAr: 'م. سلمى العمري', nameEn: 'Eng. Salma Al-Omari', roleAr: 'مديرة التصميم', roleEn: 'Design Director' },
    { nameAr: 'م. خالد السبيعي', nameEn: 'Eng. Khalid Al-Subaie', roleAr: 'مدير المشاريع', roleEn: 'Projects Director' },
    { nameAr: 'أ. ريم القحطاني', nameEn: 'Reem Al-Qahtani', roleAr: 'مديرة التسويق', roleEn: 'Marketing Director' },
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section style={{ background: 'linear-gradient(180deg, #0a1520 0%, #0f1e2d 100%)', paddingTop: '8rem', paddingBottom: '5rem' }}>
          <div className="container-custom" style={{ textAlign: 'center' }}>
            <div className="badge" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>
              {isRtl ? 'قصتنا' : 'Our Story'}
            </div>
            <h1 className="section-title" style={{ marginBottom: '1.25rem' }}>
              {isRtl ? '20 عاماً من التميز في صناعة المعارض' : '20 Years of Excellence in the Exhibition Industry'}
            </h1>
            <p className="section-subtitle">
              {isRtl
                ? 'منذ عام 2015، ونحن نصنع الفارق في كل معرض، نحول الأفكار إلى واقع مبهر'
                : 'Since 2015, we have been making a difference at every exhibition, turning ideas into stunning reality'}
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="section-padding" style={{ backgroundColor: '#0f1e2d' }}>
          <div className="container-custom">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
              <div style={{ order: isRtl ? 2 : 1 }}>
                <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#F9FAFB', marginBottom: '1.5rem' }}>
                  {isRtl ? 'من نحن' : 'Who We Are'}
                </h2>
                <p style={{ color: '#9CA3AF', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                  {isRtl
                    ? 'إكسبو تايم شركة سعودية رائدة في تصميم وتنفيذ أجنحة المعارض والفعاليات. تأسست عام 2015 في الرياض، وأصبحت اليوم الشريك الاستراتيجي المفضل لأكثر من 5000 شركة وجهة حكومية في المملكة العربية السعودية.'
                    : 'Expo Time is a leading Saudi company specializing in exhibition stand design and fabrication. Founded in 2015 in Riyadh, it has become the preferred strategic partner for over 5000 companies and government entities in Saudi Arabia.'}
                </p>
                <p style={{ color: '#9CA3AF', lineHeight: 1.8, marginBottom: '2rem' }}>
                  {isRtl
                    ? 'بفريق من أكثر من 50 متخصصاً في التصميم والهندسة وإدارة المشاريع، نقدم حلولاً شاملة لأجنحة المعارض المخصصة والنمطية وإدارة الفعاليات الكبرى. ويمتد حضورنا محلياً وإقليمياً ودولياً ليشمل الرياض وجدة والمدينة المنورة، إضافةً إلى دبي وأبوظبي والدوحة والمنامة وصلالة والقاهرة والجزائر وبيروت وأنقرة وإسلام آباد.'
                    : 'With a team of over 50 specialists in design, engineering, and project management, we provide comprehensive solutions for custom and modular exhibition stands and large-scale event management. Our presence spans locally, regionally, and internationally — including Riyadh, Jeddah, and Madinah, as well as Dubai, Abu Dhabi, Doha, Manama, Salalah, Cairo, Algiers, Beirut, Ankara, and Islamabad.'}
                </p>
                {[
                  isRtl ? 'تصميم وتنفيذ بأعلى معايير الجودة' : 'Design and fabrication with the highest quality standards',
                  isRtl ? 'خبرة 20 عاماً في السوق السعودي' : '20 years of experience in the Saudi market',
                  isRtl ? 'فريق متخصص من 50+ محترف' : 'Specialized team of 50+ professionals',
                  isRtl ? 'خدمة شاملة من التصميم إلى التركيب' : 'Comprehensive service from design to installation',
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                    <CheckCircle size={18} style={{ color: '#f3c716', flexShrink: 0 }} />
                    <span style={{ color: '#D1D5DB', fontSize: '0.9rem' }}>{item}</span>
                  </div>
                ))}
              </div>
              <div style={{ order: isRtl ? 1 : 2 }}>
                <div style={{ borderRadius: '1.25rem', overflow: 'hidden', border: '1px solid rgba(243,199,22,0.2)', aspectRatio: '4/3', position: 'relative' }}>
                  <Image src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80" alt="About Expo Time" fill style={{ objectFit: 'cover' }} />
                </div>
              </div>
            </div>
          </div>
          <style>{`@media(max-width:768px){.container-custom>div{grid-template-columns:1fr!important}}`}</style>
        </section>

        {/* Stats */}
        <section style={{ backgroundColor: '#0a1520', padding: '4rem 0', borderTop: '1px solid rgba(243,199,22,0.1)', borderBottom: '1px solid rgba(243,199,22,0.1)' }}>
          <div className="container-custom">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '2rem' }}>
              {[
                { num: '5000+', labelAr: 'مشروع منجز', labelEn: 'Completed Projects', Icon: Award },
                { num: '5000+', labelAr: 'عميل راضٍ', labelEn: 'Satisfied Clients', Icon: Users },
                { num: '20+', labelAr: 'سنة خبرة', labelEn: 'Years Experience', Icon: Clock },
                { num: '15+', labelAr: 'معرض دولي', labelEn: 'International Exhibitions', Icon: Globe },
              ].map(({ num, labelAr, labelEn, Icon }) => (
                <div key={num} style={{ textAlign: 'center', padding: '1.5rem' }}>
                  <Icon size={28} style={{ color: '#f3c716', margin: '0 auto 0.75rem' }} />
                  <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#f3c716' }}>{num}</div>
                  <div style={{ color: '#9CA3AF', fontSize: '0.9rem', marginTop: '0.5rem' }}>{isRtl ? labelAr : labelEn}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section-padding" style={{ backgroundColor: '#0f1e2d' }}>
          <div className="container-custom">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
              <div style={{ background: '#162534', border: '1px solid rgba(243,199,22,0.15)', borderRadius: '1.25rem', padding: '2.5rem' }}>
                <Target size={36} style={{ color: '#f3c716', marginBottom: '1.25rem' }} />
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#F9FAFB', marginBottom: '1rem' }}>
                  {isRtl ? 'رسالتنا' : 'Our Mission'}
                </h3>
                <p style={{ color: '#9CA3AF', lineHeight: 1.8 }}>
                  {isRtl
                    ? 'أن نكون الشريك الاستراتيجي الأول لعملائنا في صناعة المعارض، من خلال تقديم حلول إبداعية ومبتكرة تعزز حضورهم في الأسواق المحلية والدولية وتحقق أهدافهم التسويقية.'
                    : 'To be the premier strategic partner for our clients in the exhibition industry, delivering creative and innovative solutions that strengthen their presence in local and international markets and achieve their marketing goals.'}
                </p>
              </div>
              <div style={{ background: '#162534', border: '1px solid rgba(243,199,22,0.15)', borderRadius: '1.25rem', padding: '2.5rem' }}>
                <Eye size={36} style={{ color: '#f3c716', marginBottom: '1.25rem' }} />
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#F9FAFB', marginBottom: '1rem' }}>
                  {isRtl ? 'رؤيتنا' : 'Our Vision'}
                </h3>
                <p style={{ color: '#9CA3AF', lineHeight: 1.8 }}>
                  {isRtl
                    ? 'أن نكون الشركة الرائدة في تصميم وتنفيذ أجنحة المعارض في منطقة الشرق الأوسط وشمال أفريقيا، مدفوعين بالابتكار والجودة والاستدامة، في خدمة رؤية المملكة 2030.'
                    : 'To be the leading company in exhibition stand design and fabrication in the Middle East and North Africa, driven by innovation, quality, and sustainability, in service of Saudi Vision 2030.'}
                </p>
              </div>
            </div>
          </div>
          <style>{`@media(max-width:768px){.container-custom>div{grid-template-columns:1fr!important}}`}</style>
        </section>

        {/* Values */}
        <section className="section-padding" style={{ backgroundColor: '#0a1520' }}>
          <div className="container-custom">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 className="section-title">{isRtl ? 'قيمنا' : 'Our Values'}</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {values.map((v) => (
                <div key={v.titleEn} className="card" style={{ padding: '2rem' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{v.icon}</div>
                  <h3 style={{ fontWeight: 700, color: '#F9FAFB', marginBottom: '0.75rem' }}>{isRtl ? v.titleAr : v.titleEn}</h3>
                  <p style={{ color: '#9CA3AF', fontSize: '0.875rem', lineHeight: 1.7 }}>{isRtl ? v.descAr : v.descEn}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="section-padding" style={{ backgroundColor: '#0f1e2d' }}>
          <div className="container-custom">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 className="section-title">{isRtl ? 'فريقنا القيادي' : 'Our Leadership Team'}</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1.5rem' }}>
              {team.map((m) => (
                <div key={m.nameEn} className="card" style={{ padding: '2rem', textAlign: 'center' }}>
                  <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'linear-gradient(135deg, rgba(243,199,22,0.2), rgba(243,199,22,0.05))', border: '2px solid rgba(243,199,22,0.3)', margin: '0 auto 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem' }}>👤</div>
                  <h3 style={{ fontWeight: 700, color: '#F9FAFB', fontSize: '1rem' }}>{isRtl ? m.nameAr : m.nameEn}</h3>
                  <p style={{ color: '#f3c716', fontSize: '0.8rem', marginTop: '0.375rem' }}>{isRtl ? m.roleAr : m.roleEn}</p>
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
