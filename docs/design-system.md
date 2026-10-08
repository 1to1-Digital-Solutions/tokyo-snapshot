# Tokio en Cifras — Design System

> Version 1.0 · Based on Next.js 16 + Tailwind CSS 3.4 + TypeScript

---

## Design principles

| Principle           | Description                                                                 |
| ------------------- | --------------------------------------------------------------------------- |
| **Restraint**       | Deep dark theme (#0a0a0a). No unnecessary decoration.                       |
| **Clear hierarchy** | High-contrast typography (black → bold → semibold → regular).               |
| **Single accent**   | A single accent color (Tokyo Red) for emphasis and CTAs.                    |
| **Accessibility**   | WCAG 2.1 AA as a minimum. Visible focus, correct semantics, reduced motion. |
| **Mobile-first**    | Designed for small screens first, scaling upward.                           |

---

## 1. Color palette

### Surfaces (backgrounds)

| CSS token                 | Value     | Tailwind class       | Usage                                |
| ------------------------- | --------- | -------------------- | ------------------------------------ |
| `--color-surface-base`    | `#0a0a0a` | `bg-surface-base`    | Main page background                 |
| `--color-surface-subtle`  | `#0d0d0d` | `bg-surface-subtle`  | Alternate backgrounds (StatsSummary) |
| `--color-surface-raised`  | `#111111` | `bg-surface-raised`  | Cards, tables (even rows)            |
| `--color-surface-overlay` | `#0e0e0e` | `bg-surface-overlay` | Alternating table rows               |

### Borders

| CSS token                | Value     | Tailwind class          | Usage                        |
| ------------------------ | --------- | ----------------------- | ---------------------------- |
| `--color-border-faint`   | `#1a1a1a` | `border-border-faint`   | Very subtle separators       |
| `--color-border-default` | `#1f1f1f` | `border-border-default` | Standard card border         |
| `--color-border-muted`   | `#2a2a2a` | `border-border-muted`   | Slightly more visible border |

### Text

| CSS token                | Value     | Tailwind class        | WCAG vs. surface-base              |
| ------------------------ | --------- | --------------------- | ---------------------------------- |
| `--color-text-primary`   | `#ffffff` | `text-white`          | 21:1 ✅ AAA                        |
| `--color-text-secondary` | `#e5e7eb` | `text-text-secondary` | ~18:1 ✅ AAA                       |
| `--color-text-muted`     | `#9ca3af` | `text-text-muted`     | ~7:1 ✅ AA                         |
| `--color-text-subtle`    | `#6b7280` | `text-text-subtle`    | ~4.5:1 ✅ AA (large text)          |
| `--color-text-faint`     | `#374151` | `text-text-faint`     | ~3:1 — for non-essential text only |

> ⚠️ `text-text-faint` does not meet AA for normal text. Use only for disclaimers and secondary metadata.

### Accent — Tokyo Red

Based on Tailwind red, anchored at `#DC2626`.

| Scale   | Value         | Tailwind class       | Usage                         |
| ------- | ------------- | -------------------- | ----------------------------- |
| 400     | `#F87171`     | `text-primary-400`   | Hover text                    |
| 500     | `#EF4444`     | `text-primary-500`   | KPI values, stat values       |
| **600** | **`#DC2626`** | **`bg-primary-600`** | **Main brand color**          |
| 700     | `#B91C1C`     | `bg-primary-700`     | Primary button hover          |
| 900     | `#7F1D1D`     | `bg-primary-900`     | Subtle accent backgrounds     |
| 950     | `#450A0A`     | `bg-primary-950`     | Minimal-highlight backgrounds |

### Success green

Only for positive metrics (safety index, etc.).

| Scale | Value     | Tailwind class     |
| ----- | --------- | ------------------ |
| 400   | `#4ade80` | `text-success-400` |
| 500   | `#22c55e` | `text-success-500` |

---

## 2. Typography

**Font family:** Inter (Google Fonts) · `var(--font-inter)`
**Fallback stack:** `system-ui, -apple-system, sans-serif`

### Type scale

| Name   | Size | Line-height | Weight  | Tailwind class | Usage                      |
| ------ | ---- | ----------- | ------- | -------------- | -------------------------- |
| `2xs`  | 10px | 1rem        | —       | `text-2xs`     | Internal micro-labels      |
| `xs`   | 12px | 1.5         | 400–600 | `text-xs`      | Eyebrows, notes, metadata  |
| `sm`   | 14px | 1.5         | 400–600 | `text-sm`      | Secondary body text, cells |
| `base` | 16px | 1.5         | 400     | `text-base`    | Main body text             |
| `lg`   | 18px | 1.75        | 600     | `text-lg`      | Section subtitles          |
| `xl`   | 20px | 1.75        | 400     | `text-xl`      | Lead / intro text          |
| `2xl`  | 24px | 1.3         | 700     | `text-2xl`     | Secondary headings         |
| `3xl`  | 30px | 1.2         | 700     | `text-3xl`     | Main headings (mobile)     |
| `5xl`  | 48px | 1           | 900     | `text-5xl`     | Large KPI values           |
| `7xl`  | 72px | 1           | 900     | `text-7xl`     | Hero heading (tablet)      |
| `8xl`  | 96px | 1           | 900     | `text-8xl`     | Hero heading (desktop)     |

### Weights

| Name     | Value | Tailwind class  | Usage                    |
| -------- | ----- | --------------- | ------------------------ |
| Regular  | 400   | `font-normal`   | Body text                |
| Semibold | 600   | `font-semibold` | Stat values, labels      |
| Bold     | 700   | `font-bold`     | h2 headings              |
| Black    | 900   | `font-black`    | KPI values, hero heading |

### Letter-spacing

| Token              | Value | Tailwind class     | Usage                      |
| ------------------ | ----- | ------------------ | -------------------------- |
| `tracking-widest`  | 0.1em | `tracking-widest`  | Eyebrows, uppercase labels |
| `tracking-widest2` | 0.2em | `tracking-widest2` | Decorative Japanese text   |

---

## 3. Spacing

Base grid of **8px**. Uses Tailwind's standard scale.

| Class   | px   | Typical usage              |
| ------- | ---- | -------------------------- |
| `gap-1` | 4px  | Minimal spacing            |
| `gap-2` | 8px  | Tags, badges               |
| `gap-3` | 12px | Hero card grid             |
| `gap-4` | 16px | KPI grid                   |
| `gap-6` | 24px | Block spacing              |
| `px-4`  | 16px | Mobile horizontal padding  |
| `px-6`  | 24px | Tablet horizontal padding  |
| `px-8`  | 32px | Desktop horizontal padding |
| `py-12` | 48px | Footer padding             |
| `py-16` | 64px | Standard section           |

---

## 4. Layout

### Main container

```
max-width: 72rem (1152px)   →   max-w-content
margin: auto
padding-inline: 1rem → 1.5rem → 2rem  (mobile → tablet → desktop)
```

### Breakpoints (Tailwind defaults)

| Name | Minimum | Usage                     |
| ---- | ------- | ------------------------- |
| `sm` | 640px   | 2 columns in grids        |
| `md` | 768px   | —                         |
| `lg` | 1024px  | Desktop navbar, 4 columns |
| `xl` | 1280px  | —                         |

---

## 5. Border radius

| Token          | Value  | Tailwind class | Usage                     |
| -------------- | ------ | -------------- | ------------------------- |
| `rounded-md`   | 6px    | `rounded-md`   | Buttons, inputs           |
| `rounded-lg`   | 8px    | `rounded-lg`   | —                         |
| `rounded-card` | 12px   | `rounded-card` | Cards, tables, containers |
| `rounded-pill` | 9999px | `rounded-pill` | Badges, tags, eyebrows    |

---

## 6. Shadows and effects

No `box-shadow` shadows are used. Visual contrast is achieved through:

- Subtle borders (`border-border-default`)
- Value difference between surfaces (e.g. `surface-raised` over `surface-base`)
- `backdrop-blur-md` on floating elements (navbar, hero cards)

---

## 7. Animations and transitions

### Transitions

| Duration       | Usage                               |
| -------------- | ----------------------------------- |
| `duration-150` | Table row hover, fast color changes |
| `duration-300` | Card hover, normal color changes    |
| `duration-500` | Slow effects (progress bars)        |

Timing function: `cubic-bezier(0.4, 0, 0.2, 1)` (Tailwind default ease-in-out).

### Defined keyframes

| Name                         | Description                            | Class                |
| ---------------------------- | -------------------------------------- | -------------------- |
| `fade-in`                    | Fades in from below (8px) with opacity | `animate-fade-in`    |
| `slide-down`                 | Appears from above (4px)               | `animate-slide-down` |
| `bounce` (Tailwind built-in) | Vertical bounce — scroll indicator     | `animate-bounce`     |
| `pulse` (Tailwind built-in)  | Opacity pulsing                        | `animate-pulse`      |

### Reduced motion

All animations and transitions are reduced to virtually zero when the user has `prefers-reduced-motion: reduce` enabled. See [globals.css](../app/globals.css).

---

## 8. Iconography

**Unicode emoji** are used as section icons (e.g. 👥 🏙️ 💴). No icon library is included, to keep the bundle minimal.

Inline SVGs are used for:

- Navbar hamburger (custom)
- Scroll chevron in Hero (Heroicons stroke style)
- Info icon in the unemployment callout

---

## 9. Focus and accessibility

### Focus ring

```css
outline: 2px solid #dc2626;
outline-offset: 2px (normal) / 3px (buttons);
border-radius: 4px;
```

Only visible on `:focus-visible` (not shown on mouse clicks).

### Skip link

Visible on the first Tab press. Positioned at the top of the screen.
Navigates to `#main-content` (the `<main>` element).

### Heading hierarchy

```
h1  → Hero heading ("Tokio en Cifras")
h2  → Section headings (KPI, Population, etc.)
       Also "Los números que definen Tokio" (Spanish heading) in StatsSummary
```

No heading level is skipped.

### Relevant ARIA roles

| Element          | Attribute          | Value                            |
| ---------------- | ------------------ | -------------------------------- |
| Main `<nav>`     | `aria-label`       | "Navegación principal"           |
| Hamburger button | `aria-expanded`    | `true` / `false`                 |
| Hamburger button | `aria-controls`    | Menu ID                          |
| Hero section     | `aria-label`       | "Introducción — Tokio en Cifras" |
| KPI section      | `aria-labelledby`  | `#kpi-heading`                   |
| Sources          | `<nav>`            | `aria-label="Fuentes de datos"`  |
| Decorative kanji | `aria-hidden`      | `true`                           |
| `<table>`        | `<th scope="col">` | Columns with a header            |
| `<table>`        | `<th scope="row">` | First cell of each row           |

---

## 10. Components

### KpiCard

```tsx
<KpiCard value="37M" label="Habitantes" sublabel="Gran Tokio" />
```

- Uses `<article>` as the root element
- The value/label pair is marked up with `<dl>/<dt>/<dd>` for screen readers
- Red accent line that expands on hover (`w-8 → w-12`)

### StatsTable

```tsx
<StatsTable rows={section.rows} caption="Indicadores de población de Tokio" />
```

- `caption` hidden with `.sr-only` — describes the table's purpose
- `<th scope="col">` on column headers
- `<th scope="row">` on the first cell of each row (the indicator)
- Alternating rows: `surface-raised` / `surface-overlay`
- Subtle hover: `bg-primary-600/5`

### SectionHeader

```tsx
<SectionHeader id="poblacion" icon="👥" title="Población" description="..." />
```

- The `id` is applied to the containing `<div>` — enables navigation anchors
- The global `scroll-margin-top` (`[id] { scroll-margin-top: 5rem }`) offsets the fixed navbar

### Navbar

- Only uses `"use client"` (scroll and menu state)
- Closes with the `Escape` key
- `useId()` to link the button ↔ mobile menu via `aria-controls`

---

## 11. Custom CSS utilities

Defined in `app/globals.css` under `@layer components`:

| Class                | Description                                                        |
| -------------------- | ------------------------------------------------------------------ |
| `.section-container` | `max-w-content mx-auto px-4 sm:px-6 lg:px-8 py-16`                 |
| `.card`              | `bg-surface-raised border border-border-default rounded-card`      |
| `.text-muted`        | `text-text-muted`                                                  |
| `.section-divider`   | `border-b border-border-faint`                                     |
| `.label-eyebrow`     | `text-xs font-semibold tracking-widest uppercase text-primary-500` |
| `.skip-link`         | Skip-to-content link — only visible on keyboard focus              |

---

## 12. UI quality checklist

- [ ] All interactive text has a visible `:focus-visible`
- [ ] Text contrast ≥ 4.5:1 (normal text) or ≥ 3:1 (large text)
- [ ] Tables have `scope` on `<th>` and a descriptive `caption`
- [ ] No animations lack support for `prefers-reduced-motion`
- [ ] Buttons have `aria-label` if they have no visible text
- [ ] The document has a single `<h1>`
- [ ] The page works correctly without JavaScript (SSR / static)
- [ ] The first focusable element is the skip link
