module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
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
