/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    fontSize:{
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32,
    },
    
    colors: {
      transparent: 'transparent',

      black: '#000',
      white: '#FFF',

      gray: {
        900: '#121214',
        800: '#202024',
        400: '#7c7c8a',
        200: '#e1e1e6',
        100: '#c4c4cc',
      },

      cyan: {
        600: '#4dabf7',
        500: '#61dafb',
        300: '#61b1fb',
      },
    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      },
    },
  },
  plugins: [],
}
