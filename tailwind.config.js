/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#8395f9",
        // primary: "#C6EBBE",
      },
    },
  },
  plugins: [],
};
