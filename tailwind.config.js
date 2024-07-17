/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        baseblack:{
          100:"#0A0A0A",
        },
        basered:{
          100:"#FF6969",
          200:"#C80036"
        }

      }
    },
  },
  plugins: [],
}

