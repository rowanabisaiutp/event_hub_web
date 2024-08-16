import React from 'react';
import { Link } from 'react-router-dom';
import './Css/styles.css'; // Asegúrate de que esta ruta sea correcta

// Importa las imágenes
import event1 from './imagenes/eventos/7.jpg';
import event2 from './imagenes/eventos/1.webp';
import event3 from './imagenes/eventos/4.jpg';
import event4 from './imagenes/eventos/6.jpg';
import event5 from './imagenes/eventos/2.webp';
import event6 from './imagenes/eventos/3.webp';
import event7 from './imagenes/eventos/5.jpeg';
import event8 from './imagenes/eventos/8.jpeg';
import twitterLogo from './imagenes/Twitter-X-White-Logo-PNG-1.png';
import footerLogo from './imagenes/logo.jpg';
import Navbar from './navbar';

const Servicio = () => {
    return (
        <div>
            <Navbar />

            <div className="main-content">
                <div className="content-wrapper">
                    <h1 className="typewriter-text" id="typewriter">Conoce Los Proximos<br />Eventos</h1>
                    <h2>Eventos Públicos</h2>

                    <div className="eventos">
                        <img src={event1} alt="Evento Público 4" width="1000" />
                        <img src={event2} alt="Evento Público 1" width="1000" />
                        <img src={event3} alt="Evento Público 2" width="1000" />
                        <img src={event4} alt="Evento Público 3" width="1000" />
                    </div>

                    <h2>Eventos Privados</h2>

                    <div className="eventos">
                        <img src={event5} alt="Evento Privado 1" width="1000" />
                        <img src={event6} alt="Evento Privado 2" width="1000" />
                        <img src={event7} alt="Evento Privado 3" width="1000" />
                        <img src={event8} alt="Evento Privado 4" width="1000" />
                    </div>
                </div>
            </div>

            <footer>
                <div className="container-info">
                    <div className="row justify-content-center">
                        <div className="footer-section links col-6 col-sm-3">
                            <h3>Enlaces</h3>
                            <ul>
                                <li><Link to="/inicio">Inicio</Link></li>
                                <li><Link to="/contacto">¿Quienes Somos?</Link></li>
                                <li><Link to="/privacidad">Privacidad</Link></li>
                                <li><Link to="/servicios">Terminos y Condiciones</Link></li>
                            </ul>
                        </div>
                        <div className="footer-plataformas col-6 col-sm-3">
                            <h5>Usa Digital Event Hub en</h5>
                            <ul>
                                <li><Link to="/inicio">Android</Link></li>
                                <li><Link to="/inicio">Iphone</Link></li>
                                <li><Link to="/inicio">Mac/PC</Link></li>
                                <li><Link to="/contacto">Digital Event Hub Web</Link></li>
                            </ul>
                        </div>
                        <div className="container-redes col-6 col-sm-3">
                            <h4>Nuestras Redes Sociales</h4>
                            <div className="social-icons">
                                <a className="Facebook" href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                                <a className="Instagram" href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                                <a className="Twitter-X" href="#" target="_blank" rel="noopener noreferrer">
                                    <img src={twitterLogo} alt="X Logo" />
                                </a>
                                <a className="WhatsApp" href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
                                <a className="Youtube" href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
                            </div>
                            <p>¡Síguenos en nuestras redes sociales para estar informado!</p>
                        </div>
                    </div>
                    <div className="footer-info-web">
                        <h3>Contacto</h3>
                        <p>Email: contacto@ejemplo.com</p>
                        <p>Teléfono: +34 123 456 789</p>
                        <p>Dirección: Calle Ejemplo 123, Ciudad, País</p>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container-logo-footer text-center text-md-left mb-3 mb-md-0">
                        <img className="logo-footer" src={footerLogo} alt="EventHub" width="110" height="110" />
                    </div>
                    <p>2024&copy; Digital Event Hub. Todos los derechos reservados, condiciones y políticas de privacidad.</p>
                </div>
            </footer>
        </div>
    );
};

export default Servicio;
