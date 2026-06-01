'use client';
import Link from 'next/link';

interface LogoProps {
  locale: string;
  size?: 'sm' | 'md' | 'lg';
  /** 'dark' = on dark header (white text), 'light' = on light bg (navy text) */
  variant?: 'dark' | 'light';
}

export default function Logo({ locale, size = 'md', variant = 'dark' }: LogoProps) {
  const scales = { sm: 0.55, md: 0.78, lg: 1.05 };
  const s = scales[size];
  const w = Math.round(320 * s);
  const h = Math.round(100 * s);

  // On dark backgrounds (header/footer) → white text; on light bg → navy
  const wordColor = variant === 'light' ? '#293d50' : '#F9FAFB';

  return (
    <Link href={`/${locale}`} style={{ textDecoration: 'none', display: 'inline-flex', lineHeight: 0 }}>
      <svg
        width={w}
        height={h}
        viewBox="0 0 320 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Expo Time — Event Organizer"
      >
        {/* "e" */}
        <text
          x="5"
          y="68"
          fontFamily="'Poppins', system-ui, sans-serif"
          fontWeight="700"
          fontSize="68"
          fill={wordColor}
          letterSpacing="-1"
        >
          e
        </text>

        {/* Yellow checkmark replacing "x" — positioned ~x:54–118 */}
        <polyline
          points="60,24 82,66 118,16"
          stroke="#f3c716"
          strokeWidth="12"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* "potime" */}
        <text
          x="114"
          y="68"
          fontFamily="'Poppins', system-ui, sans-serif"
          fontWeight="700"
          fontSize="68"
          fill={wordColor}
          letterSpacing="-1"
        >
          potime
        </text>

        {/* "Event Organizer" subtitle */}
        <text
          x="160"
          y="89"
          fontFamily="'Poppins', system-ui, sans-serif"
          fontWeight="500"
          fontSize="13"
          fill="#f3c716"
          textAnchor="middle"
          letterSpacing="2"
        >
          Event Organizer
        </text>
      </svg>
    </Link>
  );
}
