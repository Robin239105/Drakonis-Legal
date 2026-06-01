/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['EB Garamond', 'serif'],
        ui: ['Instrument Sans', 'sans-serif'],
      },
      colors: {
        obsidian: '#0C0C0E',
        navy: {
          DEFAULT: '#152035',
          deep: '#0F1623',
        },
        gold: {
          DEFAULT: '#B8973A',
          light: '#D4AF55',
          muted: '#8A6E28',
        },
        'warm-white': '#F5F3EF',
        'gray-light': '#C9C5BC',
        'gray-muted': '#6B6760',
      },
      borderColor: {
        'gold-subtle': 'rgba(184, 151, 58, 0.2)',
        'gold-hover': 'rgba(184, 151, 58, 0.6)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
