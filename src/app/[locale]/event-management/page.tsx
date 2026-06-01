import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { generatePageMetadata } from '@/lib/seo';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata(
    locale,
    'إدارة الفعاليات في الرياض وجميع أنحاء المملكة | إكسبو تايم',
    'Event Management Riyadh Saudi Arabia | Expo Time',
    'إكسبو تايم شركة إدارة فعاليات رائدة في الرياض والمملكة العربية السعودية. نخطط وننفذ ونُدير جميع أنواع الفعاليات التجارية والحكومية والترفيهية.',
    'Expo Time is a leading event management company in Riyadh and Saudi Arabia. We plan, execute, and manage all types of corporate, government, and entertainment events.',
    '/event-management'
  );
}

export default async function EventManagementPage({ params }: Props) {
  const { locale } = await params;
  return (
    <ServicePageTemplate
      locale={locale}
      titleAr="إدارة الفعاليات في الرياض وجميع أنحاء المملكة"
      titleEn="Event Management Riyadh Saudi Arabia"
      subtitleAr="من الفعاليات الصغيرة الراقية إلى المهرجانات الكبرى، نحن شركاؤكم في تخطيط وإدارة كل فعالية تجارية أو حكومية أو اجتماعية بتميّز واحترافية"
      subtitleEn="From intimate premium events to large-scale festivals, we are your partners in planning and managing every corporate, government, or social event with excellence and professionalism"
      descAr="إدارة الفعاليات فن وعلم في آنٍ واحد. في إكسبو تايم، نمتلك الأدوات والخبرة والشغف اللازمة لتحويل رؤيتك إلى فعالية استثنائية تترك أثراً عميقاً في ذاكرة الحضور. منذ 2008، نفّذنا أكثر من 500 فعالية لعملاء من القطاعين الحكومي والخاص في مختلف مدن المملكة. فريقنا يضم مديري فعاليات معتمدين، ومنسقي لوجستيك متخصصين، ومبدعين في تصميم التجارب البصرية والحسية. نتعامل مع كل فعالية باعتبارها مشروعاً فريداً يستحق أفضل ما لدينا."
      descEn="Event management is both an art and a science. At Expo Time, we have the tools, experience, and passion to transform your vision into an exceptional event that leaves a lasting impression on attendees. Since 2008, we have executed over 500 events for clients from both the government and private sectors across various Saudi cities. Our team includes certified event managers, specialized logistics coordinators, and creative professionals in visual and sensory experience design. We treat every event as a unique project that deserves our very best."
      featuresAr={[
        'تخطيط استراتيجي شامل لكل فعالية',
        'فريق متكامل من المتخصصين والمبدعين',
        'إدارة الميزانية والتكاليف بشفافية كاملة',
        'شبكة موردين وشركاء موثوقون في كل مدن المملكة',
        'تصميم تجارب بصرية وحسية استثنائية',
        'إدارة الضيوف والدعوات والبروتوكول',
        'تغطية إعلامية ورقمية متكاملة',
        'تقييم الأداء وقياس نجاح الفعالية',
      ]}
      featuresEn={[
        'Comprehensive strategic planning for every event',
        'Integrated team of specialists and creatives',
        'Transparent budget and cost management',
        'Reliable supplier and partner network across all Saudi cities',
        'Exceptional visual and sensory experience design',
        'Guest management, invitations, and protocol',
        'Integrated media and digital coverage',
        'Performance evaluation and event success measurement',
      ]}
      faqsAr={[
        { q: 'ما أنواع الفعاليات التي تديرونها؟', a: 'ندير طيفاً واسعاً من الفعاليات تشمل حفلات إطلاق المنتجات، الاحتفاليات الوطنية، أيام الشركات، مراسم التخرج، حفلات الجوائز، المعارض، والمؤتمرات.' },
        { q: 'هل تقدمون خدمات الفعاليات الحكومية؟', a: 'نعم، نمتلك خبرة واسعة في تنظيم الفعاليات الحكومية ونفهم متطلبات البروتوكول والأمن وإدارة كبار الضيوف.' },
        { q: 'كيف تضمنون جودة التنفيذ في يوم الفعالية؟', a: 'نعتمد نظام تشغيل متكاملاً يتضمن خطة عمل تفصيلية، اجتماعات تنسيق متعددة، وفريقاً ميدانياً متواجداً في الموقع قبل 12 ساعة من بدء الفعالية.' },
      ]}
      faqsEn={[
        { q: 'What types of events do you manage?', a: 'We manage a wide spectrum of events including product launches, national celebrations, corporate days, graduation ceremonies, award shows, exhibitions, and conferences.' },
        { q: 'Do you provide government event services?', a: 'Yes, we have extensive experience in organizing government events and understand protocol requirements, security, and VIP guest management.' },
        { q: 'How do you ensure quality execution on the event day?', a: 'We adopt an integrated operating system including a detailed work plan, multiple coordination meetings, and an on-site team present at the venue 12 hours before the event begins.' },
      ]}
      image="https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80"
      relatedServicesAr={['إدارة المؤتمرات', 'إنتاج الفعاليات', 'تفعيل العلامات التجارية']}
      relatedServicesEn={['Conference Management', 'Event Production', 'Brand Activations']}
    />
  );
}
