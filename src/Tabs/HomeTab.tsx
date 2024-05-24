import React from 'react';
import { Typography } from '@mui/material';
import ContentContainer from "../components/ContentContainer";

const HomeTab: React.FC = () => {
    return (
      <ContentContainer>
          <Typography variant="h4" component="h1" gutterBottom>
          Retention
        </Typography>
      </ContentContainer>
    );
  };
  
  export default HomeTab;