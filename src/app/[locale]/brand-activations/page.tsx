import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { generatePageMetadata } from '@/lib/seo';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata(
    locale,
    'تفعيل العلامات التجارية في المملكة العربية السعودية | إكسبو تايم',
    'Brand Activations Saudi Arabia | Expo Time',
    'إكسبو تايم تصمم وتنفذ تجارب تفعيل العلامات التجارية في المملكة العربية السعودية. تجارب تفاعلية مبتكرة تربط جمهورك بعلامتك التجارية عاطفياً.',
    'Expo Time designs and executes brand activation experiences in Saudi Arabia. Innovative interactive experiences that emotionally connect your audience to your brand.',
    '/brand-activations'
  );
}

export default async function BrandActivationsPage({ params }: Props) {
  const { locale } = await params;
  return (
    <ServicePageTemplate
      locale={locale}
      titleAr="تفعيل العلامات التجارية في المملكة العربية السعودية"
      titleEn="Brand Activations Saudi Arabia"
      subtitleAr="نُحوّل علامتك التجارية من مجرد اسم وشعار إلى تجربة حيّة يعيشها جمهورك ويتذكرها، من خلال أنشطة تفعيل إبداعية تحدث صدىً واسعاً في السوق السعودي"
      subtitleEn="We transform your brand from a mere name and logo into a living experience your audience lives and remembers, through creative activation activities that create wide resonance in the Saudi market"
      descAr="تفعيل العلامة التجارية هو الجسر الذي يربط علامتك بقلوب وعقول جمهورك المستهدف. في عالم يتزاحم فيه آلاف العلامات التجارية على الانتباه، لا يكفي أن تُعلن عن نفسك — بل يجب أن تُشعر الناس بشيء. في إكسبو تايم، نصمم تجارب تفعيل مبتكرة تستهدف جميع الحواس وتخلق لحظات قابلة للمشاركة على منصات التواصل الاجتماعي. من الكشوفات الدرامية للمنتجات وتجارب الواقع المعزز وغرف التجربة التفاعلية إلى الفعاليات الشارعية والحملات المنبثقة، نقدم تفعيلاً يحوّل المستهلكين العاديين إلى سفراء حقيقيين لعلامتك التجارية."
      descEn="Brand activation is the bridge that connects your brand to the hearts and minds of your target audience. In a world where thousands of brands compete for attention, it is not enough to announce yourself — you must make people feel something. At Expo Time, we design innovative activation experiences that target all senses and create shareable moments for social media. From dramatic product reveals and augmented reality experiences to interactive experience rooms, street events, and pop-up campaigns, we deliver activations that transform ordinary consumers into true brand ambassadors."
      featuresAr={[
        'تصميم تجارب تفاعلية لا تُنسى للمستهلكين',
        'تفعيلات في المراكز التجارية والفعاليات والمعارض',
        'تجارب الواقع المعزز والواقع الافتراضي',
        'فعاليات إطلاق منتجات درامية وآسرة',
        'محتوى قابل للمشاركة مصمم لمنصات التواصل الاجتماعي',
        'قياس الأثر ومعدل تفاعل الجمهور',
        'تنسيق مع المؤثرين وخبراء الإعلام',
        'تغطية فيديو وصور احترافية للتفعيل',
      ]}
      featuresEn={[
        'Unforgettable interactive consumer experience design',
        'Activations in malls, events, and exhibitions',
        'Augmented reality and virtual reality experiences',
        'Dramatic and captivating product launch events',
        'Shareable content designed for social media platforms',
        'Impact measurement and audience engagement rate',
        'Coordination with influencers and media experts',
        'Professional video and photo coverage of the activation',
      ]}
      faqsAr={[
        { q: 'ما الفرق بين تفعيل العلامة التجارية وإدارة الفعاليات؟', a: 'تفعيل العلامة التجارية يركز على خلق تجربة عاطفية تربط المستهلك بالعلامة التجارية، بينما إدارة الفعاليات تعنى بالتخطيط التشغيلي. كثيراً ما نجمع الخدمتين لنتائج أفضل.' },
        { q: 'هل تقدمون تفعيلات في مراكز التسوق؟', a: 'نعم، لدينا علاقات راسخة مع كبرى مراكز التسوق في الرياض وجدة والدمام، ونتولى الحصول على التصاريح اللازمة.' },
        { q: 'كيف تقيسون نجاح تفعيل العلامة التجارية؟', a: 'نعتمد مؤشرات قياس متعددة تشمل عدد التفاعلات المباشرة، الوصول على منصات التواصل الاجتماعي، معدل الوعي بالعلامة قبل وبعد التفعيل، ومعدل التحويل للمبيعات.' },
      ]}
      faqsEn={[
        { q: 'What is the difference between brand activation and event management?', a: 'Brand activation focuses on creating an emotional experience that connects the consumer to the brand, while event management is concerned with operational planning. We often combine both services for better results.' },
        { q: 'Do you provide activations in shopping centers?', a: 'Yes, we have established relationships with major shopping centers in Riyadh, Jeddah, and Dammam, and we handle obtaining the necessary permits.' },
        { q: 'How do you measure the success of a brand activation?', a: 'We rely on multiple measurement indicators including number of direct interactions, social media reach, brand awareness rate before and after the activation, and sales conversion rate.' },
      ]}
      image="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80"
      relatedServicesAr={['إدارة الفعاليات', 'إنتاج الفعاليات', 'إدارة المؤتمرات']}
      relatedServicesEn={['Event Management', 'Event Production', 'Conference Management']}
    />
  );
}
