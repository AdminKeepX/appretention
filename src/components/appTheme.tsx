import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Создаем светлую тему
const appTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#ffffff',
    },
    background: {
      default: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
  },
});

export default appTheme;
