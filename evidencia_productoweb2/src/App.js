import React from 'react';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import './App.css'
import Home from './views/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Mision from './views/Mision'
import Vision from './views/Vision'
import QuienesSomos from './views/QuienesSomos';
import RouteResult from './views/RouteResult';


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/routeresult" element={<RouteResult />} />
          <Route path='/mision' element={<Mision />} />
          <Route path='/vision' element={<Vision />} />
          <Route path='/quienessomos' element={<QuienesSomos />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;