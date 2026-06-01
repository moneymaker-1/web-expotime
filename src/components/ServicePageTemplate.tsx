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
      telephone: '+966-11-234-5678',
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
        <section style={{ background: 'linear-gradient(135deg, #060A14 0%, #0A0E1A 100%)', paddingTop: '8rem', paddingBottom: '5rem', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px),linear-gradient(90deg,rgba(201,168,76,0.04) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
          <div className="container-custom" style={{ position: 'relative' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
              <div style={{ order: isRtl ? 2 : 1 }}>
                <div className="badge" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>
                  {isRtl ? 'خدماتنا' : 'Our Services'}
                </div>
                <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', fontWeight: 900, color: '#F9FAFB', lineHeight: 1.15, marginBottom: '1.25rem' }}>{title}</h1>
                <p style={{ color: '#9CA3AF', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2rem' }}>{subtitle}</p>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <Link href={`/${locale}/contact`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.875rem 2rem', background: 'linear-gradient(135deg, #C9A84C, #B8960A)', color: '#0A0E1A', fontWeight: 800, borderRadius: '0.625rem', textDecoration: 'none' }}>
                    {isRtl ? 'احصل على عرض سعر' : 'Get a Quote'} <ArrowRight size={18} />
                  </Link>
                  <a href="tel:+966112345678" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.875rem 2rem', border: '1px solid rgba(201,168,76,0.4)', color: '#C9A84C', fontWeight: 700, borderRadius: '0.625rem', textDecoration: 'none' }}>
                    <Phone size={18} /> +966 11 234 5678
                  </a>
                </div>
              </div>
              <div style={{ order: isRtl ? 1 : 2 }}>
                <div style={{ borderRadius: '1.25rem', overflow: 'hidden', border: '1px solid rgba(201,168,76,0.2)', aspectRatio: '4/3', position: 'relative' }}>
                  <Image src={image} alt={title} fill style={{ objectFit: 'cover' }} />
                </div>
              </div>
            </div>
          </div>
          <style>{`@media(max-width:768px){section .container-custom>div{grid-template-columns:1fr!important}}`}</style>
        </section>

        {/* Description */}
        <section className="section-padding" style={{ backgroundColor: '#0A0E1A' }}>
          <div className="container-custom" style={{ maxWidth: '900px' }}>
            <p style={{ color: '#D1D5DB', fontSize: '1.1rem', lineHeight: 1.9, marginBottom: '3rem' }}>{desc}</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
              {features.map((f, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', padding: '1.25rem', background: '#111827', borderRadius: '0.75rem', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <CheckCircle size={18} style={{ color: '#C9A84C', flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ color: '#D1D5DB', fontSize: '0.9rem', lineHeight: 1.6 }}>{f}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        {faqs.length > 0 && (
          <section className="section-padding" style={{ backgroundColor: '#060A14' }}>
            <div className="container-custom" style={{ maxWidth: '800px' }}>
              <h2 className="section-title" style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
                {isRtl ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {faqs.map((faq, i) => (
                  <div key={i} style={{ background: '#111827', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '0.75rem', padding: '1.5rem' }}>
                    <h3 style={{ fontWeight: 700, color: '#F9FAFB', marginBottom: '0.75rem' }}>{faq.q}</h3>
                    <p style={{ color: '#9CA3AF', lineHeight: 1.7, fontSize: '0.9rem' }}>{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section style={{ padding: '5rem 0', backgroundColor: '#0A0E1A' }}>
          <div className="container-custom" style={{ textAlign: 'center' }}>
            <div style={{ background: 'rgba(201,168,76,0.06)', border: '1px solid rgba(201,168,76,0.2)', borderRadius: '1.5rem', padding: '4rem 2rem' }}>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 900, color: '#F9FAFB', marginBottom: '1rem' }}>
                {isRtl ? `هل تحتاج ${titleAr}؟` : `Need ${titleEn}?`}
              </h2>
              <p style={{ color: '#9CA3AF', marginBottom: '2.5rem', fontSize: '1.05rem' }}>
                {isRtl ? 'تواصل مع فريقنا المتخصص الآن واحصل على استشارة مجانية' : 'Contact our specialized team now for a free consultation'}
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href={`/${locale}/contact`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '1rem 2.5rem', background: 'linear-gradient(135deg, #C9A84C, #B8960A)', color: '#0A0E1A', fontWeight: 800, fontSize: '1rem', borderRadius: '0.625rem', textDecoration: 'none' }}>
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
