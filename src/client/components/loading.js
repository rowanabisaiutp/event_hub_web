import React, { useState } from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// Ruta del GIF en la carpeta public/assets
const loadingGifUrl = 'assets/idea.gif';

const Loading = () => {
  const [isNavigating, setIsNavigating] = useState(false);
  const navigate = useNavigate();  // Inicializa useNavigate

  const handleContinueClick = () => {
    setIsNavigating(true); // Inicia la animación
    setTimeout(() => {
      navigate('/login'); // Navega después de la animación
    }, 500); // Tiempo debe coincidir con la duración de la animación
  };

  return (
    <div style={styles.container}>
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: isNavigating ? 0 : 1, y: isNavigating ? 50 : 0 }}
        transition={{ duration: 0.5 }}
        style={styles.card}
      >
        <Card>
          <CardContent style={styles.cardContent}>
            <img src={loadingGifUrl} alt="Loading" style={styles.gif} />
            <Typography variant="h5" component="div" style={styles.title}>
              Bienvenido a Digital Event Hub
            </Typography>
            <Typography variant="body2" color="text.secondary" style={styles.subtitle}>
              Estamos preparando algo increíble para ti.
            </Typography>
            <Button 
              variant="contained" 
              color="primary" 
              style={styles.button}
              onClick={handleContinueClick}  // Agrega el manejador de clics
            >
              Continuar
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f5f5f5',
  },
  card: {
    maxWidth: 400,
    width: '100%',
    borderRadius: '16px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  cardContent: {
    textAlign: 'center',
    padding: '20px',
  },
  gif: {
    width: '100px',
    height: '100px',
    marginBottom: '20px',
  },
  title: {
    marginBottom: '10px',
    fontWeight: 'bold',
  },
  subtitle: {
    marginBottom: '20px',
    color: '#555',
  },
  button: {
    marginTop: '10px',
  },
};

export default Loading;
