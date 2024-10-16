/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js, vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Bebas Neue', 'sans-serif'],
        slab: ['Roboto Slab', 'serif']
      },
      colors: {
        bgcolor: "#060278",
        textred: "#cf6a0c",
        bghover: "#c7d9f0",
        bgcolorTwo: "#a3bcff",
        bgGray: "#f5f5f5",
      },
      backgroundImage:{
        image: "url('src/scrimba/orange.jpg')"

      }
    },
  },
  plugins: [],
};
