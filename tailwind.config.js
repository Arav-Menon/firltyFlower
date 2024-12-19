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
        'post2color' : "#222222"
      },
      fontFamily : {
        "Font_1" : ["Syncopate", "sans-serif"],
        "Font_2" : ["Bai Jamjuree", "sans-serif"],
      }
    },
  },
  plugins: [],
}

