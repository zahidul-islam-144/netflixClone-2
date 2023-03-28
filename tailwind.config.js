/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  theme: {
    screens: {
      // added custom break-points
      xxs: { min: "320px", max: "576px" },
      xs: { min: "577px" },
      sm: { min: "768px" },
      md: { min: "992px" },
      lg: { min: "1200px" },
      xl: { min: "1440px" },
      "2xl": { min: "1600px" },
    },
  },
  plugins: [require("tailwind-scrollbar-hide"), require("tailwind-scrollbar")],
};
