/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'black-500': '#242424',
        white: '#fefefe',
        'custom-gray': '#eef2f3',
      },
    },
  },
  plugins: [],
}
