import Link from 'next/link';

export default function LocaleNotFound() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        textAlign: 'center',
        padding: '2rem',
        backgroundColor: '#0f1e2d',
        color: '#F9FAFB',
      }}
    >
      <h1 style={{ fontSize: '6rem', fontWeight: 900, color: '#f3c716', margin: 0, lineHeight: 1 }}>
        404
      </h1>
      <p style={{ fontSize: '1.5rem', marginBottom: '0.5rem', marginTop: '1rem' }}>
        الصفحة غير موجودة
      </p>
      <p style={{ fontSize: '1rem', color: '#9CA3AF', marginBottom: '2rem' }}>
        Page Not Found
      </p>
      <Link
        href="/ar"
        style={{
          padding: '0.875rem 2.5rem',
          background: 'linear-gradient(135deg, #f3c716, #d4a800)',
          color: '#0f1e2d',
          borderRadius: '0.625rem',
          fontWeight: 800,
          textDecoration: 'none',
          fontSize: '1rem',
        }}
      >
        العودة للرئيسية / Back to Home
      </Link>
    </div>
  );
}
