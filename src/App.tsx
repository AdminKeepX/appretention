import "./App.css";
import { TonConnectButton } from "@tonconnect/ui-react";
import { useTonConnect } from "./hooks/useTonConnect";
import { CHAIN } from "@tonconnect/protocol";
import "@twa-dev/sdk";
import AppAppBar from "./components/MainAppBar";
import HomeIcon from '@mui/icons-material/Home';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import InfoIcon from '@mui/icons-material/Info';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Container, styled } from "@mui/material";
import { useState, useEffect } from "react";
import HomeTab from "./Tabs/HomeTab";
import CreateTab from "./Tabs/CreateTab";
import Request from "./Tabs/Request";
import AboutTab from "./Tabs/AboutTab";

import WebApp from '@twa-dev/sdk'

// import { initViewport } from '@tma.js/sdk';
// import {requestViewport} from '@tma.js/sdk';




const MainContainer = styled(Container)`
  background-color: white; /* Устанавливаем белый фон */
  margin-top: 0px; /* Высота AppBar */
  padding: 0; /* Убираем отступы */
  height: calc(100vh + 200px); /* Полная высота минус высота AppBar */
  overflow-y: auto;
`;

function App() {
  const { network } = useTonConnect();
  const [currentTab, setCurrentTab] = useState(0);



  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue);
  };

  useEffect(() => {
    WebApp.expand()
  }, [])

  let content;
  switch (currentTab) {
    case 0:
      content = <HomeTab onTabChange={setCurrentTab} />;
      break;
    case 1:
      content = <CreateTab />;
      break;
    case 2:
      content = <Request />;
      break;
    case 3:
      content = <AboutTab />;
      break;
    default:
      content = <HomeTab onTabChange={setCurrentTab} />;
  }

  return (
    <>
      <MainContainer maxWidth="lg">
        <AppAppBar />
        <Box sx={{ width: '100%', height: '100vh', display: 'flex', flexDirection: 'column', mt: 8 }}>
          <Container sx={{ flexGrow: 1, padding: 0 }}> {/* Убираем отступы */}
            {content}
          </Container>
          <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <BottomNavigation
              showLabels
              value={currentTab}
              onChange={handleChange}
            >
              <BottomNavigationAction label="Home" icon={<HomeIcon />} />
              <BottomNavigationAction label="Create" icon={<AddCircleIcon />} />
              <BottomNavigationAction label="Request" icon={<RequestQuoteIcon />} />
              <BottomNavigationAction label="About" icon={<InfoIcon />} />
            </BottomNavigation>
          </Paper>
        </Box>
      </MainContainer>
    </>
  );
}

export default App;
