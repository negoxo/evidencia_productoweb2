import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';
import { useLocation } from 'react-router-dom';

function RouteResult() {
  const location = useLocation();
  const { origin, destination } = location.state || {};
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  

  const directionsCallback = (result, status) => {
    if (status === 'OK') {
      setResponse(result);
      setLoading(false);
    } else {
      setError('No se pudo calcular la ruta.');
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!origin || !destination) {
      setError('Origen o destino no proporcionado.');
    }
  }, [origin, destination]);

  useEffect(() => {
    if (origin && destination) {
      setLoading(true);
      setResponse(null); // Reset previous response
    }
  }, [origin, destination]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Resultado de la Ruta</h1>
      <div className="w-full h-96">
        <LoadScript googleMapsApiKey="AIzaSyCNYt-rYifEvAi_HD6l3bCKVovekstsXFw">
          <GoogleMap
            mapContainerStyle={{ width: '100%', height: '100%' }}
            center={{ lat: 6.2442, lng: -75.5812 }}
            zoom={12}
          >
            {origin && destination && loading && (
              <DirectionsService
                options={{
                  destination: destination,
                  origin: origin,
                  travelMode: 'DRIVING'
                }}
                callback={directionsCallback}
              />
            )}
            {response && (
              <DirectionsRenderer
                options={{
                  directions: response
                }}
              />
            )}
          </GoogleMap>
        </LoadScript>
      </div>
      {loading && <p className="text-blue-500 mt-4">Calculando ruta...</p>}
      {response && (
        <div className="mt-4 p-4 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold">Detalles de la Ruta</h2>
          <p><strong>Distancia:</strong> {response.routes[0].legs[0].distance.text}</p>
          <p><strong>Duración:</strong> {response.routes[0].legs[0].duration.text}</p>
        </div>
      )}
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
}

export default RouteResult;