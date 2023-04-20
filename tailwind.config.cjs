/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js,ts,tsx,jsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#2C2E81",
        orange: "#FF8C00",
        green: "#51B749",
        yellow: "#FDD749",
        pink: "#F277B5",
      },
    },
  },
  plugins: [],
};
