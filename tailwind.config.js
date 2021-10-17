module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Roboto', 'Helvetica', 'sans-serif']
    },
    extend: {
      backgroundImage: (theme) => ({
        'mozaic-bg': "url('/public/logos/background.png')",
      })
      }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
