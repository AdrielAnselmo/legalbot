import logo from './logo.svg';
import './App.css';
import Card_header from './componentes/cardheader';
import MostrarTabs from './componentes/tabela'
import MyTable from './componentes/tabela_conteudo';
import Container from '@mui/material/Container'; // Importe o componente de contêiner do Material-UI


function App() {
  return (
    <div className="App">
          <Container style={{ maxWidth: 1800 }}>
    <Card_header variant="outlined"></Card_header>
    <MostrarTabs></MostrarTabs>
    </Container>

    </div>
    
  );
}

export default App;
