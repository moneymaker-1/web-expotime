import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { generatePageMetadata } from '@/lib/seo';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata(
    locale,
    'مقاول معارض في الرياض والمملكة العربية السعودية | إكسبو تايم',
    'Exhibition Contractor Riyadh Saudi Arabia | Expo Time',
    'إكسبو تايم أفضل مقاول معارض في الرياض والمملكة العربية السعودية. نتولى تصميم وتنفيذ وإدارة الأجنحة من البداية حتى النهاية.',
    'Expo Time is the leading exhibition contractor in Riyadh and Saudi Arabia. We handle complete stand design, fabrication, and project management end-to-end.',
    '/exhibition-contractor'
  );
}

export default async function ExhibitionContractorPage({ params }: Props) {
  const { locale } = await params;
  return (
    <ServicePageTemplate
      locale={locale}
      titleAr="مقاول معارض في الرياض والمملكة العربية السعودية"
      titleEn="Exhibition Contractor in Riyadh Saudi Arabia"
      subtitleAr="نتولى إدارة مشروع جناحك بالكامل من لحظة التصميم حتى تفكيك الجناح بعد المعرض، لتتفرغ أنت لما يهم: لقاء العملاء وإتمام الصفقات"
      subtitleEn="We manage your booth project entirely from design to post-exhibition dismantling, so you can focus on what matters: meeting clients and closing deals"
      descAr="بوصفنا مقاول معارض شاملاً في المملكة العربية السعودية، تقدم إكسبو تايم حلاً متكاملاً لا يستدعي منك التعامل مع أكثر من جهة. من لحظة حصولنا على موافقتك على التصميم، نتولى التصنيع والنقل والتركيب والإشراف الميداني وصولاً إلى التفكيك والتخزين. فريقنا من مديري المشاريع يضمن تنسيقاً سلساً مع منظمي المعرض، والالتزام بجميع اللوائح والاشتراطات. خبرتنا تمتد لأكثر من 15 عاماً في أبرز معارض المملكة كمعارض الرياض الدولي والسيتي ووك وأرامكو والقطاعات الحكومية."
      descEn="As a full-service exhibition contractor in Saudi Arabia, Expo Time provides an integrated solution that requires you to deal with just one party. From the moment you approve the design, we handle fabrication, transportation, installation, on-site supervision, through to dismantling and storage. Our project managers ensure seamless coordination with exhibition organizers, and compliance with all regulations and requirements. Our experience spans over 15 years in Saudi Arabia's premier exhibitions including Riyadh International, CityWalk, Aramco, and government sector events."
      featuresAr={[
        'إدارة مشروع متكاملة من البداية حتى النهاية',
        'مدير مشروع مخصص لكل عميل',
        'تنسيق مباشر مع إدارة المعرض نيابةً عنك',
        'شبكة موردين موثوقة في جميع مدن المملكة',
        'خبرة في أبرز المعارض السعودية والخليجية',
        'تقارير يومية عن سير التنفيذ',
        'معالجة فورية لأي مشكلات ميدانية',
        'تأمين شامل على الجناح طوال فترة المعرض',
      ]}
      featuresEn={[
        'Integrated project management from start to finish',
        'Dedicated project manager for each client',
        'Direct coordination with exhibition management on your behalf',
        'Reliable supplier network across all Saudi cities',
        'Experience in Saudi Arabia and Gulf premier exhibitions',
        'Daily progress reports during execution',
        'Immediate handling of any on-site issues',
        'Comprehensive insurance on the booth throughout the exhibition',
      ]}
      faqsAr={[
        { q: 'ما الفرق بين مقاول المعارض وشركة تصميم الأجنحة؟', a: 'مقاول المعارض يتولى المشروع بالكامل شاملاً التصميم والتصنيع والتركيب والإدارة، بينما تقتصر شركات التصميم على الرسومات والمخططات فقط. إكسبو تايم توفر الخدمتين معاً.' },
        { q: 'هل تتولون الحصول على تصاريح المعرض؟', a: 'نعم، نتولى استكمال جميع الأوراق المطلوبة من منظمي المعرض والحصول على الموافقات اللازمة نيابةً عن عملائنا.' },
        { q: 'هل تعملون خارج المملكة العربية السعودية؟', a: 'نعم، نوفر خدماتنا في دول الخليج العربي والأردن ومصر لعملائنا المشاركين في المعارض الدولية.' },
      ]}
      faqsEn={[
        { q: 'What is the difference between an exhibition contractor and a stand design company?', a: 'An exhibition contractor handles the entire project including design, fabrication, installation, and management, while design companies only provide drawings and plans. Expo Time provides both services.' },
        { q: 'Do you handle obtaining exhibition permits?', a: 'Yes, we complete all paperwork required by exhibition organizers and obtain the necessary approvals on behalf of our clients.' },
        { q: 'Do you work outside Saudi Arabia?', a: 'Yes, we provide our services in the Gulf Cooperation Council countries, Jordan, and Egypt for clients participating in international exhibitions.' },
      ]}
      image="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
      relatedServicesAr={['تصميم الأجنحة', 'تنفيذ الأجنحة', 'خدمات المعارض الشاملة']}
      relatedServicesEn={['Stand Design', 'Booth Fabrication', 'Exhibition Services']}
    />
  );
}
