import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { TonConnectButton } from '@tonconnect/ui-react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import appTheme from './appTheme';

const GradientAppBar = styled(AppBar)`
  // background: linear-gradient(to right, #0276FF, #00E0FF);
  height: 64px;
`;

const Title = styled(Typography)`
  margin-left: 16px;
  color: var(--white-color);
`;

const IconBox = styled(Box)`
  display: flex;
  align-items: center;
  color: var(--white-color);
`;

const ToolbarStyled = styled(Toolbar)`
  background: linear-gradient(to right, #0276FF, #00E0FF);
  height: 44px;
  // display: flex;
  justify-content: space-between;
  // width: 100%;
`;

const MainAppBar: React.FC = () => {
  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <ToolbarStyled>
        <IconBox>
          <AutoAwesomeIcon />
          <Title variant="h6">
            Retention
          </Title>
        </IconBox>
        <TonConnectButton  style={{ }}/>
      </ToolbarStyled>
      </ThemeProvider>
  );
};

export default MainAppBar;
