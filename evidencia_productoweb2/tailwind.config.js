/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [".index.html","./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage:{
        'logo-image':"url('/src/Img/WhatsApp Image 2024-06-17 at 9.17.53 AM.jpeg')",
        'mision-image':"url('/src/Img/Fietsvakanties zijn de afgelopen twee jaar flink populairder geworden_.jfif')",'vision-image':"url('/src/Img/AR aprova recomendações para o incentivo à mobilidade sustentável, nomeadamente à utilização de bicicletas.jfif')",'quienessomos-image':"url('/src/Img/Ciudad.jfif')",'quienessomos-image':"url('/src/Img/Ciudad.jfif')"
      }
    },
  },
  plugins: [],
}

