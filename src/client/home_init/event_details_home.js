import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import EventInformationNavbar from './event_navbar_home'; // Asegúrate de que la ruta sea correcta

const EventInformation = () => { // Nuevo nombre para el componente
    const { eventId } = useParams();
    const [event, setEvent] = useState(null);
    const [scenary, setScenary] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchEventDetails = async () => {
            try {
                const response = await fetch('https://api-digitalevent.onrender.com/api/eventos/events');
                if (!response.ok) {
                    throw new Error(`Error ${response.status}: ${response.statusText}`);
                }
                const data = await response.json();
                const selectedEvent = data.find(event => event.evento_id === parseInt(eventId));
                setEvent(selectedEvent);

                const responseEscenarios = await fetch('https://api-digitalevent.onrender.com/api/escenarios');
                if (!responseEscenarios.ok) {
                    return
                    // throw new Error(`Error ${responseEscenarios.status}: ${responseEscenarios.statusText}`);
                }
                const responseEscenariosJSON = await responseEscenarios.json();
                const selectedScenary = responseEscenariosJSON.find((item)=>item.evento_id === selectedEvent.evento_id);
                setScenary(selectedScenary);

            } catch (error) {
                setError(error.message);
                console.error('Error fetching event details:', error);
            }
        };

        fetchEventDetails();
    }, [eventId]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!event || !scenary) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <EventInformationNavbar
                title={event.nombre_evento}
                imageUrl={event.imagen_url}
                date={`${new Date(event.fecha_inicio).toLocaleDateString()} - ${new Date(event.fecha_termino).toLocaleDateString()}`}
                time={event.hora}
                location={event.ubicacion}
                category={event.categoria_nombre}
                eventType={event.tipo_evento}
                organizer={event.organizador_nombre}
                authorizedBy={event.autorizado_nombre}
                idScenary={scenary.escenario_id}
            />
        </div>
    );
};

export default EventInformation;
