import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa';


const ClientNavbar = () => {
  return (
    <header>

      <nav>
        <ul>
          <li><Link className="link" to="/">Inicio</Link></li>
          
          <li><Link className="link" to="/quienes-somos">Quienes Somos</Link></li>
          <li><a className="link" href="/servicios">Servicios</a></li>
          <li><Link className="link" to="/contacto">Contacto</Link></li>
          <li><a className="link" href="/cliente">Eventos</a></li>
          <li><a href="loading" className="login-button">Iniciar sesión</a></li>
        </ul>
      </nav>
      <div className="social-icons">
        <a className="Facebook" href="#" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
        <a className="Instagram" href="#" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a className="Twitter-X" href="#" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        <a className="WhatsApp" href="#" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
        <a className="Youtube" href="#" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
      </div>
    </header>
  );
};

export default ClientNavbar;
