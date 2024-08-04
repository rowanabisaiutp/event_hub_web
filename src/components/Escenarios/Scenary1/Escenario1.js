import React from 'react';
import Asientos from '../componentes/Asientos';
import "../../../style.css";
const Escenario1 = () => {
    const seats = Array.from({ length: 70 }, (_, i) => i + 1); // Ajuste del número de asientos
    return (
            <div className="main-container">
                <div className='left-aligned-container'>
                    <div className="stage-container">
                        <div class="stage">
                            <div class="top-rect"></div>
                            <div class="line left1"></div>
                            <div class="line left2"></div>
                            <div class="line left3"></div>
                            <div class="line right1"></div>
                            <div class="line right2"></div>
                            <div class="line right3"></div>
                            <div class="square_left"></div>
                            <div class="square2_left"></div>
                            <div class="square3_left"></div>
                            <div class="square_right"></div>
                            <div class="square2_right"></div>
                            <div class="square3_right"></div>
                            <div class="base-line"></div>
                            <div class="bottom-rect"></div>
                        </div>
                        <div className="seats-container">
                            {seats.map(seatId => (
                                <Asientos key={seatId} id={seatId} />
                            ))}
                        </div>
                    </div>
                </div>

                </div>
    );
}

export default Escenario1;


