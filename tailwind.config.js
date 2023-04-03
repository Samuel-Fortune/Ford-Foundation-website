/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,css}"],
  theme: {
    screens: {
      'sm': '650px',
      // => @media (min-width: 650px) { ... }

      'md': '1440px',
      // => @media (min-width: 1440px) { ... }
      'real-md': '780px',

      'lg': '1920px',
      // => @media (min-width: 1920px) { ... }
    },

    extend: {
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
        NotoSans: ['Noto Sans', 'sans-serif'],
        OpenSans: ['Open Sans', 'sans-serif'],
        Roboto: ['Roboto', 'sans-serif'],
        Slabo: ['Slabo 27px', 'serif'],
        Ubuntu: ['Ubuntu', 'sans-serif'],
        Outfit: ['Outfit', 'sans-serif'],
        Oswald: ['Oswald', 'sans-serif'],
        Lato: ['Lato', 'sans-serif'],
        Inter: ['Inter', 'sans-serif'],
        Barlow: ['Barlow', 'sans-serif'],
        Handrawn: ['Delicious Handrawn', 'cursive'],
        Raleway: ['Raleway', 'sans-serif'],
        Proxima: ['Proxima Nova']
      }
    },
  },
  plugins: [],
}
