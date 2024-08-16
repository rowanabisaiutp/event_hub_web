import React from 'react';
import { Link } from 'react-router-dom';

// Importa las imágenes
import logo from './imagenes/logo-2.png';
import twitterLogo from './imagenes/Twitter-X-White-Logo-PNG-1.png';
import footerLogo from './imagenes/logo.jpg';

import './Css/styles.css';
import './Css/quienes-somos.css';
import Navbar from './navbar';

const QuienesSomos = () => {
    return (
        <div>

        <Navbar />
            {/* Contenido de quienes somos */}
            <div className="container-quienes-somos">
                <div className="row justify-content-center">
                    <div className="col-6 col-sm-3">
                        <div className="imagen-logo">
                            <img src={logo} alt="logo" width="300" height="300" />
                        </div>
                    </div>

                    <div className="col-6 col-sm-3">
                        <div className="seccion-introduccion">
                            <h1>Introducción</h1>
                            <p>Somos <b>Digital Event Hub</b>, una empresa dedicada a eventos públicos y privados, donde mezclamos la tecnología y creatividad así como calidad, donde nuestra misión es crear un lugar (<b>plataforma</b>) que permita volver más ágil y dinámico el crear un evento.</p>
                            <p>Donde creemos que la tecnología es una de las herramientas más poderosas y lo que buscamos es que usted tenga el poder de aprovechar esta ventaja y que sea tu aliado y no tu enemigo, <b>¡y si no sabes nada acerca de la tecnología no te preocupes nosotros mismos te podemos guiar!</b></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="historia">
                <h2 className="titulo">Nuestra Historia</h2>
                <div className="row justify-content-center">
                    <div className="col-6 col-sm-4 columna-img">
                        <div className="imagen-logo-2">
                            <img className="d-block mx-auto" src={logo} alt="logo" width="300" height="300" />
                        </div>
                    </div>
                    <div className="col-6 col-sm-4 columna">
                        <div className="parrafo1">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt quidem cum amet culpa illum. Itaque eos suscipit perspiciatis quaerat asperiores et at quasi aliquam quisquam. Perferendis tempore velit cumque pariatur?</p>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum at totam dolore nisi eligendi nihil, excepturi molestiae voluptas cumque quidem vitae ducimus possimus fuga, laudantium, ipsa illo necessitatibus eveniet voluptatem!</p>
                        </div>
                    </div>
                    <div className="w-100"></div>
                    <div className="col-6 col-sm-4 columna">
                        <div className="parrafo2">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam officiis consectetur sint at eveniet accusamus incidunt beatae accusantium nesciunt sed? Doloribus alias omnis corrupti quisquam, in autem nesciunt ea optio.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, officiis recusandae. Inventore, omnis earum est iusto unde, dolorum fugiat ducimus atque, vitae nihil eum. Voluptatum commodi nam eius assumenda fuga.</p>
                        </div>
                    </div>
                    <div className="col-6 col-sm-4 columna-img">
                        <div className="imagen-logo-3">
                            <img className="d-block mx-auto" src={logo} alt="logo" width="300" height="300" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="valores">
                <h3 className="titulo2">Valores</h3>
                <div className="container-texto">
                    <p className="texto">En <b>Digital Event Hub</b>, nos enorgullece nuestros valores fundamentales como el profesionalismo y la creatividad. Nos comprometemos a ofrecer experiencias únicas, innovando constantemente en el diseño y ejecución de cada evento. La calidad es nuestra prioridad, garantizando que cada detalle cumpla con las expectativas de nuestros clientes. Fomentamos el trabajo en equipo, colaborando tanto internamente como con nuestros clientes, para asegurar el éxito de cada evento.</p>
                    <p className="texto">Además, valoramos la flexibilidad, adaptándonos a las necesidades y cambios que puedan surgir. Practicamos la sostenibilidad, incorporando métodos ecológicos y responsables en nuestras operaciones. La transparencia es vital para nosotros, manteniendo una comunicación abierta y honesta en todas las etapas del proceso. Estos valores no solo definen nuestra forma de trabajar, sino que también construyen relaciones de confianza y satisfacción a largo plazo con nuestros clientes.</p>
                </div>
            </div>

            <div className="Mision-vision">
                <h4 className="titulo2">Misión y visión</h4>
                <div className="row justify-content-center">
                    <div className="col-6 col-sm-3 columna-texto">
                        <div>
                            <p>En <b>Digital Event Hub</b>, nuestra misión es crear experiencias inolvidables a través de la planificación y ejecución de eventos innovadores y personalizados, superando las expectativas de nuestros clientes con un enfoque de calidad, sostenibilidad y colaboración.</p>
                        </div>
                    </div>
                    <div className="col-6 col-sm-3 columna-texto2">
                        <div>
                            <p>Ser líderes en la industria, reconocidos por nuestra creatividad y compromiso con la excelencia, estableciendo nuevos estándares en el diseño de eventos y construyendo relaciones duraderas con nuestros clientes.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer>
                <div className="container-info">
                    <div className="row justify-content-center">
                        <div className="footer-section links col-6 col-sm-3">
                            <h3>Enlaces</h3>
                            <ul>
                                <li><Link to="/inicio">Inicio</Link></li>
                                <li><Link to="/quienes-somos">¿Quienes Somos?</Link></li>
                                <li><Link to="/privacidad">Privacidad</Link></li>
                                <li><Link to="/servicios">Términos y Condiciones</Link></li>
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
                            <p>© 2024 Digital Event Hub. Todos los derechos reservados.</p>
                        </div>
                        <div className="footer-logo col-6 col-sm-3">
                            <img src={footerLogo} alt="Logo" width="300" height="300" />
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default QuienesSomos;
