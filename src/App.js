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
import Formulario from './components/event/form';

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
        {/* Rutas para navegar dentro del home */}
        <Route path="/home" element={<Home />} />
        {/* <Route path="/home/eventos" element={<Eventos />} /> */}
        <Route path="/cliente/event/:id" element={<Formulario />} />
      </Routes>
    </Router>
  );
};

export default App;
