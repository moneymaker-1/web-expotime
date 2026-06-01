import type { Metadata } from 'next';
import CityPageTemplate from '@/components/CityPageTemplate';
import { generatePageMetadata } from '@/lib/seo';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata(
    locale,
    'تصميم أجنحة المعارض في جدة | إكسبو تايم',
    'Exhibition Stand Design Jeddah | Expo Time',
    'أفضل شركة تصميم أجنحة معارض في جدة. إكسبو تايم تقدم خدمات تصميم وتنفيذ أجنحة المعارض في مركز جدة الدولي للمعارض وجميع مراكز المعارض بجدة.',
    'Best exhibition stand design company in Jeddah. Expo Time provides stand design and fabrication services at Jeddah Center for Forums and Events and all exhibition venues in Jeddah.',
    '/jeddah'
  );
}

export default async function JeddahPage({ params }: Props) {
  const { locale } = await params;
  return (
    <CityPageTemplate
      locale={locale}
      cityAr="جدة"
      cityEn="Jeddah"
      descAr="جدة البوابة التجارية للمملكة العربية السعودية، تزخر بالمعارض والفعاليات التجارية الكبرى على مدار العام. إكسبو تايم تقدم خدمات تصميم وتنفيذ أجنحة المعارض الاحترافية في جدة، مع فريق محلي متمرس يضمن نجاح مشاركتك في أي معرض."
      descEn="Jeddah, the commercial gateway of Saudi Arabia, hosts major trade shows and business events year-round. Expo Time delivers professional exhibition stand design and fabrication services in Jeddah, with an experienced local team ensuring your success at any exhibition."
      venues={['مركز جدة للمنتديات والفعاليات', 'جدة سوبر دوم', 'أبراج البحر - مركز الأعمال', 'فندق هيلتون جدة - قاعات المعارض']}
      venuesEn={['Jeddah Center for Forums and Events', 'Jeddah Super Dome', 'Abraj Al-Bait Business Center', 'Hilton Jeddah - Exhibition Halls']}
      image="https://images.unsplash.com/photo-1578895101408-1a36b834405b?w=800&q=80"
      exhibitionsAr={['معرض جدة الدولي للكتاب', 'معرض صنع في السعودية', 'معرض الفرنشايز والترخيص', 'معرض جدة للمجوهرات والساعات', 'معرض السعودية هيلث']}
      exhibitionsEn={['Jeddah International Book Fair', 'Made in Saudi Exhibition', 'Franchise & License Exhibition', 'Jeddah Jewelry & Watch Show', 'Saudi Health Exhibition']}
      faqsAr={[
        { q: 'ما أفضل شركة أجنحة معارض في جدة؟', a: 'إكسبو تايم من أبرز شركات تصميم أجنحة المعارض في جدة، نقدم حلولاً متكاملة من التصميم ثلاثي الأبعاد حتى التركيب والفك.' },
        { q: 'هل تعملون في مركز جدة للمنتديات والفعاليات؟', a: 'نعم، لدينا خبرة واسعة في تنفيذ الأجنحة في مركز جدة للمنتديات والفعاليات وجميع أماكن الفعاليات الكبرى بجدة.' },
        { q: 'كم يستغرق تصميم وتنفيذ جناح في جدة؟', a: 'يعتمد الوقت على حجم وتعقيد الجناح، عادةً بين أسبوعين وأربعة أسابيع من التصميم حتى التسليم النهائي.' },
      ]}
      faqsEn={[
        { q: 'What is the best exhibition stand company in Jeddah?', a: 'Expo Time is one of the leading exhibition stand design companies in Jeddah, offering end-to-end solutions from 3D design to installation and dismantling.' },
        { q: 'Do you work at the Jeddah Center for Forums and Events?', a: 'Yes, we have extensive experience executing stands at the Jeddah Center for Forums and Events and all major event venues in Jeddah.' },
        { q: 'How long does it take to design and build a stand in Jeddah?', a: 'Timeline depends on the stand size and complexity, typically between two and four weeks from design approval to final delivery.' },
      ]}
    />
  );
}
