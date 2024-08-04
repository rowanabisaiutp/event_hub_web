import React from 'react';
import "../../../style.css";
import img1 from "../../../img/img1.png";
import img2 from "../../../img/img2.png";
import img3 from "../../../img/img3.png";
const Symbology = () => {
    return ( 
        <div className="custom-container">
        <div className="row mb-3 align-items-center">
            <div className="col-3 icon">
                <img src={img1} alt="Asiento No disponible" />
            </div>
            <div className="col-9">
                <span>Available</span>
            </div>
        </div>
        <div className="divider"></div>
        <div className="row mb-3 align-items-center">
            <div className="col-3 icon">
                <img src={img2} alt="Asiento Disponible" />
            </div>
            <div className="col-9">
                <span>Select</span>
            </div>
        </div>
        <div className="divider"></div>
        <div className="row align-items-center">
            <div className="col-3 icon">
                <img src={img3} alt="Asiento Ocupado" />
            </div>
            <div className="col-9">
                <span>Not available</span>
            </div>
        </div>
    </div>
     );
}
 
export default Symbology;