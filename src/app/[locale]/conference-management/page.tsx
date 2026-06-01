import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { generatePageMetadata } from '@/lib/seo';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata(
    locale,
    'إدارة المؤتمرات في المملكة العربية السعودية | إكسبو تايم',
    'Conference Management Saudi Arabia | Expo Time',
    'إكسبو تايم متخصصون في إدارة وتنظيم المؤتمرات الدولية والمحلية في الرياض وجدة والمملكة. نضمن تجربة احترافية لا تُنسى للمتحدثين والحضور.',
    'Expo Time specializes in managing and organizing international and local conferences in Riyadh, Jeddah, and Saudi Arabia. We guarantee an unforgettable professional experience for speakers and attendees.',
    '/conference-management'
  );
}

export default async function ConferenceManagementPage({ params }: Props) {
  const { locale } = await params;
  return (
    <ServicePageTemplate
      locale={locale}
      titleAr="إدارة المؤتمرات في المملكة العربية السعودية"
      titleEn="Conference Management Saudi Arabia"
      subtitleAr="نخطط وننظم ونُدير المؤتمرات والندوات والقمم التجارية بكفاءة احترافية عالية، مما يتيح لك التركيز على محتوى الحدث وعلاقاتك مع المشاركين"
      subtitleEn="We plan, organize, and manage conferences, seminars, and business summits with high professional efficiency, allowing you to focus on event content and your relationships with participants"
      descAr="تنظيم المؤتمرات يتطلب دقة تشغيلية عالية وقدرة على إدارة مئات التفاصيل في وقت واحد. إكسبو تايم تمتلك الخبرة والفريق والشبكة اللازمة لضمان نجاح مؤتمرك سواء كان جمع 50 مسؤولاً أو 5000 متخصص. نتولى كل شيء من اختيار القاعات وتأمين التقنيات الصوتية والمرئية والترجمة الفورية وإدارة التسجيل والتطبيقات الرقمية وصولاً إلى تقديم الضيافة والتنقل. لقد نظّمنا مؤتمرات لجهات حكومية وشركات Fortune 500 وجمعيات مهنية في مختلف القطاعات."
      descEn="Conference organization requires high operational precision and the ability to manage hundreds of details simultaneously. Expo Time has the experience, team, and network necessary to ensure your conference success whether it gathers 50 executives or 5,000 specialists. We handle everything from venue selection, audio-visual technology, simultaneous interpretation, registration management and digital apps, through to catering and transportation. We have organized conferences for government entities, Fortune 500 companies, and professional associations across various sectors."
      featuresAr={[
        'تخطيط وجدولة المؤتمرات من الألف إلى الياء',
        'اختيار وحجز أفضل قاعات وفنادق الرياض وجدة',
        'أنظمة صوت وإضاءة وعرض احترافية',
        'خدمة الترجمة الفورية متعددة اللغات',
        'تطبيقات ومنصات رقمية لإدارة التسجيل',
        'تنسيق المتحدثين والرحلات والإقامة',
        'تغطية إعلامية وتصوير احترافي',
        'تقييم شامل وتقرير ما بعد المؤتمر',
      ]}
      featuresEn={[
        'End-to-end conference planning and scheduling',
        'Selection and booking of the best venues and hotels in Riyadh and Jeddah',
        'Professional audio, lighting, and presentation systems',
        'Multi-language simultaneous interpretation service',
        'Digital apps and platforms for registration management',
        'Speaker coordination, transportation, and accommodation',
        'Media coverage and professional photography',
        'Comprehensive evaluation and post-conference report',
      ]}
      faqsAr={[
        { q: 'ما أكبر مؤتمر نظّمتموه؟', a: 'نظّمنا مؤتمرات بحضور يتجاوز 3000 مشارك، بما فيها قمم حكومية ومؤتمرات قطاعية دولية في الرياض وجدة.' },
        { q: 'هل تقدمون خدمة المؤتمرات الهجينة (حضوري + افتراضي)؟', a: 'نعم، نوفر الحلول التقنية الكاملة للمؤتمرات الهجينة تشمل البث المباشر والتفاعل مع المشاركين عبر الإنترنت.' },
        { q: 'كم مسبقاً يجب التواصل معكم لتنظيم مؤتمر؟', a: 'للمؤتمرات الصغيرة (حتى 200 شخص) نحتاج 4-6 أسابيع. للمؤتمرات الكبرى ننصح بالتواصل قبل 3-6 أشهر.' },
      ]}
      faqsEn={[
        { q: 'What is the largest conference you have organized?', a: 'We have organized conferences with over 3,000 attendees, including government summits and international sector conferences in Riyadh and Jeddah.' },
        { q: 'Do you provide hybrid conference services (in-person + virtual)?', a: 'Yes, we provide complete technical solutions for hybrid conferences including live streaming and online participant interaction.' },
        { q: 'How far in advance should we contact you to organize a conference?', a: 'For small conferences (up to 200 people) we need 4-6 weeks. For large conferences we recommend reaching out 3-6 months in advance.' },
      ]}
      image="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80"
      relatedServicesAr={['إدارة الفعاليات', 'إنتاج الفعاليات', 'خدمات المعارض الشاملة']}
      relatedServicesEn={['Event Management', 'Event Production', 'Exhibition Services']}
    />
  );
}
