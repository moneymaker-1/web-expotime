import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { generatePageMetadata } from '@/lib/seo';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata(
    locale,
    'تنفيذ وتصنيع أجنحة المعارض في السعودية | إكسبو تايم',
    'Exhibition Booth Fabrication Saudi Arabia | Expo Time',
    'إكسبو تايم تقدم خدمات تنفيذ وتصنيع أجنحة المعارض بأعلى معايير الجودة في المملكة العربية السعودية. مواد فاخرة وتنفيذ دقيق في المواعيد.',
    'Expo Time provides exhibition booth fabrication services with the highest quality standards in Saudi Arabia. Premium materials and precise on-time delivery.',
    '/exhibition-booth-fabrication'
  );
}

export default async function ExhibitionBoothFabricationPage({ params }: Props) {
  const { locale } = await params;
  return (
    <ServicePageTemplate
      locale={locale}
      titleAr="تنفيذ وتصنيع أجنحة المعارض في السعودية"
      titleEn="Exhibition Booth Fabrication Saudi Arabia"
      subtitleAr="نحول تصاميمكم إلى واقع ملموس باستخدام أرقى المواد وأحدث تقنيات التصنيع، مع ضمان التسليم في الموعد المحدد لجميع المعارض في السعودية والخليج"
      subtitleEn="We transform your designs into tangible reality using premium materials and the latest manufacturing techniques, with guaranteed on-time delivery for all exhibitions in Saudi Arabia and the Gulf"
      descAr="تنفيذ جناح المعرض يتطلب خبرة تقنية عالية ودقة في التفاصيل. في إكسبو تايم، نمتلك ورش تصنيع مجهزة بأحدث المعدات وفريقاً متخصصاً من النجارين والحدادين والمشغلين المهرة. نستخدم مواد عالية الجودة من خشب MDF وألمنيوم وزجاج وأكريليك وغيرها لضمان جناح يبدو فاخراً ويدوم طوال المعرض. نلتزم بإجراءات السلامة والمعايير الدولية في كل مشروع."
      descEn="Exhibition booth fabrication requires high technical expertise and precision in details. At Expo Time, we have manufacturing workshops equipped with the latest machinery and a specialized team of carpenters, metalworkers, and skilled operators. We use high-quality materials including MDF, aluminum, glass, acrylic, and more to ensure a booth that looks luxurious and lasts throughout the exhibition. We adhere to safety procedures and international standards in every project."
      featuresAr={[
        'تصنيع بأعلى معايير الجودة والدقة',
        'استخدام مواد فاخرة وصديقة للبيئة',
        'ورش تصنيع متكاملة في الرياض وجدة',
        'فريق فني متخصص ذو خبرة 15+ عاماً',
        'التزام صارم بالمواعيد والجداول الزمنية',
        'فحص جودة متعدد المراحل قبل التسليم',
        'خدمة النقل والتركيب والتفكيك',
        'ضمان شامل على جميع الأعمال المنفذة',
      ]}
      featuresEn={[
        'Manufacturing to the highest quality and precision standards',
        'Premium and eco-friendly materials used',
        'Integrated manufacturing workshops in Riyadh and Jeddah',
        'Specialized technical team with 15+ years of experience',
        'Strict adherence to deadlines and schedules',
        'Multi-stage quality inspection before delivery',
        'Transportation, installation, and dismantling services',
        'Comprehensive warranty on all completed work',
      ]}
      faqsAr={[
        { q: 'ما المواد التي تستخدمونها في تصنيع الأجنحة؟', a: 'نستخدم مجموعة واسعة من المواد تشمل خشب MDF، الألمنيوم، الزجاج، الأكريليك، القماش المطبوع، والشاشات الإلكترونية حسب متطلبات كل تصميم.' },
        { q: 'هل تقدمون خدمة التركيب والتفكيك في موقع المعرض؟', a: 'نعم، نوفر فريقاً متكاملاً لتركيب الجناح في الموقع وتفكيكه بعد انتهاء المعرض، مع الالتزام الكامل بجداول المنظمين.' },
        { q: 'كم تستغرق عملية التصنيع؟', a: 'تستغرق عملية التصنيع عادةً من 2-4 أسابيع حسب حجم وتعقيد الجناح. ننصح بالتواصل معنا قبل 6 أسابيع على الأقل من موعد المعرض.' },
      ]}
      faqsEn={[
        { q: 'What materials do you use in booth fabrication?', a: 'We use a wide range of materials including MDF wood, aluminum, glass, acrylic, printed fabric, and electronic screens depending on each design\'s requirements.' },
        { q: 'Do you provide installation and dismantling at the exhibition venue?', a: 'Yes, we provide a complete team for on-site installation and post-exhibition dismantling, fully complying with organizers\' schedules.' },
        { q: 'How long does the fabrication process take?', a: 'The fabrication process typically takes 2-4 weeks depending on the size and complexity of the booth. We recommend reaching out at least 6 weeks before the exhibition date.' },
      ]}
      image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
      relatedServicesAr={['تصميم الأجنحة', 'مقاول معارض', 'خدمات المعارض الشاملة']}
      relatedServicesEn={['Stand Design', 'Exhibition Contractor', 'Exhibition Services']}
    />
  );
}
