/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [".index.html","./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage:{
        'logo-image': "url('/src/Img/WhatsApp Image 2024-06-17 at 9.17.53 AM.jpeg')"
      }
    },
  },
  plugins: [],
}

