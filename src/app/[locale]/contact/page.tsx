import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { generatePageMetadata } from '@/lib/seo';
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata(locale,
    'تواصل معنا | إكسبو تايم', 'Contact Us | Expo Time',
    'تواصل مع فريق إكسبو تايم واحصل على عرض سعر مجاني لجناح معرضك',
    'Contact the Expo Time team and get a free quote for your exhibition stand',
    '/contact'
  );
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  const isRtl = locale === 'ar';

  const contactInfo = [
    { Icon: Phone, labelAr: 'الهاتف', labelEn: 'Phone', value: '+966 11 239 3255', href: 'tel:+966112393255' },
    { Icon: Mail, labelAr: 'البريد الإلكتروني', labelEn: 'Email', value: 'info@expo-time.co', href: 'mailto:info@expo-time.co' },
    { Icon: MapPin, labelAr: 'العنوان', labelEn: 'Address', value: isRtl ? 'شارع أنس بن مالك، حي الياسمين، الرياض' : 'Anas Ibn Malik St., Al Yasmin District, Riyadh', href: '#' },
    { Icon: Clock, labelAr: 'ساعات العمل', labelEn: 'Working Hours', value: isRtl ? 'الأحد - الخميس: 8ص - 5م' : 'Sun - Thu: 8AM - 5PM', href: '#' },
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section style={{ background: '#fff', paddingTop: '8rem', paddingBottom: '4rem', borderBottom: '1px solid #f0f0f0' }}>
          <div className="container-custom" style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '0.8rem', fontWeight: 700, color: '#8DC63F', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.75rem' }}>
              {isRtl ? 'تواصل معنا' : 'Get In Touch'}
            </p>
            <h1 style={{ fontSize: 'clamp(2rem,4vw,3.5rem)', fontWeight: 900, color: '#1a1a1a', marginBottom: '1.25rem', lineHeight: 1.15 }}>
              {isRtl ? 'تواصل معنا' : 'Contact Us'}
            </h1>
            <p style={{ color: '#555', fontSize: '1.1rem', lineHeight: 1.7, maxWidth: 680, margin: '0 auto' }}>
              {isRtl ? 'فريقنا جاهز لمساعدتك — احصل على استشارة مجانية وعرض سعر خلال 24 ساعة' : 'Our team is ready to help — get a free consultation and quote within 24 hours'}
            </p>
          </div>
        </section>

        <section className="section-padding" style={{ backgroundColor: '#f8f8f8' }}>
          <div className="container-custom">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '4rem' }}>
              {/* Contact info */}
              <div style={{ order: isRtl ? 2 : 1 }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1a1a1a', marginBottom: '2rem' }}>
                  {isRtl ? 'معلومات التواصل' : 'Contact Information'}
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
                  {contactInfo.map(({ Icon, labelAr, labelEn, value, href }) => (
                    <a key={labelEn} href={href} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', textDecoration: 'none', padding: '1.25rem', background: '#fff', borderRadius: '0.75rem', border: '1px solid #eee' }}>
                      <div style={{ width: 44, height: 44, borderRadius: '0.625rem', background: 'rgba(141,198,63,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <Icon size={20} style={{ color: '#8DC63F' }} />
                      </div>
                      <div>
                        <div style={{ fontSize: '0.8rem', color: '#aaa', marginBottom: '0.25rem' }}>{isRtl ? labelAr : labelEn}</div>
                        <div style={{ color: '#1a1a1a', fontWeight: 600, fontSize: '0.95rem' }}>{value}</div>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Quick WhatsApp */}
                <a
                  href="https://wa.me/966112345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', gap: '0.75rem',
                    padding: '1rem 1.5rem',
                    background: '#25D366', color: '#fff',
                    borderRadius: '0.75rem', fontWeight: 700,
                    textDecoration: 'none', fontSize: '1rem',
                  }}
                >
                  <MessageSquare size={20} />
                  {isRtl ? 'تواصل عبر واتساب' : 'WhatsApp Us'}
                </a>
              </div>

              {/* Form */}
              <div style={{ order: isRtl ? 1 : 2 }}>
                <div style={{ background: '#fff', border: '1px solid #eee', borderRadius: '1rem', padding: '2.5rem' }}>
                  <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1a1a1a', marginBottom: '2rem' }}>
                    {isRtl ? 'أرسل رسالتك' : 'Send Your Message'}
                  </h2>
                  <form style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                      <div>
                        <label style={{ display: 'block', color: '#555', fontSize: '0.85rem', marginBottom: '0.5rem', fontWeight: 600 }}>
                          {isRtl ? 'الاسم الكامل' : 'Full Name'} *
                        </label>
                        <input type="text" placeholder={isRtl ? 'أدخل اسمك' : 'Enter your name'} style={{ width: '100%', padding: '0.75rem 1rem', background: '#fff', border: '1px solid #ddd', borderRadius: '0.5rem', color: '#1a1a1a', fontSize: '0.9rem', outline: 'none', boxSizing: 'border-box' }} />
                      </div>
                      <div>
                        <label style={{ display: 'block', color: '#555', fontSize: '0.85rem', marginBottom: '0.5rem', fontWeight: 600 }}>
                          {isRtl ? 'اسم الشركة' : 'Company Name'}
                        </label>
                        <input type="text" placeholder={isRtl ? 'شركتك' : 'Your company'} style={{ width: '100%', padding: '0.75rem 1rem', background: '#fff', border: '1px solid #ddd', borderRadius: '0.5rem', color: '#1a1a1a', fontSize: '0.9rem', outline: 'none', boxSizing: 'border-box' }} />
                      </div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                      <div>
                        <label style={{ display: 'block', color: '#555', fontSize: '0.85rem', marginBottom: '0.5rem', fontWeight: 600 }}>
                          {isRtl ? 'البريد الإلكتروني' : 'Email'} *
                        </label>
                        <input type="email" placeholder={isRtl ? 'بريدك@مثال.com' : 'you@example.com'} style={{ width: '100%', padding: '0.75rem 1rem', background: '#fff', border: '1px solid #ddd', borderRadius: '0.5rem', color: '#1a1a1a', fontSize: '0.9rem', outline: 'none', boxSizing: 'border-box' }} />
                      </div>
                      <div>
                        <label style={{ display: 'block', color: '#555', fontSize: '0.85rem', marginBottom: '0.5rem', fontWeight: 600 }}>
                          {isRtl ? 'رقم الهاتف' : 'Phone'} *
                        </label>
                        <input type="tel" placeholder="+966 5X XXX XXXX" style={{ width: '100%', padding: '0.75rem 1rem', background: '#fff', border: '1px solid #ddd', borderRadius: '0.5rem', color: '#1a1a1a', fontSize: '0.9rem', outline: 'none', boxSizing: 'border-box' }} />
                      </div>
                    </div>
                    <div>
                      <label style={{ display: 'block', color: '#555', fontSize: '0.85rem', marginBottom: '0.5rem', fontWeight: 600 }}>
                        {isRtl ? 'الخدمة المطلوبة' : 'Service Required'}
                      </label>
                      <select style={{ width: '100%', padding: '0.75rem 1rem', background: '#fff', border: '1px solid #ddd', borderRadius: '0.5rem', color: '#1a1a1a', fontSize: '0.9rem', outline: 'none', boxSizing: 'border-box' }}>
                        <option value="">{isRtl ? 'اختر الخدمة' : 'Select service'}</option>
                        <option>{isRtl ? 'تصميم جناح المعرض' : 'Exhibition Stand Design'}</option>
                        <option>{isRtl ? 'الأجنحة المخصصة' : 'Custom Booths'}</option>
                        <option>{isRtl ? 'الأجنحة النمطية' : 'Modular Booths'}</option>
                        <option>{isRtl ? 'إدارة الفعاليات' : 'Event Management'}</option>
                        <option>{isRtl ? 'إدارة المؤتمرات' : 'Conference Management'}</option>
                        <option>{isRtl ? 'تفعيل العلامات التجارية' : 'Brand Activations'}</option>
                        <option>{isRtl ? 'أخرى' : 'Other'}</option>
                      </select>
                    </div>
                    <div>
                      <label style={{ display: 'block', color: '#555', fontSize: '0.85rem', marginBottom: '0.5rem', fontWeight: 600 }}>
                        {isRtl ? 'رسالتك' : 'Your Message'}
                      </label>
                      <textarea rows={5} placeholder={isRtl ? 'أخبرنا عن مشروعك...' : 'Tell us about your project...'} style={{ width: '100%', padding: '0.75rem 1rem', background: '#fff', border: '1px solid #ddd', borderRadius: '0.5rem', color: '#1a1a1a', fontSize: '0.9rem', outline: 'none', resize: 'vertical', boxSizing: 'border-box' }} />
                    </div>
                    <button type="submit" style={{
                      padding: '1rem 2rem',
                      background: '#8DC63F',
                      color: '#fff', fontWeight: 800, fontSize: '1rem',
                      borderRadius: '0.75rem', border: 'none', cursor: 'pointer',
                    }}>
                      {isRtl ? 'إرسال الطلب' : 'Send Request'}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <style>{`@media(max-width:768px){.container-custom>div{grid-template-columns:1fr!important}}`}</style>
        </section>
      </main>
      <Footer />
    </>
  );
}
