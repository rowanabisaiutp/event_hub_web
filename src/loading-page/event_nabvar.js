import React from 'react';
import { AppBar, Toolbar, Typography, Container, Button, styled, Card, CardContent, Grid } from '@mui/material';

// Estilos para el primer Navbar
const NavbarContainer = styled(AppBar)(({ theme, backgroundImage }) => ({
    position: 'relative',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    padding: theme.spacing(2),
    boxShadow: 'none',
    '& .MuiToolbar-root': {
        backgroundColor: 'transparent', // Remove the toolbar background color
    },
    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay
        zIndex: 1,
    },
    '& > div': {
        position: 'relative', // Ensure content is above the overlay
        zIndex: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start', // Align items to the left
    },
}));

const Title = styled(Typography)(({ theme }) => ({
    fontWeight: 'bold',
    textAlign: 'left', // Align title to the left
    marginBottom: theme.spacing(1), // Add margin below the title
}));

const Info = styled(Typography)(({ theme }) => ({
    textAlign: 'left', // Align info text to the left
    fontSize: '1rem',
    fontWeight: 'medium',
    marginBottom: theme.spacing(1), // Add margin below each info item
}));

const MapCard = styled(Card)(({ theme }) => ({
    height: '400px', // Adjust the height as needed
    width: '100%',
}));

const InfoCard = styled(Card)(({ theme }) => ({
    height: '400px', // Same height as the map
    width: '100%',
    marginLeft: theme.spacing(2), // Add space between the map and the info card
}));

// Estilos para el segundo Navbar con gradiente

const EventNavbar = ({ title, imageUrl, date, time, location, category, eventType, organizer, authorizedBy }) => {
    return (
        <>
            {/* Primer Navbar con fondo de imagen */}
            <NavbarContainer position="static" backgroundImage={imageUrl}>
  
                <Toolbar>
                <Button
                        color="inherit"
                        style={{ marginLeft: 'auto' }}
                        href="/cliente/home"
                    >
                        Registrarse
                    </Button>
                    <Info variant="body1">Organizado por {organizer}</Info>
                    <Title variant="h1">{title}</Title>
                    <Info variant="body1">Fecha: {date} a las {time}</Info>
                    <Info variant="body1">Te esperamos en el {location}</Info>
                    <Info variant="body1">Evento {eventType} de {category}</Info>
                    <Info variant="body1">Autorizado por: {authorizedBy}</Info>
                    <br />
                </Toolbar>
            </NavbarContainer>
           

            {/* Mapa y Tarjeta de Información */}
            <Container style={{ marginTop: '16px' }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <MapCard>
                            <CardContent>
                                <div style={{ width: '100%', height: '100%' }}>
                                    <iframe
                                        src='https://www.google.com/maps/embed/v1/place?key=AIzaSyCkJwrcOuqFszjXYAJDDepaFA3dGkble88&q=${encodeURIComponent(location)}'
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
                        </MapCard>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <InfoCard>
                            <CardContent>
                                <Typography variant="h6">Información Adicional</Typography>
                                <Typography variant="body2">Aquí puedes agregar más detalles o información adicional sobre el evento.</Typography>
                            </CardContent>
                        </InfoCard>
                    </Grid>
                </Grid>
            </Container>
            <br />
            <hr />
        </>
    );
};

export default EventNavbar;
