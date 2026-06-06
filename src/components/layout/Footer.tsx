'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';
import { Instagram, Twitter, Linkedin, Facebook, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const locale = useLocale();
  const isRtl = locale === 'ar';

  const quickLinks = [
    { href: `/${locale}`, label: isRtl ? 'الرئيسية' : 'Home' },
    { href: `/${locale}/about`, label: isRtl ? 'من نحن' : 'About Us' },
    { href: `/${locale}/portfolio`, label: isRtl ? 'أعمالنا' : 'Portfolio' },
    { href: `/${locale}/clients`, label: isRtl ? 'عملاؤنا' : 'Clients' },
    { href: `/${locale}/blog`, label: isRtl ? 'المدونة' : 'Blog' },
    { href: `/${locale}/contact`, label: isRtl ? 'تواصل معنا' : 'Contact' },
  ];

  const serviceLinks = [
    { href: `/${locale}/exhibition-stand-design`, label: isRtl ? 'تصميم أجنحة المعارض' : 'Exhibition Stand Design' },
    { href: `/${locale}/exhibition-booth-fabrication`, label: isRtl ? 'تنفيذ الأجنحة' : 'Booth Fabrication' },
    { href: `/${locale}/custom-booths`, label: isRtl ? 'الأجنحة المخصصة' : 'Custom Booths' },
    { href: `/${locale}/modular-booths`, label: isRtl ? 'الأجنحة النمطية' : 'Modular Booths' },
    { href: `/${locale}/event-management`, label: isRtl ? 'إدارة الفعاليات' : 'Event Management' },
    { href: `/${locale}/conference-management`, label: isRtl ? 'إدارة المؤتمرات' : 'Conference Management' },
  ];

  const linkStyle = { color: '#555', textDecoration: 'none', fontSize: '0.875rem', lineHeight: 1.7, transition: 'color 0.2s' };

  return (
    <footer style={{ backgroundColor: '#111111', marginLeft: 44 }} dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Big "Let's Talk" section */}
      <div style={{ padding: '5rem 4rem 4rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
            <div>
              <p style={{ fontSize: '0.8rem', color: '#8DC63F', fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', marginBottom: '1rem' }}>
                {isRtl ? 'ابدأ مشروعك' : 'Start Your Project'}
              </p>
              <h2 style={{ fontSize: 'clamp(3rem, 8vw, 7rem)', fontWeight: 900, color: '#8DC63F', lineHeight: 0.9, margin: 0, letterSpacing: -2 }}>
                {isRtl ? 'لنتحدث' : "Let's Talk"}
              </h2>
            </div>
            <Link href={`/${locale}/contact`} style={{
              display: 'inline-block', padding: '1rem 2.5rem',
              border: '2px solid #8DC63F', color: '#8DC63F',
              borderRadius: '3rem', fontWeight: 700, fontSize: '1rem',
              textDecoration: 'none', transition: 'all 0.3s', whiteSpace: 'nowrap',
            }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#8DC63F'; e.currentTarget.style.color = '#111'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#8DC63F'; }}
            >
              {isRtl ? 'اطلب عرض سعر' : 'Request a Quote'}
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div style={{ padding: '3.5rem 4rem', maxWidth: 1200, margin: '0 auto', boxSizing: 'border-box' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1.5fr', gap: '3rem' }}>
          {/* Brand */}
          <div>
            <div style={{ marginBottom: '1.25rem' }}>
              <span style={{ fontSize: '1.5rem', fontWeight: 900, color: '#fff' }}>EXPO TIME</span>
            </div>
            <p style={{ color: '#555', fontSize: '0.875rem', lineHeight: 1.75, marginBottom: '1.5rem', maxWidth: 280 }}>
              {isRtl
                ? 'شريكك الاستراتيجي لتصميم وتنفيذ أجنحة المعارض الاحترافية في المملكة العربية السعودية.'
                : 'Your strategic partner for professional exhibition stand design and fabrication in Saudi Arabia.'}
            </p>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {[
                { Icon: Instagram, href: 'https://www.instagram.com/expotime_llc', label: 'Instagram' },
                { Icon: Twitter, href: 'https://x.com/ExpoTime_LLC', label: 'X' },
                { Icon: Linkedin, href: 'https://www.linkedin.com/company/expotimellc/', label: 'LinkedIn' },
                { Icon: Facebook, href: 'https://www.facebook.com/Expotimellc', label: 'Facebook' },
              ].map(({ Icon, href, label }) => (
                <a key={label} href={href} aria-label={label} target="_blank" rel="noopener noreferrer"
                  style={{ width: 36, height: 36, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#555', textDecoration: 'none', transition: 'all 0.25s' }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#8DC63F'; e.currentTarget.style.color = '#8DC63F'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = '#555'; }}
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 style={{ color: '#fff', fontWeight: 700, marginBottom: '1.25rem', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              {isRtl ? 'روابط سريعة' : 'Quick Links'}
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} style={linkStyle}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#8DC63F')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#555')}
                  >{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 style={{ color: '#fff', fontWeight: 700, marginBottom: '1.25rem', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              {isRtl ? 'خدماتنا' : 'Services'}
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {serviceLinks.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} style={linkStyle}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#8DC63F')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#555')}
                  >{s.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 style={{ color: '#fff', fontWeight: 700, marginBottom: '1.25rem', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              {isRtl ? 'تواصل معنا' : 'Contact Us'}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              <a href="tel:+966112393255" style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', textDecoration: 'none', color: '#555', fontSize: '0.875rem', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#8DC63F')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#555')}
              >
                <Phone size={14} style={{ color: '#8DC63F', flexShrink: 0 }} />
                +966 11 239 3255
              </a>
              <a href="mailto:info@expo-time.co" style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', textDecoration: 'none', color: '#555', fontSize: '0.875rem', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#8DC63F')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#555')}
              >
                <Mail size={14} style={{ color: '#8DC63F', flexShrink: 0 }} />
                info@expo-time.co
              </a>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem', color: '#555', fontSize: '0.8rem', lineHeight: 1.6 }}>
                <MapPin size={14} style={{ color: '#8DC63F', flexShrink: 0, marginTop: 2 }} />
                {isRtl ? 'شارع أنس بن مالك، حي الياسمين، الرياض' : 'Anas Ibn Malik St., Al Yasmin, Riyadh'}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '1.25rem 4rem' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
          <p style={{ color: '#333', fontSize: '0.8rem', margin: 0 }}>
            © {new Date().getFullYear()} {isRtl ? 'إكسبو تايم' : 'Expo Time'}. {isRtl ? 'جميع الحقوق محفوظة' : 'All rights reserved'}.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link href={`/${locale}/privacy`} style={{ color: '#333', fontSize: '0.8rem', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#8DC63F')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#333')}
            >{isRtl ? 'الخصوصية' : 'Privacy'}</Link>
            <Link href={`/${locale}/terms`} style={{ color: '#333', fontSize: '0.8rem', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#8DC63F')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#333')}
            >{isRtl ? 'الشروط' : 'Terms'}</Link>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          footer div[style*="grid-template-columns: 2fr 1fr 1fr 1.5fr"] {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 600px) {
          footer div[style*="grid-template-columns: 2fr 1fr 1fr 1.5fr"] {
            grid-template-columns: 1fr !important;
          }
          footer[style*="margin-left: 44px"], footer[style*="marginLeft: 44"] {
            margin-left: 0 !important;
          }
        }
      `}</style>
    </footer>
  );
}
