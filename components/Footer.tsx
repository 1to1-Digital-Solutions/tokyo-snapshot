'use client'

import { useTranslations } from 'next-intl'

const sources = [
  {
    label: 'Tokyo Metropolitan Government — Statistics',
    href: 'https://www.toukei.metro.tokyo.lg.jp/homepage/ENGLISH.htm',
  },
  {
    label: 'OCDE — Education at a Glance 2024',
    href: 'https://www.oecd.org/en/publications/education-at-a-glance-2024_c00cad36-en.html',
  },
  {
    label: 'Banco Mundial — Japan Data',
    href: 'https://data.worldbank.org/country/japan',
  },
  {
    label: 'Numbeo — Cost of Living in Tokyo 2025',
    href: 'https://www.numbeo.com/cost-of-living/in/Tokyo',
  },
  {
    label: 'Agencia Nacional de Policía de Japón — Statistics',
    href: 'https://www.npa.go.jp/english/Statistics.html',
  },
  {
    label: 'Tokyo Metro — Fact Book 2025',
    href: 'https://www.tokyometro.jp/lang_en/corporate/ir/library/factbook/pdf/factbook_2025.pdf',
  },
  {
    label: 'JETRO — Tokyo Investment Data',
    href: 'https://www.jetro.go.jp/en/invest/region/data/tokyo.html',
  },
  {
    label: 'Ministerio de Salud, Trabajo y Bienestar — Life Tables 2024',
    href: 'https://www.mhlw.go.jp/english/database/db-hw/vs02.html',
  },
  {
    label: 'Mercer — Cost of Living City Ranking 2024',
    href: 'https://www.mercer.com/insights/total-rewards/talent-mobility-insights/cost-of-living/',
  },
  {
    label: 'At Home Co. — Datos de mercado inmobiliario Tokyo',
    href: 'https://www.athome.co.jp/corporate/news/data/market/',
  },
]

export default function Footer() {
  const t = useTranslations('footer')

  return (
    <footer className="bg-[#080808] border-t border-border-faint">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Brand + tagline */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-8">
          <div className="flex items-center gap-3">
            <span aria-hidden="true" className="text-3xl font-bold text-primary-600">
              東京
            </span>
            <div>
              <p className="text-sm font-semibold text-white">東京</p>
              <p className="text-xs text-text-faint">2024–2025</p>
            </div>
          </div>
          <p className="text-xs text-text-faint max-w-sm leading-relaxed">{t('tagline')}</p>
        </div>

        <div aria-hidden="true" className="h-px bg-border-faint mb-8" />

        {/* Sources */}
        <nav aria-label={t('sourcesTitle')}>
          <p className="text-xs font-semibold text-text-subtle uppercase tracking-widest mb-4">
            {t('sourcesTitle')}
          </p>
          <ul className="flex flex-wrap gap-2 list-none p-0">
            {sources.map((source) => (
              <li key={source.label}>
                <a
                  href={source.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-text-faint bg-surface-raised border border-border-default rounded-pill px-3 py-1 hover:text-white hover:border-primary-600/40 transition-colors duration-150"
                >
                  {source.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mt-8 pt-6 border-t border-border-faint">
          <p className="text-xs text-text-faint">{t('disclaimer')}</p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 flex-shrink-0 text-xs text-text-faint">
            <span>
              {t('developedBy')}{' '}
              <a
                href="https://github.com/1to1-Digital-Solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-subtle hover:text-primary-400 transition-colors duration-150 font-medium"
              >
                1to1 Digital Solutions
              </a>
            </span>
            <span className="hidden sm:inline text-border-muted">·</span>
            <span>{t('copyright')}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
