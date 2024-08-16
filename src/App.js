import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Importar los componentes de las páginas
import Inicio from './loading-page/inicio';
import QuienesSomos from './loading-page/quienes-somos';
import Servicios from './loading-page/servicio';
import Contacto from './loading-page/contactos';
import ClientHome from './loading-page/client_home';
import Loading from './client/components/loading';
import Home from './client/components/home';
import Formulario from './client/components/event/form';
import EventDetail from './loading-page/event_detail';
import EventInformation from './client/home_init/event_details_home';
import ClientHomeEventNew from './client/home_init/client_home_new';
import ClientHomeNuevo from './loading-page/client_home_otro';
import Login from './auth/login';
import Registro from './auth/register';
import ResetPassword from './auth/reset_password';

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
        {/* Rutas del login, registro y reset password*/}
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/reset" element={<ResetPassword />} />
        {/* Rutas para navegar dentro del home */}
        <Route path="/home" element={<Home />} />
        <Route path="/evento/:eventId" element={<EventDetail />} />
        <Route path="/cliente/event/:id" element={<Formulario />} />
        {/* Nueva ruta */}
        <Route path="/evento/home/:eventId" element={<EventInformation />} />
        <Route path="/cliente/home" element={<ClientHomeEventNew />} />
        <Route path="/cliente/home/nuevo" element={<ClientHomeNuevo />} />


      </Routes>
    </Router>
  );
};

export default App;
