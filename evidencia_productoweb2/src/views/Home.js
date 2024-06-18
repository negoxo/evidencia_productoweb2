import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';




function Home() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('Medellin');

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const apiKey = '9e7e29464ca934303c3571d09caf8f58';
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        setWeather(response.data);
      } catch (error) {
        console.error("Error fetching weather data", error);
      }
    };

    fetchWeather();
  }, [city]);

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">VAMOS EN BICI</h1>
      <div className="grid grid-cols-2 gap-8 w-full max-w-4xl">
        <section className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Ruta</h2>
          <input 
            className="border border-gray-300 rounded-md p-2 mb-4 w-full" 
            placeholder="Origen" 
          />
          <input 
            className="border border-gray-300 rounded-md p-2 mb-4 w-full" 
            placeholder="Destino" 
          />
          <button className="bg-blue-500 text-white rounded-md p-2 w-full">Calcula tu ruta</button>
        </section>
        <section className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Clima Municipios del valle de aburra</h2>
          <form>
            <label className="block mb-2">Seleccione un municipio</label>
            <select 
              className="border border-gray-300 rounded-md p-2 mb-4 w-full" 
              onChange={handleCityChange} 
              value={city}
            >
              <option>Medellin</option>
              <option>Envigado</option>
              <option>Sabaneta</option>
              <option>Caldas</option>
              <option>La Estrella</option>
              <option>Girardota</option>
              <option>Copacabana</option>
              <option>Barbosa</option>
              <option>Bello</option>
              <option>Itagui</option>
            </select>
          </form>
          {weather && (
            <div className="weather-info mt-4">
              <h3 className="text-xl font-bold">{weather.name}</h3>
              <p>Temperatura: {weather.main.temp}°C</p>
              <p>Humedad: {weather.main.humidity}%</p>
              <p>Condición: {weather.weather[0].description}</p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export default Home;