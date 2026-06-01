'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { Phone, Mail, MapPin, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
  const t = useTranslations('footer');
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

  return (
    <footer style={{ backgroundColor: '#060A14', borderTop: '1px solid rgba(201, 168, 76, 0.15)' }}>
      {/* Main footer */}
      <div className="container-custom" style={{ padding: '4rem 1.5rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '2.5rem',
        }}>
          {/* Brand column */}
          <div style={{ gridColumn: 'span 1' }}>
            <Link href={`/${locale}`} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div style={{
                width: 44, height: 44,
                background: 'linear-gradient(135deg, #C9A84C, #E8C876)',
                borderRadius: '0.625rem',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: 900, fontSize: '1.3rem', color: '#0A0E1A'
              }}>E</div>
              <div>
                <div style={{ fontWeight: 900, fontSize: '1.1rem', color: '#F9FAFB' }}>
                  {isRtl ? 'إكسبو تايم' : 'Expo Time'}
                </div>
                <div style={{ fontSize: '0.65rem', color: '#C9A84C', fontWeight: 600 }}>
                  {isRtl ? 'أجنحة المعارض' : 'EXHIBITION STANDS'}
                </div>
              </div>
            </Link>
            <p style={{ color: '#9CA3AF', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              {t('description')}
            </p>
            {/* Social */}
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {[
                { Icon: Instagram, href: 'https://instagram.com/expotimeksa', label: 'Instagram' },
                { Icon: Twitter, href: 'https://twitter.com/expotime', label: 'Twitter' },
                { Icon: Linkedin, href: 'https://linkedin.com/company/expo-time', label: 'LinkedIn' },
                { Icon: Youtube, href: 'https://youtube.com/@expotime', label: 'YouTube' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: 36, height: 36,
                    borderRadius: '0.5rem',
                    border: '1px solid rgba(201, 168, 76, 0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#9CA3AF', textDecoration: 'none', transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#C9A84C'; e.currentTarget.style.color = '#C9A84C'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(201, 168, 76, 0.2)'; e.currentTarget.style.color = '#9CA3AF'; }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 style={{ color: '#C9A84C', fontWeight: 700, marginBottom: '1rem', fontSize: '0.95rem' }}>
              {t('quickLinks')}
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} style={{ color: '#9CA3AF', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#C9A84C')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#9CA3AF')}
                  >{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 style={{ color: '#C9A84C', fontWeight: 700, marginBottom: '1rem', fontSize: '0.95rem' }}>
              {t('services')}
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} style={{ color: '#9CA3AF', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#C9A84C')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#9CA3AF')}
                  >{s.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Cities */}
          <div>
            <h3 style={{ color: '#C9A84C', fontWeight: 700, marginBottom: '1rem', fontSize: '0.95rem' }}>
              {t('cities')}
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {cities.map((c) => (
                <li key={c.href}>
                  <Link href={c.href} style={{ color: '#9CA3AF', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#C9A84C')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#9CA3AF')}
                  >{c.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 style={{ color: '#C9A84C', fontWeight: 700, marginBottom: '1rem', fontSize: '0.95rem' }}>
              {t('contact')}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              <a href="tel:+966112345678" style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem', color: '#9CA3AF', textDecoration: 'none', fontSize: '0.875rem' }}>
                <Phone size={15} style={{ color: '#C9A84C', marginTop: '2px', flexShrink: 0 }} />
                +966 11 234 5678
              </a>
              <a href="mailto:info@expo-time.co" style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem', color: '#9CA3AF', textDecoration: 'none', fontSize: '0.875rem' }}>
                <Mail size={15} style={{ color: '#C9A84C', marginTop: '2px', flexShrink: 0 }} />
                info@expo-time.co
              </a>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem', color: '#9CA3AF', fontSize: '0.875rem' }}>
                <MapPin size={15} style={{ color: '#C9A84C', marginTop: '2px', flexShrink: 0 }} />
                {isRtl ? 'طريق الملك فهد، الرياض، المملكة العربية السعودية' : 'King Fahd Road, Riyadh, Saudi Arabia'}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '1.25rem' }}>
        <div className="container-custom" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
          <p style={{ color: '#6B7280', fontSize: '0.8rem', margin: 0 }}>
            © {new Date().getFullYear()} {isRtl ? 'إكسبو تايم' : 'Expo Time'}. {t('rights')}.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link href={`/${locale}/privacy`} style={{ color: '#6B7280', fontSize: '0.8rem', textDecoration: 'none' }}>{t('privacy')}</Link>
            <Link href={`/${locale}/terms`} style={{ color: '#6B7280', fontSize: '0.8rem', textDecoration: 'none' }}>{t('terms')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
