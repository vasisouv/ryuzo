const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,vue}', './docs/**/*.{html,js,vue}'],
  theme: {
    extend: {
      colors: {
        primary: colors.blue,
      }
    }
  },
  plugins: [],
}
