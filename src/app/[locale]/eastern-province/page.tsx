import type { Metadata } from 'next';
import CityPageTemplate from '@/components/CityPageTemplate';
import { generatePageMetadata } from '@/lib/seo';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata(
    locale,
    'تصميم أجنحة المعارض في المنطقة الشرقية | إكسبو تايم',
    'Exhibition Stand Design Eastern Province | Expo Time',
    'إكسبو تايم لتصميم وتنفيذ أجنحة المعارض في المنطقة الشرقية. نغطي الدمام والخبر والقطيف والجبيل وجميع مدن المنطقة الشرقية بخبرة احترافية.',
    'Expo Time for exhibition stand design and fabrication in the Eastern Province. We cover Dammam, Khobar, Qatif, Jubail, and all cities of the Eastern Province with professional expertise.',
    '/eastern-province'
  );
}

export default async function EasternProvincePage({ params }: Props) {
  const { locale } = await params;
  return (
    <CityPageTemplate
      locale={locale}
      cityAr="المنطقة الشرقية"
      cityEn="Eastern Province"
      descAr="المنطقة الشرقية قلب الصناعة النفطية والبتروكيماوية في المملكة العربية السعودية، تضم مدناً حيوية كالدمام والخبر والجبيل والقطيف. إكسبو تايم تغطي جميع مدن المنطقة الشرقية بخدمات أجنحة معارض متكاملة تناسب مختلف القطاعات الصناعية والتجارية."
      descEn="The Eastern Province is the heart of Saudi Arabia's oil and petrochemical industry, encompassing vibrant cities including Dammam, Khobar, Jubail, and Qatif. Expo Time covers all Eastern Province cities with comprehensive exhibition stand services suited to various industrial and commercial sectors."
      venues={['مركز الدمام الدولي للمعارض', 'مجمع أرامكو للمعارض والفعاليات', 'مركز الجبيل التجاري للفعاليات', 'فنادق ومراكز أعمال الخبر', 'مدينة الملك عبدالله الاقتصادية - جبيل']}
      venuesEn={['Dammam International Exhibition Center', 'Aramco Exhibition & Events Complex', 'Jubail Commercial Events Center', 'Khobar Hotels & Business Centers', 'King Abdullah Economic City - Jubail']}
      image="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80"
      exhibitionsAr={['معرض إيباك للبترول والغاز', 'معرض بلاست للبتروكيماويات', 'معرض الطاقة والصناعة السعودي', 'معرض الجبيل الصناعي', 'منتدى الخليج للأعمال والاستثمار', 'معرض المياه والبيئة الخليجي']}
      exhibitionsEn={['IPEAC Petroleum & Gas Exhibition', 'Plast Petrochemicals Exhibition', 'Saudi Energy & Industry Exhibition', 'Jubail Industrial Fair', 'Gulf Business & Investment Forum', 'Gulf Water & Environment Exhibition']}
      faqsAr={[
        { q: 'هل تغطي إكسبو تايم جميع مدن المنطقة الشرقية؟', a: 'نعم، نغطي كاملاً مدن المنطقة الشرقية بما فيها الدمام والخبر والجبيل والقطيف والأحساء وجميع المناطق الصناعية.' },
        { q: 'هل لديكم خبرة في معارض قطاع الطاقة بالمنطقة الشرقية؟', a: 'نعم، نتمتع بخبرة طويلة في تصميم أجنحة شركات النفط والغاز والبتروكيماويات والطاقة في المنطقة الشرقية مع الالتزام بمعايير السلامة الصناعية.' },
        { q: 'ما الفرق بين خدماتكم في الدمام والخبر والجبيل؟', a: 'نقدم نفس المستوى من الجودة والاحترافية في جميع مدن المنطقة الشرقية، مع فريق لوجستي متكامل يضمن التسليم في الوقت المحدد في كل موقع.' },
      ]}
      faqsEn={[
        { q: 'Does Expo Time cover all cities in the Eastern Province?', a: 'Yes, we cover all Eastern Province cities including Dammam, Khobar, Jubail, Qatif, Al-Ahsa, and all industrial zones.' },
        { q: 'Do you have experience in energy sector exhibitions in the Eastern Province?', a: 'Yes, we have extensive experience designing stands for oil, gas, petrochemical, and energy companies in the Eastern Province while adhering to industrial safety standards.' },
        { q: 'What is the difference between your services in Dammam, Khobar, and Jubail?', a: 'We deliver the same level of quality and professionalism across all Eastern Province cities, with an integrated logistics team ensuring on-time delivery at every location.' },
      ]}
    />
  );
}
