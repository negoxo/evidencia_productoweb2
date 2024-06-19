import React from 'react';


function Mision(){
    return (
        <>
        <main class="p-5">              
                <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow     md:flex-row md:max-w-90 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <div className="bg-mision-image bg-no-repeat w-90 h-64 mt-6 bg-center w-full rounded-t-lg h-96 md:h-156 md:w-68 md:rounded-none md:rounded-s-lg"></div>
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Misión</h1>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Nuestra misión es promover el ciclismo como una forma de turismo sostenible y saludable en  Medellín y el Valle de Aburrá. Queremos facilitar a los turistas y a los locales el acceso a herramientas tecnológicas que les permitan planificar sus rutas de manera eficiente, segura y placentera.

                        Nos esforzamos por ofrecer información precisa y actualizada sobre las condiciones climáticas y las rutas ciclistas más recomendadas, asegurando que cada recorrido sea una experiencia memorable y libre de inconvenientes. Nuestra plataforma busca integrar la pasión por el ciclismo con la exploración cultural y natural de nuestra región.</p>
                </div>
        </a>
        </main>   
        </>
    );
  }
  
  export default Mision;