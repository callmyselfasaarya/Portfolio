/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0C0C0C',
        'ghost-white': '#f7f7ff',
        'persian-indigo': '#27187D',
        'indigo-light': '#3b27b3',
      },
      fontFamily: {
        sans: ['Kanit', 'sans-serif'],
        display: ['Kanit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
