/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  darkMode: "class",
  theme: {
    screens: {
      exsm: "350px",
      mobile: "768px",

      tablet: "1165px",

      desktop: "1250px",
    },
    extend: {
      boxShadow: {
        '3xl': '0 16px 40px rgba(143, 160, 193, 0.14)',
      },
      fontFamily: {
        sans: ["Rubik", "sans-serif"],
      },
      backgroundImage: {
        dbgd: "url('./src/images/pattern-background-desktop-dark.svg')",
        dbgl: "url('./src/images/pattern-background-desktop-light.svg')",
        tbgd: "url('./src/images/pattern-background-tablet-dark.svg')",
        tbgl: "url('./src/images/pattern-background-tablet-light.svg')",
        mbgd: "url('./src/images/pattern-background-mobile-dark.svg')",
        mbgl: "url('./src/images/pattern-background-mobile-light.svg')",
      },
    },
    colors: {
      white: "#FFF",
      light: '#F4F6FA',
      blue: "#A729F5",
      question: "#3B4D66",
      dbg: "#313E51",
      italicd: "#ABC1E1",
      italicl: "#626C7F",
      "brand-blue": "#8fa0c1",
      red: "#EE5454",
      green: "#26D782",
    },
  },
  plugins: [],
}

