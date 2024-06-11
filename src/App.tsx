import "./App.css";
import { TonConnectButton } from "@tonconnect/ui-react";
import { useTonConnect } from "./hooks/useTonConnect";
import { CHAIN } from "@tonconnect/protocol";
import "@twa-dev/sdk";
import MainAppBar from "./components/MainAppBar";
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

const MainContainer = styled(Container)`
  background-color: green; /* Устанавливаем белый фон */
  margin-top: 0px; /* Высота AppBar */
  padding: 0; /* Убираем отступы */
  overflow-y: auto;
  padding-bottom: 0px; /* Отступ для BottomNavigation */
`;

const FloatingBottomNavigation = styled(Paper)`
  position: fixed;
  bottom: 16px; /* Отступ от нижнего края экрана */
  left: 50%;
  transform: translateX(-50%);
  width: 90%; /* Ширина навигации */
  max-width: 600px; /* Максимальная ширина */
  border-radius: 16px; /* Радиус скругления */
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.5); /* Тень */
  overflow: hidden;
  z-index: 1000;
`;



function App() {
  const { network } = useTonConnect();
  const [currentTab, setCurrentTab] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue);
  };

  useEffect(() => {
    WebApp.expand();
  }, []);

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
      <MainAppBar />
      {/* <MainContainer> */}
        {content}
      {/* </MainContainer> */}
      <FloatingBottomNavigation>
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
      </FloatingBottomNavigation>
    </>
  );
}

export default App;
