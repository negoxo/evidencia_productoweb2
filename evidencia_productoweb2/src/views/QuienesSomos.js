import React from 'react';


function QuienesSomos() {
    return (
        <main className="p-5">
        <section className="relative flex flex-col md:flex-row items-center md:items-start mb-8">
            <div className="md:w-1/2 p-5">
                <h1 className="text-3xl font-bold ">Quiénes Somos</h1>
                <p className="mt-4">Bienvenidos a nuestra página dedicada a los amantes del ciclismo y el turismo en Medellín y el Valle de Aburrá. Somos un equipo apasionado por el ciclismo y la tecnología, comprometidos en ofrecer una plataforma amigable y útil para todos los turistas que deseen explorar nuestra hermosa ciudad y sus alrededores en bicicleta.</p>
                <p className="mt-4">Nuestra misión es proporcionar una experiencia única y placentera, combinando la belleza de los paisajes urbanos y rurales con la comodidad de la tecnología moderna. A través de nuestra página, puedes planificar tu ruta, consultar el clima y descubrir los mejores destinos para disfrutar de un recorrido inolvidable en bicicleta.</p>             

            </div>
            <div className="md:w-1/2 p-5 w-full h-auto rounded-lg shadow-lg">
                <div className="bg-quienessomos-image bg-no-repeat w-90 h-64 mt-6 bg-center"></div>
            </div>
        </section>

    </main>
    );
  }
  
  export default QuienesSomos;