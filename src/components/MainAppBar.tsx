import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
import { TonConnectButton } from '@tonconnect/ui-react';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

const GradientAppBar = styled(AppBar)`
  background: linear-gradient(to right, #0276FF, #00E0FF);
  height: 64px;
`;

const Title = styled(Typography)`
  margin-left: 16px;
`;

const IconBox = styled(Box)`
  display: flex;
  align-items: center;
`;

const ButtonBox = styled(Box)`
  margin-left: auto;
  display: flex;
  align-items: center;
`;

const MainAppBar: React.FC = () => {
  return (
    <GradientAppBar position="fixed">
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <IconBox>
          <AutoAwesomeIcon />
          <Title variant="h6">
            Retention
          </Title>
        </IconBox>
        <ButtonBox>
          <TonConnectButton />
        </ButtonBox>
      </Toolbar>
    </GradientAppBar>
  );
};

export default MainAppBar;
