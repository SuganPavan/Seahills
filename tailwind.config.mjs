/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'brand-gold': {
          50: '#FDF8EC',
          100: '#FBF0D5',
          200: '#F5DC9E',
          300: '#EFC867',
          400: '#EAB430',
          500: '#D49E1F',
          600: '#AA7C14',
          700: '#805C0D',
        },
        'brand-sand': '#EADEC7',
        'ocean-dark': '#062031',
        'ocean-deep': '#0C334E',
        'ocean-teal': '#008585',
        'ocean-accent': '#0FB5BA',
        'card-bg': '#FFFFFF',
        'sand-light': '#F8F6F0',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(6, 32, 49, 0.12)',
        'luxury-hover': '0 25px 50px -12px rgba(6, 32, 49, 0.22)',
      }
    },
  },
  plugins: [],
}
