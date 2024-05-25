import React, { useState } from 'react';
import { Box, Typography, Divider, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import EmptyScreen from '../components/EmptyScreen';
import ContentContainer from '../components/ContentContainer';

interface HomeTabProps {
  switchToCreateTab: () => void;
}

const HomeTab: React.FC<HomeTabProps> = ({ switchToCreateTab }) => {
  const [count, setCount] = useState(1);
  const [contracts, setContracts] = useState([
    // Пример данных контрактов
    { id: 1, name: 'Contract 1', amount: 100, date: '2024-05-25' },
    { id: 2, name: 'Contract 2', amount: 200, date: '2024-06-15' },
  ]);

  const getTotal = () => {
    return contracts.reduce((total, contract) => total + contract.amount, 0);
  };

  return (
    <ContentContainer>
      {count === 0 ? (
        <EmptyScreen onCreateContract={switchToCreateTab} />
      ) : (
        <Box>
          <Typography variant="h4" gutterBottom>
            My Contracts
          </Typography>
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
