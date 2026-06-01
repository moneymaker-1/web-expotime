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
  openGraph: {
    type: 'website',
    url: 'https://expo-time.co',
    siteName: 'Expo Time',
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as 'ar' | 'en')) {
    notFound();
  }

  const messages = await getMessages();
  const isRtl = locale === 'ar';

  return (
    <html lang={locale} dir={isRtl ? 'rtl' : 'ltr'} className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#C9A84C" />
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
              foundingDate: '2005',
              numberOfEmployees: { '@type': 'QuantitativeValue', value: 50 },
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'King Fahd Road',
                addressLocality: 'Riyadh',
                postalCode: '12271',
                addressCountry: 'SA',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+966-11-234-5678',
                contactType: 'customer service',
                availableLanguage: ['Arabic', 'English'],
              },
              sameAs: [
                'https://www.linkedin.com/company/expo-time',
                'https://twitter.com/expotime',
                'https://www.instagram.com/expotimeksa',
              ],
            }),
          }}
        />
      </head>
      <body
        style={{
          fontFamily: isRtl
            ? "'Cairo', system-ui, sans-serif"
            : "'Inter', system-ui, sans-serif",
          backgroundColor: '#0A0E1A',
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
