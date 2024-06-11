import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { TonConnectButton } from '@tonconnect/ui-react';

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

const ButtonBox = styled(Box)`
  // margin-left: auto;
  // display: flex;
  // align-items: center;
  // justify-content: flex-end; /* Убедимся, что содержимое выравнивается по правому краю */
  // padding-right: 16px
  // margin-right: 16px;
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
    // <GradientAppBar position="fixed">
      <ToolbarStyled>
        <IconBox>
          <AutoAwesomeIcon />
          <Title variant="h6">
            Retention
          </Title>
        </IconBox>
        <ButtonBox>
          <TonConnectButton />
        </ButtonBox>
      </ToolbarStyled>
    // </GradientAppBar>
  );
};

export default MainAppBar;
