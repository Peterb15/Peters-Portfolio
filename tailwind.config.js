/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html','./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        pb: {
          bg: '#0E0E0E',     // Near-Black
          panel: '#111015',  // Slight lift for cards
          ivory: '#E2E2E2',  // Body text
          purple: '#4B1E6C', // Royal Purple
          copper: '#C47C2D', // Copper accent
          line: '#221A2A',   // Subtle divider
        },
      },
      fontFamily: {
        // DISPLAY — Brioso Pro (first); Scrivano as optional swap later
        display: [
          '"Brioso Pro"', '"brioso-pro"', '"BriosoPro"',
          '"Scrivano"', '"scrivano"',
          '"Playfair Display"', 'serif',
        ],
        // BLACKLETTER — Fleisch primary; fallbacks if you switch kits
        blackletter: [
          '"Fleisch"', '"fleisch"',
          '"Carol Gothic"', '"carol-gothic"',
          '"Adhesive Nr. Seven"', '"adhesive-nr-seven"',
          '"UnifrakturCook"', 'serif',
        ],
        // BODY — Proxima Nova primary
        sans: [
          '"Proxima Nova"', '"proxima-nova"',
          'Inter','Montserrat','system-ui','sans-serif',
        ],
      },
      boxShadow: {
        copper: '0 0 0 1px #C47C2D, 0 8px 24px rgba(196,124,45,0.15)',
        glow: '0 0 24px rgba(196,124,45,0.35)',
      },
      backgroundImage: {
        'hero-grad':
          'radial-gradient(60% 60% at 50% 0%, rgba(75,30,108,0.35) 0%, transparent 60%), radial-gradient(40% 40% at 90% 90%, rgba(196,124,45,0.18) 0%, transparent 60%)',
      },
    },
  },
  plugins: [],
};
