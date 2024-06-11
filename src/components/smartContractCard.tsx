import React from 'react';
import { Box, Button, Divider, Typography } from '@mui/material';
import { styled } from '@mui/system';
import InfoIcon from '@mui/icons-material/Info'; 


interface SmartContractCardProps {
    title: string;
    text: string; 
    url: string; 
    action: string;
}

const Container = styled(Box)`
    background-color: var(--dark-gray-background-color);
    display: flex;
    flex-direction: column;
    align-items: left;
    text-align: left;
    padding-left: 16px;
    width: 350px;
    height: 600px;
    border-radius: 16px;
    flex-shrink: 0; // Предотвращаем сжатие карточек
    margin-right: 16px; // Добавляем отступ между карточками
    
`;

const Text = styled(Typography)`
    color: var(--black-color);
    
    margin-top: 30px;
    font-size: 24px;
    text-align: center;
    font-family: 'Lato, sans-serif';
    font-weight: 700;
`;

const SubText = styled(Typography)`
    margin-top: 20px;
    font-size: 17px;
    text-align: center;
    padding-left: 20px;
    padding-right: 20px;
    color: var(--sblack-color);
    font-family: 'Open Sans, sans-serif';
    font-weight: 500; // Обычный (Regular)
`;

const ActionButton = styled(Button)`
  
`;

const SmartContractCard: React.FC<SmartContractCardProps> = ({ title, text, url, action }) => {
  return (
    <Container>
        <Text>{title}</Text>
        <SubText>{text}</SubText>
    </Container>
  );
};

export default SmartContractCard;
