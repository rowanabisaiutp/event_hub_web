import React from 'react';
import { Box, Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function Templates() {
  const templates = [
    { name: 'Plantilla de prueba', type: 'Principal and related' },
    { name: 'Plantilla word', type: 'Principal and related' }
  ];

  return (
    <Box>
      <Typography variant="h5" gutterBottom>Plantillas</Typography>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Button variant="contained" color="primary">Nueva plantilla</Button>
        <Box>
          <Typography component="span">Mostrando 1 a 2 de 2 entradas para mostrar</Typography>
        </Box>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nombre de la plantilla</TableCell>
              <TableCell>Tipo de plantilla</TableCell>
              <TableCell align="right">Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {templates.map((template, index) => (
              <TableRow key={index}>
                <TableCell>{template.name}</TableCell>
                <TableCell>{template.type}</TableCell>
                <TableCell align="right">
                  <IconButton aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default Templates;
