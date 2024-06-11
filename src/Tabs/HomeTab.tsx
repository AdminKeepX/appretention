import React, { useState } from 'react';
import { Box, Typography, Divider, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import EmptyScreen from '../components/EmptyScreen';
import ContentContainer from '../components/ContentContainer';
import { useMainContractAmount } from '../hooks/useMainContract';
import { styled } from '@mui/system';
import Stack from '@mui/material/Stack';
import '../App.css';
import VerticalInfo from '../components/VerticalInfo';
import InfoIcon from '@mui/icons-material/Info';

interface HomeTabProps {
  onTabChange: (tabIndex: number) => void;
}

// const StyledBox = styled(Box)(({ theme }) => ({
//   padding: 0, // Устанавливаем внутренний отступ
//   backgroundColor: theme.palette.background.paper,
//   border: `10px solid ${theme.palette.divider}`,
//   borderRadius: theme.shape.borderRadius,
// }));



const TopContainer = styled(Box)`
  background-color: var(--gray-background-color);
  box-sizing: border-box; /* Убедимся, что padding и border включены в размеры элемента */
`;

const MiddleContainer = styled(Box)`
  background-color: var(--white-color);
  box-sizing: border-box; /* Убедимся, что padding и border включены в размеры элемента */
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

const CenteredMainBlock = styled(Typography)`
  padding-top: 0px;
  padding-left: 70px;
  padding-right: 70px;
  text-align: center;
  color: var(--black-color);
`;

const LeftMainBlock = styled(Typography)`
  padding-top: 0px;
  padding-left: 16px;
  padding-right: 16px;
  text-align: left;
  color: var(--black-color);
`;

const LeftSecondaryBlock = styled(Typography)`
  padding-top: 0px;
  padding-left: 16px;
  padding-right: 16px;
  text-align: left;
  color: var(--gray-text-color);
`;

const CenteredSecondaryBlock = styled(Typography)`
  padding-top: 0px;
  padding-left: 30px;
  padding-right: 30px;
  text-align: center;
  color: var(--gray-text-color);
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
  background-color: var(--blue-color);
  color: white; /* Белый текст */
  &:hover {
    background-color: #115293; /* Темно-синий цвет при наведении */
  }
  text-transform: none;
`;

const GreyButton = styled(Button)`
  flex: 1;
  margin: 0 8px;
  background-color: #ffffff; /* Серый цвет */
  color: var(--black-color);
  &:hover {
    background-color: #707070; /* Темно-серый цвет при наведении */
  }
  text-transform: none;
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
    <Stack spacing={4} >
    <TopContainer>
      <Stack spacing={1} >
        <ImageContainer>
          <img src="https://imagedelivery.net/jXa8AdnaglgswFluUtTihA/5724030a-2864-4781-5c5b-de3f7e4a5b00/128" alt="Your Image" style={{ maxWidth: '100%', height: 'auto' }} />
        </ImageContainer>
        <CenteredMainBlock variant="h5" gutterBottom>
          Создавайте контракты или выводите токены из смарт-контрактов
        </CenteredMainBlock>
        <CenteredSecondaryBlock variant="body1" gutterBottom>
          Планируйте долгосрочное хранение, создавайте наследственные переводы, защищайте свой капитал от импульсивных действий!
        </CenteredSecondaryBlock>
        <ButtonContainer>
          <BlueButton onClick={handleCreateContract} variant="contained" style={{ flex: 1, marginRight: 8, marginLeft: 60 }}>
            Создать
          </BlueButton>
          <GreyButton onClick={handleRequestPayout} variant="contained" style={{ flex: 1, marginLeft: 8, marginRight: 60 }}>
            Запросить
          </GreyButton>
        </ButtonContainer>
      </Stack>
    </TopContainer>
    <MiddleContainer>
    <Stack spacing={1}>
        
        <LeftMainBlock variant="h5" gutterBottom>
          Обзор контракта
        </LeftMainBlock>
        <LeftSecondaryBlock variant="body1" gutterBottom>
          Планируйте долгосрочное хранение, создавайте наследственные переводы, защищайте свой капитал от импульсивных действий!
        </LeftSecondaryBlock>
        <Divider />
        <VerticalInfo
          icon={<InfoIcon fontSize="large" />}
          text="Address"
          value={address}
        />
        <VerticalInfo
          icon={<InfoIcon fontSize="large" />}
          text="Amount of contracts"
          value={countIndex}
        />
        <VerticalInfo
          icon={<InfoIcon fontSize="large" />}
          text="All time Locked" 
          value={allTimeLocked}
        />
        <VerticalInfo
          icon={<InfoIcon fontSize="large" />}
          text="All Time Refunded"
          value={allTimeRefunded}
        />
        <VerticalInfo
          icon={<InfoIcon fontSize="large" />}
          text="Информация"
          value="123"
        />
      </Stack>
    </MiddleContainer>
    </Stack>

    
  );
};

export default HomeTab;





      {/* <InfoContainer>
        <Typography variant="body1" gutterBottom>
          Address: 
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
      </InfoContainer> */}
      {/* <CenteredTypography variant="h5" gutterBottom>
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
      </TableContainer> */}