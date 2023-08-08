/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        palette: {
          100: "#000E1D",
          200: "#0d1b2a",
          300: "#1b263b",
          400: "#415a77",
          500: "#778da9",
          600: "#e0e1dd",
          700: "rgba(39, 95, 165, 1)",
          800: "rgba(24, 60, 104, 1)",
          900: "#1F4E79",
        },
      },
    },
  },
  plugins: [],
};
