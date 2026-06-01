import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CursorGlow from '@/components/ui/CursorGlow';
import FloatingParticles from '@/components/ui/FloatingParticles';
import HomePageClient from './HomePageClient';
import { generatePageMetadata } from '@/lib/seo';

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

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  return (
    <>
      <CursorGlow />
      <FloatingParticles />
      <Header />
      <HomePageClient locale={locale} />
      <Footer />
    </>
  );
}
