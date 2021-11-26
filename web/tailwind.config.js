const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  plugins: [require('@tailwindcss/typography')],
  theme: {
    screens: {
      xs: '475px',
      ...defaultTheme.screens,
    },
  },
}
