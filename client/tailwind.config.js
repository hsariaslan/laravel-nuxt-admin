module.exports = {
  mode: 'jit',
  purge: [
    './components/**/*.{vue,js}',
    './pages/**/*.vue',
    './layouts/**/*.vue',
    './store/**/*.js',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        trueGray: {
          900: '#1A1A1A',
          850: '#222222',
          800: '#333333',
          700: '#4D4D4D',
          600: '#666666',
          500: '#808080',
          400: '#999999',
          300: '#B3B3B3',
          200: '#CCCCCC',
          100: '#E6E6E6',
        },
        darkBlue: {
          900: '#1D233A',
          600: '#1A3661',
          300: '#1657A3',
        },
        sideBar: {
          900: '#1E1E29',
          800: '#201F2A',
          700: '#272634',
          400: '#3D3C49',
          200: '#858598',
          100: '#C9C7EF',
        },
      },
      fontFamily: {
        quicksand: ['Quicksand'],
        roboto: ['Roboto'],
      },
      spacing: {
        14: "3.5rem",
        15: "3.75rem",
        44: "11rem",
        72: "18rem",
        73: "18.25rem",
        74: "18.5rem",
        78: "19.5rem",
        79: "19.75rem",
        100: "25rem",
        128: "32rem",
        180: "45rem",
        320: "80rem"
      }
    },
  },
  variants: {
    backgroundColor: ['hover'],
    extend: {},
  },
  plugins: [],
}