# 東京 Tokyo by the Numbers

A single-page data site about Tokyo: population, economy, safety, cost of living, housing,
tourism, transport, health, education and foreign residents, with 2024–2025 figures and
their sources. It is bilingual (Spanish by default, English at `/en`), statically generated
and animated on scroll.

Live: <https://tokio-snapshot.vercel.app>

## What is on the page

- **Hero** with the four headline figures: 37 million people in the metropolitan area, the
  world's second-largest urban economy, a crime index of 24.33 (Numbeo 2025) and a female life
  expectancy of 87 years.
- **Key indicators**: four KPI cards that put those numbers in context.
- **14 sections**, each a table of indicators with notes: population, population density,
  economy & GDP, income & wages, unemployment, businesses, crime & safety, cost of living,
  housing & rent, tourism, transport, life expectancy, education and foreign residents.
- **Footer** with the sources (Tokyo Metropolitan Government, OECD, World Bank, Numbeo,
  National Police Agency, Tokyo Metro, JETRO, Ministry of Health, Mercer…) and a disclaimer.

The figures and their sources were gathered in [`stats.md`](stats.md); the site's data lives in
`lib/stats.ts` (Spanish) and `lib/stats.en.ts` (English).

## Tech stack

| Technology           | Version | Purpose                                         |
| -------------------- | ------- | ----------------------------------------------- |
| Next.js              | 16      | App Router, static generation of both locales   |
| React                | 19      | UI                                              |
| TypeScript           | 5       | Static typing                                   |
| Tailwind CSS         | 3.4     | Styles (design tokens in `tailwind.config.ts`)  |
| next-intl            | 4       | Spanish / English routing and messages          |
| GSAP + ScrollTrigger | 3.15    | Entrance and scroll-driven animations           |
| @gsap/react          | 2.1     | `useGSAP` hook                                  |
| Lenis                | 1.3     | Smooth scroll, synced with ScrollTrigger        |
| ESLint + Prettier    | 10 / 3  | Linting (flat config) and formatting, run in CI |

## Animations

- **Hero entrance**: a timeline for the kanji, heading, stat badges and scroll cue.
- **Scroll progress bar**: a thin red line at the top that grows as you scroll.
- **ScrollReveal**: staggered fade-up of sections and cards as they enter the viewport.
- **SectionHeader**: accent bar, sliding title and description on a chained timeline.
- **Smooth scroll**: Lenis (lerp 0.08) feeding `ScrollTrigger.update`.

With `prefers-reduced-motion`, the hero, the reveals and the bars skip their animation and
show content in its final state, and `globals.css` cuts CSS transitions.

## Internationalisation

| URL   | Language          |
| ----- | ----------------- |
| `/`   | Spanish (default) |
| `/en` | English           |

`localePrefix` is `as-needed`, so `/es` redirects to `/`. The `ES / EN` toggle in the navbar
switches language. UI strings live in `messages/es.json` and `messages/en.json`; routing is in
`i18n/routing.ts` and the locale detection runs in `proxy.ts` (Next.js 16's name for
middleware).

## Development

Requires Node.js 20.19 or later.

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # production build
npm run start        # serve the production build
npm run lint         # ESLint
npm run format       # Prettier, write
npm run format:check # Prettier, check (CI)
```

CI (`.github/workflows/ci.yml`) runs lint and the format check on every pull request to
`main`. Dependabot opens weekly npm update PRs.

## Project structure

```
app/
├── layout.tsx              # Root pass-through layout
├── [locale]/
│   ├── layout.tsx          # html/body, metadata, NextIntlClientProvider
│   └── page.tsx            # The page: hero, KPIs and the 14 sections
├── robots.ts, sitemap.ts   # SEO routes
└── globals.css             # Tokens, focus rings, reduced motion

components/                 # Hero, Navbar, LanguageSwitcher, StatsSummary, SectionHeader,
                            # StatsTable, KpiCard, AnimatedBar, ScrollReveal,
                            # ScrollProgress, SmoothScroll, Footer

lib/
├── gsap.ts                 # GSAP setup and shared defaults
├── stats.ts                # Spanish data
├── stats.en.ts             # English data
└── stats.locale.ts         # getStats(locale)

i18n/                       # next-intl routing and request config
messages/                   # UI strings per locale
proxy.ts                    # next-intl locale routing
docs/design-system.md       # Colours, type, spacing and component rules
stats.md                    # The researched figures with their sources
```

## Agent skills

`.claude/skills/` holds three third-party skills used while building the site with Claude
Code: `find-skills` (vercel-labs/skills), `ui-ux-pro-max` (nextlevelbuilder/ui-ux-pro-max-skill)
and `vercel-react-best-practices` (vercel-labs/agent-skills). All three are MIT-licensed; each
folder carries its upstream `LICENSE` and a `NOTICE` with the source. Other skills listed in
`skills-lock.json` are installed locally with `npx skills` and are not versioned here.

## License

The site's code is MIT-licensed, see [LICENSE](LICENSE). The vendored skills keep their own
licenses, as above. The statistics belong to the sources cited on the page.
