import React from 'react';
import "../../../../style.css";

const Header = ({ eventData }) => {
    return (
        <div className="header">
            <img src={eventData?.imagen_url || "https://e.radio-grpp.io/normal/2016/08/17/553455_221714.png"} alt="Imagen del evento" />
            <div className="header-text">
                {eventData?.nombre_evento || "Consolida tu negocio"} <span className="subtext">Evento {eventData?.tipo_evento || "Evento público"}</span>
            </div>
        </div>
    );
}

export default Header;