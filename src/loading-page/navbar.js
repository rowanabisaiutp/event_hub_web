import React from 'react';
import './Css/styles.css';
import logo from './imagenes/logo-2.png';
const Navbar = () => {
  return (
    <header>
    <div className="logo-container">
      <img src={logo} alt="Logo" width="140" height="140" />
      <h1 >Bienvenidos</h1>
    </div>
    <nav>
      <ul>
        <li><a className="link" href="/">Inicio</a></li>
        
        <li><a className="link" href="/quienes-somos">Quienes Somos</a></li>
        <li><a className="link" href="/servicios">Servicios</a></li>
        <li><a className="link" href="/contacto">Contacto</a></li>
        <li><a className="link" href="/cliente">Eventos</a></li>
        
      </ul>
    </nav>
  </header>
  );
};

export default Navbar;
