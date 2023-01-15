/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#6271EB",
          50: "#2B2D3D",
          100: "#242634",
        },
        light: "#A8A8A8",
        // gray: {
        //   50: "white",
        //   100: "#DEE0E9",
        //   200: "#CFD1DE",
        //   300: "#B0B4CA",
        //   400: "#9297B5",
        //   500: "#737AA1",
        //   600: "#5B6186",
        //   700: "#464B68",
        //   800: "#323549",
        //   900: "#1D1F2B",
        // },
      },
      screens: {
        xl: { max: "1279px" },
        lg: { max: "1023px" },
        md: { max: "767px" },
        sm: { max: "639px" },
      },
    },
  },
  plugins: [],
};
