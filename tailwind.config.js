/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primaryOrange: '#ff660e',
        secundaryOrange: '#ff7500'
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif']
      }
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      sM: "890px",
      ms: "960px",
      md: "1060px",
      lg: "1200px",
      lG: "1300px",
      xl: "1500px",
    },
  },
  plugins: [],
}

