// src/MapComponent.js

import React, { useState, useCallback } from 'react';
import { GoogleMap, LoadScript, Marker, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';


const containerStyle = {
  width: '700px',
  height: '500px'
};

const center = {
  lat: -3.745,
  lng: -38.523
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

  return (
    <LoadScript googleMapsApiKey="AIzaSyCNYt-rYifEvAi_HD6l3bCKVovekstsXFw">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
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
  )
}

export default MapComponent;