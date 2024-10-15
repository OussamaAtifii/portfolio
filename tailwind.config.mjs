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
      keyframes: {
        slidein: {
          from: {
            opacity: "0",
            transform: "translateY(20px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        glow: {
          "0%, 100%": {
            textShadow: "0 0 10px rgba(30,144,255, 0.75)",
          },
          "50%": {
            textShadow: "0 0 20px rgba(30,144,255, 1)",
          },
        },
      },
      animation: {
        slidein200: "slidein 0.8s cubic-bezier(0.4, 0, 0.2, 1) 200ms",
        slidein300: "slidein 0.8s cubic-bezier(0.4, 0, 0.2, 1) 300ms",
        glow: "glow 1.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}
