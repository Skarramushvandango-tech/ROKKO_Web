// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#262626",
        accent1: "#483D03",
        text: "#F5F3BB",
        accent2: "#96897B",
      },
    },
  },
  plugins: [],
};
