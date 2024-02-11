import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import makeStyles from '@mui/styles/makeStyles';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const useStyles = makeStyles({
  cardHeaderLine: {
    borderLeft: '4px solid black',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
  },
  titleContainer: {
    display: 'flex',
    alignItems: 'center',
  },
});

function CardHeaderComponent() {
  const classes = useStyles();

  return (
    <Card
      elevation={0}
      variant="outlined"
      style={{ border: 'none' }} // Estilo inline para remover a borda
    >
      <CardHeader
        sx={{
          borderLeft: '4px solid black',
          padding: '10px',
          textAlign: 'left',
        }}
        title={
          <div className={classes.titleContainer}>
            Quantidade de origens
            <IconButton aria-label="Ajuda">
              <HelpOutlineIcon />
            </IconButton>
          </div>
        }
        subheader="Acompanhamento em tempo real da entrada de origens."
      />
      {/* Outros conteúdos do Card aqui */}
    </Card>
  );
}

export default CardHeaderComponent;
