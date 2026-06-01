import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { generatePageMetadata } from '@/lib/seo';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata(
    locale,
    'خدمات المعارض الشاملة في المملكة العربية السعودية | إكسبو تايم',
    'Exhibition Services Saudi Arabia | Expo Time',
    'إكسبو تايم توفر خدمات معارض شاملة في السعودية تشمل التصميم والتصنيع والتركيب والدعم اللوجستي والترجمة وكل ما تحتاجه لمشاركة ناجحة.',
    'Expo Time provides comprehensive exhibition services in Saudi Arabia including design, fabrication, installation, logistics support, translation, and everything you need for a successful participation.',
    '/exhibition-services'
  );
}

export default async function ExhibitionServicesPage({ params }: Props) {
  const { locale } = await params;
  return (
    <ServicePageTemplate
      locale={locale}
      titleAr="خدمات المعارض الشاملة في المملكة العربية السعودية"
      titleEn="Comprehensive Exhibition Services Saudi Arabia"
      subtitleAr="وجهتك الواحدة لكل ما تحتاجه في معارضك: من التصميم والتصنيع إلى اللوجستيك والطاقم البشري والتقنيات الرقمية والدعم الميداني"
      subtitleEn="Your one-stop destination for everything you need at your exhibitions: from design and fabrication to logistics, staffing, digital technologies, and on-site support"
      descAr="المشاركة الناجحة في المعارض تتطلب تنسيق عشرات الخدمات المتداخلة. إكسبو تايم توفر منظومة متكاملة من الخدمات تحت سقف واحد، مما يوفر عليك الوقت والجهد والتكاليف الناجمة عن التعامل مع موردين متعددين. سواء احتجت تصميم جناح أو إعداد مواد ترويجية أو توفير مترجمين أو طاقم استقبال أو تقنيات عرض ذكية، نحن هنا. نغطي المعارض والفعاليات في جميع مراكز المعارض السعودية كمعرض الرياض الدولي ومركز الرياض للمعارض والمؤتمرات وأرضية معارض جدة وغيرها."
      descEn="Successful exhibition participation requires coordinating dozens of interrelated services. Expo Time provides an integrated suite of services under one roof, saving you time, effort, and costs arising from dealing with multiple suppliers. Whether you need stand design, promotional materials preparation, interpreters, reception staff, or smart presentation technologies, we are here. We cover exhibitions and events at all Saudi exhibition centers including Riyadh International Exhibition, Riyadh Exhibition and Convention Center, Jeddah Exhibition Ground, and others."
      featuresAr={[
        'تصميم وتصنيع وتركيب الأجنحة',
        'اللوجستيك والنقل والجمارك',
        'طاقم استقبال وترجمة فورية',
        'مواد ترويجية ومطبوعات عالية الجودة',
        'شاشات وتقنيات عرض تفاعلية',
        'خدمات تصوير وتوثيق المعرض',
        'دعم ميداني 24/7 أثناء المعرض',
        'إدارة العلاقات مع منظمي المعرض',
      ]}
      featuresEn={[
        'Stand design, fabrication, and installation',
        'Logistics, transportation, and customs clearance',
        'Reception staff and simultaneous interpretation',
        'Promotional materials and high-quality printing',
        'Screens and interactive presentation technologies',
        'Photography and exhibition documentation services',
        '24/7 on-site support during the exhibition',
        'Exhibition organizer relationship management',
      ]}
      faqsAr={[
        { q: 'هل يمكنني الاستعانة ببعض خدماتكم فقط؟', a: 'بالتأكيد، خدماتنا مرنة ويمكنك الاختيار من بينها حسب احتياجاتك، سواء أردت خدمة واحدة أو الحزمة الشاملة.' },
        { q: 'هل تقدمون خدمات تأجير الأثاث ومعدات المعرض؟', a: 'نعم، نوفر خدمة تأجير الأثاث والإضاءة ومعدات العرض وكل المستلزمات الخاصة بالجناح.' },
        { q: 'كيف تتعاملون مع الطوارئ أثناء المعرض؟', a: 'لدينا فريق دعم ميداني يعمل طوال ساعات المعرض، ونعتمد خطط طوارئ مفصّلة لمعالجة أي مشكلة خلال دقائق.' },
      ]}
      faqsEn={[
        { q: 'Can I use only some of your services?', a: 'Absolutely, our services are flexible and you can choose among them according to your needs, whether you want a single service or the comprehensive package.' },
        { q: 'Do you provide furniture and exhibition equipment rental?', a: 'Yes, we provide furniture, lighting, display equipment, and all booth accessories rental.' },
        { q: 'How do you handle emergencies during the exhibition?', a: 'We have a field support team that works throughout the exhibition hours, and we adopt detailed emergency plans to address any issue within minutes.' },
      ]}
      image="https://images.unsplash.com/photo-1559223607-b4d0555ae227?w=800&q=80"
      relatedServicesAr={['تصميم الأجنحة', 'مقاول معارض', 'إدارة الفعاليات']}
      relatedServicesEn={['Stand Design', 'Exhibition Contractor', 'Event Management']}
    />
  );
}
