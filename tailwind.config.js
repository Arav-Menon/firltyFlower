/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'post1color' : "#464646",
      },
      fontFamily : {
        "NavFont" : ["Syncopate", "sans-serif"],
      }
    },
  },
  plugins: [],
}

