module.exports = {
  theme: {
    extend: {
      animation: {
        "float-slow": "float 20s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(50px, -50px)" },
        },
      },
    },
  },
  // ... rest of your config
};
