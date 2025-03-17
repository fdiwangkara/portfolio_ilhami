import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Figtree', ...defaultTheme.fontFamily.sans],
        primary: ['primary', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: '#97BC62',
        accent: '#2C5F2D',
        page: '#1C2D2B',
        word: '#E2E8F0',
        word2: 'rgba(226,232,240,0.5)'
      },
    },
  },
  plugins: [],
}
