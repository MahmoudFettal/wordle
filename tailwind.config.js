module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Outfit", "ui-sans-serif", "system-ui"],
    },
    extend: {
      dropShadow: {
        "3xl": "0px 35px 35px rgba(0, 0, 0, 0.45)",
      },
      width: {
        128: "35rem",
      },
      height: {
        128: "35rem",
      },
    },
  },
  plugins: [],
};
