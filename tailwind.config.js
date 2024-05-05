/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#25D366",
        foreground: "#1C1C1C",
      },
      fontFamily: {
        bruno: "BrunoAce",
        regular: "Inter400",
        medium: "Inter500",
      },
    },
  },
  plugins: [],
};
