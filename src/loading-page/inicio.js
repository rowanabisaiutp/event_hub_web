// src/components/Home.js
import React, { useEffect } from 'react';
import './Css/styles.css'; // Asegúrate de que la ruta sea correcta
import img1 from './imagenes/1.jpg';
import img2 from './imagenes/2.jpg';
import img3 from './imagenes/3.jpg';
import logoFooter from './imagenes/logo.jpg';
import twitterLogo from './imagenes/Twitter-X-White-Logo-PNG-1.png';
import Navbar from './navbar';

const Inicio = () => {
    useEffect(() => {
        showSlide(currentIndex);
        const interval = setInterval(() => {
            moveSlide(1);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    let currentIndex = 0;

    function moveSlide(n) {
        showSlide(currentIndex += n);
    }

    function currentSlide(n) {
        showSlide(currentIndex = n);
    }

    function showSlide(n) {
        const slides = document.querySelectorAll('.carousel-images img');
        const indicators = document.querySelectorAll('.carousel-indicators span');

        if (n >= slides.length) currentIndex = 0;
        if (n < 0) currentIndex = slides.length - 1;

        slides.forEach((slide, index) => {
            slide.style.display = 'none';
            indicators[index].className = '';
        });

        slides[currentIndex].style.display = 'block';
        indicators[currentIndex].className = 'active';
    }

    return (
        <>
            <Navbar />
            <div className="main-content">
                <div className="content-wrapper">
                    <h1 className="typewriter-text" id="typewriter">Digital Event <br />Hub</h1>
                    <h2>Divierte en nuestros eventos populares</h2>

                    <div className="carousel">
                        <div className="carousel-images">
                            <img src={img1} alt="Evento 1" width="1000" />
                            <img src={img2} alt="Evento 2" width="1000" />
                            <img src={img3} alt="Evento 3" width="1000" />
                        </div>
                        <button className="prev" onClick={() => moveSlide(-1)}>&#10094;</button>
                        <button className="next" onClick={() => moveSlide(1)}>&#10095;</button>
                        <div className="carousel-indicators">
                            <span className="active" onClick={() => currentSlide(0)}></span>
                            <span onClick={() => currentSlide(1)}></span>
                            <span onClick={() => currentSlide(2)}></span>
                        </div>
                    </div>
                </div>
            </div>

            <footer>
                <div className="container-info">
                    <div className="row justify-content-center">
                        <div className="footer-section links col-6 col-sm-3">
                            <h3>Enlaces</h3>
                            <ul>
                                <li><a href="/inicio">Inicio</a></li>
                                <li><a href="/contacto">¿Quienes Somos?</a></li>
                                <li><a href="/privacidad">Privacidad</a></li>
                                <li><a href="/servicios">Terminos y Condiciones</a></li>
                            </ul>
                        </div>
                        <div className="footer-plataformas col-6 col-sm-3">
                            <h5>Usa Digital Event Hub en</h5>
                            <ul>
                                <li><a href="/inicio">Android</a></li>
                                <li><a href="/inicio">Iphone</a></li>
                                <li><a href="/inicio">Mac/PC</a></li>
                                <li><a href="/contacto">Digital Event Hub Web</a></li>
                            </ul>
                        </div>
                        <div className="container-redes col-6 col-sm-3">
                            <h4>Nuestras Redes Sociales</h4>
                            <div className="social-icons">
                                <a className="Facebook" href="#" target="_blank"><i className="fab fa-facebook-f"></i></a>
                                <a className="Instagram" href="#" target="_blank"><i className="fab fa-instagram"></i></a>
                                <a className="Twitter-X" href="#" target="_blank"><img src={twitterLogo} alt="X Logo" /></a>
                                <a className="WhatsApp" href="#" target="_blank"><i className="fab fa-whatsapp"></i></a>
                                <a className="Youtube" href="#" target="_blank"><i className="fab fa-youtube"></i></a>
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
                        <img className="logo-footer" src={logoFooter} alt="EventHub" width="110" height="110" />
                    </div>
                    <p>2024&copy; Digital Event Hub. Todos los derechos reservados, condiciones y políticas de privacidad.</p>
                </div>
            </footer>
        </>
    );
};

export default Inicio;
