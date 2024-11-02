/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#183754',
        secondary: '#5585A9',
        third:'#181717',
        background: '#F5F5F5',
        error: '#E0245E',
        success: '#17BF63',
        warning: '#FFAD1F',
      },
      fontFamily: {
        ebGaramond: ['EB Garamond', 'serif'],
        nunito: ['Nunito', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        dosis: ['Dosis', 'sans-serif'],
        quicksand: ['Quicksand', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

