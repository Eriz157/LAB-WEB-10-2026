
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        kopi: {
          50: "#faf5ef",
          100: "#f0e3d2",
          600: "#8b5e3c",
          700: "#6f452b",
          900: "#38251b",
        },
      },
    },
  },
  plugins: [],
};
