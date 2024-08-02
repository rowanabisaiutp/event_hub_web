import React from 'react';
import { Container, Typography } from '@mui/material';

const Home = () => {
  return (
    <Container style={styles.container}>
      <Typography variant="h4" component="h1" style={styles.title}>
        Bienvenido a Digital Event Hub
      <h6> <br /> Aqui iran los componentes para la vista de los resultados</h6>

      </Typography>
    </Container>
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
