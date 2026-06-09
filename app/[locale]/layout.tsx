import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, getTranslations } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import SmoothScroll from '@/components/SmoothScroll'
import ScrollProgress from '@/components/ScrollProgress'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'meta' })

  // 'as-needed' prefix: default locale (es) at '/', others at '/<locale>'.
  const path = locale === routing.defaultLocale ? '/' : `/${locale}`
  const siteName = locale === 'en' ? 'Tokyo by the Numbers' : 'Tokio en Cifras'

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://tokio-snapshot.vercel.app'),
    title: t('title'),
    description: t('description'),
    keywords: [
      'Tokio estadísticas',
      'Tokyo statistics',
      'Tokio población',
      'Tokio PIB',
      'Japan demographics',
    ],
    alternates: {
      canonical: path,
      languages: {
        es: '/',
        en: '/en',
        'x-default': '/',
      },
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: path,
      siteName,
      locale: locale === 'en' ? 'en_US' : 'es_ES',
      type: 'website',
    },
  }
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!routing.locales.includes(locale as 'es' | 'en')) {
    notFound()
  }

  const messages = await getMessages()

  return (
    <html lang={locale} className={inter.variable}>
      <body className="bg-surface-base text-white antialiased">
        <NextIntlClientProvider messages={messages}>
          <ScrollProgress />
          <a href="#main-content" className="skip-link">
            {locale === 'en' ? 'Skip to main content' : 'Saltar al contenido principal'}
          </a>
          <SmoothScroll>{children}</SmoothScroll>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
