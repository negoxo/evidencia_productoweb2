import React from 'react';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import { FaRunning } from "react-icons/fa";
import { IoBicycleOutline } from "react-icons/io5";





function Header() {
    return(
      <header className="relative">
      <div className="bg-logo-image bg-no-repeat w-90 h-64 mt-6 bg-center"  ></div>
      <nav className="bg-black bg-opacity-70 text-white flex justify-between items-center px-5 py-3 w-full z-10">
          <ul className="flex space-x-4">
              <li><a href="/" className="font-bold">Home</a></li>
              <li><a href="quienessomos" className="font-bold">¿Quiénes Somos?</a></li>
              <li><a href="mision" className="font-bold">Misión</a></li>
              <li><a href="vision" className="font-bold">Visión</a></li>
          </ul>
          <ul class="flex space-x-3">
              <li><a href="https://maratonmedellin.com/" target="_blank" className="text-xl"><FaRunning /></a></li>
              <li><a href="https://encicla.metropol.gov.co/" target="_blank" className="text-xl"><IoBicycleOutline /></a></li>
          </ul>
      </nav>
  </header>
  );
}

export default Header;