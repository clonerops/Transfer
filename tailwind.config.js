/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Yekan": ["Yekan"],
        "YekanBold": ["YekanBold"],
        "YekanLight": ["YekanLight"],
        "YekanMedium": ["YekanMedium"],
        "YekanUltraLight": ["YekanUltraLight"],
      },
    },
  },
  plugins: [],
}
