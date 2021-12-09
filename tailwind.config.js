const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: { primary: colors.indigo },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
