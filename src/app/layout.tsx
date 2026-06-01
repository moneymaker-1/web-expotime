import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Expo Time | إكسبو تايم',
  description: 'Exhibition Stand Design & Fabrication Saudi Arabia',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
