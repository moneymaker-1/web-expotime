'use client';
import Link from 'next/link';

interface LogoProps {
  locale: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ locale, size = 'md' }: LogoProps) {
  const scales = { sm: 0.75, md: 1, lg: 1.3 };
  const s = scales[size];

  return (
    <Link href={`/${locale}`} style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: `${12 * s}px` }}>
      {/* Icon mark */}
      <svg width={Math.round(44 * s)} height={Math.round(44 * s)} viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Outer square — navy */}
        <rect width="44" height="44" rx="8" fill="#293d50" />
        {/* E-shape / stand silhouette — yellow */}
        <rect x="9" y="10" width="16" height="4" rx="1.5" fill="#f3c716" />
        <rect x="9" y="10" width="4" height="24" rx="1.5" fill="#f3c716" />
        <rect x="9" y="20" width="13" height="4" rx="1.5" fill="#f3c716" />
        <rect x="9" y="30" width="16" height="4" rx="1.5" fill="#f3c716" />
        {/* Accent dot — cyan */}
        <circle cx="34" cy="13" r="4" fill="#62b1b6" />
        {/* Accent line — yellow faded */}
        <rect x="28" y="20" width="7" height="2.5" rx="1.25" fill="rgba(243,199,22,0.6)" />
        <rect x="28" y="25" width="7" height="2.5" rx="1.25" fill="rgba(243,199,22,0.4)" />
        <rect x="28" y="30" width="7" height="2.5" rx="1.25" fill="rgba(243,199,22,0.2)" />
      </svg>
      {/* Text mark */}
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
        <span style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: `${Math.round(20 * s)}px`,
          fontWeight: 800,
          color: '#F9FAFB',
          letterSpacing: '-0.02em',
        }}>
          Expo <span style={{ color: '#f3c716' }}>Time</span>
        </span>
        <span style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: `${Math.round(9 * s)}px`,
          fontWeight: 500,
          color: '#62b1b6',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          marginTop: '2px',
        }}>
          Event Organizer
        </span>
      </div>
    </Link>
  );
}
