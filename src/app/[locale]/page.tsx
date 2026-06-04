import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HomePageClient from './HomePageClient';
import { generatePageMetadata } from '@/lib/seo';
import { createClient } from 'next-sanity';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata(
    locale,
    'إكسبو تايم | تصميم وتنفيذ أجنحة المعارض في السعودية',
    'Expo Time | Exhibition Stand Design & Fabrication Saudi Arabia',
    'إكسبو تايم — الشريك الاستراتيجي لتصميم وتنفيذ أجنحة المعارض والفعاليات في المملكة العربية السعودية.',
    "Expo Time — Saudi Arabia's premier exhibition stand design and fabrication company.",
    ''
  );
}

const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
  apiVersion: '2025-06-01',
  useCdn: false,
  token: process.env.SANITY_READ_TOKEN,
});

export default async function HomePage({ params }: Props) {
  const { locale } = await params;

  let heroVideoUrl: string | undefined;
  let heroImageUrl: string | undefined;
  try {
    const settings = await sanityClient.fetch(
      `*[_type == "siteSettings"][0]{ heroVideoUrl, heroImageUrl }`
    );
    heroVideoUrl = settings?.heroVideoUrl || undefined;
    heroImageUrl = settings?.heroImageUrl || undefined;
  } catch { /* use defaults */ }

  return (
    <>
      <Header />
      <HomePageClient locale={locale} heroVideoUrl={heroVideoUrl} heroImageUrl={heroImageUrl} />
      <Footer />
    </>
  );
}
