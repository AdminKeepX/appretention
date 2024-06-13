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
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 20px;
    padding-bottom: 20px;
    width: 280px;
    height: 480px;
    border-radius: 16px;
    flex-shrink: 0; // Предотвращаем сжатие карточек
    margin-right: 16px; // Добавляем отступ между карточками
    
`;

const Text = styled(Typography)`
    color: var(--black-color);
    margin-top: 0px;
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

const ImageContainer = styled(Box)`
    // background-color: var(--blue-color);
    padding-top: 20px;
    padding-bottom: 20px;
    display: flex;
    justify-content: center;
    width: 100%;
    overflow: hidden;
`;

const BlueButton = styled(Button)`
    background-color: var(--blue-color);
    color: white; /* Белый текст */
    &:hover {
        background-color: #115293; /* Темно-синий цвет при наведении */
    }
    text-transform: none;
    height: 44px;
    margin: 0px 20px 0px 20px; /* Отступы слева, справа и снизу */
`;

const SmartContractCard: React.FC<SmartContractCardProps> = ({ title, text, url, action }) => {
    const handleTap = () => {
        
    };

  return (
    <Container>
        <Text>{title}</Text>
        <SubText>{text}</SubText>
        <ImageContainer>
          <img src="https://imagedelivery.net/jXa8AdnaglgswFluUtTihA/1c34150f-7927-4c07-34f6-cc3eb3757300/192" alt="Your Image" style={{ maxWidth: '100%', height: 'auto' }} />
        </ImageContainer>
        <BlueButton onClick={handleTap}>
            Открыть
        </BlueButton>
    </Container>
  );
};

export default SmartContractCard;
