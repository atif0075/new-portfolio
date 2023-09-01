/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6600ff",
        "pulse-yellow": {
          100: "#def2cd",
          // 200: "#e5ffcf",
          200: "#cee6ba",
        },
        "light-purple": {
          100: "#8395f9",
          200: "#989ede",
        },
      },
    },
  },
  plugins: [],
};
