import type { Metadata } from 'next';
import ExhibitionMount from '@/components/exhibition/ExhibitionMount';
import { generatePageMetadata } from '@/lib/seo';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata(
    locale,
    'إكسبو تايم | معرض تفاعلي ثلاثي الأبعاد',
    'Expo Time | The Interactive 3D Exhibition Hall',
    'إكسبو تايم — تجربة معرض تفاعلية ثلاثية الأبعاد تطير بك فوق ٥٠ جناحاً لأبرز العلامات التجارية في المملكة العربية السعودية.',
    'Expo Time — an immersive 3D exhibition experience flying you across 50 sculptural booths of leading brands in Saudi Arabia.',
    ''
  );
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  return <ExhibitionMount locale={locale} />;
}
