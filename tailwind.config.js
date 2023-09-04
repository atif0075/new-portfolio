/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 3s linear infinite",
        pop: "pop 2s ease-in-out linear",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "3rem",
      },
      colors: {
        primary: "#6600ff",
        "pulse-yellow": {
          100: "#def2cd",
          // 200: "#e5ffcf",
          200: "#cee6ba",
          300: "#a5b895",
          400: "#90a182",
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
