import React from 'react';
import { Box, Divider, Typography } from '@mui/material';
import { styled } from '@mui/system';
import InfoIcon from '@mui/icons-material/Info'; 

interface VerticalInfoProps {
  icon: React.ReactNode;
  text: string;
  value: string | number | null | undefined; 
  separator: boolean;
}

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: left;
  text-align: left;
  padding-left: 16px;
`;

const IconContainer = styled(Box)`
  margin-bottom: 2px;
`;

const Text = styled(Typography)`
  margin-bottom: 2px;
  font-size: 16px;
  color: #666;
`;

const Value = styled(Typography)`
  font-size: 14px;
  font-weight: semi-bold;
  color: #333;
`;

const VerticalInfo: React.FC<VerticalInfoProps> = ({ icon, text, value, separator }) => {
  return (
    <Container>
      <IconContainer>{icon}</IconContainer>
      <Text>{text}</Text>
      <Value>{value}</Value>
      <Divider style={{ width: separator ? '100%' : '0%' }} />
    </Container>
  );
};

export default VerticalInfo;
