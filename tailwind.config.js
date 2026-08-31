/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 20px 80px -30px rgba(59, 130, 246, 0.55)",
      },
    },
  },
  daisyui: {
    themes: [
      {
        portfolio: {
          primary: "#2563eb",
          secondary: "#7c3aed",
          accent: "#14b8a6",
          neutral: "#111827",
          "base-100": "#ffffff",
          "base-200": "#f3f4f6",
          "base-300": "#e5e7eb",
          "base-content": "#111827",
          info: "#0ea5e9",
          success: "#16a34a",
          warning: "#d97706",
          error: "#dc2626"
        }
      },
      "night"
    ]
  },
  plugins: [require("daisyui")],
};
