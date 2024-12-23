/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 30s linear infinite",
        "spin-reverse": "spin 25s linear infinite reverse",
        float: "float 15s ease-in-out infinite",
        "float-slow": "floatSlow 25s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(40px, -40px)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg)" },
          "50%": { transform: "translate(100px, -100px) rotate(180deg)" },
        },
      },
    },
  },
  plugins: [],
};
