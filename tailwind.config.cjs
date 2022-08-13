/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundColor: {
        'headerBlack': '#141414',
      },
      height: {
        'logo': '70px',
        'inherit': 'inherit'
      },
      width: {
        'inherit': 'inherit',
      },
      transitionDelay: {
        '70s': '0.2s',
      },
      colors: {
        'price': '#46d369',
        'backGradientTop': '#111 10%',
        'transparent90': 'transparent 90%',
        'backGradientSide': '#111 30%',
        'transparent70': 'transparent 70%'
      }
    },
  },
  plugins: [],
}
