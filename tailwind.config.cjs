/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
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
        'hero': 'url("/src/assets/coding_b&w_1440.png")',
        'avatar': 'url("/src/assets/oficina_removebg_tinify.png")'
      }
    },
  },
  plugins: [],
}
