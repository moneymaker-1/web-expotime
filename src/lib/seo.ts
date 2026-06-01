import { Metadata } from 'next';

export function generatePageMetadata(
  locale: string,
  titleAr: string,
  titleEn: string,
  descAr: string,
  descEn: string,
  path = ''
): Metadata {
  const isAr = locale === 'ar';
  const title = isAr ? titleAr : titleEn;
  const desc = isAr ? descAr : descEn;

  return {
    title,
    description: desc,
    alternates: {
      canonical: `https://expo-time.co/${locale}${path}`,
      languages: {
        ar: `https://expo-time.co/ar${path}`,
        en: `https://expo-time.co/en${path}`,
      },
    },
    openGraph: {
      title: `${title} | ${isAr ? 'إكسبو تايم' : 'Expo Time'}`,
      description: desc,
      url: `https://expo-time.co/${locale}${path}`,
      siteName: isAr ? 'إكسبو تايم' : 'Expo Time',
      locale: isAr ? 'ar_SA' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: desc,
    },
  };
}
