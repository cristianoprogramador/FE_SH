/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sideBarTop': '#804CBA',
        'sideBarBottom': '#001846',
        "boxShadow": "0px 0px 48px 0px rgba(0, 0, 0, 0.53)",
        "cardBG": "#C78DF4"
      },
      gradientColorStopPositions: {
        38: '38%',
      },
      boxShadow: {
        '3xl': "0px 0px 48px 0px rgba(0, 0, 0, 0.53)",
      },
    }
  },
  plugins: [],
}