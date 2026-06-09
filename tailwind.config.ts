import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // ─── Color Palette ────────────────────────────────────────────────────
      colors: {
        // Semantic surface tokens (dark theme)
        surface: {
          base: '#0a0a0a', // page background
          subtle: '#0d0d0d', // alternate background
          raised: '#111111', // card background
          overlay: '#0e0e0e', // alternating table row
          border: '#151515', // faint separators
        },
        // Border tokens
        border: {
          faint: '#1a1a1a',
          default: '#1f1f1f',
          muted: '#2a2a2a',
        },
        // Text tokens
        text: {
          primary: '#ffffff',
          secondary: '#e5e7eb',
          muted: '#9ca3af',
          subtle: '#868d99', // AA on dark surfaces (was #6b7280, ~3.9:1 on raised)
          faint: '#787f8b', // AA on dark surfaces (was #374151, ~1.9:1)
        },
        // Tokio Red – primary accent
        primary: {
          DEFAULT: '#DC2626',
          50: '#FEF2F2',
          100: '#FEE2E2',
          200: '#FECACA',
          300: '#FCA5A5',
          400: '#F87171',
          500: '#EF4444',
          600: '#DC2626',
          700: '#B91C1C',
          800: '#991B1B',
          900: '#7F1D1D',
          950: '#450A0A',
        },
        // Success green (safety / positive metrics)
        success: {
          400: '#4ade80',
          500: '#22c55e',
        },
      },

      // ─── Typography ───────────────────────────────────────────────────────
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '1rem' }], // 10px
      },
      letterSpacing: {
        widest2: '0.2em',
      },

      // ─── Layout ───────────────────────────────────────────────────────────
      maxWidth: {
        content: '72rem', // 1152px — main content column
      },

      // ─── Border Radius ────────────────────────────────────────────────────
      borderRadius: {
        card: '0.75rem', // 12px
        pill: '9999px',
      },

      // ─── Animations ───────────────────────────────────────────────────────
      keyframes: {
        'fade-in': {
          from: { opacity: '0', transform: 'translateY(8px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-down': {
          from: { opacity: '0', transform: 'translateY(-4px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.4s ease both',
        'slide-down': 'slide-down 0.25s ease both',
      },

      // ─── Background Images ────────────────────────────────────────────────
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

export default config
