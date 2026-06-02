import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from 'next';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
  serverExternalPackages: ['sanity', '@sanity/client', 'next-sanity', '@sanity/vision'],
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Don't bundle Sanity on the client — it loads itself in the browser at runtime
      const sanityPackages = [
        'sanity',
        'next-sanity',
        '@sanity/vision',
        '@sanity/client',
        '@sanity/image-url',
      ]
      config.externals = [
        ...(Array.isArray(config.externals) ? config.externals : []),
        ({ request }: { request: string }, callback: (err?: Error | null, result?: string) => void) => {
          const isSanity = sanityPackages.some(
            (pkg) => request === pkg || request.startsWith(pkg + '/')
          )
          if (isSanity) {
            return callback(null, `commonjs ${request}`)
          }
          callback()
        },
      ]
    }
    return config
  },
  images: {
    remotePatterns: [
      { hostname: 'images.unsplash.com' },
      { hostname: 'plus.unsplash.com' },
      { protocol: 'https', hostname: 'cdn.sanity.io' },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ];
  },
};

export default withNextIntl(nextConfig);
