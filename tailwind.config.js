export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "#F26922",
        blackBold: "#09090B",
        grayBold: "#71717A",
      },
      backgroundColor: {
        blackLight: "#27272A",
        whiteLight: "#E4E4E7",
      },
      fontFamily: {
        onest: '"Onest", "sans-serif"',
        babesNeue: "Bebas Neue",
      },
      fontSize: {
        14: "14px",
        12: "12px"
      }
    },
  },
  plugins: [],
};