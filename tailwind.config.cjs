/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor : {
        navColor : "#DCE7F9"
      },
      textColor : {
        navColor : "#000000"
      },
      height : {
        navHeight : "10vh"
      },
      fontFamily: {
        'press-start': ['"Press Start 2P"', 'cursive'],
      },
      dropShadow: {
        '3xl': '0 5px 5px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [],
}