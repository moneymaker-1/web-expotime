import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { CheckCircle, ArrowRight, Phone, MessageSquare } from 'lucide-react';

interface ServicePageProps {
  locale: string;
  titleAr: string;
  titleEn: string;
  subtitleAr: string;
  subtitleEn: string;
  descAr: string;
  descEn: string;
  featuresAr: string[];
  featuresEn: string[];
  faqsAr: { q: string; a: string }[];
  faqsEn: { q: string; a: string }[];
  image: string;
  relatedServicesAr?: string[];
  relatedServicesEn?: string[];
  schemaType?: string;
}

export default function ServicePageTemplate({
  locale, titleAr, titleEn, subtitleAr, subtitleEn,
  descAr, descEn, featuresAr, featuresEn,
  faqsAr, faqsEn, image, schemaType = 'Service',
}: ServicePageProps) {
  const isRtl = locale === 'ar';
  const title = isRtl ? titleAr : titleEn;
  const subtitle = isRtl ? subtitleAr : subtitleEn;
  const desc = isRtl ? descAr : descEn;
  const features = isRtl ? featuresAr : featuresEn;
  const faqs = isRtl ? faqsAr : faqsEn;

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': schemaType,
    name: isRtl ? titleAr : titleEn,
    description: isRtl ? descAr : descEn,
    provider: {
      '@type': 'Organization',
      name: 'Expo Time',
      url: 'https://expo-time.co',
      telephone: '+966-11-239-3255',
      address: { '@type': 'PostalAddress', addressLocality: 'Riyadh', addressCountry: 'SA' },
    },
    areaServed: { '@type': 'Country', name: 'Saudi Arabia' },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      <main>
        {/* Hero */}
        <section style={{ background: '#fff', paddingTop: '8rem', paddingBottom: '4rem', borderBottom: '1px solid #f0f0f0' }}>
          <div className="container-custom">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
              <div style={{ order: isRtl ? 2 : 1 }}>
                <p style={{ fontSize: '0.8rem', fontWeight: 700, color: '#8DC63F', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.75rem' }}>
                  {isRtl ? 'خدماتنا' : 'Our Services'}
                </p>
                <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', fontWeight: 900, color: '#1a1a1a', lineHeight: 1.15, marginBottom: '1.25rem' }}>{title}</h1>
                <p style={{ color: '#555', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2rem' }}>{subtitle}</p>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <Link href={`/${locale}/contact`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.875rem 2rem', background: '#8DC63F', color: '#fff', fontWeight: 800, borderRadius: '0.75rem', textDecoration: 'none' }}>
                    {isRtl ? 'احصل على عرض سعر' : 'Get a Quote'} <ArrowRight size={18} />
                  </Link>
                  <a href="tel:+966112393255" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.875rem 2rem', border: '2px solid #8DC63F', color: '#8DC63F', fontWeight: 700, borderRadius: '0.75rem', textDecoration: 'none' }}>
                    <Phone size={18} /> +966 11 239 3255
                  </a>
                </div>
              </div>
              <div style={{ order: isRtl ? 1 : 2 }}>
                <div style={{ borderRadius: '1.25rem', overflow: 'hidden', border: '1px solid #eee', aspectRatio: '4/3', position: 'relative' }}>
                  <Image src={image} alt={title} fill style={{ objectFit: 'cover' }} />
                </div>
              </div>
            </div>
          </div>
          <style>{`@media(max-width:768px){section .container-custom>div{grid-template-columns:1fr!important}}`}</style>
        </section>

        {/* Description */}
        <section className="section-padding" style={{ backgroundColor: '#f8f8f8' }}>
          <div className="container-custom" style={{ maxWidth: '900px' }}>
            <p style={{ color: '#555', fontSize: '1.1rem', lineHeight: 1.9, marginBottom: '3rem' }}>{desc}</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
              {features.map((f, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', padding: '1.25rem', background: '#fff', borderRadius: '0.75rem', border: '1px solid #eee' }}>
                  <CheckCircle size={18} style={{ color: '#8DC63F', flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ color: '#555', fontSize: '0.9rem', lineHeight: 1.6 }}>{f}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        {faqs.length > 0 && (
          <section className="section-padding" style={{ backgroundColor: '#fff' }}>
            <div className="container-custom" style={{ maxWidth: '800px' }}>
              <h2 style={{ fontSize: 'clamp(1.5rem,3vw,2.25rem)', fontWeight: 800, color: '#1a1a1a', marginBottom: '2.5rem', textAlign: 'center' }}>
                {isRtl ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {faqs.map((faq, i) => (
                  <div key={i} style={{ background: '#fff', border: '1px solid #eee', borderRadius: '1rem', padding: '1.5rem' }}>
                    <h3 style={{ fontWeight: 700, color: '#1a1a1a', marginBottom: '0.75rem' }}>{faq.q}</h3>
                    <p style={{ color: '#555', lineHeight: 1.7, fontSize: '0.9rem' }}>{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section style={{ padding: '5rem 0', backgroundColor: '#111111' }}>
          <div className="container-custom" style={{ textAlign: 'center' }}>
            <div style={{ background: 'rgba(141,198,63,0.08)', border: '1px solid rgba(141,198,63,0.25)', borderRadius: '1.5rem', padding: '4rem 2rem' }}>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 900, color: '#fff', marginBottom: '1rem' }}>
                {isRtl ? `هل تحتاج ${titleAr}؟` : `Need ${titleEn}?`}
              </h2>
              <p style={{ color: '#aaa', marginBottom: '2.5rem', fontSize: '1.05rem' }}>
                {isRtl ? 'تواصل مع فريقنا المتخصص الآن واحصل على استشارة مجانية' : 'Contact our specialized team now for a free consultation'}
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href={`/${locale}/contact`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '1rem 2.5rem', background: '#8DC63F', color: '#fff', fontWeight: 800, fontSize: '1rem', borderRadius: '0.75rem', textDecoration: 'none' }}>
                  <MessageSquare size={20} /> {isRtl ? 'احصل على عرض مجاني' : 'Get a Free Quote'}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
