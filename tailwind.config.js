/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'brand-navy': '#0B2342',
        'brand-navy-light': '#123463',
        'brand-gold': '#C79A32',
        'brand-gold-dark': '#A88128',
        'brand-light': '#F7F8FA',
        'brand-dark': '#172033',
      },
      fontFamily: {
        sans: ['Manrope', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 24px -8px rgba(11, 35, 66, 0.12)',
        'card-hover': '0 12px 36px -10px rgba(11, 35, 66, 0.22)',
      },
    },
  },
  plugins: [],
};
