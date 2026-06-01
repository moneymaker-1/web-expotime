import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { generatePageMetadata } from '@/lib/seo';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata(locale,
    'سياسة الخصوصية | إكسبو تايم', 'Privacy Policy | Expo Time',
    'سياسة الخصوصية لموقع إكسبو تايم — كيف نحمي بياناتك الشخصية',
    'Expo Time privacy policy — how we protect your personal data',
    '/privacy'
  );
}

export default async function PrivacyPage({ params }: Props) {
  const { locale } = await params;
  const isRtl = locale === 'ar';

  const sections = isRtl ? [
    { title: 'المعلومات التي نجمعها', content: 'نجمع المعلومات التي تقدمها طوعاً عند التواصل معنا مثل الاسم والبريد الإلكتروني ورقم الهاتف. كما نجمع بيانات الاستخدام تلقائياً لتحسين تجربتك.' },
    { title: 'كيف نستخدم معلوماتك', content: 'نستخدم معلوماتك للرد على استفساراتك، وإرسال عروض الخدمات، وتحسين موقعنا. لن نبيع بياناتك أو نشاركها مع أطراف ثالثة دون موافقتك.' },
    { title: 'حماية البيانات', content: 'نطبق إجراءات أمنية صارمة لحماية بياناتك من الوصول غير المصرح به أو الكشف أو التعديل أو الحذف.' },
    { title: 'ملفات تعريف الارتباط', content: 'يستخدم موقعنا ملفات تعريف الارتباط لتحسين تجربة التصفح. يمكنك تعطيلها من إعدادات المتصفح.' },
    { title: 'حقوقك', content: 'يحق لك طلب الاطلاع على بياناتك أو تعديلها أو حذفها في أي وقت. تواصل معنا عبر info@expo-time.co.' },
    { title: 'التحديثات', content: 'قد نحدث هذه السياسة من وقت لآخر. سنخطرك بأي تغييرات جوهرية عبر البريد الإلكتروني أو إشعار بارز على الموقع.' },
  ] : [
    { title: 'Information We Collect', content: 'We collect information you voluntarily provide when contacting us, such as your name, email address, and phone number. We also automatically collect usage data to improve your experience.' },
    { title: 'How We Use Your Information', content: 'We use your information to respond to inquiries, send service proposals, and improve our website. We will not sell or share your data with third parties without your consent.' },
    { title: 'Data Protection', content: 'We implement strict security measures to protect your data from unauthorized access, disclosure, modification, or deletion.' },
    { title: 'Cookies', content: 'Our website uses cookies to enhance your browsing experience. You can disable them in your browser settings.' },
    { title: 'Your Rights', content: 'You have the right to request access to, modification of, or deletion of your data at any time. Contact us at info@expo-time.co.' },
    { title: 'Updates', content: 'We may update this policy from time to time. We will notify you of any material changes via email or a prominent notice on the website.' },
  ];

  return (
    <>
      <Header />
      <main style={{ background: '#070f18', minHeight: '100vh', paddingTop: '7rem', paddingBottom: '5rem' }} dir={isRtl ? 'rtl' : 'ltr'}>
        <div className="container-custom" style={{ maxWidth: 800, margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ marginBottom: '3rem' }}>
            <h1 style={{ fontSize: 'clamp(2rem,4vw,2.75rem)', fontWeight: 800, color: '#F9FAFB', marginBottom: '0.75rem' }}>
              {isRtl ? 'سياسة الخصوصية' : 'Privacy Policy'}
            </h1>
            <p style={{ color: '#64748b', fontSize: '0.9rem' }}>
              {isRtl ? 'آخر تحديث: يناير 2025' : 'Last updated: January 2025'}
            </p>
            <div style={{ height: 3, width: 60, background: 'linear-gradient(90deg, #f3c716, #62b1b6)', borderRadius: 2, marginTop: '1rem' }} />
          </div>

          <p style={{ color: '#94a3b8', lineHeight: 1.8, marginBottom: '2.5rem', fontSize: '1rem' }}>
            {isRtl
              ? 'تلتزم شركة إكسبو تايم بحماية خصوصيتك. توضح هذه السياسة كيفية جمع معلوماتك الشخصية واستخدامها وحمايتها.'
              : 'Expo Time is committed to protecting your privacy. This policy explains how we collect, use, and protect your personal information.'}
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {sections.map((s, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '1rem', padding: '1.75rem' }}>
                <h2 style={{ color: '#f3c716', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.875rem' }}>
                  {i + 1}. {s.title}
                </h2>
                <p style={{ color: '#94a3b8', lineHeight: 1.8, margin: 0 }}>{s.content}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'rgba(243,199,22,0.06)', border: '1px solid rgba(243,199,22,0.2)', borderRadius: '1rem', textAlign: 'center' }}>
            <p style={{ color: '#94a3b8', margin: 0 }}>
              {isRtl ? 'للاستفسار: ' : 'For inquiries: '}
              <a href="mailto:info@expo-time.co" style={{ color: '#f3c716', textDecoration: 'none' }}>info@expo-time.co</a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
