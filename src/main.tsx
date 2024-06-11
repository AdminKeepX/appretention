import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import appTheme from "./components/appTheme";


import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
// this manifest is used temporarily for development purposes
const manifestUrl =
  "https://raw.githubusercontent.com/AdminKeepX/description/main/manifest.json";
  
const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
});



ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <TonConnectUIProvider manifestUrl={manifestUrl}>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={appTheme}>
      <CssBaseline />
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  </TonConnectUIProvider>
);
