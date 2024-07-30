import React from 'react';
import { Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography, Divider } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import TheatersIcon from '@mui/icons-material/Theaters';
import ContactMailIcon from '@mui/icons-material/ContactMail';

const drawerWidth = 240;

function Sidebar() {
  return (
    <div style={{ display: 'flex' }}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar>
          <Typography variant="h6" noWrap>
            App Event Hub
          </Typography>
        </Toolbar>
        <Divider />
        <List>
          {/* //icono 1 */}
          <ListItem button component={Link} to="/">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          {/* //icono 2 */}
          <ListItem button component={Link} to="/about">
            <ListItemIcon>
              <TheatersIcon />
            </ListItemIcon>
            <ListItemText primary="Escenarios" />
          </ListItem>
          {/* icono 3 */}
          <ListItem button component={Link} to="/contact">
            <ListItemIcon>
              <ContactMailIcon />
            </ListItemIcon>
            <ListItemText primary="Contact" />
          </ListItem>
        </List>
      </Drawer>

      <main style={{ flexGrow: 1, padding: '16px' }}>
        {/* Aquí iría el contenido principal */}
      </main>
    </div>
  );
}

export default Sidebar;
