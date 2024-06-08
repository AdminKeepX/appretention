import React, { useState } from 'react';
import { Box, Typography, Divider, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import EmptyScreen from '../components/EmptyScreen';
import ContentContainer from '../components/ContentContainer';
import { useMainContractAmount } from '../hooks/useMainContract';
import { styled } from '@mui/system';
import Stack from '@mui/material/Stack';

interface HomeTabProps {
  onTabChange: (tabIndex: number) => void;
}

const TopContainer = styled(Box)`
  background-color: #FAFBFC; /* Серый фон */
  padding-top: 0px;
  padding-bottom: 0px;
  display: flex;
  width: 100%;
  overflow: hidden;
`;

const ImageContainer = styled(Box)`
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  justify-content: center;
  width: 100%;
  overflow: hidden;
`;

const InfoContainer = styled(Box)`
  background-color: #ffffff; /* Белый фон */
  padding-left: 16px;
  padding-right: 16px;
  border-radius: 0px;
  width: 100%;
  max-width: 100%;
  margin-bottom: 0px;
  overflow: hidden;
`;

const CenteredTypography = styled(Typography)`
  padding-top: 20px;
  text-align: center;
  width: 100%;
`;

const CenteredSmallTypography = styled(Typography)`
  padding-top: 0px;
  padding-left: 40px;
  padding-right: 40px;
  text-align: center;
`;

const ButtonContainer = styled(Box)`
  padding-top: 20px;
  display: flex;
  justify-content: center;
  width: 100%;
  padding-bottom: 40px;
  height: 44px;
`;

const BlueButton = styled(Button)`
  flex: 1;
  margin: 0 8px;
  background-color: #1976d2; /* Синий цвет */
  color: white; /* Белый текст */
  &:hover {
    background-color: #115293; /* Темно-синий цвет при наведении */
  }
`;

const GreyButton = styled(Button)`
  flex: 1;
  margin: 0 8px;
  background-color: #9e9e9e; /* Серый цвет */
  color: white; /* Белый текст */
  &:hover {
    background-color: #707070; /* Темно-серый цвет при наведении */
  }
`;

const HomeTab: React.FC<HomeTabProps> = ({ onTabChange }) => {
  const [count, setCount] = useState(1);
  const [contracts, setContracts] = useState([
    // Пример данных контрактов
    { id: 1, name: 'Contract 1', amount: 100, date: '2024-05-25' },
    { id: 2, name: 'Contract 2', amount: 200, date: '2024-06-15' },
  ]);

  const handleCreateContract = () => {
    onTabChange(1); // Переключение на вкладку "Create"
  };

  const handleRequestPayout = () => {
    onTabChange(2); // Переключение на вкладку "Request"
  };

  const { address, countIndex, currentLocked, allTimeLocked, allTimeRefunded, commission } = useMainContractAmount();

  const getTotal = () => {
    return contracts.reduce((total, contract) => total + contract.amount, 0);
  };

  return (
    <ContentContainer>
      {count === 0 ? (
        <EmptyScreen onCreateContract={handleCreateContract} />
      ) : (
        <Box>
          <TopContainer>
            <Stack spacing={1}>
              <ImageContainer>
                <img src="https://imagedelivery.net/jXa8AdnaglgswFluUtTihA/5724030a-2864-4781-5c5b-de3f7e4a5b00/128" alt="Your Image" style={{ maxWidth: '100%', height: 'auto' }} />
              </ImageContainer>
              <CenteredSmallTypography variant="h6" gutterBottom>
                Create payout contracts or request funds from accounts
              </CenteredSmallTypography>
              <CenteredSmallTypography variant="body1" gutterBottom>
                Plan for long-term storage, create inheritance transfers, protect your capital from impulsive actions!
              </CenteredSmallTypography>
              <ButtonContainer>
                <BlueButton onClick={handleCreateContract} variant="contained" style={{ flex: 1, marginRight: 8, marginLeft: 60 }}>
                  Create
                </BlueButton>
                <GreyButton onClick={handleRequestPayout} variant="contained" style={{ flex: 1, marginLeft: 8, marginRight: 60 }}>
                  Payout
                </GreyButton>
              </ButtonContainer>
            </Stack>
          </TopContainer>
          <InfoContainer>
            <Typography variant="body1" gutterBottom>
              Address: {address}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Amount of contracts: {countIndex}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Current Locked: {currentLocked}
            </Typography>
            <Typography variant="body1" gutterBottom>
              All time Locked: {allTimeLocked}
            </Typography>
            <Typography variant="body1" gutterBottom>
              All Time Refunded: {allTimeRefunded}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Commission: {commission}
            </Typography>
          </InfoContainer>
          <Divider />
          <CenteredTypography variant="h5" gutterBottom>
            My Contracts
          </CenteredTypography>
          <Divider />
          <Typography variant="body1" gutterBottom>
            Here you can find all your active contracts.
          </Typography>
          <Typography variant="h6" gutterBottom>
            Total Amount: {getTotal()}
          </Typography>
          <Divider />
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Contract Name</TableCell>
                  <TableCell>Amount</TableCell>
                  <TableCell>Date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {contracts.map((contract) => (
                  <TableRow key={contract.id}>
                    <TableCell>{contract.name}</TableCell>
                    <TableCell>{contract.amount}</TableCell>
                    <TableCell>{contract.date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      )}
    </ContentContainer>
  );
};

export default HomeTab;
