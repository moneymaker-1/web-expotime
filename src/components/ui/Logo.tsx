'use client';
import Link from 'next/link';

interface LogoProps {
  locale: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'dark' | 'light';
}

export default function Logo({ locale, size = 'md', variant = 'dark' }: LogoProps) {
  const scales = { sm: 0.6, md: 0.85, lg: 1.15 };
  const s = scales[size];
  const w = Math.round(260 * s);
  const h = Math.round(90 * s);

  const textColor = variant === 'light' ? '#FFFFFF' : '#293d50';
  const onDark = variant === 'dark' ? false : true;
  // On dark backgrounds (header), use white for the "expotime" text
  const wordColor = '#F9FAFB';

  return (
    <Link href={`/${locale}`} style={{ textDecoration: 'none', display: 'inline-flex', lineHeight: 0 }}>
      <svg
        width={w}
        height={h}
        viewBox="0 0 260 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Expo Time — Event Organizer"
      >
        {/* "e" */}
        <text
          x="4"
          y="62"
          fontFamily="'Poppins', 'Cairo', system-ui, sans-serif"
          fontWeight="800"
          fontSize="64"
          fill={wordColor}
          letterSpacing="-1"
        >
          e
        </text>

        {/* Yellow checkmark in place of "x" — positioned at ~x:52-105 */}
        {/* Short left leg: top-left to bottom-center */}
        <polyline
          points="56,22 76,60 108,14"
          stroke="#f3c716"
          strokeWidth="13"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* "potime" */}
        <text
          x="104"
          y="62"
          fontFamily="'Poppins', 'Cairo', system-ui, sans-serif"
          fontWeight="800"
          fontSize="64"
          fill={wordColor}
          letterSpacing="-1"
        >
          potime
        </text>

        {/* "Event Organizer" subtitle */}
        <text
          x="130"
          y="82"
          fontFamily="'Poppins', 'Cairo', system-ui, sans-serif"
          fontWeight="500"
          fontSize="14"
          fill="#f3c716"
          textAnchor="middle"
          letterSpacing="1.5"
        >
          Event Organizer
        </text>
      </svg>
    </Link>
  );
}
