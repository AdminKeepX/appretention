import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";


import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
// this manifest is used temporarily for development purposes
const manifestUrl =
  "https://raw.githubusercontent.com/AdminKeepX/description/main/manifest.json";
  
const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
});

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0000ff',
    },
    secondary: {
      // main: '#dc004e',
      main: '#FF0000',
    },
    background: {
      default: '#f0FF0f',
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
  },
  // Добавьте другие настройки темы по необходимости
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <TonConnectUIProvider manifestUrl={manifestUrl}>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={lightTheme}>
      <CssBaseline />
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  </TonConnectUIProvider>
);
