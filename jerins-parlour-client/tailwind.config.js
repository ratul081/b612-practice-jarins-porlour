/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        doctorTheme: {
          "primary": "#F63E7B",
          "secondary": "#19D3AE",
          "accent": "#3A4256",
          "neutral": "#3D4451",
          "base-100": "#FFFFFF",
        },
      },
      ["light", "dark", "cupcake"]
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}