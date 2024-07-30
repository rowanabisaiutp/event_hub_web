import React, { useState } from 'react';
import { Drawer, Card, CardContent, Typography, Box, CardMedia, Dialog, DialogTitle, DialogContent, IconButton, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const RightSidebar = ({ events = [] }) => {
  const [open, setOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleClickOpen = (event) => {
    setSelectedEvent(event);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedEvent(null);
  };

  return (
    <Drawer
      anchor="right"
      variant="permanent"
      sx={{
        '& .MuiDrawer-paper': {
          width: 400, // Ancho del sidebar derecho
        },
      }}
    >
      <Box sx={{ overflowY: 'auto', height: '100%' }}>
        {events.length > 0 ? (
          events.map((event) => (
            <Card key={event.evento_id} sx={{ margin: 2 }} onClick={() => handleClickOpen(event)}>

              <CardContent>
                <Typography variant="h6">{event.nombre_evento}</Typography>
                <Typography variant="body2">{event.fecha_inicio}</Typography>
                <Typography variant="body2">{event.ubicacion}</Typography>
                <Typography variant="body2">Organizado por: {event.organizador_nombre}</Typography>
                <Typography variant="body2">Categoría: {event.categoria_nombre}</Typography>
              </CardContent>
            </Card>
          ))
        ) : (
          <Typography variant="body2" sx={{ padding: 2 }}>No events available</Typography>
        )}
      </Box>

      {/* Diálogo flotante */}
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>
          Event Details
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          {selectedEvent && (
            <Box>
              <CardMedia
                component="img"
                height="200"
                image={selectedEvent.imagen_url}
                alt={selectedEvent.nombre_evento}
              />
              <Typography variant="h6" sx={{ marginTop: 2 }}>
                {selectedEvent.nombre_evento}
              </Typography>
              <Typography variant="body1">
                {`Fecha Inicio: ${selectedEvent.fecha_inicio}`}
              </Typography>
              <Typography variant="body1">
                {`Fecha Fin: ${selectedEvent.fecha_termino}`}
              </Typography>
              <Typography variant="body1">
                {`Hora: ${selectedEvent.hora}`}
              </Typography>
              <Typography variant="body1">
                {`Ubicación: ${selectedEvent.ubicacion}`}
              </Typography>
              <Typography variant="body1">
                {`Estado: ${selectedEvent.estado}`}
              </Typography>
              <Typography variant="body1">
                {`Tipo de Evento: ${selectedEvent.tipo_evento}`}
              </Typography>
              <Typography variant="body1">
                {`Autorizado por: ${selectedEvent.autorizado_nombre}`}
              </Typography>
              <Typography variant="body1">
                {`Categoría: ${selectedEvent.categoria_nombre}`}
              </Typography>
              <Button onClick={handleClose} sx={{ marginTop: 2 }}>
                Close
              </Button>
            </Box>
          )}
        </DialogContent>
      </Dialog>
    </Drawer>
  );
};

export default RightSidebar;
