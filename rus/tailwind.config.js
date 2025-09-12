// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        heartbeat: {
          "0%, 100%": { transform: "scale(1)" },
          "25%": { transform: "scale(1.15)" },
          "40%": { transform: "scale(0.9)" },
          "60%": { transform: "scale(1.15)" },
          "80%": { transform: "scale(0.95)" },
        },
      },
      animation: {
        heartbeat: "heartbeat 1.3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
