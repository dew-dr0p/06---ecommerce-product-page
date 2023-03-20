/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      orange: {
        DEFAULT: '#FF7D1A',
        pale: '#FFEDE0'
      },
      blue: {
        veryDark: '#1D2025',
        grayish: {
          DEFAULT: '#B6BCC8',
          dark: '#68707D',
          light: '#F7F8FD'
        }
      }
    },
    extend: {},
  },
  plugins: [],
}