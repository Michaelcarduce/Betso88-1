/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      gridTemplateColumns: {
        "70/30": "70% 28%",
      },
      colors: {
        deepPurple: "#1A1823",
        midnightGlass: "rgba(35, 32, 47, 0.9)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
