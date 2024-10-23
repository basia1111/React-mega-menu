/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",     
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        exo: ['Exo', 'sans-serif'],
      },
      colors: {
        body: 'rgba(249, 249, 247, 1)',
        text: '#242424',
        indigo_accent:'#3d5afe'
      }
    },
  },
  plugins: [],
}

