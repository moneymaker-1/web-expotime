import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://expo-time.co'),
  title: {
    default: 'إكسبو تايم | تصميم وتنفيذ أجنحة المعارض في السعودية',
    template: '%s | إكسبو تايم',
  },
  description: 'إكسبو تايم — الشريك الاستراتيجي لتصميم وتنفيذ أجنحة المعارض والفعاليات في المملكة العربية السعودية.',
  keywords: ['تصميم أجنحة معارض', 'exhibition stand design', 'Saudi Arabia', 'الرياض', 'Riyadh'],
  authors: [{ name: 'Expo Time' }],
  creator: 'Expo Time',
  openGraph: { type: 'website', url: 'https://expo-time.co', siteName: 'Expo Time' },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
};

type Props = { children: React.ReactNode; params: Promise<{ locale: string }> };

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as 'ar' | 'en')) notFound();
  const messages = await getMessages();
  const isRtl = locale === 'ar';

  return (
    <html lang={locale} dir={isRtl ? 'rtl' : 'ltr'} className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&family=Cairo:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#f3c716" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Expo Time',
              alternateName: 'إكسبو تايم',
              url: 'https://expo-time.co',
              logo: 'https://expo-time.co/logo.png',
              description: 'Exhibition Stand Design & Fabrication company in Saudi Arabia',
              foundingDate: '2015',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'King Fahd Road',
                addressLocality: 'Riyadh',
                postalCode: '12271',
                addressCountry: 'SA',
              },
              contactPoint: [
                { '@type': 'ContactPoint', telephone: '+966-55-101-6181', contactType: 'customer service' },
                { '@type': 'ContactPoint', telephone: '+966-11-239-3255', contactType: 'customer support' },
              ],
              sameAs: [
                'https://www.linkedin.com/company/expotimellc/',
                'https://x.com/ExpoTime_LLC',
                'https://www.instagram.com/expotime_llc',
              ],
            }),
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var observer = new IntersectionObserver(function(entries) {
                  entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                      entry.target.classList.add('visible');
                    }
                  });
                }, { threshold: 0.12 });
                document.addEventListener('DOMContentLoaded', function() {
                  document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(function(el) {
                    observer.observe(el);
                  });
                });
              })();
            `,
          }}
        />
      </head>
      <body
        style={{
          fontFamily: isRtl ? "'Cairo', system-ui, sans-serif" : "'Poppins', system-ui, sans-serif",
          backgroundColor: '#0f1e2d',
          color: '#F9FAFB',
          margin: 0,
          padding: 0,
        }}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
