import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import "../../../style.css";
import Symbology from '../Escenarios/componentes/symbology'
import Header from '../Escenarios/componentes/header'
import Escenario1 from '../Escenarios/Scenary1/Index'
import Escenario3 from '../Escenarios/Scenary3'
import Escenario4 from '../Escenarios/Scenary4'
import axios from 'axios';

const Formulario = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState();
    const [eventData, setEventData] = useState();
    const [selectedSeats, setSelectedSeats] = useState([]);

    const getData = async () => {
        try {
            setLoading(true);
            const response = await axios.get(
                `https://api-digitalevent.onrender.com/api/escenarios/${id}`
            );
            setData(response.data);

            const eventsResponse = await axios.get(
                `https://api-digitalevent.onrender.com/api/eventos/events`
            );

            const matchedEvent = eventsResponse.data.find(event => event.evento_id === response.data.evento_id);
            setEventData(matchedEvent);

            console.log(response.data);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async () => {
        selectedSeats.map(async id => {
            try {
                const response = await axios.put(
                    `https://api-digitalevent.onrender.com/api/asientos/${id}`, 
                    { estado: "Reservado" }
                );
                getData();
            } catch (err) {
                console.log(err);
            } finally {
                console.log("GG");
            }
        });
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <Fragment>
            <Header eventData={eventData} />
            <div className="main-container">
                <div className="content-container">
                    <div className="left-column" style={{ display: "flex" }}>
                        { !loading && data.forma === "Cuadrado" && <Escenario1 data={data} setSelectedSeats={setSelectedSeats}/> }
                        { !loading && data.forma === "Triangulo" && <Escenario3 data={data} setSelectedSeats={setSelectedSeats}/> }
                        { !loading && data.forma === "Redondo" && <Escenario4 data={data} setSelectedSeats={setSelectedSeats}/> }
                    </div>
                    <div className="right-column">
                        <Symbology />
                    </div>
                </div>
            </div>
            <button type="button" className="btn b-rigth" style={{ transform: 'translateY(20%)' }} onClick={handleSubmit}>Continuar</button>
        </Fragment>
    );
}

export default Formulario;