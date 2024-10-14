/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "dodger-blue": {
          50: "#edf9ff",
          100: "#d7f1ff",
          200: "#b9e8ff",
          300: "#88dbff",
          400: "#50c5ff",
          500: "#28a7ff",
          600: "#1e90ff",
          700: "#0a71eb",
          800: "#0f5abe",
          900: "#134e95",
          950: "#11305a",
        },
      },
    },
  },
  plugins: [],
}
