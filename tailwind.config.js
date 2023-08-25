/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
      },
      spacing: {
        big: "46rem",
      },
    },
    fontFamily: {
      nunito: ["Nunito", " sans-serif"],
    },
  },
  plugins: [],
};
