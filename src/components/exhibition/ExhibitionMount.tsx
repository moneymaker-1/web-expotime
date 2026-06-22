'use client';

import dynamic from 'next/dynamic';

// WebGL experience is client-only (no SSR — relies on window / canvas).
const ExhibitionExperience = dynamic(() => import('./ExhibitionExperience'), {
  ssr: false,
  loading: () => (
    <div
      style={{
        position: 'fixed', inset: 0, background: '#0a0a0c',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: '#fff', fontWeight: 900, letterSpacing: '0.1em',
      }}
    >
      EXPO TIME
    </div>
  ),
});

export default function ExhibitionMount({ locale }: { locale: string }) {
  return <ExhibitionExperience locale={locale} />;
}
