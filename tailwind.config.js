/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
       bebas: ["Bebas Neue","sans-serif"],
       heebo: ["Heebo","self-serif"],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient': "url(/images/gradient.jpeg)",
      },
      colors: {
        background: '#181818',
        buttons: '#00CCCC',
      }
    },
  },
  plugins: [],
}