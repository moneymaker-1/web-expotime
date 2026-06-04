import type { Metadata } from 'next';
import CityPageTemplate from '@/components/CityPageTemplate';
import { generatePageMetadata } from '@/lib/seo';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata(
    locale,
    'تصميم أجنحة المعارض في الرياض | إكسبو تايم',
    'Exhibition Stand Design Riyadh | Expo Time',
    'أفضل شركة تصميم أجنحة معارض في الرياض. إكسبو تايم تقدم خدمات تصميم وتنفيذ أجنحة المعارض في جميع مراكز المعارض بالرياض.',
    'Best exhibition stand design company in Riyadh. Expo Time provides stand design and fabrication services at all exhibition centers in Riyadh.',
    '/riyadh'
  );
}

export default async function RiyadhPage({ params }: Props) {
  const { locale } = await params;
  return (
    <CityPageTemplate
      locale={locale}
      cityAr="الرياض"
      cityEn="Riyadh"
      descAr="الرياض عاصمة المملكة العربية السعودية ومركز الأعمال الرئيسي، تستضيف أكبر المعارض والمؤتمرات على مستوى المنطقة. إكسبو تايم هي الشريك المثالي لتصميم وتنفيذ أجنحة المعارض في الرياض، بخبرة تمتد لأكثر من 10 أعوام في السوق السعودي."
      descEn="Riyadh, the capital of Saudi Arabia and the main business hub, hosts the region's largest exhibitions and conferences. Expo Time is the ideal partner for exhibition stand design and fabrication in Riyadh, with over 10 years of experience in the Saudi market."
      venues={['مركز الرياض الدولي للمؤتمرات والمعارض (RICEC)', 'ميدان إكسبو الرياض', 'أرينا درعية', 'مركز الملك عبدالعزيز الثقافي العالمي']}
      venuesEn={['Riyadh International Convention and Exhibition Center (RICEC)', 'Riyadh Expo Grounds', 'Diriyah Arena', 'King Abdulaziz World Culture Center']}
      image="https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?w=800&q=80"
      exhibitionsAr={['معرض سعودي بيلد - البناء والتشييد', 'معرض السعودية للزراعة', 'معرض القوى السعودي', 'منتدى مبادرة مستقبل الاستثمار', 'معرض السيفكس للأمن', 'معرض أيدكس للدفاع']}
      exhibitionsEn={['Saudi Build - Construction Exhibition', 'Saudi Agriculture Exhibition', 'Saudi Power Exhibition', 'Future Investment Initiative Forum', 'SAIFEX Security Exhibition', 'IDEX Defense Exhibition']}
      faqsAr={[
        { q: 'ما أفضل شركة تصميم أجنحة معارض في الرياض؟', a: 'إكسبو تايم من أفضل شركات تصميم أجنحة المعارض في الرياض بخبرة تزيد عن 10 أعوام وأكثر من 5000 مشروع ناجح.' },
        { q: 'هل تخدمون جميع مراكز المعارض في الرياض؟', a: 'نعم، نخدم جميع مراكز المعارض في الرياض بما فيها RICEC وميدان إكسبو وجميع الفنادق الكبرى.' },
        { q: 'كم تبلغ تكلفة جناح المعرض في الرياض؟', a: 'تتراوح أسعار أجنحة المعارض حسب الحجم والتصميم. تواصل معنا للحصول على عرض سعر مخصص لاحتياجاتك.' },
      ]}
      faqsEn={[
        { q: 'What is the best exhibition stand design company in Riyadh?', a: 'Expo Time is one of the best exhibition stand design companies in Riyadh with over 10 years of experience and more than 5000 successful projects.' },
        { q: 'Do you serve all exhibition centers in Riyadh?', a: 'Yes, we serve all exhibition centers in Riyadh including RICEC, Expo Grounds, and all major hotels.' },
        { q: 'What is the cost of an exhibition stand in Riyadh?', a: 'Exhibition stand prices vary based on size and design. Contact us for a customized quote for your specific needs.' },
      ]}
    />
  );
}
