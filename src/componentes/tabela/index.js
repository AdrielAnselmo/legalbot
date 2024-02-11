import React, { useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { Button } from '@mui/material';
import MyTable from '../tabela_conteudo';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'; // Ajuste na importação do AdapterDayjs
import dayjs from 'dayjs';


function MostrarTabs() {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [tabValue, setTabValue] = useState('tudo');

  const handleDateChange = (newValue) => {
    setSelectedDate(newValue);
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  // Componentes TabContent simplificados para brevidade
  const TabContentTudo = () => <p></p>;
  const TabContentDisponivel = () => <p></p>;
  const TabContentExecutando = () => <p></p>;
  const TabContentIndisponivel = () => <p></p>;

  return (
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs value={tabValue} onChange={handleTabChange} aria-label="tabs de status">
        <Tab label="Tudo" value="tudo" />
        <Tab label="Disponível" value="disponível" />
        <Tab label="Executando" value="executando" />
        <Tab label="Indisponível" value="indisponível" />
      </Tabs>
      <Box border="1px solid grey" borderRadius="5px" padding="16px">
        {tabValue === 'tudo' && <TabContentTudo />}
        {tabValue === 'disponível' && <TabContentDisponivel />}
        {tabValue === 'executando' && <TabContentExecutando />}
        {tabValue === 'indisponível' && <TabContentIndisponivel />}

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', mt: 2 }}>
            <DatePicker
              label="Selecione uma data"
              value={selectedDate}
              onChange={handleDateChange}
              renderInput={({ inputRef, inputProps, InputProps }) => (
                <React.Fragment>
                  <input ref={inputRef} {...inputProps} />
                  {InputProps?.endAdornment}
                </React.Fragment>
              )}
            />
            <Box sx={{ marginLeft: 2 }}>
              <DatePicker
                label="Selecione uma data"
                value={selectedDate}
                onChange={handleDateChange}
                renderInput={({ inputRef, inputProps, InputProps }) => (
                  <React.Fragment>
                    <input ref={inputRef} {...inputProps} />
                    {InputProps?.endAdornment}
                  </React.Fragment>
                )}
              />
            </Box>
            <Button variant="outlined" color="inherit" sx={{ marginLeft: 2, color: 'grey' }}>Primary</Button>
          </Box>
        </LocalizationProvider>
        <MyTable></MyTable>
      </Box>
    </Box>
  );
}

export default MostrarTabs;