/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      lineHeight: {
        'extra-loose': '3',
        '12': '3rem'
      },
      fontFamily: {
        'hel': "Helvetica, Arial, sans-serif"
      }
    },
  },
  plugins: [],
}
