import React, { useState } from 'react';
import { Box, Typography, Divider} from '@mui/material';
import { styled } from '@mui/system';
import Stack from '@mui/material/Stack';
import '../App.css';
import SmartContractCard from '../components/smartContractCard';


const TopContainer = styled(Box)`
    // background-color: var(--gray-background-color);
    background-color: #ffffff; /* Белый фон */
    box-sizing: border-box; /* Убедимся, что padding и border включены в размеры элемента */
    padding-top: 20px;
    padding-bottom: 20px;
`;

const MiddleContainer = styled(Box)`
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

const LeftDescriptionBlock = styled(Typography)`
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

const AboutTab: React.FC = () => {

  return (
    <Stack spacing={5} >
    <TopContainer>
      <Stack spacing={3} >
        
        <Stack spacing={1} >
        <LeftMainBlock variant="h5" gutterBottom>
            About
        </LeftMainBlock>
        <LeftSecondaryBlock variant="h6" gutterBottom>
          The Retention Docs
        </LeftSecondaryBlock>
        <LeftDescriptionBlock variant="body2" gutterBottom>
            Retention is a decentralized platform offering a marketplace for DeFi smart contracts on the TON blockchain. Our mission is to provide secure, transparent, and trust financial agreements, leveraging the innovative capabilities of Web3.
        </LeftDescriptionBlock>
        </Stack>
        <Stack spacing={1} >
        <LeftMainBlock variant="h5" gutterBottom>
          What is Retention?
        </LeftMainBlock>
        <LeftDescriptionBlock variant="body2" gutterBottom>
          Retention offers a unique solution to the problem of trust in financial agreements. By utilizing smart contracts on the TON blockchain, we ensure that financial commitments are honored without reliance on traditional intermediaries. Our contracts are open, transparent, and immutable, providing a new level of security and trust.
        </LeftDescriptionBlock>
        </Stack>
        <Stack spacing={1} >
        <LeftMainBlock variant="h5" gutterBottom>
          Why Choose Retention?
        </LeftMainBlock>
        <LeftDescriptionBlock variant="body2" gutterBottom>
          Founded in 2024, Retention is dedicated to transforming how people handle financial agreements. Our platform supports various types of contracts, from savings plans to inheritance transfers, all time-locked to ensure funds are only accessible at the specified time. This approach guarantees that financial plans are executed exactly as intended, offering peace of mind and security.
        </LeftDescriptionBlock>
        </Stack>
        <Stack spacing={1} >
        <LeftMainBlock variant="h5" gutterBottom>
          Key Features of Retention
        </LeftMainBlock>
        <LeftSecondaryBlock variant="h6" gutterBottom>
          Time-Locked Contracts:
        </LeftSecondaryBlock>
        <LeftDescriptionBlock variant="body2" gutterBottom>
          Securely lock your TON tokens until a specified date, with no possibility of early withdrawal. 
        </LeftDescriptionBlock>
        <LeftSecondaryBlock variant="h6" gutterBottom>
          Transparent and Trustless:
        </LeftSecondaryBlock>
        <LeftDescriptionBlock variant="body2" gutterBottom>
          Built on the TON blockchain, our contracts are open and verifiable by anyone, ensuring complete transparency.
        </LeftDescriptionBlock>
        <LeftSecondaryBlock variant="h6" gutterBottom>
          Flexible Use Cases:
        </LeftSecondaryBlock>
        <LeftDescriptionBlock variant="body2" gutterBottom>
          Suitable for a wide range of financial needs, including savings, inheritance, and organizational payouts.
        </LeftDescriptionBlock>
        <LeftSecondaryBlock variant="h6" gutterBottom>
          User-Friendly Interface:
        </LeftSecondaryBlock>
        <LeftDescriptionBlock variant="body2" gutterBottom>
          Our platform is designed to be intuitive and easy to use, even for those new to blockchain technology.
        </LeftDescriptionBlock>
        </Stack>
        
        <Stack spacing={1} >
        <LeftMainBlock variant="h5" gutterBottom>
          Retention's Impact on the TON Ecosystem
        </LeftMainBlock>
        <LeftSecondaryBlock variant="h6" gutterBottom>
            Transforming Financial Mindsets:
        </LeftSecondaryBlock>
        <LeftDescriptionBlock variant="body2" gutterBottom>
          We aim to shift users from traditional financial systems to the innovative world of Web3.
        </LeftDescriptionBlock>
        <LeftSecondaryBlock variant="h6" gutterBottom>
          Enhanced Security:
        </LeftSecondaryBlock>
        <LeftDescriptionBlock variant="body2" gutterBottom>
          By eliminating the need for trust in centralized entities, we provide a more secure and reliable financial environment.
        </LeftDescriptionBlock>
        <LeftSecondaryBlock variant="h6" gutterBottom>
          Supporting the Community:
        </LeftSecondaryBlock>
        <LeftDescriptionBlock variant="body2" gutterBottom>
          Retention is committed to user feedback and fast support, ensuring a positive experience for all users.
        </LeftDescriptionBlock>
        </Stack>

        <Stack spacing={1} >
        <LeftMainBlock variant="h5" gutterBottom>
          Social
        </LeftMainBlock>
        <LeftDescriptionBlock variant="body2" gutterBottom>
          Website: https://retention.io
        </LeftDescriptionBlock>
        <LeftDescriptionBlock variant="body2" gutterBottom>
          Web App: https://app.retention.io
        </LeftDescriptionBlock>
        <LeftDescriptionBlock variant="body2" gutterBottom>
          Github: https://github.com/retention
        </LeftDescriptionBlock>
        <LeftDescriptionBlock variant="body2" gutterBottom>
        Twitter: @retention_io
        </LeftDescriptionBlock>
        <LeftDescriptionBlock variant="body2" gutterBottom>
        Telegram: @retentiondapp
        </LeftDescriptionBlock>

        </Stack>
        <Divider />
        <LeftDescriptionBlock variant="body2" gutterBottom>
        Join us in revolutionizing the way financial agreements are made and honored. 
        With Retention, you can trust that your financial future is secure.
        </LeftDescriptionBlock>

      </Stack>
    </TopContainer>
    <Fotter />
    </Stack>
    
    
  );  
};

export default AboutTab;