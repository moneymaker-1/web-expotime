import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { generatePageMetadata } from '@/lib/seo';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata(
    locale,
    'الأجنحة النمطية في السعودية | إكسبو تايم',
    'Modular Exhibition Booths Saudi Arabia | Expo Time',
    'إكسبو تايم متخصصون في تصميم وتنفيذ الأجنحة النمطية في المملكة العربية السعودية — حلول مرنة وقابلة لإعادة الاستخدام بأسعار تنافسية',
    'Expo Time specializes in modular exhibition booths in Saudi Arabia — flexible, reusable solutions at competitive prices',
    '/modular-booths'
  );
}

export default async function ModularBoothsPage({ params }: Props) {
  const { locale } = await params;
  return (
    <ServicePageTemplate
      locale={locale}
      titleAr="الأجنحة النمطية للمعارض"
      titleEn="Modular Exhibition Booths"
      subtitleAr="حلول مرنة وقابلة للتوسع تجمع بين الجودة والاقتصادية للشركات التي تشارك في معارض متعددة سنوياً"
      subtitleEn="Flexible and scalable solutions combining quality and cost-effectiveness for companies participating in multiple exhibitions annually"
      descAr="الأجنحة النمطية هي الحل المثالي للشركات التي تشارك في معارض متعددة خلال العام. نظام الهياكل القياسية القابلة للتكوين يتيح لك تغيير شكل الجناح في كل مرة مع الحفاظ على هويتك التجارية والتوفير في التكاليف على المدى الطويل. في إكسبو تايم، نقدم أنظمة نمطية عالية الجودة تبدو بمستوى الأجنحة المخصصة."
      descEn="Modular booths are the perfect solution for companies participating in multiple exhibitions throughout the year. The configurable standard frame system allows you to change the stand layout each time while maintaining your brand identity and saving costs in the long run. At Expo Time, we provide high-quality modular systems that look like custom stands."
      featuresAr={[
        'تصميم مرن قابل للتعديل في كل معرض',
        'سهولة التركيب والفك في وقت قياسي',
        'قابل للاستخدام مرات متعددة بضمان الجودة',
        'توفير في التكاليف يصل إلى 40%',
        'خيارات متعددة للأحجام من 9م² وأكثر',
        'تشطيبات وطباعة عالية الجودة',
        'توافق مع معايير المعارض الدولية',
        'تخزين وصيانة احترافية بين المعارض',
      ]}
      featuresEn={[
        'Flexible design adaptable at each exhibition',
        'Easy installation and dismantling in record time',
        'Reusable multiple times with quality guarantee',
        'Cost savings up to 40%',
        'Multiple size options from 9m² and more',
        'High-quality finishes and printing',
        'Compliance with international exhibition standards',
        'Professional storage and maintenance between exhibitions',
      ]}
      faqsAr={[
        { q: 'متى يكون الجناح النمطي الخيار الأفضل؟', a: 'يُعد الجناح النمطي الخيار الأمثل عندما تشارك في أكثر من معرضين سنوياً، أو عندما تكون ميزانيتك محدودة ولكنك تريد حضوراً احترافياً قابلاً لإعادة الاستخدام.' },
        { q: 'هل يمكن تخصيص الجناح النمطي بشكل كامل؟', a: 'نعم، رغم استخدامه لهياكل قياسية يمكن تخصيص الجرافيك والأسطح والإضاءة والعلامات لتعكس هويتك التجارية بشكل كامل.' },
        { q: 'ما عمر الجناح النمطي المتوقع؟', a: 'أجنحتنا النمطية مصممة للاستخدام في 10-15 معرضاً على الأقل مع الحفاظ على جودتها.' },
      ]}
      faqsEn={[
        { q: 'When is a modular booth the best option?', a: 'A modular booth is ideal when you participate in more than two exhibitions annually, or when you have a limited budget but want a professional, reusable presence.' },
        { q: 'Can a modular booth be fully customized?', a: 'Yes, despite using standard frames, the graphics, surfaces, lighting, and signage can be fully customized to reflect your brand identity.' },
        { q: 'What is the expected lifespan of a modular booth?', a: 'Our modular booths are designed for use in at least 10-15 exhibitions while maintaining quality.' },
      ]}
      image="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80"
      relatedServicesAr={['الأجنحة المخصصة', 'تصميم أجنحة المعارض', 'خدمات المعارض']}
      relatedServicesEn={['Custom Booths', 'Exhibition Stand Design', 'Exhibition Services']}
    />
  );
}
