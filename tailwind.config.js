/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#083F46',
        'secondary': '#f50057'
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'], 
        'open-sans': ['Open Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}

