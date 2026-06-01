import type { Metadata } from 'next';
import CityPageTemplate from '@/components/CityPageTemplate';
import { generatePageMetadata } from '@/lib/seo';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata(
    locale,
    'تصميم أجنحة المعارض في الخبر | إكسبو تايم',
    'Exhibition Stand Design Khobar | Expo Time',
    'إكسبو تايم لتصميم وتنفيذ أجنحة المعارض في الخبر. نخدم جميع الفعاليات والمعارض التجارية في الخبر والمنطقة الشرقية بخبرة احترافية متميزة.',
    'Expo Time for exhibition stand design and fabrication in Khobar. We serve all trade events and exhibitions in Khobar and the Eastern Province with outstanding professional expertise.',
    '/khobar'
  );
}

export default async function KhobarPage({ params }: Props) {
  const { locale } = await params;
  return (
    <CityPageTemplate
      locale={locale}
      cityAr="الخبر"
      cityEn="Khobar"
      descAr="الخبر مدينة الأعمال والتجارة في المنطقة الشرقية، تحتضن فعاليات ومعارض تجارية متنوعة تجمع بين الشركات المحلية والدولية. إكسبو تايم تقدم أجنحة معارض متميزة تعكس هوية علامتك التجارية وتجذب الزوار في كل فعاليات الخبر."
      descEn="Khobar is the business and commerce city of the Eastern Province, hosting diverse trade events and exhibitions that bring together local and international companies. Expo Time delivers outstanding exhibition stands that reflect your brand identity and attract visitors at all Khobar events."
      venues={['فندق ماريوت الخبر - قاعات المعارض', 'مركز الخبر التجاري', 'فندق سوفيتيل الخبر - قاعات الفعاليات', 'مجمع المراسي للمؤتمرات']}
      venuesEn={['Khobar Marriott Hotel - Exhibition Halls', 'Khobar Business Center', 'Sofitel Khobar - Event Halls', 'Al-Marasi Convention Complex']}
      image="https://images.unsplash.com/photo-1535132011086-b8818f016104?w=800&q=80"
      exhibitionsAr={['معرض الخبر للعقارات والاستثمار', 'منتدى المنطقة الشرقية للأعمال', 'معرض التقنية والاتصالات الخليجي', 'معرض الخبر للتعليم والتدريب', 'فعاليات قطاع الترفيه والسياحة']}
      exhibitionsEn={['Khobar Real Estate & Investment Exhibition', 'Eastern Province Business Forum', 'Gulf Technology & Telecommunications Exhibition', 'Khobar Education & Training Fair', 'Entertainment & Tourism Sector Events']}
      faqsAr={[
        { q: 'ما أفضل شركة أجنحة معارض في الخبر؟', a: 'إكسبو تايم من الشركات الرائدة في تصميم وتنفيذ أجنحة المعارض في الخبر، مع فريق متخصص يغطي جميع الفعاليات في المنطقة الشرقية.' },
        { q: 'هل تخدمون الفنادق الكبرى في الخبر للمعارض والفعاليات؟', a: 'نعم، نعمل في جميع الفنادق والمراكز الكبرى بالخبر بما فيها ماريوت وسوفيتيل وغيرها من الأماكن الرئيسية.' },
        { q: 'هل تقدمون خدمات تأجير الأجنحة في الخبر؟', a: 'نعم، نقدم خلال أجنحة تأجير وشراء مع إمكانية التخصيص الكامل حسب احتياجاتك ومتطلبات الفعالية.' },
      ]}
      faqsEn={[
        { q: 'What is the best exhibition stand company in Khobar?', a: 'Expo Time is one of the leading companies in exhibition stand design and fabrication in Khobar, with a specialized team covering all events in the Eastern Province.' },
        { q: 'Do you serve major hotels in Khobar for exhibitions and events?', a: 'Yes, we work at all major hotels and centers in Khobar including Marriott, Sofitel, and other key venues.' },
        { q: 'Do you offer stand rental services in Khobar?', a: 'Yes, we offer both rental and purchase options with full customization capabilities to match your needs and event requirements.' },
      ]}
    />
  );
}
