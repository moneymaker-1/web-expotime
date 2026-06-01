'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import { Menu, X, Phone, ChevronDown, MessageCircle } from 'lucide-react';

export default function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const isRtl = locale === 'ar';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setIsOpen(false); setServicesOpen(false); }, [pathname]);

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

  const isActive = (href: string) => pathname === href;

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)',
      backgroundColor: scrolled ? 'rgba(15,30,45,0.97)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(243,199,22,0.12)' : '1px solid transparent',
      boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.3)' : 'none',
    }}>
      {/* Top bar */}
      <div style={{ background: 'linear-gradient(135deg, #293d50, #1a2b3c)', padding: '0.4rem 0', borderBottom: '1px solid rgba(243,199,22,0.12)' }}>
        <div className="container-custom" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '0.78rem', color: '#94a3b8', fontWeight: 500 }}>
            {isRtl ? '🏆 الشريك الاستراتيجي لأجنحة المعارض في السعودية' : "🏆 Saudi Arabia's Strategic Exhibition Partner"}
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <a href="tel:+966112393255" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.78rem', color: '#f3c716', fontWeight: 600, textDecoration: 'none' }}>
              <Phone size={11} /> +966 11 239 3255
            </a>
            <a href="https://wa.me/966112393255" target="_blank" rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.78rem', color: '#25d366', fontWeight: 600, textDecoration: 'none' }}>
              <MessageCircle size={11} /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="container-custom" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.875rem 1.5rem' }}>
        <Link href={`/${locale}`} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
          <div style={{ width: 42, height: 42, background: 'linear-gradient(135deg, #f3c716, #d4a800)', borderRadius: '0.625rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: '1.3rem', color: '#0f1e2d', boxShadow: '0 4px 15px rgba(243,199,22,0.25)', fontFamily: "'Poppins', sans-serif" }}>E</div>
          <div>
            <div style={{ fontWeight: 800, fontSize: '1.1rem', color: '#F9FAFB', lineHeight: 1, letterSpacing: '-0.01em' }}>{isRtl ? 'إكسبو تايم' : 'Expo Time'}</div>
            <div style={{ fontSize: '0.6rem', color: '#62b1b6', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '2px' }}>{isRtl ? 'منظم الفعاليات' : 'Event Organizer'}</div>
          </div>
        </Link>

        <nav style={{ display: 'flex', alignItems: 'center', gap: '0.125rem' }} className="hidden-mobile">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} style={{
              padding: '0.5rem 0.875rem', color: isActive(link.href) ? '#f3c716' : '#cbd5e1',
              fontWeight: isActive(link.href) ? 700 : 500, fontSize: '0.875rem', textDecoration: 'none',
              borderRadius: '0.5rem', transition: 'color 0.2s', position: 'relative',
            }}
              onMouseEnter={(e) => { if (!isActive(link.href)) e.currentTarget.style.color = '#f3c716'; }}
              onMouseLeave={(e) => { if (!isActive(link.href)) e.currentTarget.style.color = '#cbd5e1'; }}
            >
              {link.label}
              {isActive(link.href) && <span style={{ position: 'absolute', bottom: 2, left: '50%', transform: 'translateX(-50%)', width: 4, height: 4, borderRadius: '50%', background: '#f3c716' }} />}
            </Link>
          ))}

          <div style={{ position: 'relative' }} onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
            <button style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', padding: '0.5rem 0.875rem', color: '#cbd5e1', background: 'none', border: 'none', fontWeight: 500, fontSize: '0.875rem', cursor: 'pointer', borderRadius: '0.5rem', transition: 'color 0.2s', fontFamily: 'inherit' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#f3c716'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#cbd5e1'}
            >
              {t('services')} <ChevronDown size={13} style={{ transition: 'transform 0.2s', transform: servicesOpen ? 'rotate(180deg)' : 'none' }} />
            </button>
            {servicesOpen && (
              <div style={{ position: 'absolute', top: 'calc(100% + 8px)', [isRtl ? 'right' : 'left']: 0, width: 280, background: 'linear-gradient(180deg, #162534, #0f1e2d)', border: '1px solid rgba(243,199,22,0.15)', borderRadius: '1rem', padding: '0.625rem', boxShadow: '0 25px 50px rgba(0,0,0,0.5)', zIndex: 100 }}>
                {serviceLinks.map((sl) => (
                  <Link key={sl.href} href={sl.href} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.625rem 0.875rem', color: '#94a3b8', textDecoration: 'none', fontSize: '0.85rem', borderRadius: '0.625rem', transition: 'all 0.2s' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = '#f3c716'; e.currentTarget.style.backgroundColor = 'rgba(243,199,22,0.07)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = '#94a3b8'; e.currentTarget.style.backgroundColor = 'transparent'; }}
                  >
                    <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#62b1b6', flexShrink: 0 }} />
                    {sl.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
          <Link href={altPath} style={{ padding: '0.375rem 0.75rem', border: '1.5px solid rgba(98,177,182,0.35)', borderRadius: '0.5rem', color: '#62b1b6', fontSize: '0.8rem', fontWeight: 700, textDecoration: 'none', transition: 'all 0.2s' }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(98,177,182,0.1)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
          >
            {altLocale === 'ar' ? 'عربي' : 'EN'}
          </Link>
          <Link href={`/${locale}/contact`} className="hidden-mobile" style={{ padding: '0.6rem 1.25rem', background: 'linear-gradient(135deg, #f3c716, #d4a800)', color: '#0f1e2d', fontWeight: 700, fontSize: '0.85rem', borderRadius: '0.625rem', textDecoration: 'none', transition: 'all 0.3s', whiteSpace: 'nowrap' }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 25px rgba(243,199,22,0.35)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
          >
            {t('getQuote')}
          </Link>
          <button onClick={() => setIsOpen(!isOpen)} className="show-mobile" style={{ background: 'none', border: 'none', color: '#F9FAFB', cursor: 'pointer', padding: '0.375rem' }} aria-label="Toggle menu">
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div style={{ background: 'linear-gradient(180deg, #162534, #0f1e2d)', borderTop: '1px solid rgba(243,199,22,0.1)', padding: '1rem', maxHeight: '80vh', overflowY: 'auto' }}>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} style={{ display: 'block', padding: '0.8rem 1rem', color: isActive(link.href) ? '#f3c716' : '#cbd5e1', textDecoration: 'none', fontWeight: isActive(link.href) ? 700 : 500, fontSize: '0.95rem', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
              {link.label}
            </Link>
          ))}
          <div style={{ padding: '0.875rem 1rem', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
            <div style={{ color: '#62b1b6', fontSize: '0.7rem', marginBottom: '0.625rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{t('services')}</div>
            {serviceLinks.map((sl) => (
              <Link key={sl.href} href={sl.href} style={{ display: 'block', padding: '0.45rem 0', color: '#94a3b8', textDecoration: 'none', fontSize: '0.875rem' }}>{sl.label}</Link>
            ))}
          </div>
          <div style={{ display: 'flex', gap: '0.75rem', padding: '1rem 0 0' }}>
            <Link href={`/${locale}/contact`} style={{ flex: 1, padding: '0.875rem', textAlign: 'center', background: 'linear-gradient(135deg, #f3c716, #d4a800)', color: '#0f1e2d', fontWeight: 700, borderRadius: '0.625rem', textDecoration: 'none', fontSize: '0.875rem' }}>
              {t('getQuote')}
            </Link>
            <a href="https://wa.me/966112393255" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.375rem', flex: 1, padding: '0.875rem', background: 'linear-gradient(135deg, #25d366, #128c7e)', color: '#fff', fontWeight: 700, borderRadius: '0.625rem', textDecoration: 'none', fontSize: '0.875rem' }}>
              <MessageCircle size={16} /> واتساب
            </a>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) { .hidden-mobile { display: none !important; } .show-mobile { display: block !important; } }
        @media (min-width: 901px) { .show-mobile { display: none !important; } .hidden-mobile { display: flex !important; } }
      `}</style>
    </header>
  );
}
