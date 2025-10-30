/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // Ensure all component files are included for proper purging
    "./src/components/**/*.{js,jsx}",
    "./src/hooks/**/*.{js,jsx}",
    "./src/utils/**/*.{js,jsx}",
  ],
  // Enable JIT mode for better performance
  mode: "jit",
  theme: {
    screens: {
      xs: "375px", // Standard mobile (iPhone, most Android phones)
      sm: "640px", // Large phones, small tablets
      md: "768px", // Tablets
      lg: "1024px", // Small laptops, large tablets landscape
      xl: "1280px", // Desktops
      "2xl": "1536px", // Large desktops
    },
    extend: {
      colors: {
        primary: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
          950: "#052e16",
        },
        "dark-green": {
          50: "#d1fae5",
          100: "#a7f3d0",
          200: "#6ee7b7",
          300: "#34d399",
          400: "#10b981",
          500: "#059669",
          600: "#047857",
          700: "#065f46",
          800: "#064e3b",
          900: "#022c22",
        },
      },
      backgroundColor: {
        dark: "#0f172a",
      },
      textColor: {
        light: "#f8fafc",
        "gray-custom": "#64748b",
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "1" }],
        "6xl": ["3.75rem", { lineHeight: "1" }],
        "7xl": ["4.5rem", { lineHeight: "1" }],
        "8xl": ["6rem", { lineHeight: "1" }],
        "9xl": ["8rem", { lineHeight: "1" }],
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
        128: "32rem",
      },
    },
  },
  plugins: [],
};
