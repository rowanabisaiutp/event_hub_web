import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Sidebar from './components/sidebar/sidebar';
import Home from './components/home';
import About from './components/escenarios';
import Contact from './components/cantact';
import Login from './components/session/login';
import { CssBaseline, Box, Toolbar } from '@mui/material';
import Register from './components/session/register';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <CssBaseline />
        <Box sx={{ display: 'flex' }}>
          <Sidebar />
          <Box
            component="main"
            sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
          >
            <Toolbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Box>
        </Box>
      
    </Router>
  );
}

export default App;


