/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Vazir": ["Vazir"],
        "VazirBold": ["VazirBold"],
        "VazirLight": ["VazirLight"],
        "VazirMedium": ["VazirMedium"],
        "VazirUltraLight": ["VazirUltraLight"],
      },
    },
  },
  plugins: [],
}
