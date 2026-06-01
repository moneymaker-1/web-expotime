import type { Metadata } from 'next';
import CityPageTemplate from '@/components/CityPageTemplate';
import { generatePageMetadata } from '@/lib/seo';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata(
    locale,
    'تصميم أجنحة المعارض في نيوم | إكسبو تايم',
    'Exhibition Stand Design NEOM | Expo Time',
    'إكسبو تايم لتصميم وتنفيذ أجنحة المعارض في نيوم. نقدم حلول أجنحة مستقبلية مبتكرة تلائم رؤية نيوم المستدامة والتقنية المتطورة.',
    'Expo Time for exhibition stand design and fabrication in NEOM. We provide futuristic and innovative stand solutions that match NEOM\'s sustainable and advanced technology vision.',
    '/neom'
  );
}

export default async function NeomPage({ params }: Props) {
  const { locale } = await params;
  return (
    <CityPageTemplate
      locale={locale}
      cityAr="نيوم"
      cityEn="NEOM"
      descAr="نيوم مشروع المستقبل الذي يعيد رسم ملامح التنمية العالمية، يستضيف فعاليات ومعارض استثمارية وتقنية تستقطب كبرى الشركات والمستثمرين من حول العالم. إكسبو تايم تصمم أجنحة معارض مستقبلية تنسجم مع الروح الابتكارية لمشروع نيوم."
      descEn="NEOM is the future megaproject redefining global development, hosting investment and technology exhibitions attracting major companies and investors worldwide. Expo Time designs futuristic exhibition stands that harmonize with the innovative spirit of the NEOM project."
      venues={['مقر نيوم الرئيسي للمعارض - تبوك', 'مركز ذا لاين للفعاليات', 'مرسى تروجينا للمؤتمرات', 'قاعات فعاليات مشروع شرما']}
      venuesEn={['NEOM Main Exhibition Hub - Tabuk', 'The Line Events Center', 'Sindalah Marina Conference Facilities', 'Sharma Project Event Halls']}
      image="https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=800&q=80"
      exhibitionsAr={['قمة نيوم للتكنولوجيا والابتكار', 'معرض الاستدامة والطاقة المتجددة', 'منتدى المدن الذكية', 'معرض الاستثمار في مشاريع رؤية 2030', 'قمة الذكاء الاصطناعي والتحول الرقمي']}
      exhibitionsEn={['NEOM Technology & Innovation Summit', 'Sustainability & Renewable Energy Exhibition', 'Smart Cities Forum', 'Vision 2030 Projects Investment Exhibition', 'AI & Digital Transformation Summit']}
      faqsAr={[
        { q: 'هل تصمم إكسبو تايم أجنحة للفعاليات في نيوم؟', a: 'نعم، نصمم ونُنفذ أجنحة معارض مستقبلية تتوافق مع الرؤية التكنولوجية والمستدامة لمشروع نيوم، باستخدام أحدث المواد والتقنيات.' },
        { q: 'ما أنواع الأجنحة الأنسب لفعاليات نيوم؟', a: 'تُفضَّل الأجنحة الذكية التفاعلية ذات الطابع المستقبلي التي تدمج التكنولوجيا مثل الواقع المعزز والشاشات التفاعلية وأنظمة الإضاءة الذكية.' },
        { q: 'هل تستطيعون العمل في منطقة تبوك والمناطق المحيطة بنيوم؟', a: 'نعم، فريقنا اللوجستي قادر على التعامل مع جميع المواقع في منطقة تبوك ومواقع مشروع نيوم المختلفة بكفاءة عالية.' },
      ]}
      faqsEn={[
        { q: 'Does Expo Time design stands for events in NEOM?', a: 'Yes, we design and fabricate futuristic exhibition stands aligned with NEOM\'s technological and sustainable vision, using the latest materials and technologies.' },
        { q: 'What types of stands are most suitable for NEOM events?', a: 'Smart interactive stands with a futuristic character that integrate technology such as augmented reality, interactive screens, and smart lighting systems are preferred.' },
        { q: 'Can you work in the Tabuk region and areas surrounding NEOM?', a: 'Yes, our logistics team is capable of handling all locations in the Tabuk region and various NEOM project sites with high efficiency.' },
      ]}
    />
  );
}
