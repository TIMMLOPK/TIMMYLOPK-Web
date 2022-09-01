/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wbg: "rgba(255, 255, 255, 0.2)",
        hoverbg: "rgba(255, 255, 255, 0.103)",
      },
    },
  },
  plugins: [],
};
