/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}',"./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        'green': '#a9bc93'
      }
    },
    fontFamily: {
      'btn': ['Inter'],
      'h1': ['Inter'],
      'sans': 'Hoefler Text',
      'singa': 'Singa Serif DEMO'
    },
  },
  plugins: [require('@tailwindcss/line-clamp'), require('@tailwindcss/aspect-ratio'),require('flowbite/plugin')],
}
