import "./App.css";
import { TonConnectButton } from "@tonconnect/ui-react";
import { useTonConnect } from "./hooks/useTonConnect";
import { CHAIN } from "@tonconnect/protocol";
import "@twa-dev/sdk";
import AppAppBar from "./components/MainAppBar";
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Container, styled } from "@mui/material";
import { useState } from "react";
import HomeTab from "./Tabs/HomeTab";

const MainContainer = styled(Container)`
  background-color: white;
  margin-top: 64px; /* Height of the AppBar */
  padding: 20px;
  height: calc(100vh - 64px); /* Full height minus AppBar height */
  overflow-y: auto;
`;

function App() {
  const { network } = useTonConnect();
  const [value, setValue] = useState(0);
  let content;
  switch (value) {
    case 0:
      content = <HomeTab />;
      break;
    case 1:
      content = <HomeTab />;
      break;
    case 2:
      content = <HomeTab />;
      break;
    case 3:
      content = <HomeTab />;
      break;
    default:
      content = <HomeTab />;
  }

  return (
    <>
      <AppAppBar/>
    
      <Box sx={{ width: '100%', height: '100vh', display: 'flex', flexDirection: 'column', mt: 8 }}>
      <MainContainer maxWidth="lg">
        <Container sx={{ flexGrow: 1, padding: 1 }}>
          {content}
        </Container>
        </MainContainer>
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <BottomNavigationAction label="Home" icon={<RestoreIcon />} />
            <BottomNavigationAction label="Create" icon={<FavoriteIcon />} />
            <BottomNavigationAction label="Request" icon={<LocationOnIcon />} />
            <BottomNavigationAction label="About" icon={<LocationOnIcon />} />
          </BottomNavigation>
        </Paper>
      </Box>
    </>
  );
}

export default App;

// {network
//   ? network === CHAIN.MAINNET
//     ? "mainnet"
//     : "testnet"
//   : "N/A"}