const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  plugins: [require('@tailwindcss/typography')],
  purge: {
    content: [
      `components/**/*.{vue,js}`,
      `layouts/**/*.vue`,
      `pages/**/*.vue`,
      `plugins/**/*.{js,ts}`,
      `nuxt.config.{js,ts}`,
    ],
  },
  theme: {
    screens: {
      xs: '475px',
      ...defaultTheme.screens,
    },
  },
}
