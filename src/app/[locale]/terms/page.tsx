import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { generatePageMetadata } from '@/lib/seo';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata(locale,
    'الشروط والأحكام | إكسبو تايم', 'Terms & Conditions | Expo Time',
    'الشروط والأحكام لاستخدام خدمات إكسبو تايم',
    'Terms and conditions for using Expo Time services',
    '/terms'
  );
}

export default async function TermsPage({ params }: Props) {
  const { locale } = await params;
  const isRtl = locale === 'ar';

  const sections = isRtl ? [
    { title: 'قبول الشروط', content: 'باستخدامك لموقعنا أو خدماتنا، فإنك توافق على الالتزام بهذه الشروط والأحكام. إذا كنت لا توافق على أي جزء منها، يرجى عدم استخدام خدماتنا.' },
    { title: 'الخدمات المقدمة', content: 'تقدم إكسبو تايم خدمات تصميم وتنفيذ أجنحة المعارض وإدارة الفعاليات. تفاصيل كل خدمة وأسعارها تُحدد في العقد المبرم مع كل عميل على حدة.' },
    { title: 'الملكية الفكرية', content: 'جميع التصاميم والمحتوى المنشور على الموقع هي ملكية حصرية لإكسبو تايم ومحمية بموجب قوانين حقوق الملكية الفكرية. لا يجوز نسخها أو توزيعها دون إذن كتابي مسبق.' },
    { title: 'المسؤولية', content: 'نسعى دائماً لتقديم أفضل الخدمات، لكننا لا نضمن خلو الموقع من الأخطاء أو الانقطاعات. لا تتحمل الشركة المسؤولية عن أي أضرار غير مباشرة ناجمة عن استخدام خدماتنا.' },
    { title: 'الإلغاء والاسترداد', content: 'تخضع سياسات الإلغاء والاسترداد للشروط المحددة في كل عقد. يرجى مراجعة العقد الخاص بك أو التواصل معنا لمزيد من التفاصيل.' },
    { title: 'التعديلات', content: 'نحتفظ بالحق في تعديل هذه الشروط في أي وقت. ستُعلَن التعديلات على هذه الصفحة وتصبح سارية فور نشرها.' },
    { title: 'القانون المعمول به', content: 'تخضع هذه الشروط وتُفسَّر وفقاً لقوانين المملكة العربية السعودية. تختص المحاكم السعودية بالنظر في أي نزاع ينشأ عنها.' },
  ] : [
    { title: 'Acceptance of Terms', content: 'By using our website or services, you agree to be bound by these terms and conditions. If you do not agree with any part, please do not use our services.' },
    { title: 'Services Provided', content: 'Expo Time provides exhibition stand design, fabrication, and event management services. Details and pricing for each service are specified in the individual contract with each client.' },
    { title: 'Intellectual Property', content: 'All designs and content published on this website are the exclusive property of Expo Time and protected by intellectual property laws. Copying or distribution without prior written permission is prohibited.' },
    { title: 'Liability', content: 'We always strive to provide the best services, but we do not guarantee the website will be error-free or uninterrupted. The company is not liable for any indirect damages resulting from use of our services.' },
    { title: 'Cancellation & Refunds', content: 'Cancellation and refund policies are subject to the terms specified in each contract. Please review your contract or contact us for more details.' },
    { title: 'Modifications', content: 'We reserve the right to modify these terms at any time. Changes will be posted on this page and become effective upon publication.' },
    { title: 'Governing Law', content: 'These terms are governed by and construed in accordance with the laws of Saudi Arabia. Saudi courts have jurisdiction over any disputes arising from them.' },
  ];

  return (
    <>
      <Header />
      <main style={{ background: '#070f18', minHeight: '100vh', paddingTop: '7rem', paddingBottom: '5rem' }} dir={isRtl ? 'rtl' : 'ltr'}>
        <div className="container-custom" style={{ maxWidth: 800, margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ marginBottom: '3rem' }}>
            <h1 style={{ fontSize: 'clamp(2rem,4vw,2.75rem)', fontWeight: 800, color: '#F9FAFB', marginBottom: '0.75rem' }}>
              {isRtl ? 'الشروط والأحكام' : 'Terms & Conditions'}
            </h1>
            <p style={{ color: '#64748b', fontSize: '0.9rem' }}>
              {isRtl ? 'آخر تحديث: يناير 2025' : 'Last updated: January 2025'}
            </p>
            <div style={{ height: 3, width: 60, background: 'linear-gradient(90deg, #f3c716, #62b1b6)', borderRadius: 2, marginTop: '1rem' }} />
          </div>

          <p style={{ color: '#94a3b8', lineHeight: 1.8, marginBottom: '2.5rem', fontSize: '1rem' }}>
            {isRtl
              ? 'يرجى قراءة هذه الشروط والأحكام بعناية قبل استخدام خدمات إكسبو تايم. تحكم هذه الشروط علاقتك بالشركة.'
              : 'Please read these terms and conditions carefully before using Expo Time services. These terms govern your relationship with the company.'}
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {sections.map((s, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '1rem', padding: '1.75rem' }}>
                <h2 style={{ color: '#62b1b6', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.875rem' }}>
                  {i + 1}. {s.title}
                </h2>
                <p style={{ color: '#94a3b8', lineHeight: 1.8, margin: 0 }}>{s.content}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'rgba(98,177,182,0.06)', border: '1px solid rgba(98,177,182,0.2)', borderRadius: '1rem', textAlign: 'center' }}>
            <p style={{ color: '#94a3b8', margin: 0 }}>
              {isRtl ? 'للاستفسار: ' : 'For inquiries: '}
              <a href="mailto:info@expo-time.co" style={{ color: '#62b1b6', textDecoration: 'none' }}>info@expo-time.co</a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
