/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ourGreen' : '#042B29'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')({
      charts: true,}),
  ],

}