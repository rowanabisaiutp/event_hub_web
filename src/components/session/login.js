import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Container, CssBaseline, Avatar, Link as MuiLink, Paper, Grow, Alert } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';
import { loginAuth } from '../../services/auth-api'; // Importa la función de autenticación

const BackgroundContainer = styled('div')({
  backgroundImage: 'url("/assets/background.jpg")', // Ruta de la imagen en la carpeta public
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backdropFilter: 'blur(5px)',
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
}));

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [contrasena, setContrasena] = useState(''); // Cambia a contrasena
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [checked, setChecked] = useState(false);

  React.useEffect(() => {
    setChecked(true);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const data = await loginAuth(email, contrasena); // Envía contrasena en lugar de password
      localStorage.setItem('authToken', data.token); // Guarda el token en el almacenamiento local
      onLogin(); // Llama a la función onLogin para cambiar el estado de autenticación
    } catch (error) {
      setError(error.message || 'An error occurred'); // Maneja el error
    } finally {
      setLoading(false);
    }
  };

  return (
    <BackgroundContainer>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Grow in={checked} style={{ transformOrigin: '0 0 0' }} timeout={1000}>
          <StyledPaper elevation={6}>
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              {error && <Alert severity="error">{error}</Alert>}
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="contrasena" // Cambia el nombre del campo
                label="Password"
                type="password"
                id="contrasena" // Cambia el id del campo
                autoComplete="current-password"
                value={contrasena} // Cambia a contrasena
                onChange={(e) => setContrasena(e.target.value)} // Cambia a contrasena
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                sx={{ mt: 3, mb: 2 }}
                disabled={loading}
              >
                {loading ? 'Signing In...' : 'Sign In'}
              </Button>
              <Typography variant="body2" color="textSecondary" align="center">
                {"Don't have an account? "}
                <MuiLink component={Link} to="/register">
                  Sign Up
                </MuiLink>
              </Typography>
            </Box>
          </StyledPaper>
        </Grow>
      </Container>
    </BackgroundContainer>
  );
}

export default Login;
