'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import { useTranslations } from 'next-intl';
import Logo from '@/components/ui/Logo';

export default function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const isRtl = locale === 'ar';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
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

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <header style={{
        position: 'fixed', top: 0, left: 44, right: 0, zIndex: 800,
        backgroundColor: scrolled ? '#111111' : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        transition: 'background-color 0.4s, border-color 0.4s',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 2rem', height: 68 }}>
          <Logo locale={locale} size="md" />

          {/* Desktop nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }} className="nav-desktop">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} style={{
                padding: '0.5rem 1rem', fontSize: '0.875rem', fontWeight: isActive(link.href) ? 700 : 500,
                color: isActive(link.href) ? '#8DC63F' : '#ccc',
                textDecoration: 'none', borderRadius: '0.375rem', transition: 'color 0.2s',
                position: 'relative',
              }}
                onMouseEnter={(e) => { if (!isActive(link.href)) e.currentTarget.style.color = '#8DC63F'; }}
                onMouseLeave={(e) => { if (!isActive(link.href)) e.currentTarget.style.color = '#ccc'; }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            {/* Language toggle */}
            <Link href={altPath} style={{
              padding: '0.375rem 0.75rem', border: '1px solid rgba(141,198,63,0.4)',
              borderRadius: '0.375rem', color: '#8DC63F', fontSize: '0.8rem',
              fontWeight: 700, textDecoration: 'none', transition: 'all 0.2s',
            }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(141,198,63,0.1)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
            >
              {altLocale === 'ar' ? 'عربي' : 'EN'}
            </Link>

            {/* CTA pill */}
            <Link href={`/${locale}/contact`} className="nav-desktop" style={{
              padding: '0.6rem 1.5rem', background: '#8DC63F', color: '#fff',
              borderRadius: '3rem', fontWeight: 700, fontSize: '0.875rem',
              textDecoration: 'none', transition: 'all 0.3s',
            }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#7ab535'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = '#8DC63F'; e.currentTarget.style.transform = 'none'; }}
            >
              {isRtl ? 'تواصل معنا' : 'Contact Us'}
            </Link>

            {/* Mobile hamburger */}
            <button onClick={() => setIsOpen(!isOpen)} className="nav-mobile" style={{
              background: 'none', border: 'none', cursor: 'pointer', padding: '0.375rem',
              display: 'flex', flexDirection: 'column', gap: 5, alignItems: 'center',
            }} aria-label="Toggle menu">
              <span style={{ width: 22, height: 2, background: '#fff', borderRadius: 2, transition: 'all 0.3s', transform: isOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
              <span style={{ width: 22, height: 2, background: '#fff', borderRadius: 2, opacity: isOpen ? 0 : 1, transition: 'opacity 0.3s' }} />
              <span style={{ width: 22, height: 2, background: '#fff', borderRadius: 2, transition: 'all 0.3s', transform: isOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div style={{ background: '#111111', borderTop: '1px solid rgba(255,255,255,0.06)', padding: '1rem', maxHeight: '80vh', overflowY: 'auto' }} className="nav-mobile">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} style={{
                display: 'block', padding: '0.875rem 1rem',
                color: isActive(link.href) ? '#8DC63F' : '#ccc',
                textDecoration: 'none', fontWeight: isActive(link.href) ? 700 : 500,
                borderBottom: '1px solid rgba(255,255,255,0.04)', fontSize: '0.95rem',
              }}>
                {link.label}
              </Link>
            ))}
            <div style={{ paddingTop: '1rem' }}>
              <Link href={`/${locale}/contact`} style={{
                display: 'block', padding: '0.875rem', textAlign: 'center',
                background: '#8DC63F', color: '#fff', borderRadius: '0.5rem',
                fontWeight: 700, textDecoration: 'none', fontSize: '0.9rem',
              }}>
                {isRtl ? 'تواصل معنا' : 'Contact Us'}
              </Link>
            </div>
          </div>
        )}
      </header>

      <style>{`
        @media (max-width: 900px) {
          .nav-desktop { display: none !important; }
          .nav-mobile { display: flex !important; }
        }
        @media (min-width: 901px) {
          .nav-mobile { display: none !important; }
          .nav-desktop { display: flex !important; }
        }
      `}</style>
    </>
  );
}
