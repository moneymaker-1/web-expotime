import type { Metadata } from 'next';
import CityPageTemplate from '@/components/CityPageTemplate';
import { generatePageMetadata } from '@/lib/seo';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata(
    locale,
    'تصميم أجنحة المعارض في مكة المكرمة | إكسبو تايم',
    'Exhibition Stand Design Makkah | Expo Time',
    'إكسبو تايم لتصميم وتنفيذ أجنحة المعارض في مكة المكرمة. نقدم خدمات متكاملة لأجنحة المعارض والفعاليات في مراكز مكة التجارية والفندقية الكبرى.',
    'Expo Time for exhibition stand design and fabrication in Makkah. We provide comprehensive services for exhibition stands and events at major commercial and hotel centers in Makkah.',
    '/makkah'
  );
}

export default async function MakkahPage({ params }: Props) {
  const { locale } = await params;
  return (
    <CityPageTemplate
      locale={locale}
      cityAr="مكة المكرمة"
      cityEn="Makkah"
      descAr="مكة المكرمة أقدس البقاع وأكثرها استقطاباً للزوار على مستوى العالم، تزداد أهمية فعالياتها التجارية ومعارضها في ظل التوسعات الكبرى وتطوير قطاع الضيافة. إكسبو تايم تقدم حلول أجنحة معارض متميزة تلائم الطابع الفريد لمكة المكرمة."
      descEn="Makkah, the holiest city and the world's top destination for visitors, is seeing growing importance in its commercial events and exhibitions amid major expansions and hospitality sector development. Expo Time delivers distinguished exhibition stand solutions suited to Makkah's unique character."
      venues={['أبراج البيت - مجمع الفعاليات', 'فندق هيلتون مكة - قاعات المؤتمرات', 'فندق إنتركونتيننتال مكة', 'مركز الملك عبدالعزيز للمؤتمرات والمعارض']}
      venuesEn={['Abraj Al-Bait - Events Complex', 'Hilton Makkah - Conference Halls', 'InterContinental Makkah Hotel', 'King Abdulaziz Conference & Exhibition Center']}
      image="https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&q=80"
      exhibitionsAr={['معرض مكة للعقارات والسكن', 'منتدى الحج والعمرة والسياحة الدينية', 'معرض التوسعة والبناء في المشاعر المقدسة', 'معرض تقنيات إدارة الحشود', 'ملتقى الاستثمار في مكة المكرمة']}
      exhibitionsEn={['Makkah Real Estate & Housing Exhibition', 'Hajj, Umrah & Religious Tourism Forum', 'Holy Sites Expansion & Construction Exhibition', 'Crowd Management Technologies Exhibition', 'Makkah Investment Forum']}
      faqsAr={[
        { q: 'هل تقدم إكسبو تايم خدماتها في مكة المكرمة؟', a: 'نعم، نقدم خدمات تصميم وتنفيذ أجنحة المعارض الكاملة في مكة المكرمة مع مراعاة اللوائح المحلية الخاصة بالمدينة المقدسة.' },
        { q: 'ما أبرز مراكز الفعاليات التي تعملون بها في مكة؟', a: 'نعمل في أبراج البيت وفنادق هيلتون وإنتركونتيننتال ومركز الملك عبدالعزيز للمؤتمرات وجميع الأماكن الكبرى في مكة.' },
        { q: 'هل تصممون أجنحة للمعارض المتعلقة بقطاع الحج والعمرة؟', a: 'نعم، لدينا خبرة خاصة في تصميم أجنحة شركات خدمات الحج والعمرة والضيافة الدينية، مع فهم عميق لمتطلبات هذا القطاع.' },
      ]}
      faqsEn={[
        { q: 'Does Expo Time provide services in Makkah?', a: 'Yes, we provide complete exhibition stand design and fabrication services in Makkah while complying with local regulations specific to the holy city.' },
        { q: 'What are the main event venues you work at in Makkah?', a: 'We work at Abraj Al-Bait, Hilton and InterContinental hotels, King Abdulaziz Conference Center, and all major venues in Makkah.' },
        { q: 'Do you design stands for Hajj and Umrah sector exhibitions?', a: 'Yes, we have special expertise in designing stands for Hajj and Umrah service companies and religious hospitality businesses, with deep understanding of this sector\'s requirements.' },
      ]}
    />
  );
}
