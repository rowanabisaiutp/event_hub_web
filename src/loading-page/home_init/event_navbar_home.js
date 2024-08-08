import React from 'react';
import { AppBar, Toolbar, Typography, Container, Grid, Fab, styled, Card, CardContent } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EventIcon from '@mui/icons-material/Event';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import SeatIcon from '@mui/icons-material/EventSeat';

// Estilos para el primer Navbar
const CustomNavbarContainer = styled(AppBar)(({ theme, backgroundImage }) => ({
    position: 'relative',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    padding: theme.spacing(2),
    boxShadow: 'none',
    '& .MuiToolbar-root': {
        backgroundColor: 'transparent',
    },
    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 1,
    },
    '& > div': {
        position: 'relative',
        zIndex: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
}));

const CustomTitle = styled(Typography)(({ theme }) => ({
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: theme.spacing(1),
}));

const CustomInfo = styled(Typography)(({ theme }) => ({
    textAlign: 'left',
    fontSize: '1rem',
    fontWeight: 'medium',
    marginBottom: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
}));

const CustomMapCard = styled(Card)(({ theme }) => ({
    height: '400px',
    width: '100%',
}));

const CustomInfoCard = styled(Card)(({ theme }) => ({
    height: '400px',
    width: '100%',
    marginLeft: theme.spacing(2),
}));

// Estilo para el botón flotante
const FloatingButton = styled(Fab)(({ theme }) => ({
    position: 'fixed',
    bottom: theme.spacing(3),
    right: theme.spacing(3),
    zIndex: 1000,
}));

const EventInformationNavbar = ({ title, imageUrl, date, time, location, category, eventType, organizer, authorizedBy }) => {
    const handleSeatSelection = () => {
        window.location.href = "/cliente/event/10";
    };

    return (
        <>
            <CustomNavbarContainer position="static" backgroundImage={imageUrl}>
                <Toolbar>
                    <CustomInfo variant="body1">
                        <PersonIcon /> Organizado por {organizer}
                    </CustomInfo>
                    <CustomTitle variant="h1">{title}</CustomTitle>
                    <CustomInfo variant="body1">
                        <CalendarTodayIcon /> {date} a las {time}
                    </CustomInfo>
                    <CustomInfo variant="body1">
                        <LocationOnIcon /> {location}
                    </CustomInfo>
                    <CustomInfo variant="body1">
                        <EventIcon /> Evento {eventType} de {category}
                    </CustomInfo>
                    <CustomInfo variant="body1">
                        <VerifiedUserIcon /> {authorizedBy}
                    </CustomInfo>
                    <br />
                </Toolbar>
            </CustomNavbarContainer>

            <Container style={{ marginTop: '16px' }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <CustomMapCard>
                            <CardContent>
                                <div style={{ width: '100%', height: '100%' }}>
                                    <iframe
                                        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCkJwrcOuqFszjXYAJDDepaFA3dGkble88&q=${encodeURIComponent(location)}`}
                                        width="100%"
                                        height="400"
                                        frameBorder="0"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        aria-hidden="false"
                                        tabIndex="0"
                                    ></iframe>
                                </div>
                            </CardContent>
                        </CustomMapCard>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <CustomInfoCard>
                            <CardContent>
                                <Typography variant="h6">Información Adicional</Typography>
                                <Typography variant="body2">Aquí puedes agregar más detalles o información adicional sobre el evento.</Typography>
                            </CardContent>
                        </CustomInfoCard>
                    </Grid>
                </Grid>
            </Container>

            {/* Botón flotante */}
            <FloatingButton color="primary" aria-label="select seat" onClick={handleSeatSelection}>
                <SeatIcon />
            </FloatingButton>
            <br />
            <hr />
        </>
    );
};

export default EventInformationNavbar;
