/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  themes: false,
  darkMode: 'media',
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
        'hero': 'url("/assets/coding_bw_1200.webp")',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss-intersect'),
  ],
}
