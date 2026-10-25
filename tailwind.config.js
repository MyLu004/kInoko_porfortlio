/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      // the design's grids go 2-up above 860px
      screens: { tab: '861px' },
      colors: {
        cream: { DEFAULT: '#fff7ed', 200: '#fffbf5' },   // surface-100, surface-200
        card: '#ffffff',                                  // surface-card
        line: '#ece4da',
        brand: {
          DEFAULT: '#ef8354',   // fills only (buttons, tabs, active chip)
          heading: '#d9622b',   // section titles, hero headline (24px+)
          text: '#b8501f',      // small orange text: titles, links
          soft: '#fde3d3',      // = sticker peach
          ink: '#2a1205',       // text ON brand fills (on-brand)
        },
        logo: '#f97316',
        ink: { DEFAULT: '#1f2937', muted: '#4b5563', subtle: '#6b7280' },
        sticker: {
          peach: '#fde3d3', 'peach-ink': '#9a3412',
          butter: '#fff0c2', 'butter-ink': '#8a5300',
          pink: '#fde2e8', 'pink-ink': '#9d2449',
          mint: '#dff3e4', 'mint-ink': '#256b3f',
        },
        doodle: '#f3c4ab',      // decoration only: dots, tape, squiggles, sticker shadow
        focus: '#9a3412',
      },
      fontFamily: {
        mono: ['"Roboto Mono"', 'ui-monospace', 'monospace'],
        sans: ['Sora', 'system-ui', 'sans-serif'],
      },
      borderRadius: { sm: '6px', md: '12px', lg: '20px', xl: '28px' },
      boxShadow: {
        card: '0 2px 10px rgba(122, 64, 24, 0.07)',
        lift: '0 14px 34px rgba(122, 64, 24, 0.14)',
        sticker: '3px 4px 0 #f3c4ab',
        // sticker + card / lift stacked, since two shadow utilities can't combine
        'sticker-card': '3px 4px 0 #f3c4ab, 0 2px 10px rgba(122, 64, 24, 0.07)',
        'sticker-lift': '3px 4px 0 #f3c4ab, 0 14px 34px rgba(122, 64, 24, 0.14)',
        slot: 'inset 0 1px 2px rgba(122, 64, 24, 0.25)',   // club badge lanyard slot
      },
      maxWidth: { content: '1080px' },
      keyframes: {
        blink: { '50%': { opacity: '0' } },
        // uses `translate` (not `transform`) so it stacks on top of a tilt
        float: { '0%, 100%': { translate: '0 0' }, '50%': { translate: '0 -6px' } },
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        float: 'float 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
