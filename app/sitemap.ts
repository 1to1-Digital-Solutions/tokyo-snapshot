import type { MetadataRoute } from 'next'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://tokio-snapshot.vercel.app'

// Single landing page served in two locales. With localePrefix 'as-needed',
// the default locale (es) lives at '/' and English at '/en'.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
      alternates: {
        languages: {
          es: baseUrl,
          en: `${baseUrl}/en`,
          'x-default': baseUrl,
        },
      },
    },
  ]
}
