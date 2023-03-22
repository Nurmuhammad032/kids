/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkGreen: "#005461",
        lightGreen: "#16626D",
        lightWhite: "#E4F0F2",
      },
      backgroundImage: {
        gradientBlue:
          "linear-gradient(94.81deg, #6A35FF -13.38%, #9772FE 101.22%)",
        gradientGreen:
          "linear-gradient(96.01deg, #00FFF0 -35.44%, #F8FFA8 125.39%)",
      },
      fontFamily: {
        extraBold: "gilroy-extraBold, sans-serif",
        bold: "gilroy-bold, sans-serif",
        semibold: "gilroy-semibold, sans-serif",
        regular: "gilroy-regular, sans-serif",
        medium: "gilroy-medium, sans-serif",
        light: "gilroy-light, sans-serif",
      },
    },
  },
  plugins: [],
};
