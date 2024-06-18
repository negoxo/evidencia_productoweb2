// src/MapComponent.js

import React, { useState, useCallback } from 'react';
import { GoogleMap, LoadScript, Marker, DirectionsService, DirectionsRenderer, Autocomplete } from '@react-google-maps/api';


const containerStyle = {
  width: '100%',
  height: '550px'
};

const center = {
  lat: 6.25184,
  lng: -75.56359
};

const MapComponent = () => {
  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);
  const [directions, setDirections] = useState(null);

  const onMapClick = useCallback((event) => {
    if (!origin) {
      setOrigin({
        lat: event.latLng.lat(),
        lng: event.latLng.lng()
      });
    } else if (!destination) {
      setDestination({
        lat: event.latLng.lat(),
        lng: event.latLng.lng()
      });
    }
  }, [origin, destination]);

  const directionsCallback = (response) => {
    if (response !== null) {
      if (response.status === 'OK') {
        setDirections(response);
      } else {
        console.log('response: ', response);
      }
    }
  };

  <section className="columna2">
        <input placeholder='Origen'></input>
        <input placeholder='Destino'></input>
        <button>Calcula tu ruta</button>
      </section>

  return (
    <>
    <section className="columna2">
        <input placeholder='Origen'></input>
        <input placeholder='Destino'></input>
        <button>Calcula tu ruta</button>
      </section>
    <LoadScript googleMapsApiKey="AIzaSyCNYt-rYifEvAi_HD6l3bCKVovekstsXFw">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12.5}
        onClick={onMapClick}
      >
        {origin && <Marker position={origin} />}
        {destination && <Marker position={destination} />}
        {origin && destination && (
          <DirectionsService
            options={{
              destination: destination,
              origin: origin,
              travelMode: 'DRIVING'
            }}
            callback={directionsCallback}
          />
        )}
        {directions && (
          <DirectionsRenderer
            options={{
              directions: directions
            }}
          />
        )}
      </GoogleMap>
    </LoadScript>
    </>      

  )
}

export default MapComponent;