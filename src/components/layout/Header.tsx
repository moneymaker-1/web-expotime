'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';

export default function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const isRtl = locale === 'ar';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [pathname]);

  const altLocale = locale === 'ar' ? 'en' : 'ar';
  const altPath = pathname.replace(`/${locale}`, `/${altLocale}`);

  const navLinks = [
    { href: `/${locale}`, label: t('home') },
    { href: `/${locale}/about`, label: t('about') },
    { href: `/${locale}/portfolio`, label: t('portfolio') },
    { href: `/${locale}/clients`, label: t('clients') },
    { href: `/${locale}/blog`, label: t('blog') },
    { href: `/${locale}/contact`, label: t('contact') },
  ];

  const serviceLinks = [
    { href: `/${locale}/exhibition-stand-design`, label: isRtl ? 'تصميم أجنحة المعارض' : 'Exhibition Stand Design' },
    { href: `/${locale}/exhibition-booth-fabrication`, label: isRtl ? 'تنفيذ الأجنحة' : 'Booth Fabrication' },
    { href: `/${locale}/custom-booths`, label: isRtl ? 'الأجنحة المخصصة' : 'Custom Booths' },
    { href: `/${locale}/modular-booths`, label: isRtl ? 'الأجنحة النمطية' : 'Modular Booths' },
    { href: `/${locale}/event-management`, label: isRtl ? 'إدارة الفعاليات' : 'Event Management' },
    { href: `/${locale}/conference-management`, label: isRtl ? 'إدارة المؤتمرات' : 'Conference Management' },
    { href: `/${locale}/brand-activations`, label: isRtl ? 'تفعيل العلامات' : 'Brand Activations' },
    { href: `/${locale}/temporary-structures`, label: isRtl ? 'الهياكل المؤقتة' : 'Temporary Structures' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.3s ease',
        backgroundColor: scrolled ? 'rgba(10, 14, 26, 0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(201, 168, 76, 0.15)' : '1px solid transparent',
      }}
    >
      {/* Top bar */}
      <div style={{ backgroundColor: '#C9A84C', padding: '0.375rem 0' }}>
        <div className="container-custom" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '0.8rem', color: '#0A0E1A', fontWeight: 600 }}>
            {isRtl ? 'الشريك الاستراتيجي لأجنحة المعارض في السعودية' : "Saudi Arabia's Strategic Exhibition Partner"}
          </span>
          <a
            href="tel:+966112345678"
            style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.8rem', color: '#0A0E1A', fontWeight: 700, textDecoration: 'none' }}
          >
            <Phone size={12} />
            +966 11 234 5678
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="container-custom" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 1.5rem' }}>
        {/* Logo */}
        <Link href={`/${locale}`} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{
            width: 40, height: 40,
            background: 'linear-gradient(135deg, #C9A84C, #E8C876)',
            borderRadius: '0.5rem',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontWeight: 900, fontSize: '1.2rem', color: '#0A0E1A'
          }}>E</div>
          <div>
            <div style={{ fontWeight: 900, fontSize: '1.1rem', color: '#F9FAFB', lineHeight: 1 }}>
              {isRtl ? 'إكسبو تايم' : 'Expo Time'}
            </div>
            <div style={{ fontSize: '0.65rem', color: '#C9A84C', fontWeight: 600, letterSpacing: '0.05em' }}>
              {isRtl ? 'أجنحة المعارض' : 'EXHIBITION STANDS'}
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }} className="hidden-mobile">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                padding: '0.5rem 0.875rem',
                color: pathname === link.href ? '#C9A84C' : '#D1D5DB',
                fontWeight: 500,
                fontSize: '0.9rem',
                textDecoration: 'none',
                borderRadius: '0.375rem',
                transition: 'color 0.2s',
              }}
            >
              {link.label}
            </Link>
          ))}

          {/* Services dropdown */}
          <div style={{ position: 'relative' }} onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
            <button
              style={{
                display: 'flex', alignItems: 'center', gap: '0.25rem',
                padding: '0.5rem 0.875rem',
                color: '#D1D5DB', background: 'none', border: 'none',
                fontWeight: 500, fontSize: '0.9rem', cursor: 'pointer',
                borderRadius: '0.375rem',
              }}
            >
              {t('services')} <ChevronDown size={14} />
            </button>
            {servicesOpen && (
              <div style={{
                position: 'absolute',
                top: '100%',
                [isRtl ? 'right' : 'left']: 0,
                width: 260,
                backgroundColor: '#111827',
                border: '1px solid rgba(201, 168, 76, 0.2)',
                borderRadius: '0.75rem',
                padding: '0.5rem',
                boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                zIndex: 100,
              }}>
                {serviceLinks.map((sl) => (
                  <Link
                    key={sl.href}
                    href={sl.href}
                    style={{
                      display: 'block', padding: '0.6rem 0.875rem',
                      color: '#D1D5DB', textDecoration: 'none', fontSize: '0.875rem',
                      borderRadius: '0.5rem', transition: 'all 0.2s',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = '#C9A84C'; e.currentTarget.style.backgroundColor = 'rgba(201,168,76,0.08)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = '#D1D5DB'; e.currentTarget.style.backgroundColor = 'transparent'; }}
                  >
                    {sl.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Right side actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {/* Language switcher */}
          <Link
            href={altPath}
            style={{
              padding: '0.375rem 0.75rem',
              border: '1px solid rgba(201, 168, 76, 0.4)',
              borderRadius: '0.375rem',
              color: '#C9A84C', fontSize: '0.8rem', fontWeight: 700,
              textDecoration: 'none', transition: 'all 0.2s',
            }}
          >
            {altLocale === 'ar' ? 'عربي' : 'EN'}
          </Link>

          {/* CTA */}
          <Link
            href={`/${locale}/contact`}
            className="hidden-mobile"
            style={{
              padding: '0.6rem 1.25rem',
              background: 'linear-gradient(135deg, #C9A84C, #B8960A)',
              color: '#0A0E1A', fontWeight: 700, fontSize: '0.875rem',
              borderRadius: '0.5rem', textDecoration: 'none',
              transition: 'all 0.3s',
            }}
          >
            {t('getQuote')}
          </Link>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="show-mobile"
            style={{ background: 'none', border: 'none', color: '#F9FAFB', cursor: 'pointer', padding: '0.25rem' }}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div style={{
          backgroundColor: '#111827',
          borderTop: '1px solid rgba(201, 168, 76, 0.15)',
          padding: '1rem',
        }}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                display: 'block', padding: '0.75rem 1rem',
                color: pathname === link.href ? '#C9A84C' : '#D1D5DB',
                textDecoration: 'none', fontWeight: 500, fontSize: '1rem',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
              }}
            >
              {link.label}
            </Link>
          ))}
          <div style={{ padding: '0.75rem 1rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ color: '#9CA3AF', fontSize: '0.8rem', marginBottom: '0.5rem', fontWeight: 600 }}>
              {t('services')}
            </div>
            {serviceLinks.map((sl) => (
              <Link
                key={sl.href}
                href={sl.href}
                style={{
                  display: 'block', padding: '0.5rem 0',
                  color: '#D1D5DB', textDecoration: 'none', fontSize: '0.875rem',
                }}
              >
                {sl.label}
              </Link>
            ))}
          </div>
          <Link
            href={`/${locale}/contact`}
            style={{
              display: 'block', margin: '1rem 0 0',
              padding: '0.875rem', textAlign: 'center',
              background: 'linear-gradient(135deg, #C9A84C, #B8960A)',
              color: '#0A0E1A', fontWeight: 700, borderRadius: '0.5rem', textDecoration: 'none',
            }}
          >
            {t('getQuote')}
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
          .hidden-mobile { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
