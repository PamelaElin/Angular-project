/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        customDarkGreen: "#165824b1",
        customDark: "#0F0F0E",
        customGreen: "#005A14",
      },
    },
  },
  plugins: [],
};
