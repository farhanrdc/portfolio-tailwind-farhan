/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        sembilan: '#312e81',
        tujuh: '#4338ca',
        empat: '#818cf8',
        tiga: '#a5b4fc',
        dua: '#c7d2fe',
        satu: '#e0e7ff',
      },
      screens: {
        '2xl': '1320px',
      },

    },
  },
  plugins: [],
}
