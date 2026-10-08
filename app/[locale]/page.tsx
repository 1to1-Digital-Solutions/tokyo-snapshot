import { getTranslations, setRequestLocale } from 'next-intl/server'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import StatsSummary from '@/components/StatsSummary'
import SectionHeader from '@/components/SectionHeader'
import StatsTable from '@/components/StatsTable'
import ScrollReveal from '@/components/ScrollReveal'
import AnimatedBar from '@/components/AnimatedBar'
import Footer from '@/components/Footer'
import { getStats } from '@/lib/stats.locale'

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: 'page' })
  const { sections, navLinks, heroStats, kpiSummary } = getStats(locale)

  // Section ids double as URL anchors (#poblacion, ...), so they stay as they are.
  const getSection = (id: string) => sections.find((s) => s.id === id)!

  const population = getSection('poblacion')
  const density = getSection('densidad')
  const economy = getSection('economia')
  const income = getSection('renta')
  const unemployment = getSection('desempleo')
  const businesses = getSection('empresas')
  const safety = getSection('seguridad')
  const costOfLiving = getSection('coste-vida')
  const housing = getSection('vivienda')
  const tourism = getSection('turismo')
  const transport = getSection('transporte')
  const lifeExpectancy = getSection('esperanza-vida')
  const education = getSection('educacion')
  const foreignResidents = getSection('extranjeros')

  return (
    <main id="main-content" className="min-h-screen bg-surface-base">
      <Navbar navLinks={navLinks} />
      <Hero heroStats={heroStats} />
      <StatsSummary kpiSummary={kpiSummary} />

      {/* ── Main content sections ──────────────────────────────────── */}
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        {/* Population */}
        <section className="py-16 border-b border-surface-border">
          <ScrollReveal>
            <SectionHeader
              id={population.id}
              icon={population.icon}
              title={population.title}
              description={population.description}
            />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <StatsTable rows={population.rows} />
          </ScrollReveal>
        </section>

        {/* Population density */}
        <section className="py-16 border-b border-surface-border">
          <ScrollReveal>
            <SectionHeader
              id={density.id}
              icon={density.icon}
              title={density.title}
              description={density.description}
            />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <StatsTable rows={density.rows} />
          </ScrollReveal>
        </section>

        {/* Economy & GDP */}
        <section className="py-16 border-b border-surface-border">
          <ScrollReveal>
            <SectionHeader
              id={economy.id}
              icon={economy.icon}
              title={economy.title}
              description={economy.description}
            />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <StatsTable rows={economy.rows} />
          </ScrollReveal>
        </section>

        {/* Income & wages */}
        <section className="py-16 border-b border-surface-border">
          <ScrollReveal>
            <SectionHeader
              id={income.id}
              icon={income.icon}
              title={income.title}
              description={income.description}
            />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <StatsTable rows={income.rows} />
          </ScrollReveal>
        </section>

        {/* Unemployment */}
        <section className="py-16 border-b border-surface-border">
          <ScrollReveal>
            <SectionHeader
              id={unemployment.id}
              icon={unemployment.icon}
              title={unemployment.title}
              description={unemployment.description}
            />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <StatsTable rows={unemployment.rows} />
          </ScrollReveal>
          <ScrollReveal delay={0.15} className="mt-6">
            <div className="flex items-start gap-3 bg-primary-600/5 border border-primary-600/15 rounded-card p-4">
              <span className="text-primary-500 mt-0.5 flex-shrink-0" aria-hidden="true">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <p className="text-xs text-text-muted leading-relaxed">{t('unemploymentNote')}</p>
            </div>
          </ScrollReveal>
        </section>

        {/* Businesses */}
        <section className="py-16 border-b border-surface-border">
          <ScrollReveal>
            <SectionHeader
              id={businesses.id}
              icon={businesses.icon}
              title={businesses.title}
              description={businesses.description}
            />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <StatsTable rows={businesses.rows} />
          </ScrollReveal>
        </section>

        {/* Crime & safety */}
        <section className="py-16 border-b border-surface-border">
          <ScrollReveal>
            <SectionHeader
              id={safety.id}
              icon={safety.icon}
              title={safety.title}
              description={safety.description}
            />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <StatsTable rows={safety.rows} />
          </ScrollReveal>
          <ScrollReveal stagger delay={0.1} className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="card p-5">
              <p className="text-xs text-text-subtle uppercase tracking-widest mb-2">
                {t('crimeIndexLabel')}
              </p>
              <p className="text-3xl font-black text-primary-500 mb-1">24,33</p>
              <AnimatedBar value={24.33} color="red" />
              <p className="text-xs text-text-faint mt-2">{t('crimeIndexNote')}</p>
            </div>
            <div className="card p-5">
              <p className="text-xs text-text-subtle uppercase tracking-widest mb-2">
                {t('safetyIndexLabel')}
              </p>
              <p className="text-3xl font-black text-success-400 mb-1">75,67</p>
              <AnimatedBar value={75.67} color="green" />
              <p className="text-xs text-text-faint mt-2">{t('safetyIndexNote')}</p>
            </div>
          </ScrollReveal>
        </section>

        {/* Cost of living */}
        <section className="py-16 border-b border-surface-border">
          <ScrollReveal>
            <SectionHeader
              id={costOfLiving.id}
              icon={costOfLiving.icon}
              title={costOfLiving.title}
              description={costOfLiving.description}
            />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <StatsTable rows={costOfLiving.rows} />
          </ScrollReveal>
        </section>

        {/* Housing & rent */}
        <section className="py-16 border-b border-surface-border">
          <ScrollReveal>
            <SectionHeader
              id={housing.id}
              icon={housing.icon}
              title={housing.title}
              description={housing.description}
            />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <StatsTable rows={housing.rows} />
          </ScrollReveal>
        </section>

        {/* Tourism */}
        <section className="py-16 border-b border-surface-border">
          <ScrollReveal>
            <SectionHeader
              id={tourism.id}
              icon={tourism.icon}
              title={tourism.title}
              description={tourism.description}
            />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <StatsTable rows={tourism.rows} />
          </ScrollReveal>
          <ScrollReveal delay={0.15} className="mt-6">
            <div className="card p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex-1">
                <p className="text-xs text-text-subtle uppercase tracking-widest mb-1">
                  {t('tourismRecordLabel')}
                </p>
                <p className="text-2xl font-black text-white">{t('tourismRecordValue')}</p>
                <p className="text-sm text-text-subtle mt-1">{t('tourismRecordSub')}</p>
              </div>
              <div className="text-right flex-shrink-0">
                <p className="text-3xl font-black text-primary-500">+14%</p>
                <p className="text-xs text-text-faint">vs. 2023</p>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* Transport */}
        <section className="py-16 border-b border-surface-border">
          <ScrollReveal>
            <SectionHeader
              id={transport.id}
              icon={transport.icon}
              title={transport.title}
              description={transport.description}
            />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <StatsTable rows={transport.rows} />
          </ScrollReveal>
          <ScrollReveal stagger delay={0.1} className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { value: '9', label: t('metroLines') },
              { value: '180', label: t('metroStations') },
              { value: '195 km', label: t('metroNetwork') },
            ].map((item) => (
              <div key={item.label} className="card p-5 text-center">
                <p className="text-3xl font-black text-primary-500 mb-1">{item.value}</p>
                <p className="text-sm text-text-muted">{item.label}</p>
              </div>
            ))}
          </ScrollReveal>
        </section>

        {/* Life expectancy */}
        <section className="py-16 border-b border-surface-border">
          <ScrollReveal>
            <SectionHeader
              id={lifeExpectancy.id}
              icon={lifeExpectancy.icon}
              title={lifeExpectancy.title}
              description={lifeExpectancy.description}
            />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <StatsTable rows={lifeExpectancy.rows} />
          </ScrollReveal>
        </section>

        {/* Education */}
        <section className="py-16 border-b border-surface-border">
          <ScrollReveal>
            <SectionHeader
              id={education.id}
              icon={education.icon}
              title={education.title}
              description={education.description}
            />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <StatsTable rows={education.rows} />
          </ScrollReveal>
        </section>

        {/* Foreign residents */}
        <section className="py-16">
          <ScrollReveal>
            <SectionHeader
              id={foreignResidents.id}
              icon={foreignResidents.icon}
              title={foreignResidents.title}
              description={foreignResidents.description}
            />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <StatsTable rows={foreignResidents.rows} />
          </ScrollReveal>
          <ScrollReveal delay={0.15} className="mt-6">
            <div className="card p-5">
              <p className="text-xs text-text-subtle uppercase tracking-widest mb-4">
                {t('foreignGroupsTitle')}
              </p>
              <div className="space-y-4">
                {[
                  { group: t('foreignGroup1'), count: t('foreignGroup1Count'), pct: 40 },
                  { group: t('foreignGroup2'), count: t('foreignGroup2Count'), pct: 25 },
                  { group: t('foreignGroup3'), count: t('foreignGroup3Count'), pct: 15 },
                  { group: t('foreignGroupOther'), count: t('foreignGroupOtherCount'), pct: 20 },
                ].map((item) => (
                  <div key={item.group}>
                    <div className="flex justify-between text-xs text-text-muted mb-1">
                      <span>{item.group}</span>
                      <span className="text-text-faint">{item.count}</span>
                    </div>
                    <AnimatedBar value={item.pct} color="red" className="h-1.5" />
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </section>
      </div>

      {/* Executive summary */}
      <ScrollReveal className="bg-gradient-to-r from-primary-950/30 via-surface-raised to-primary-950/30 border-y border-primary-900/20">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-start gap-4">
            <span className="text-3xl flex-shrink-0" aria-hidden="true">
              🗼
            </span>
            <div>
              <p className="label-eyebrow mb-2">{t('executiveSummaryLabel')}</p>
              <p className="text-text-secondary text-sm sm:text-base leading-relaxed max-w-3xl">
                {t('executiveSummaryText')}
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <Footer />
    </main>
  )
}
