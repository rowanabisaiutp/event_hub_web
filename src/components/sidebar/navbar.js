import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, TextField, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>

        <Box sx={{ flexGrow: 9 }}>
          <TextField
            variant="outlined"
            placeholder="Buscar..."
            size="small"
            sx={{ bgcolor: 'white', borderRadius: 1, width: '200%' }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
