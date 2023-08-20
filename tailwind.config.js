/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      black: {
        50: "#f7f7f7",
        100: "#e3e3e3",
        200: "#c8c8c8",
        300: "#a4a4a4",
        400: "#818181",
        500: "#666666",
        600: "#515151",
        700: "#434343",
        800: "#383838",
        900: "#313131",
        950: "#1f1f1f",
      },
      white: "#F2F2F2",
      orange: "#FD6A3F",
      red: "#ef4444",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        "work-sans": ['"Work Sans"', "sans-serif"],
        forum: ['"Forum"', "cursive"],
      },
    },
  },
  plugins: [],
};
