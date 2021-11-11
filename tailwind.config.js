const colors = require('tailwindcss/colors');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      gray: colors.coolGray,
      blue: colors.cyan,
      red: colors.rose,
      pink: colors.pink,
      green: colors.lime,
      purple: colors.purple
    },
    extend: {}
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
