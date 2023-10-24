import './App.css';
import { ThemeProvider } from '@mui/material';
import Botao from './components/Botao';
import Input from './components/Input';
import theme from './context/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          Lib de componentes

          <Input />
          <Botao />
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
