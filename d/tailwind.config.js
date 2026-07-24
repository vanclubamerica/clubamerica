/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ca-red':    '#B91C1C',
        'ca-red-d':  '#7F1D1D',
        'ca-red-l':  '#EF4444',
        'ca-gold':   '#D97706',
        'ca-gold-l': '#F59E0B',
        'ca-dark':   '#0F172A',
        'ca-navy':   '#1E293B',
        'ca-cream':  '#FDFCF8',
        'ca-muted':  '#64748B',
      },
      fontFamily: {
        display:  ['Barlow Condensed', 'sans-serif'],
        heading:  ['Barlow', 'sans-serif'],
        body:     ['Outfit', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #2D1515 100%)',
        'card-shine':    'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%)',
      },
      animation: {
        'fade-up':   'fadeUp 0.6s ease-out both',
        'fade-in':   'fadeIn 0.5s ease-out both',
        'shimmer':   'shimmer 2s infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}
