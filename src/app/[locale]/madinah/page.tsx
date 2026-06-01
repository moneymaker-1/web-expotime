import type { Metadata } from 'next';
import CityPageTemplate from '@/components/CityPageTemplate';
import { generatePageMetadata } from '@/lib/seo';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata(
    locale,
    'تصميم أجنحة المعارض في المدينة المنورة | إكسبو تايم',
    'Exhibition Stand Design Madinah | Expo Time',
    'إكسبو تايم لتصميم وتنفيذ أجنحة المعارض في المدينة المنورة. نقدم حلول أجنحة معارض احترافية للفعاليات والمؤتمرات في المدينة المنورة.',
    'Expo Time for exhibition stand design and fabrication in Madinah. We deliver professional exhibition stand solutions for events and conferences in Madinah.',
    '/madinah'
  );
}

export default async function MadinahPage({ params }: Props) {
  const { locale } = await params;
  return (
    <CityPageTemplate
      locale={locale}
      cityAr="المدينة المنورة"
      cityEn="Madinah"
      descAr="المدينة المنورة ثاني أقدس البقاع الإسلامية، تشهد نمواً ملحوظاً في قطاع الفعاليات والمعارض مع التطوير المستمر لمنشآتها السياحية والتجارية. إكسبو تايم تقدم أجنحة معارض عالية الجودة تناسب الهوية الحضارية الراقية للمدينة المنورة."
      descEn="Madinah, the second holiest city in Islam, is seeing remarkable growth in its events and exhibitions sector with continuous development of its tourism and commercial facilities. Expo Time delivers high-quality exhibition stands that suit the distinguished cultural identity of Madinah."
      venues={['المركز التجاري والمعارض بالمدينة المنورة', 'فندق أنوار المدينة موفنبيك - قاعات الفعاليات', 'فندق هيلتون المدينة المنورة', 'مجمع الملك عبدالله الاقتصادي']}
      venuesEn={['Madinah Commercial & Exhibition Center', 'Anwar Al Madinah Mövenpick Hotel - Event Halls', 'Hilton Madinah Hotel', 'King Abdullah Economic Complex']}
      image="https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?w=800&q=80"
      exhibitionsAr={['معرض المدينة المنورة للعقارات', 'ملتقى السياحة الدينية والضيافة', 'معرض التعليم والتدريب بالمدينة', 'معرض الصحة والرفاهية', 'معرض تقنية المعلومات الإقليمي']}
      exhibitionsEn={['Madinah Real Estate Exhibition', 'Religious Tourism & Hospitality Forum', 'Madinah Education & Training Exhibition', 'Health & Wellness Exhibition', 'Regional IT Exhibition']}
      faqsAr={[
        { q: 'هل تعمل إكسبو تايم في المدينة المنورة؟', a: 'نعم، نقدم خدمات تصميم وتنفيذ أجنحة المعارض الكاملة في المدينة المنورة مع الالتزام بالضوابط المحلية الخاصة بالمدينة.' },
        { q: 'ما نوع الأجنحة الأكثر طلباً في معارض المدينة المنورة؟', a: 'تُقبل شركات قطاع الضيافة والسياحة الدينية والعقارات على أجنحة مخصصة فاخرة تعكس قيم الأصالة والاحترافية في آنٍ واحد.' },
        { q: 'هل تقدمون خدمة التصميم ثلاثي الأبعاد قبل تنفيذ الجناح في المدينة المنورة؟', a: 'نعم، نقدم تصاميم ثلاثية الأبعاد تفصيلية لكل مشروع مع جولة افتراضية تتيح لك رؤية الجناح كاملاً قبل التنفيذ.' },
      ]}
      faqsEn={[
        { q: 'Does Expo Time operate in Madinah?', a: 'Yes, we provide complete exhibition stand design and fabrication services in Madinah while adhering to the city\'s specific local regulations.' },
        { q: 'What types of stands are most in demand at Madinah exhibitions?', a: 'Hospitality, religious tourism, and real estate companies favor luxury custom stands that simultaneously reflect values of authenticity and professionalism.' },
        { q: 'Do you provide 3D design services before stand fabrication in Madinah?', a: 'Yes, we provide detailed 3D designs for every project along with a virtual tour that allows you to see the complete stand before fabrication.' },
      ]}
    />
  );
}
