import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import Sidebar from './sidebar/sidebar';
import Navbar from './sidebar/navbar';

const Home = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Navbar />
        <Container>
        <Typography variant="h4" component="h1" style={styles.title}>
            Bienvenido a Digital Event Hub
            <Typography variant="h6" component="h6">
              <br /> Aquí irán los componentes para la vista de los resultados
            </Typography>
          </Typography>
        </Container>
    </Box>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f5f5f5',
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
};

export default Home;
