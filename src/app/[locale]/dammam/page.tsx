import type { Metadata } from 'next';
import CityPageTemplate from '@/components/CityPageTemplate';
import { generatePageMetadata } from '@/lib/seo';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata(
    locale,
    'تصميم أجنحة المعارض في الدمام | إكسبو تايم',
    'Exhibition Stand Design Dammam | Expo Time',
    'شركة إكسبو تايم لتصميم وتنفيذ أجنحة المعارض في الدمام. نخدم جميع مراكز المعارض في المنطقة الشرقية بخبرة احترافية.',
    'Expo Time for exhibition stand design and fabrication in Dammam. We serve all exhibition centers in the Eastern Province with professional expertise.',
    '/dammam'
  );
}

export default async function DammamPage({ params }: Props) {
  const { locale } = await params;
  return (
    <CityPageTemplate
      locale={locale}
      cityAr="الدمام"
      cityEn="Dammam"
      descAr="الدمام عاصمة المنطقة الشرقية ومركز الصناعة النفطية في المملكة، تحتضن معارض متخصصة في قطاعات الطاقة والبتروكيماويات والتكنولوجيا. إكسبو تايم تقدم أجنحة معارض مبتكرة مصممة خصيصاً لاحتياجات شركات المنطقة الشرقية."
      descEn="Dammam, the capital of the Eastern Province and the hub of Saudi Arabia's oil industry, hosts specialized exhibitions in energy, petrochemicals, and technology. Expo Time delivers innovative exhibition stands designed specifically for the needs of Eastern Province companies."
      venues={['مركز الدمام الدولي للمعارض', 'فندق شيراتون الدمام - قاعات المؤتمرات', 'مجمع أرامكو للمعارض والفعاليات', 'مركز الخليج للمؤتمرات']}
      venuesEn={['Dammam International Exhibition Center', 'Sheraton Dammam Hotel - Conference Halls', 'Aramco Exhibition & Events Complex', 'Gulf Conference Center']}
      image="https://images.unsplash.com/photo-1611516491426-03025e6043c8?w=800&q=80"
      exhibitionsAr={['معرض إيباك للبترول والغاز', 'معرض بلاست للبتروكيماويات', 'معرض الطاقة السعودية', 'معرض الصناعة الخليجية', 'معرض المياه والطاقة الشرق أوسطي']}
      exhibitionsEn={['IPEAC Petroleum & Gas Exhibition', 'Plast Petrochemicals Exhibition', 'Saudi Energy Exhibition', 'Gulf Industry Fair', 'Middle East Water & Energy Exhibition']}
      faqsAr={[
        { q: 'هل إكسبو تايم تعمل في الدمام والمنطقة الشرقية؟', a: 'نعم، لدينا حضور قوي في الدمام والمنطقة الشرقية ونغطي جميع مراكز المعارض والفعاليات في المنطقة.' },
        { q: 'ما تخصصاتكم في معارض قطاع الطاقة بالدمام؟', a: 'متخصصون في تصميم أجنحة شركات النفط والغاز والبتروكيماويات مع مراعاة متطلبات السلامة الصناعية الخاصة بهذا القطاع.' },
        { q: 'هل تقدمون خدمات الشحن والنقل للأجنحة داخل المنطقة الشرقية؟', a: 'نعم، نقدم خدمات لوجستية شاملة تشمل الشحن والنقل والتركيب والفك في جميع أنحاء المنطقة الشرقية.' },
      ]}
      faqsEn={[
        { q: 'Does Expo Time operate in Dammam and the Eastern Province?', a: 'Yes, we have a strong presence in Dammam and the Eastern Province, covering all exhibition centers and event venues in the region.' },
        { q: 'What are your specialties for energy sector exhibitions in Dammam?', a: 'We specialize in designing stands for oil, gas, and petrochemical companies while adhering to industrial safety requirements specific to this sector.' },
        { q: 'Do you offer shipping and transport services within the Eastern Province?', a: 'Yes, we provide comprehensive logistics including shipping, transport, installation, and dismantling throughout the Eastern Province.' },
      ]}
    />
  );
}
