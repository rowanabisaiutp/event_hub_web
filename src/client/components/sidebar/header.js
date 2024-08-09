import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

function Header() {
  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <Typography variant="h6" color="inherit" noWrap>
          Facturas
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
