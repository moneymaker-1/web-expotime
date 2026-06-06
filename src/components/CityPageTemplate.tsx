import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { MapPin, Building, Phone, ArrowRight, CheckCircle } from 'lucide-react';
import { services } from '@/lib/data';

interface CityPageProps {
  locale: string;
  cityAr: string;
  cityEn: string;
  descAr: string;
  descEn: string;
  venues: string[];
  venuesEn: string[];
  image: string;
  exhibitionsAr: string[];
  exhibitionsEn: string[];
  faqsAr: { q: string; a: string }[];
  faqsEn: { q: string; a: string }[];
}

export default function CityPageTemplate({
  locale, cityAr, cityEn, descAr, descEn,
  venues, venuesEn, image, exhibitionsAr, exhibitionsEn,
  faqsAr, faqsEn,
}: CityPageProps) {
  const isRtl = locale === 'ar';
  const city = isRtl ? cityAr : cityEn;
  const desc = isRtl ? descAr : descEn;
  const venueList = isRtl ? venues : venuesEn;
  const exhibitions = isRtl ? exhibitionsAr : exhibitionsEn;
  const faqs = isRtl ? faqsAr : faqsEn;

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: isRtl ? `إكسبو تايم - ${cityAr}` : `Expo Time - ${cityEn}`,
    description: isRtl ? descAr : descEn,
    telephone: '+966-11-239-3255',
    url: 'https://expo-time.co',
    areaServed: { '@type': 'City', name: isRtl ? cityAr : cityEn, containedIn: { '@type': 'Country', name: 'Saudi Arabia' } },
    address: { '@type': 'PostalAddress', addressLocality: cityEn, addressCountry: 'SA' },
    priceRange: '$$',
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
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <MapPin size={16} style={{ color: '#8DC63F' }} />
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#8DC63F', textTransform: 'uppercase', letterSpacing: '0.15em' }}>{city}</span>
                </div>
                <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', fontWeight: 900, color: '#1a1a1a', lineHeight: 1.15, marginBottom: '1.25rem' }}>
                  {isRtl ? `تصميم أجنحة المعارض في ${cityAr}` : `Exhibition Stand Design in ${cityEn}`}
                </h1>
                <p style={{ color: '#555', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '2rem' }}>{desc}</p>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <Link href={`/${locale}/contact`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.875rem 2rem', background: '#8DC63F', color: '#fff', fontWeight: 800, borderRadius: '0.75rem', textDecoration: 'none' }}>
                    {isRtl ? 'احصل على عرض سعر' : 'Get a Quote'} <ArrowRight size={16} />
                  </Link>
                  <a href="tel:+966112393255" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.875rem 2rem', border: '2px solid #8DC63F', color: '#8DC63F', fontWeight: 700, borderRadius: '0.75rem', textDecoration: 'none' }}>
                    <Phone size={16} /> +966 11 239 3255
                  </a>
                </div>
              </div>
              <div style={{ order: isRtl ? 1 : 2 }}>
                <div style={{ borderRadius: '1.25rem', overflow: 'hidden', border: '1px solid #eee', aspectRatio: '4/3', position: 'relative' }}>
                  <Image src={image} alt={`Exhibition stands in ${cityEn}`} fill style={{ objectFit: 'cover' }} />
                </div>
              </div>
            </div>
          </div>
          <style>{`@media(max-width:768px){section .container-custom>div{grid-template-columns:1fr!important}}`}</style>
        </section>

        {/* Services in city */}
        <section className="section-padding" style={{ backgroundColor: '#f8f8f8' }}>
          <div className="container-custom">
            <h2 style={{ fontSize: 'clamp(1.5rem,3vw,2.25rem)', fontWeight: 800, color: '#1a1a1a', textAlign: 'center', marginBottom: '3rem' }}>
              {isRtl ? `خدماتنا في ${cityAr}` : `Our Services in ${cityEn}`}
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
              {services.slice(0, 6).map((s) => (
                <Link key={s.slug} href={`/${locale}/${s.slug}`} style={{ textDecoration: 'none' }}>
                  <div style={{ background: '#fff', border: '1px solid #eee', borderRadius: '1rem', padding: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start', transition: 'border-color 0.2s' }}>
                    <span style={{ fontSize: '1.5rem' }}>{s.icon}</span>
                    <div>
                      <h3 style={{ fontWeight: 700, color: '#1a1a1a', fontSize: '0.95rem', marginBottom: '0.375rem' }}>
                        {isRtl ? s.titleAr : s.titleEn}
                      </h3>
                      <p style={{ color: '#555', fontSize: '0.8rem', lineHeight: 1.5 }}>
                        {isRtl ? `في ${cityAr}` : `in ${cityEn}`}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Exhibition venues */}
        <section className="section-padding" style={{ backgroundColor: '#fff' }}>
          <div className="container-custom">
            <h2 style={{ fontSize: 'clamp(1.5rem,3vw,2.25rem)', fontWeight: 800, color: '#1a1a1a', textAlign: 'center', marginBottom: '3rem' }}>
              {isRtl ? `أبرز مراكز المعارض في ${cityAr}` : `Key Exhibition Venues in ${cityEn}`}
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.25rem' }}>
              {venueList.map((v, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.5rem', background: '#f8f8f8', border: '1px solid #eee', borderRadius: '0.75rem' }}>
                  <Building size={22} style={{ color: '#8DC63F', flexShrink: 0 }} />
                  <span style={{ color: '#1a1a1a', fontWeight: 600 }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key exhibitions */}
        {exhibitions.length > 0 && (
          <section className="section-padding" style={{ backgroundColor: '#f8f8f8' }}>
            <div className="container-custom">
              <h2 style={{ fontSize: 'clamp(1.5rem,3vw,2.25rem)', fontWeight: 800, color: '#1a1a1a', textAlign: 'center', marginBottom: '3rem' }}>
                {isRtl ? `أبرز المعارض في ${cityAr}` : `Top Exhibitions in ${cityEn}`}
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
                {exhibitions.map((ex, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', padding: '1.25rem', background: '#fff', borderRadius: '0.75rem', border: '1px solid #eee' }}>
                    <CheckCircle size={16} style={{ color: '#8DC63F', flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ color: '#555', fontSize: '0.9rem' }}>{ex}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQ */}
        <section className="section-padding" style={{ backgroundColor: '#fff' }}>
          <div className="container-custom" style={{ maxWidth: '800px' }}>
            <h2 style={{ fontSize: 'clamp(1.5rem,3vw,2.25rem)', fontWeight: 800, color: '#1a1a1a', textAlign: 'center', marginBottom: '2.5rem' }}>
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

        {/* CTA */}
        <section style={{ padding: '4rem 0', backgroundColor: '#111111' }}>
          <div className="container-custom" style={{ textAlign: 'center' }}>
            <div style={{ background: 'rgba(141,198,63,0.08)', border: '1px solid rgba(141,198,63,0.25)', borderRadius: '1.5rem', padding: '3.5rem 2rem' }}>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 900, color: '#fff', marginBottom: '1rem' }}>
                {isRtl ? `احصل على جناح معرض استثنائي في ${cityAr}` : `Get an Extraordinary Exhibition Stand in ${cityEn}`}
              </h2>
              <p style={{ color: '#aaa', marginBottom: '2rem' }}>
                {isRtl ? 'فريقنا جاهز لخدمتك — تواصل معنا الآن' : 'Our team is ready to serve you — contact us now'}
              </p>
              <Link href={`/${locale}/contact`} style={{ display: 'inline-block', padding: '1rem 2.5rem', background: '#8DC63F', color: '#fff', fontWeight: 800, borderRadius: '0.75rem', textDecoration: 'none' }}>
                {isRtl ? 'احصل على عرض سعر مجاني' : 'Get a Free Quote'}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
