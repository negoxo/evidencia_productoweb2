import React from 'react';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import './App.css'
import Home from './views/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Maps from './views/Maps'


function App() {
  return(
  <div>
    <Header />    
      <Home />
    <Footer />
  </div>
  );
}

export default App;