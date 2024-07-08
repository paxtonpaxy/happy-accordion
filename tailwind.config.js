/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        'green-btn': '#82DB39',
        'baby-blue': '#E5F7F9',
      }
    },
  },
  plugins: [],
}

