import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch, FaFilter } from 'react-icons/fa';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import ClientNavbar from './client_navbar';

// Estilización personalizada para las tarjetas
const StyledCard = styled(Card)(({ theme }) => ({
    maxWidth: 345,
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[5],
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
    '&:hover': {
        transform: 'scale(1.03)',
        boxShadow: theme.shadows[8],
    },
    cursor: 'pointer',
    position: 'relative',
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
    height: 200,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: theme.shape.borderRadius,
    width: '100%',
    height: '200px',
}));

const CardContainer = styled('div')({
    margin: '10px', // Añadir margen alrededor de cada tarjeta
});

const ClientHomeEvent = () => {
    const [events, setEvents] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredEvents, setFilteredEvents] = useState([]);
    const [showFilters, setShowFilters] = useState(false);
    const [categories, setCategories] = useState([]);
    const [locations, setLocations] = useState([]);
    const [eventTypes, setEventTypes] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedLocation, setSelectedLocation] = useState('');
    const [selectedEventType, setSelectedEventType] = useState('');

    const filterRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://api-digitalevent.onrender.com/api/eventos/events')
            .then(response => response.json())
            .then(data => {
                setEvents(data);
                setFilteredEvents(data);
                const uniqueCategories = [...new Set(data.map(event => event.categoria_nombre))];
                const uniqueLocations = [...new Set(data.map(event => event.ubicacion))];
                const uniqueEventTypes = [...new Set(data.map(event => event.tipo_evento))];
                setCategories(uniqueCategories);
                setLocations(uniqueLocations);
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
                event.nombre_evento.toLowerCase().includes(searchTerm.toLowerCase()) &&
                (selectedCategory ? event.categoria_nombre === selectedCategory : true) &&
                (selectedLocation ? event.ubicacion === selectedLocation : true) &&
                (selectedEventType ? event.tipo_evento === selectedEventType : true)
            )
        );
    };

    useEffect(() => {
        applyFilters();
    }, [searchTerm, selectedCategory, selectedLocation, selectedEventType, events]);

    const toggleFilters = () => {
        setShowFilters(prevState => !prevState);
    };

    const handleCardClick = (event) => {
        navigate(`/event/${event.evento_id}`);
    };

    return (
        <div>
            <ClientNavbar />
            <div style={{ padding: '20px', maxWidth: '1200px', margin: 'auto' }}>
                <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Eventos Disponibles</h1>
                
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px', position: 'relative' }}>
                    <div style={{ flex: '1 1 auto', maxWidth: '600px', position: 'relative' }}>
                        <input 
                            type="text" 
                            placeholder="Buscar eventos..." 
                            value={searchTerm}
                            onChange={e => setSearchTerm(e.target.value)}
                            style={{
                                width: 'calc(100% - 60px)', 
                                padding: '10px 20px',
                                borderRadius: '25px',
                                border: '1px solid #ccc',
                                outline: 'none',
                                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                                marginRight: '10px'
                            }}
                        />
                        <FaSearch 
                            style={{ 
                                position: 'absolute', 
                                top: '50%', 
                                right: '10px', 
                                transform: 'translateY(-50%)', 
                                color: '#aaa' 
                            }}
                        />
                    </div>
                    <button 
                        onClick={toggleFilters}
                        style={{
                            padding: '10px 15px',
                            borderRadius: '25px',
                            border: '1px solid #ccc',
                            backgroundColor: 'white',
                            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginLeft: '10px'
                        }}
                    >
                        <FaFilter style={{ marginRight: '5px', color: '#007bff' }} />
                        Filtrar
                    </button>

                    {/* Filtros Desplegables */}
                    {showFilters && (
                        <div 
                            ref={filterRef}
                            style={{
                                position: 'absolute',
                                top: '100%',
                                right: '0',
                                backgroundColor: 'white',
                                border: '1px solid #ccc',
                                borderRadius: '8px',
                                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                                padding: '10px',
                                width: '250px',
                                zIndex: 1000,
                                display: 'flex',
                                flexDirection: 'column'
                            }}
                        >
                            <label style={{ marginBottom: '10px' }}>
                                Categoría:
                                <select
                                    value={selectedCategory}
                                    onChange={e => setSelectedCategory(e.target.value)}
                                    style={{
                                        width: '100%',
                                        padding: '8px',
                                        borderRadius: '4px',
                                        border: '1px solid #ccc',
                                        marginTop: '5px'
                                    }}
                                >
                                    <option value="">Todas</option>
                                    {categories.map(category => (
                                        <option key={category} value={category}>
                                            {category}
                                        </option>
                                    ))}
                                </select>
                            </label>
                            <label style={{ marginBottom: '10px' }}>
                                Ubicación:
                                <select
                                    value={selectedLocation}
                                    onChange={e => setSelectedLocation(e.target.value)}
                                    style={{
                                        width: '100%',
                                        padding: '8px',
                                        borderRadius: '4px',
                                        border: '1px solid #ccc',
                                        marginTop: '5px'
                                    }}
                                >
                                    <option value="">Todas</option>
                                    {locations.map(location => (
                                        <option key={location} value={location}>
                                            {location}
                                        </option>
                                    ))}
                                </select>
                            </label>
                            <label style={{ marginBottom: '10px' }}>
                                Tipo de Evento:
                                <select
                                    value={selectedEventType}
                                    onChange={e => setSelectedEventType(e.target.value)}
                                    style={{
                                        width: '100%',
                                        padding: '8px',
                                        borderRadius: '4px',
                                        border: '1px solid #ccc',
                                        marginTop: '5px'
                                    }}
                                >
                                    <option value="">Todos</option>
                                    {eventTypes.map(type => (
                                        <option key={type} value={type}>
                                            {type}
                                        </option>
                                    ))}
                                </select>
                            </label>
                            <button
                                onClick={() => setShowFilters(false)}
                                style={{
                                    padding: '10px',
                                    borderRadius: '25px',
                                    border: 'none',
                                    backgroundColor: '#007bff',
                                    color: 'white',
                                    cursor: 'pointer',
                                    alignSelf: 'center',
                                    marginTop: '10px',
                                    width: '100%'
                                }}
                            >
                                Aplicar Filtros
                            </button>
                        </div>
                    )}
                </div>

                {/* Renderizado de Eventos */}
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                    {filteredEvents.map(event => (
                        <CardContainer key={event.evento_id}>
                            <StyledCard onClick={() => handleCardClick(event)}>
                                <StyledCardMedia
                                    image={event.imagen_url}
                                    title={event.nombre_evento}
                                />
                                <CardContent>
                                    <Typography variant="h6">{event.nombre_evento}</Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {event.ubicacion}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {event.fecha}
                                    </Typography>
                                </CardContent>
                            </StyledCard>
                        </CardContainer>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ClientHomeEvent;
