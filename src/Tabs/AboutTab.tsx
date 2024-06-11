import React from "react";
import ContentContainer from "../components/ContentContainer";
import { Typography, Box } from "@mui/material";

const AboutTab = () => {
  return (
    <ContentContainer>
      <Box textAlign="center" mb={4}>
        <Typography variant="h4" gutterBottom>
          Retention
        </Typography>
      </Box>
      <Box textAlign="center" mx={4} mb={4}>
        <Typography variant="body1" paragraph>
          Retention is an advanced financial TWA application designed to create smart contracts that allow freezing funds until a specified expiration date. This innovative solution offers a variety of use cases, enabling users to flexibly manage their finances and plan for the future.
        </Typography>
      </Box>
  
    </ContentContainer>
  );
};

export default AboutTab;
