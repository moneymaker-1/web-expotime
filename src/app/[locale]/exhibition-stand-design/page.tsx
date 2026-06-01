import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { generatePageMetadata } from '@/lib/seo';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata(
    locale,
    'تصميم أجنحة المعارض في الرياض | إكسبو تايم',
    'Exhibition Stand Design Riyadh Saudi Arabia | Expo Time',
    'إكسبو تايم متخصصون في تصميم أجنحة المعارض الاستثنائية في الرياض وجميع مدن المملكة. نقدم تصاميم ثلاثية الأبعاد وتنفيذ احترافي.',
    'Expo Time specializes in extraordinary exhibition stand design in Riyadh and all Saudi cities. We provide 3D designs and professional fabrication.',
    '/exhibition-stand-design'
  );
}

export default async function ExhibitionStandDesignPage({ params }: Props) {
  const { locale } = await params;
  return (
    <ServicePageTemplate
      locale={locale}
      titleAr="تصميم أجنحة المعارض في الرياض"
      titleEn="Exhibition Stand Design in Riyadh"
      subtitleAr="نصمم أجنحة معارض استثنائية تعكس هوية علامتك التجارية وتجذب الزوار بتصاميم ثلاثية الأبعاد احترافية في جميع أنحاء المملكة العربية السعودية"
      subtitleEn="We design extraordinary exhibition stands that reflect your brand identity and attract visitors with professional 3D designs across Saudi Arabia"
      descAr="تصميم جناح المعرض هو الخطوة الأولى والأكثر أهمية في رحلة مشاركتك بالمعارض. في إكسبو تايم، نؤمن بأن كل جناح يجب أن يحكي قصة العلامة التجارية ويخلق تجربة لا تُنسى للزوار. فريقنا من المصممين المحترفين يعمل عن كثب مع عملائنا لفهم هويتهم التجارية وأهدافهم، ثم يترجم ذلك إلى تصاميم إبداعية بثلاثة أبعاد تجمع بين الجماليات والوظيفية. سواء كنت تشارك في معارض الرياض أو جدة أو أبوظبي أو دبي أو أي مدينة خليجية أخرى، نضمن لك جناحاً يبرز بين المنافسين ويحقق أهدافك التجارية."
      descEn="Exhibition stand design is the first and most critical step in your exhibition participation journey. At Expo Time, we believe every stand should tell the brand's story and create an unforgettable experience for visitors. Our team of professional designers works closely with clients to understand their brand identity and objectives, then translates that into creative 3D designs that combine aesthetics and functionality. Whether you participate in Riyadh, Jeddah, Abu Dhabi, Dubai, or any Gulf city, we guarantee a stand that stands out among competitors and achieves your business goals."
      featuresAr={[
        'تصميم ثلاثي الأبعاد احترافي مع جولة افتراضية',
        'تصاميم تعكس هوية علامتك التجارية بدقة',
        'حلول مبتكرة لأجنحة من 9م² حتى 5000م²',
        'تصميم يتوافق مع متطلبات منظمي المعارض',
        'إضاءة وألوان مدروسة لجذب الزوار',
        'استخدام أحدث برامج التصميم ثلاثي الأبعاد',
        'مراجعات غير محدودة حتى الوصول للتصميم المثالي',
        'تسليم ملفات التصميم بجميع الصيغ',
      ]}
      featuresEn={[
        'Professional 3D design with virtual walkthrough',
        'Designs that accurately reflect your brand identity',
        'Innovative solutions for stands from 9m² to 5000m²',
        'Designs compliant with exhibition organizer requirements',
        'Strategic lighting and colors to attract visitors',
        'Latest 3D design software utilized',
        'Unlimited revisions until achieving the perfect design',
        'Design files delivered in all formats',
      ]}
      faqsAr={[
        { q: 'كم يستغرق تصميم جناح المعرض؟', a: 'يستغرق التصميم الأولي من 3-5 أيام عمل، مع مراجعات تصل إلى أسبوعين حتى الوصول للتصميم النهائي.' },
        { q: 'هل تقدمون تصميماً ثلاثي الأبعاد؟', a: 'نعم، نقدم تصاميم ثلاثية الأبعاد كاملة مع جولات افتراضية تتيح لك رؤية الجناح بشكل واقعي قبل التنفيذ.' },
        { q: 'ما الحد الأدنى لمساحة الجناح الذي تصممونه؟', a: 'نصمم أجنحة بدءاً من 9 أمتار مربعة (3×3م) حتى آلاف الأمتار للأجنحة الكبرى.' },
      ]}
      faqsEn={[
        { q: 'How long does exhibition stand design take?', a: 'Initial design takes 3-5 business days, with revisions up to two weeks to reach the final design.' },
        { q: 'Do you provide 3D design?', a: 'Yes, we provide complete 3D designs with virtual walkthroughs that allow you to see the stand realistically before fabrication.' },
        { q: 'What is the minimum stand size you design?', a: 'We design stands starting from 9 square meters (3×3m) up to thousands of square meters for large-scale stands.' },
      ]}
      image="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80"
      relatedServicesAr={['تنفيذ الأجنحة', 'الأجنحة المخصصة', 'إدارة الفعاليات']}
      relatedServicesEn={['Booth Fabrication', 'Custom Booths', 'Event Management']}
    />
  );
}
