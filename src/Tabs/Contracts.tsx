import React, { useState } from 'react';
import { Box, Typography, Divider} from '@mui/material';
import { styled } from '@mui/system';
import Stack from '@mui/material/Stack';
import '../App.css';
import SmartContractCard from '../components/smartContractCard';


const TopContainer = styled(Box)`
    background-color: var(--gray-background-color);
    box-sizing: border-box; /* Убедимся, что padding и border включены в размеры элемента */
    padding-bottom: 40px;
`;

const MiddleContainer = styled(Box)`
    background-color: var(--white-color);
    box-sizing: border-box; /* Убедимся, что padding и border включены в размеры элемента */
`;

const CardContainer = styled(Box)`
    background-color: var(--white-color);
    box-sizing: border-box; /* Убедимся, что padding и border включены в размеры элемента */
`;

const ImageContainer = styled(Box)`
    padding-top: 10px;
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

const Fotter = styled(Box)`
  background-color: var(--gray-background-color);
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  height: 84px;
`;

const CenteredTypography = styled(Typography)`
  padding-top: 20px;
  text-align: center;
  width: 100%;
`;

const CenteredMainBlock = styled(Typography)`
  padding-left: 70px;
  padding-right: 70px;
  text-align: center;
  color: var(--black-color);
  padding-top: 0px;
  padding-bottom: 0px;
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
  padding-top: 0px;
  padding-bottom: 0px;
  color: var(--gray-text-color);
`;

const ButtonContainer = styled(Box)`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 0px;
  padding-bottom: 0px;
  height: 44px;
`;

const ScrollContainer = styled(Box)`
  display: flex;
  overflow-x: auto;
  padding: 16px;
  gap: 16px; // Расстояние между карточками
  &::-webkit-scrollbar {
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--dark-gray-background-color);
    border-radius: 4px;
  }
`;

const Contracts: React.FC = () => {

    const cards = [
        { title: 'Deposit and Lock', text: 'Вы вносите депозит и указваете дату раньше которой которой не сможете вывести деньги со смарт-контракта', url: '#', action: 'Action 1' },
        { title: 'Card 2', text: 'This is card 2', url: '#', action: 'Action 2' },
        { title: 'Card 3', text: 'This is card 3', url: '#', action: 'Action 3' },
        // Добавьте больше карточек по необходимости
      ];
  
  return (
    <Stack spacing={5} >
    <TopContainer>
      <Stack spacing={3} >
        <ImageContainer>
          <img src="https://imagedelivery.net/jXa8AdnaglgswFluUtTihA/5724030a-2864-4781-5c5b-de3f7e4a5b00/128" alt="Your Image" style={{ maxWidth: '100%', height: 'auto' }} />
        </ImageContainer>
        <Stack spacing={1} >
        <CenteredMainBlock variant="h5" gutterBottom>
            Погрузись в новый мир
        </CenteredMainBlock>
        <CenteredMainBlock variant="h5" gutterBottom>
            финансовых возможностей вместе с 
        </CenteredMainBlock>
        <CenteredMainBlock variant="h5" gutterBottom>
            Retention!
        </CenteredMainBlock>

        </Stack>
        <CenteredSecondaryBlock variant="body1" gutterBottom>
        Мы предлагаем готовые смарт-контракты для безопасных финансовых операций. Добро пожаловать в мир web3! Планируйте долгосрочное хранение токенов, создавайте наследственные переводы, создайте свой фонд финансовой свободы и защищайте свой капитал от импульсивных действий. С нами ваши финансовые операции станут надежными и прозрачными.
        </CenteredSecondaryBlock>

      </Stack>
    </TopContainer>
    <MiddleContainer>
    <Stack spacing={1}>
        
        <CenteredMainBlock variant="h5" gutterBottom>
          Обзор контрактов
        </CenteredMainBlock>
        <CenteredSecondaryBlock variant="body1" gutterBottom>
            "Пользоваться готовыми контрактами очень легко! Внимательно изучайте правила использования контракта и переходите к его активации. Вот несколько самых популярных контрактов, которые уже работают."
        </CenteredSecondaryBlock>
      </Stack>
    </MiddleContainer>
    <CardContainer  >
    <ScrollContainer>
      {cards.map((card, index) => (
        <SmartContractCard
          key={index}
          title={card.title}
          text={card.text}
          url={card.url}
          action={card.action}
        />
      ))}
    </ScrollContainer>
    </CardContainer>
    <Fotter />
    </Stack>
    
    
  );
};

export default Contracts;