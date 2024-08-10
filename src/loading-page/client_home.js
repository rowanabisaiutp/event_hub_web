import React, { useEffect, useState, useRef } from 'react';
import { FaSearch, FaFilter } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import ClientNavbar from './client_navbar';

const ClientHomeNuevo = () => {
    const [events, setEvents] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredEvents, setFilteredEvents] = useState([]);
    const [showFilters, setShowFilters] = useState(false);
    const [categories, setCategories] = useState([]);
    const [eventTypes, setEventTypes] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedEventType, setSelectedEventType] = useState('');

    const filterRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://api-digitalevent.onrender.com/api/events/get/approved')
            .then(response => response.json())
            .then(data => {
                console.log('Datos de eventos:', data);
                setEvents(data);
                setFilteredEvents(data);
                const uniqueCategories = [...new Set(data.map(event => event.categoria))];
                const uniqueEventTypes = [...new Set(data.map(event => event.tipo_evento))];
                setCategories(uniqueCategories);
                setEventTypes(uniqueEventTypes);
            })
            .catch(error => console.error('Error fetching events:', error));
    }, []);

    useEffect(() => {
        function handleClickOutside(event) {
            if (filterRef.current && !filterRef.current.contains(event.target)) {
                setShowFilters(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const applyFilters = () => {
        setFilteredEvents(
            events.filter(event =>
                event.evento_nombre.toLowerCase().includes(searchTerm.toLowerCase()) &&
                (selectedCategory ? event.categoria === selectedCategory : true) &&
                (selectedEventType ? event.tipo_evento === selectedEventType : true)
            )
        );
    };

    useEffect(() => {
        applyFilters();
    }, [searchTerm, selectedCategory, selectedEventType, events]);

    const toggleFilters = () => {
        setShowFilters(prevState => !prevState);
    };

    const handleEventClick = (eventId) => {
        navigate(`/evento/${eventId}`);
    };

    return (
        <div>
            <ClientNavbar />
            <div style={{ padding: '30px',marginTop: '30px', maxWidth: '80%', margin: 'auto', backgroundColor: '#f7f8fa', borderRadius: '8px', boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)' }}>
                <h1 style={{ textAlign: 'center', marginBottom: '20px', color: '#333', fontSize: '2em', fontWeight: 'bold' }}>Eventos Digital Event Hub:</h1>

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px', position: 'relative' }}>
                    <div style={{ flex: '1 1 auto', maxWidth: '600px', position: 'relative' }}>
                        <input
                            type="text"
                            placeholder="Buscar eventos..."
                            value={searchTerm}
                            onChange={e => setSearchTerm(e.target.value)}
                            style={{
                                width: 'calc(100% - 60px)',
                                padding: '12px 20px',
                                borderRadius: '30px',
                                border: '1px solid #ddd',
                                outline: 'none',
                                boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)',
                                marginRight: '10px',
                                fontSize: '1em'
                            }}
                        />
                        <FaSearch
                            style={{
                                position: 'absolute',
                                top: '50%',
                                right: '40px',
                                transform: 'translateY(-50%)',
                                color: '#6D3089',
                                fontSize: '1.2em'
                            }}
                        />
                    </div>
                    <button
                        onClick={toggleFilters}
                        style={{
                            padding: '10px 20px',
                            borderRadius: '25px',
                            border: 'none',
                            backgroundColor: '#6D3089',
                            color: 'white',
                            boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginLeft: '10px',
                            fontSize: '1em'
                        }}
                    >
                        <FaFilter style={{ marginRight: '10px' }} />
                        Filtros
                    </button>
                </div>

                {showFilters && (
                    <div ref={filterRef} style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)', marginBottom: '20px' }}>
                        <h3>Filtros</h3>
                        <div style={{ marginBottom: '15px' }}>
                            <label style={{ display: 'block', marginBottom: '5px' }}>Categoría</label>
                            <select
                                value={selectedCategory}
                                onChange={e => setSelectedCategory(e.target.value)}
                                style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ddd', fontSize: '1em' }}
                            >
                                <option value="">Todas</option>
                                {categories.map((category, index) => (
                                    <option key={index} value={category}>{category}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '5px' }}>Tipo de Evento</label>
                            <select
                                value={selectedEventType}
                                onChange={e => setSelectedEventType(e.target.value)}
                                style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ddd', fontSize: '1em' }}
                            >
                                <option value="">Todos</option>
                                {eventTypes.map((type, index) => (
                                    <option key={index} value={type}>{type}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                )}

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                    {filteredEvents.map(event => (
                        <div
                            key={event.evento_id}
                            style={{
                                padding: '20px',
                                borderRadius: '8px',
                                boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)',
                                backgroundColor: 'white',
                                cursor: 'pointer',
                                textAlign: 'center',
                                transition: 'transform 0.3s, box-shadow 0.3s',
                            }}
                            onClick={() => handleEventClick(event.evento_id)}
                        >
                            <img
                                src={event.imagen_url || 'default-image-url.jpg'} // Cambia esto a una imagen por defecto si es necesario
                                alt={event.evento_nombre}

                                style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '8px' }}
                            />
                            <h2 style={{ margin: '10px 0', fontSize: '1.2em' }}>{event.evento_nombre}</h2>
                            <p style={{ color: '#666' }}>{event.descripcion}</p>
                            <p style={{ color: '#666' }}>{event.ubicacion}</p>
                            <p style={{ color: '#999' }}>{new Date(event.fecha_inicio).toLocaleDateString()}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ClientHomeNuevo;
