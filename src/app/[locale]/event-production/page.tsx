import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { generatePageMetadata } from '@/lib/seo';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata(
    locale,
    'إنتاج الفعاليات في المملكة العربية السعودية | إكسبو تايم',
    'Event Production Saudi Arabia | Expo Time',
    'إكسبو تايم تقدم خدمات إنتاج الفعاليات الاحترافية في السعودية. صوت وإضاءة وشاشات وديكور وتقنيات متقدمة لفعاليات استثنائية.',
    'Expo Time provides professional event production services in Saudi Arabia. Audio, lighting, screens, décor, and advanced technology for exceptional events.',
    '/event-production'
  );
}

export default async function EventProductionPage({ params }: Props) {
  const { locale } = await params;
  return (
    <ServicePageTemplate
      locale={locale}
      titleAr="إنتاج الفعاليات في المملكة العربية السعودية"
      titleEn="Event Production Saudi Arabia"
      subtitleAr="نجهز فعاليتك بأحدث تقنيات الصوت والإضاءة والشاشات والمؤثرات البصرية لخلق تجربة حسية شاملة تأسر عقول الحضور وقلوبهم"
      subtitleEn="We equip your event with the latest audio, lighting, screens, and visual effects technology to create a comprehensive sensory experience that captivates the minds and hearts of attendees"
      descAr="الإنتاج الفني هو الروح التي تُحيي الفعالية وتحوّلها من مجرد اجتماع إلى تجربة لا تُنسى. في إكسبو تايم، نمتلك أسطولاً من أحدث معدات الصوت والإضاءة والشاشات LED وأنظمة الواقع المعزز والتوقيع البصري الضوئي. مهندسو الصوت والإضاء المحترفون لدينا يعملون مع فريق الديكور والتصميم لإيجاد تجربة بصرية وحسية متكاملة. استخدمنا هذه التقنيات في فعاليات حفلات إطلاق منتجات عالمية، والاحتفاليات الوطنية، والمهرجانات الترفيهية في المملكة العربية السعودية."
      descEn="Technical production is the soul that brings an event to life and transforms it from a mere meeting into an unforgettable experience. At Expo Time, we own a fleet of the latest audio, lighting, LED screen, augmented reality, and projection mapping equipment. Our professional audio and lighting engineers work with the décor and design team to create an integrated visual and sensory experience. We have used these technologies in product launch events for global brands, national celebrations, and entertainment festivals across Saudi Arabia."
      featuresAr={[
        'أنظمة صوت احترافية لجميع أحجام الفعاليات',
        'إضاءة فنية ومؤثرات بصرية متطورة',
        'شاشات LED وجدران فيديو عالية الدقة',
        'تقنية الـ Projection Mapping المذهلة',
        'مؤثرات خاصة: دخان، نيران باردة، كونفيتي',
        'أنظمة بث مباشر ومحتوى رقمي',
        'فريق تقني على الموقع طوال الفعالية',
        'تأجير معدات الإنتاج للفرق المستقلة',
      ]}
      featuresEn={[
        'Professional audio systems for all event sizes',
        'Artistic lighting and advanced visual effects',
        'High-definition LED screens and video walls',
        'Stunning Projection Mapping technology',
        'Special effects: fog, cold sparks, confetti',
        'Live streaming systems and digital content',
        'Technical team on-site throughout the event',
        'Production equipment rental for independent teams',
      ]}
      faqsAr={[
        { q: 'هل تعملون مع منظمي الفعاليات الآخرين؟', a: 'نعم، نقدم خدمات الإنتاج التقني بشكل مستقل لشركات إدارة الفعاليات الأخرى، حيث نتولى الجانب التقني فقط.' },
        { q: 'ما الحد الأقصى لحجم الفعالية التي يمكنكم تغطيتها؟', a: 'غطّينا فعاليات بأكثر من 10,000 حاضر في أماكن مفتوحة ومغلقة، مع قدرة على التوسع لأي حجم.' },
        { q: 'هل تمتلكون المعدات أم تستأجرونها؟', a: 'نمتلك أسطولاً ضخماً من المعدات الاحترافية، ونستكمل بالاستئجار عند الحاجة لمعدات متخصصة، مما يضمن توفر دائم للمعدات لعملائنا.' },
      ]}
      faqsEn={[
        { q: 'Do you work with other event organizers?', a: 'Yes, we provide technical production services independently to other event management companies, handling only the technical aspect.' },
        { q: 'What is the maximum event size you can cover?', a: 'We have covered events with over 10,000 attendees in both indoor and outdoor venues, with the capacity to scale to any size.' },
        { q: 'Do you own the equipment or rent it?', a: 'We own a large fleet of professional equipment, and supplement with rentals when specialized equipment is needed, ensuring constant equipment availability for our clients.' },
      ]}
      image="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80"
      relatedServicesAr={['إدارة الفعاليات', 'إدارة المؤتمرات', 'تفعيل العلامات التجارية']}
      relatedServicesEn={['Event Management', 'Conference Management', 'Brand Activations']}
    />
  );
}
