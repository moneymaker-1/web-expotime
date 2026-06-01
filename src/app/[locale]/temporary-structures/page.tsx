import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { generatePageMetadata } from '@/lib/seo';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata(
    locale,
    'الهياكل المؤقتة للمعارض في السعودية | إكسبو تايم',
    'Temporary Structures for Exhibitions Saudi Arabia | Expo Time',
    'إكسبو تايم متخصصون في تصميم وتركيب الهياكل المؤقتة للمعارض الخارجية والفعاليات الكبرى في المملكة العربية السعودية',
    'Expo Time specializes in designing and installing temporary structures for outdoor exhibitions and large-scale events in Saudi Arabia',
    '/temporary-structures'
  );
}

export default async function TemporaryStructuresPage({ params }: Props) {
  const { locale } = await params;
  return (
    <ServicePageTemplate
      locale={locale}
      titleAr="الهياكل المؤقتة للمعارض والفعاليات"
      titleEn="Temporary Structures for Exhibitions & Events"
      subtitleAr="هياكل مؤقتة عالية الجودة مناسبة للمعارض الخارجية والفعاليات الكبرى والتجمعات الضخمة في جميع أنحاء المملكة"
      subtitleEn="High-quality temporary structures suitable for outdoor exhibitions, large-scale events, and massive gatherings across Saudi Arabia"
      descAr="الهياكل المؤقتة هي الحل الأمثل للفعاليات الخارجية الكبرى التي تتطلب مساحات واسعة في أماكن مفتوحة. تقدم إكسبو تايم مجموعة واسعة من الهياكل المؤقتة بما فيها الخيام الكبيرة والقباب الجيوديسية والهياكل المتمددة، مع ضمان أعلى معايير السلامة في التركيب والتشغيل."
      descEn="Temporary structures are the ideal solution for large outdoor events that require expansive spaces in open areas. Expo Time offers a wide range of temporary structures including large tents, geodesic domes, and stretch structures, with the highest safety standards guaranteed in installation and operation."
      featuresAr={[
        'خيام كبيرة تتسع لآلاف الأشخاص',
        'قباب جيوديسية بتصاميم عصرية',
        'هياكل متمددة بأشكال ديناميكية',
        'منصات مغطاة للفعاليات الخارجية',
        'نظام تهوية وتكييف متكامل',
        'تركيب احترافي بأعلى معايير السلامة',
        'مقاومة لظروف الطقس القاسية',
        'تصاريح البناء والاعتمادات الرسمية',
      ]}
      featuresEn={[
        'Large tents accommodating thousands of people',
        'Geodesic domes with modern designs',
        'Stretch structures with dynamic shapes',
        'Covered platforms for outdoor events',
        'Integrated ventilation and air conditioning system',
        'Professional installation with highest safety standards',
        'Resistance to harsh weather conditions',
        'Construction permits and official certifications',
      ]}
      faqsAr={[
        { q: 'ما أنواع الهياكل المؤقتة التي تقدمونها؟', a: 'نقدم خيام ألومنيوم ضخمة، قباب جيوديسية، هياكل تمتد، ومنصات مغطاة للفعاليات الخارجية بأحجام متعددة.' },
        { q: 'هل الهياكل المؤقتة آمنة في ظروف الطقس الحار بالسعودية؟', a: 'نعم، جميع هياكلنا مصممة للتحمل في درجات الحرارة العالية وتأتي مع أنظمة تهوية وتكييف مناسبة للمناخ السعودي.' },
        { q: 'كم يستغرق تركيب الهيكل المؤقت؟', a: 'يتراوح وقت التركيب من يوم واحد لأحجام صغيرة إلى أسبوع أو أكثر للهياكل الضخمة، حسب الحجم والمواصفات.' },
      ]}
      faqsEn={[
        { q: 'What types of temporary structures do you offer?', a: 'We offer large aluminum tents, geodesic domes, stretch structures, and covered platforms for outdoor events in multiple sizes.' },
        { q: "Are temporary structures safe in Saudi Arabia's hot weather?", a: "Yes, all our structures are designed to withstand high temperatures and come with ventilation and air conditioning systems suitable for Saudi Arabia's climate." },
        { q: 'How long does it take to install a temporary structure?', a: 'Installation time ranges from one day for small sizes to a week or more for large structures, depending on size and specifications.' },
      ]}
      image="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80"
      relatedServicesAr={['إدارة الفعاليات', 'إنتاج الفعاليات', 'خدمات المعارض']}
      relatedServicesEn={['Event Management', 'Event Production', 'Exhibition Services']}
    />
  );
}
