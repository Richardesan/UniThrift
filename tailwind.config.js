/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        whiteText: "#fff",
        primaryCol: "#220e24",
        secondaryCol: "#342056",
        actionCol: "#5454c5",
        darkText: "#000000",
        hoverCol: "#6f6ff3",
        greenText: "#1d8221",
        redText: "#E02B2B",
        skyText: "#32BDE8",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
