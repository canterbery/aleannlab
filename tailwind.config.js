/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      "2sm": "350px",
      sm: "639px",
      md: "768px",
      lg: "1024px",
    },
    listStyleType: {
      square: "square",
    },
    extend: {
      boxShadow: {
        box: "2px 1px 7px rgba(0, 0, 0, 0.08) ,0px 2px 1px -1px rgba(0, 0, 0, 0.04), 0px 1px 3px rgba(0, 0, 0, 0.12)",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        proxima: ["Proxima Nova", "sans-serif"],
      },
    },
  },
  plugins: [],
};
