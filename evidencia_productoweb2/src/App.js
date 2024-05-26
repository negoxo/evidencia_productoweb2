import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Img from './Img/valle-de-aburra-1.jpg';
import './App.css';

function App() {
  return (
    <div 
      className="App App-background"
      style={{ backgroundImage: `url(${Img})` }} /* Establecer la imagen de fondo */
    >
      <h1 className="title">El Clima en el Valle de Aburrá</h1>
      <section className="columna1">
        <form>
          <label>Municipios del valle de aburra</label>
          <br /><br />
          <select>
            <option>Medellín</option>
            <option>Envigado</option>
            <option>Sabaneta</option>
            <option>Caldas</option>
            <option>La Estrella</option>
            <option>Girardota</option>
            <option>Copacabana</option>
            <option>Barbosa</option>
            <option>Bello</option>
            <option>Itagüí</option>
          </select>
        </form>
      </section>
      <br />
      <section className="columna2">
        <form>
          <label>Fecha que desea consultar</label>
          <br /><br />
          <select>
            <option>Actual</option>
          </select>
        </form>
      </section>
    </div>
  );
}

export default App;