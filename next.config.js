/** @type {import('next').NextConfig} */
const nextConfig = {
  // Activer la compression
  compress: true,
  
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
  
  // Headers de sécurité HTTP
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
