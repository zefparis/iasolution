/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
  },
  async rewrites() {
    return [
      {
        source: '/politique-confidentialite',
        destination: '/politique-confidentialite.html',
      },
      {
        source: '/politique-cookies',
        destination: '/politique-cookies.html',
      },
      {
        source: '/mentions-legales',
        destination: '/mentions-legales.html',
      },
      {
        source: '/privacy-policy',
        destination: '/privacy-policy.html',
      },
      {
        source: '/cookies-policy',
        destination: '/cookies-policy.html',
      },
      {
        source: '/legal-notice',
        destination: '/legal-notice.html',
      },
    ];
  },
};

module.exports = nextConfig;
