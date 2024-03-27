/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gb: "#121E27",
        og: "#ED6955",
        db: "#121E27",
        cream: "#F0F0F0",
      },
      fontFamily: {
        mulish: ['Mulish', 'sans-serif']
      }
    },
  },
  plugins: [],
}