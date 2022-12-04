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
        navColor : "#154E6D"
      },
      height : {
        navHeight : "12%"
      },
      fontFamily: {
        'press-start': ['"Press Start 2P"', 'cursive'],
      },
    },
  },
  plugins: [],
}