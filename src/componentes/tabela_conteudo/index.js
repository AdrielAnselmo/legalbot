import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import CircularProgress from '@mui/material/CircularProgress';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';


const data = [
    {
      entrada: 'Entrada 1',
      origem: 'Origem 1',
      regulador: 'Regulador 1',
      status: 'Ativo',
      captura: '10/02/2024',
      scheduled: '12/02/2024',
      refreshDeTela: '15 minutos',
    },
    // Adicione mais linhas para os dados restantes...
  ];

  function MyTable() {
    return (
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Entrada</TableCell>
              <TableCell>Origem</TableCell>
              <TableCell>Regulador</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Captura</TableCell>
              <TableCell>Scheduled</TableCell>
              <TableCell>Refresh de Tela</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.entrada}>
                <TableCell>{row.entrada}</TableCell>
                <TableCell>{row.origem}</TableCell>
                <TableCell>{row.regulador}</TableCell>
                <TableCell><Badge badgeContent={4} color="primary"></Badge>       {row.status}</TableCell>
                <TableCell>{row.captura}</TableCell>
                <TableCell><CircularProgress variant="determinate" value={55} />{row.scheduled}</TableCell>
                <TableCell>{row.refreshDeTela}</TableCell>
               
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }

  export default MyTable;
