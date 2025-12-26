import { MetadataRoute } from 'next';

/**
 * Génère le sitemap dynamique pour le SEO
 * https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.ia-solution.fr';
  const lastModified = new Date();

  return [
    // Page d'accueil
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    // Pages produits
    {
      url: `${baseUrl}/hcs-u7`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/shield`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/technology`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/patents`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Pages légales FR
    {
      url: `${baseUrl}/politique-confidentialite`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/politique-cookies`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/mentions-legales`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    // Pages légales EN
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/cookies-policy`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/legal-notice`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];
}
