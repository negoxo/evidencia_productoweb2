import React from 'react';

function Vision() {
    return (
        <main class="p-5">              
        <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-90 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div className="bg-vision-image bg-no-repeat w-90 h-64 mt-6 bg-center w-full rounded-t-lg h-96 md:h-156 md:w-68 md:rounded-none md:rounded-s-lg" ></div>
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Visión</h1>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Nuestra visión es convertirnos en la principal plataforma de turismo en bicicleta de Medellín y el Valle de Aburrá, reconocida por su innovación, accesibilidad y utilidad. Aspiramos a expandir nuestras funcionalidades, incluyendo guías detalladas de los principales lugares turísticos, sugerencias de planes y actividades que se pueden realizar en bicicleta, y opciones de servicios adicionales para ciclistas.

                    Queremos ser una referencia para los turistas que deseen explorar Medellín y sus alrededores de una manera única y saludable, fomentando el ciclismo como una forma de vida y una opción de transporte sostenible. Nuestra meta es contribuir al desarrollo del turismo local, ofreciendo una plataforma integral y amigable que satisfaga las necesidades de nuestros usuarios.</p>
            </div>
        </a>
    </main>
    );
  }
  
  export default Vision;