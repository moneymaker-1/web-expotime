import Link from 'next/link';

export default function NotFound() {
  return (
    <html lang="ar" dir="rtl">
      <body style={{ backgroundColor: '#0f1e2d', color: '#F9FAFB', fontFamily: 'system-ui' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', textAlign: 'center', padding: '2rem' }}>
          <h1 style={{ fontSize: '6rem', fontWeight: '900', color: '#f3c716', margin: 0 }}>404</h1>
          <p style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>الصفحة غير موجودة</p>
          <Link href="/ar" style={{ padding: '0.75rem 2rem', background: '#f3c716', color: '#0f1e2d', borderRadius: '0.5rem', fontWeight: '700', textDecoration: 'none' }}>
            العودة للرئيسية
          </Link>
        </div>
      </body>
    </html>
  );
}
