/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: {
        50: "#fff1f2",
        100: "#ffe3e6",
        200: "#ffccd3",
        300: "#ffb6c1",
        400: "#fe6e87",
        500: "#f83b60",
        600: "#e5194c",
        700: "#c20e3f",
        800: "#a20f3c",
        900: "#8b1039",
        950: "#4e031a",
      },
      dark: {
        50: "#f6f6f6",
        100: "#e7e7e7",
        200: "#d1d1d1",
        300: "#b0b0b0",
        400: "#888888",
        500: "#6d6d6d",
        600: "#5d5d5d",
        700: "#4f4f4f",
        800: "#454545",
        900: "#3d3d3d",
        950: "#000000",
      },
      white: "#ffffff",
      black: "#000000",
      green: "#98FB98",
      Beige: `#F5F5DC`,
      Ivory: `#FFFFF0`,
      LightGray: `#D3D3D3`,
      RoseGold: `#B76E79`,
      Gold: `#FFD700`,
      SubBlue: `#ADD8E6`,
      Coral: `#FF6F61`,
      Red: `#FF0000`,
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
