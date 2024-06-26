/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        black: '#000000',
        blue: {
          DEFAULT: '#4793FF',
          100: '#4793FF33'
        } ,
        gray: '#939CB0'
      },
      lineHeight: {
        15: '17.07px',
        17: '17.07px',
        20: '21.94px',
        30: '30.48px',
        40: '48.76px'
      },
      boxShadow: {
        xs: '2px 5px 25px -3px #B4B4B440',
        md: '1px 4px 10px -1px #4793FF33',
      }
    },
  },
  plugins: [],
  darkMode: 'class'
}

