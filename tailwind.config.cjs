/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    container: {
      center: true
    },
    extend: {
      colors: {
        primary: '#931323',
        secondary: '#333',
      },
      backgroundImage: {
        'hero': 'url("/src/assets/coding_b&w_1200.png")',
        'avatar': 'url("/src/assets/oficina_removebg_tinify.png")'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('flowbite/plugin')
  ],
}
