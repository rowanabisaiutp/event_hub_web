import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Importar los componentes de las páginas
import Inicio from './loading-page/inicio';
import QuienesSomos from './loading-page/quienes-somos';
import Servicios from './loading-page/servicio';
import Contacto from './loading-page/contactos';
import ClientHome from './loading-page/client_home';
import Loading from './components/loading';
import Home from './components/home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/quienes-somos" element={<QuienesSomos />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/cliente" element={<ClientHome />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
