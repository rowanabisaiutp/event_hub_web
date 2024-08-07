import React, { useEffect, useState, useRef } from 'react';
import { FaSearch, FaFilter } from 'react-icons/fa';
import { Card, CardMedia, CardContent, CardActions, Button, Typography, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
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

const ModalContent = styled('div')(({ theme }) => ({
    position: 'relative',
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: theme.shape.borderRadius,
    color: 'white',
    padding: '40px',
    boxShadow: theme.shadows[9],
    flexDirection: 'column',
    justifyContent: 'auto',
    alignItems: 'flex-start',
    backgroundColor: 'rgba(0, 0, 0, 0.9)',  // Fondo oscuro y transparente
    '& .content': {
        position: 'relative',
        zIndex: 2,
        width: '100%',
    },
    '& .buttons': {
        display: 'flex',
        justifyContent: 'flex-end',
        marginTop: '20px',
        gap: '10px',
        width: '100%',
        position: 'absolute',
        bottom: '20px',
        right: '20px',
    }
}));

const CustomDialogTitle = styled(DialogTitle)(({ theme }) => ({
    fontWeight: 800,  // Cambia el grosor del título (700 es negrita)
}));

const CustomTypographyH3 = styled(Typography)(({ theme }) => ({
    fontWeight: 700,  // Ajusta el grosor de la fuente aquí
    backgroundColor: 'rgba(0, 0, 0, 0.4)' 
}));

const CustomDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialog-paper': {
        width: '70vw',
        maxWidth: '1200px',
        height: '80vh',
        maxHeight: '800px',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: 'rgba(0, 0, 0, 0.0)',  // Fondo transparente
        boxShadow: 'none',
    },
}));

const ClientHome = () => {
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
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);

    const filterRef = useRef(null);

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
        setSelectedEvent(event);
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
        setSelectedEvent(null);
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
                                flexDirection: 'column',
                                gap: '10px'
                            }}
                        >
                            <div>
                                <label style={{ display: 'block', marginBottom: '5px' }}>Categoría</label>
                                <select 
                                    value={selectedCategory}
                                    onChange={e => setSelectedCategory(e.target.value)}
                                    style={{
                                        width: '100%',
                                        padding: '10px',
                                        borderRadius: '5px',
                                        border: '1px solid #ccc',
                                        outline: 'none'
                                    }}
                                >
                                    <option value="">Todas las categorías</option>
                                    {categories.map(category => (
                                        <option key={category} value={category}>{category}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '5px' }}>Ubicación</label>
                                <select 
                                    value={selectedLocation}
                                    onChange={e => setSelectedLocation(e.target.value)}
                                    style={{
                                        width: '100%',
                                        padding: '10px',
                                        borderRadius: '5px',
                                        border: '1px solid #ccc',
                                        outline: 'none'
                                    }}
                                >
                                    <option value="">Todas las ubicaciones</option>
                                    {locations.map(location => (
                                        <option key={location} value={location}>{location}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '5px' }}>Tipo de Evento</label>
                                <select 
                                    value={selectedEventType}
                                    onChange={e => setSelectedEventType(e.target.value)}
                                    style={{
                                        width: '100%',
                                        padding: '10px',
                                        borderRadius: '5px',
                                        border: '1px solid #ccc',
                                        outline: 'none'
                                    }}
                                >
                                    <option value="">Todos los tipos</option>
                                    {eventTypes.map(eventType => (
                                        <option key={eventType} value={eventType}>{eventType}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    )}
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
                    {filteredEvents.length > 0 ? (
                        filteredEvents.map((event) => (
                            <StyledCard key={event.evento_id} onClick={() => handleCardClick(event)}>
                                <StyledCardMedia
                                    image={event.imagen_url}
                                    title={event.nombre_evento}
                                />
                                <CardContent style={{ position: 'relative', zIndex: 2 }}>
                                    <Typography variant="h4" gutterBottom>
                                        {event.nombre_evento}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        <strong>Categoría:</strong> {event.categoria_nombre}
                                    </Typography>
                                </CardContent>
                            </StyledCard>
                        ))
                    ) : (
                        <Typography variant="h6" align="center" style={{ width: '100%' }}>No se encontraron eventos.</Typography>
                    )}
                </div>

                <CustomDialog open={openDialog} onClose={handleCloseDialog}>
                    <DialogContent>
                        {selectedEvent && (
                            <ModalContent
                                style={{ backgroundImage: `url(${selectedEvent.imagen_url})` }}
                            >
                                <div className="content">
                                <Typography variant="body1" paragraph>
                                        <strong>Detalles del evento</strong>
                                    </Typography>
                                    <CustomTypographyH3 variant="h3" gutterBottom>
                                        {selectedEvent.nombre_evento}
                                    </CustomTypographyH3>
                                    <Typography variant="body1" paragraph>
                                        <strong>Ubicación:</strong> {selectedEvent.ubicacion}
                                    </Typography>
                                    <Typography variant="body1" paragraph>
                                        <strong>Descripción:</strong> {selectedEvent.descripcion}
                                    </Typography>
                                    <Typography variant="body1" paragraph>
                                        <strong>Inicia:</strong> {new Date(selectedEvent.fecha_inicio).toLocaleDateString()}
                                    </Typography>
                                    <Typography variant="body1" paragraph>
                                        <strong>Termina:</strong> {new Date(selectedEvent.fecha_termino).toLocaleDateString()}
                                    </Typography>

                                </div>
                                <div className="buttons">

                                    <Button variant="contained" href="/cliente/event/10" color="secondary">
                                    Quienes Somos
                                    </Button>
                                </div>
                            </ModalContent>
                        )}
                    </DialogContent>
                </CustomDialog>
            </div>
        </div>
    );
};

export default ClientHome;
