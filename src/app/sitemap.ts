import type { MetadataRoute } from 'next';

const baseUrl = 'https://expo-time.co';
const locales = ['ar', 'en'];

const mainPages = [
  '',
  '/about',
  '/services',
  '/portfolio',
  '/projects',
  '/industries',
  '/clients',
  '/blog',
  '/news',
  '/careers',
  '/contact',
];

const servicePages = [
  '/exhibition-stand-design',
  '/exhibition-booth-fabrication',
  '/exhibition-contractor',
  '/conference-management',
  '/event-management',
  '/event-production',
  '/exhibition-services',
  '/custom-booths',
  '/modular-booths',
  '/temporary-structures',
  '/brand-activations',
];

const cityPages = [
  '/riyadh',
  '/jeddah',
  '/dammam',
  '/khobar',
  '/makkah',
  '/madinah',
  '/neom',
  '/eastern-province',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  const allPages = [...mainPages, ...servicePages, ...cityPages];

  for (const page of allPages) {
    for (const locale of locales) {
      entries.push({
        url: `${baseUrl}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: page === '' ? 'daily' : page.includes('blog') ? 'weekly' : 'monthly',
        priority: page === '' ? 1.0 : page.includes('service') || page.includes('exhibition') ? 0.9 : 0.8,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${baseUrl}/${l}${page}`])
          ),
        },
      });
    }
  }

  return entries;
}
