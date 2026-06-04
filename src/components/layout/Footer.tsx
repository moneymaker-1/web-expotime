'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';
import { Phone, Mail, MapPin, Instagram, Twitter, Linkedin, Facebook, MessageCircle, Smartphone } from 'lucide-react';
import Logo from '@/components/ui/Logo';

export default function Footer() {
  const locale = useLocale();
  const isRtl = locale === 'ar';

  const services = [
    { href: `/${locale}/exhibition-stand-design`, label: isRtl ? 'تصميم أجنحة المعارض' : 'Exhibition Stand Design' },
    { href: `/${locale}/exhibition-booth-fabrication`, label: isRtl ? 'تنفيذ الأجنحة' : 'Booth Fabrication' },
    { href: `/${locale}/custom-booths`, label: isRtl ? 'الأجنحة المخصصة' : 'Custom Booths' },
    { href: `/${locale}/modular-booths`, label: isRtl ? 'الأجنحة النمطية' : 'Modular Booths' },
    { href: `/${locale}/event-management`, label: isRtl ? 'إدارة الفعاليات' : 'Event Management' },
    { href: `/${locale}/conference-management`, label: isRtl ? 'إدارة المؤتمرات' : 'Conference Management' },
    { href: `/${locale}/brand-activations`, label: isRtl ? 'تفعيل العلامات التجارية' : 'Brand Activations' },
  ];

  const quickLinks = [
    { href: `/${locale}`, label: isRtl ? 'الرئيسية' : 'Home' },
    { href: `/${locale}/about`, label: isRtl ? 'من نحن' : 'About Us' },
    { href: `/${locale}/portfolio`, label: isRtl ? 'أعمالنا' : 'Portfolio' },
    { href: `/${locale}/clients`, label: isRtl ? 'عملاؤنا' : 'Clients' },
    { href: `/${locale}/blog`, label: isRtl ? 'المدونة' : 'Blog' },
    { href: `/${locale}/careers`, label: isRtl ? 'الوظائف' : 'Careers' },
    { href: `/${locale}/contact`, label: isRtl ? 'تواصل معنا' : 'Contact' },
  ];

  const cities = [
    { href: `/${locale}/riyadh`, label: isRtl ? 'الرياض' : 'Riyadh' },
    { href: `/${locale}/jeddah`, label: isRtl ? 'جدة' : 'Jeddah' },
    { href: `/${locale}/dammam`, label: isRtl ? 'الدمام' : 'Dammam' },
    { href: `/${locale}/khobar`, label: isRtl ? 'الخبر' : 'Khobar' },
    { href: `/${locale}/makkah`, label: isRtl ? 'مكة المكرمة' : 'Makkah' },
    { href: `/${locale}/madinah`, label: isRtl ? 'المدينة المنورة' : 'Madinah' },
    { href: `/${locale}/neom`, label: 'NEOM' },
  ];

  const linkStyle = { color: '#64748b', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.2s', lineHeight: 1.6 };

  return (
    <footer style={{ backgroundColor: '#0a1520', borderTop: '1px solid rgba(243,199,22,0.1)' }}>
      {/* Brand divider */}
      <div style={{ height: 3, background: 'linear-gradient(90deg, transparent, #f3c716 30%, #62b1b6 70%, transparent)' }} />

      {/* Main footer */}
      <div className="container-custom" style={{ padding: '4rem 1.5rem 3rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '2.5rem' }}>

          {/* Brand */}
          <div>
            <div style={{ marginBottom: '1.25rem' }}>
              <Logo locale={locale} size="sm" />
            </div>
            <p style={{ color: '#64748b', fontSize: '0.875rem', lineHeight: 1.75, marginBottom: '1.5rem' }}>
              {isRtl
                ? 'شريكك الاستراتيجي لتصميم وتنفيذ أجنحة المعارض الاحترافية في المملكة العربية السعودية منذ 2015.'
                : 'Your strategic partner for designing and executing professional exhibition stands in Saudi Arabia since 2015.'}
            </p>
            {/* Social icons */}
            <div style={{ display: 'flex', gap: '0.625rem', flexWrap: 'wrap' }}>
              {[
                { Icon: Instagram, href: 'https://www.instagram.com/expotime_llc', label: 'Instagram', color: '#E1306C' },
                { Icon: Twitter, href: 'https://x.com/ExpoTime_LLC', label: 'X', color: '#1DA1F2' },
                { Icon: Linkedin, href: 'https://www.linkedin.com/company/expotimellc/', label: 'LinkedIn', color: '#0A66C2' },
                { Icon: Facebook, href: 'https://www.facebook.com/Expotimellc', label: 'Facebook', color: '#1877F2' },
              ].map(({ Icon, href, label, color }) => (
                <a key={label} href={href} aria-label={label} target="_blank" rel="noopener noreferrer"
                  style={{ width: 36, height: 36, borderRadius: '0.5rem', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b', textDecoration: 'none', transition: 'all 0.25s' }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = color; e.currentTarget.style.color = color; e.currentTarget.style.background = `${color}15`; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = '#64748b'; e.currentTarget.style.background = 'transparent'; }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 style={{ color: '#f3c716', fontWeight: 700, marginBottom: '1.25rem', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              {isRtl ? 'روابط سريعة' : 'Quick Links'}
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} style={linkStyle}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#f3c716')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#64748b')}
                  >{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 style={{ color: '#f3c716', fontWeight: 700, marginBottom: '1.25rem', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              {isRtl ? 'خدماتنا' : 'Services'}
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} style={linkStyle}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#62b1b6')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#64748b')}
                  >{s.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Cities */}
          <div>
            <h3 style={{ color: '#f3c716', fontWeight: 700, marginBottom: '1.25rem', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              {isRtl ? 'نخدم في' : 'We Serve In'}
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {cities.map((c) => (
                <li key={c.href}>
                  <Link href={c.href} style={linkStyle}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#62b1b6')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#64748b')}
                  >{c.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 style={{ color: '#f3c716', fontWeight: 700, marginBottom: '1.25rem', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              {isRtl ? 'تواصل معنا' : 'Contact Us'}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <a href="tel:+966551016181" style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', textDecoration: 'none' }}>
                <Smartphone size={16} style={{ color: '#f3c716', marginTop: 2, flexShrink: 0 }} />
                <div>
                  <div style={{ color: '#94a3b8', fontSize: '0.7rem', marginBottom: '2px' }}>{isRtl ? 'الجوال' : 'Mobile'}</div>
                  <div style={{ color: '#cbd5e1', fontSize: '0.875rem', fontWeight: 600, direction: 'ltr' }}>+966 55 101 6181</div>
                </div>
              </a>
              <a href="tel:+966112393255" style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', textDecoration: 'none' }}>
                <Phone size={16} style={{ color: '#f3c716', marginTop: 2, flexShrink: 0 }} />
                <div>
                  <div style={{ color: '#94a3b8', fontSize: '0.7rem', marginBottom: '2px' }}>{isRtl ? 'الهاتف' : 'Phone'}</div>
                  <div style={{ color: '#cbd5e1', fontSize: '0.875rem', fontWeight: 600, direction: 'ltr' }}>+966 11 239 3255</div>
                </div>
              </a>
              <a href="https://wa.me/966112393255" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', textDecoration: 'none' }}>
                <MessageCircle size={16} style={{ color: '#25d366', marginTop: 2, flexShrink: 0 }} />
                <div>
                  <div style={{ color: '#94a3b8', fontSize: '0.7rem', marginBottom: '2px' }}>WhatsApp</div>
                  <div style={{ color: '#25d366', fontSize: '0.875rem', fontWeight: 600, direction: 'ltr' }}>+966 11 239 3255</div>
                </div>
              </a>
              <a href="mailto:info@expo-time.co" style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', textDecoration: 'none' }}>
                <Mail size={16} style={{ color: '#62b1b6', marginTop: 2, flexShrink: 0 }} />
                <div style={{ color: '#cbd5e1', fontSize: '0.875rem' }}>info@expo-time.co</div>
              </a>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <MapPin size={16} style={{ color: '#62b1b6', marginTop: 2, flexShrink: 0 }} />
                <div style={{ color: '#64748b', fontSize: '0.8rem', lineHeight: 1.6 }}>
                  {isRtl ? 'شارع أنس بن مالك، حي الياسمين، الرياض، المملكة العربية السعودية' : 'Anas Ibn Malik St., Al Yasmin District, Riyadh, Saudi Arabia'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.04)', padding: '1.25rem' }}>
        <div className="container-custom" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
          <p style={{ color: '#374151', fontSize: '0.8rem', margin: 0 }}>
            © {new Date().getFullYear()} {isRtl ? 'إكسبو تايم' : 'Expo Time'}. {isRtl ? 'جميع الحقوق محفوظة' : 'All rights reserved'}.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link href={`/${locale}/privacy`} style={{ color: '#374151', fontSize: '0.8rem', textDecoration: 'none' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#f3c716'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#374151'}
            >{isRtl ? 'الخصوصية' : 'Privacy'}</Link>
            <Link href={`/${locale}/terms`} style={{ color: '#374151', fontSize: '0.8rem', textDecoration: 'none' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#f3c716'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#374151'}
            >{isRtl ? 'الشروط' : 'Terms'}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
