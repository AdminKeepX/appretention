import React, { useState } from 'react';
import { Box, Typography, Divider, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import EmptyScreen from '../components/EmptyScreen';
import ContentContainer from '../components/ContentContainer';
import { useMainContractAmount } from '../hooks/useMainContract';
import { styled } from '@mui/system';

interface HomeTabProps {
  switchToCreateTab: () => void;
}

const ImageContainer = styled(Box)`
  background-color: #f0f0f0; /* Серый фон */
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const InfoContainer = styled(Box)`
  background-color: #ffffff; /* Серый фон */
  padding-left: 0px;
  border-radius: 0px;
  width: 100%;
  max-width: 100%;
  margin-bottom: 0px;
`;

const CenteredTypography = styled(Typography)`
  padding-top: 20px;
  text-align: center;
  width: 100%;
`;

const HomeTab: React.FC<HomeTabProps> = ({ switchToCreateTab }) => {
  const [count, setCount] = useState(1);
  const [contracts, setContracts] = useState([
    // Пример данных контрактов
    { id: 1, name: 'Contract 1', amount: 100, date: '2024-05-25' },
    { id: 2, name: 'Contract 2', amount: 200, date: '2024-06-15' },
  ]);

  const { address, countIndex, currentLocked, allTimeLocked, allTimeRefunded, commission } = useMainContractAmount();

  const getTotal = () => {
    return contracts.reduce((total, contract) => total + contract.amount, 0);
  };

  return (
    <ContentContainer>
      {count === 0 ? (
        <EmptyScreen onCreateContract={switchToCreateTab} />
      ) : (
        <Box>
          <ImageContainer>
            <img src="https://imagedelivery.net/jXa8AdnaglgswFluUtTihA/5724030a-2864-4781-5c5b-de3f7e4a5b00/128" alt="Your Image" style={{ maxWidth: '100%', height: 'auto' }} />
          </ImageContainer>
          <InfoContainer>
          <CenteredTypography variant="h5" gutterBottom>
            Overview
          </CenteredTypography>
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
