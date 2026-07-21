/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#000000",
        surface: "#141720",
        "surface-hover": "#1c2030",
        border: "#252b3b",
        "border-hover": "#3a4258",
        ink: "#eef1ff",
        muted: "#a8b0cc",
        subtle: "#5a6380",
        brand: "#037ef3",
        success: "#00c9a7",
        danger: "#ff5c7a",
        warning: "#ffb547",
        violet: "#c47aff",
      },
      fontFamily: {
        display: ['"Fraunces"', "serif"],
        sans: ['"Inter"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
