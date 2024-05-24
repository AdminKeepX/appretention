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
      <Typography variant="h6" gutterBottom>
        Main Goal:
      </Typography>
      <Typography variant="body1" paragraph>
        The goal of Retention is to provide users with a convenient and secure tool for long-term capital management, including the creation of savings accounts and inheritance transfers with clearly defined withdrawal conditions.
      </Typography>
      <Typography variant="h6" gutterBottom>
        Examples of Smart Contracts:
      </Typography>
      <Box mb={2}>
        <Typography variant="h6" gutterBottom>
          Pension Savings Account:
        </Typography>
        <Typography variant="body1" paragraph>
          Description: The user can create a pension savings account, which can be funded during the active work period. Funds can only be withdrawn after reaching retirement age (e.g., after 2040).
        </Typography>
        <Typography variant="body1" paragraph>
          Settings: Regular contributions, fixed start date for withdrawals, even distribution of funds monthly after the start date.
        </Typography>
        <Typography variant="h6" gutterBottom>
          Inheritance Transfer:
        </Typography>
        <Typography variant="body1" paragraph>
          Description: A parent can lock a certain amount of money for their children, setting the withdrawal date when the children turn 21.
        </Typography>
        <Typography variant="body1" paragraph>
          Settings: One-time contributions, start date for withdrawals, possibility of partial or full withdrawal upon reaching a certain age.
        </Typography>
        <Typography variant="h6" gutterBottom>
          Funds Freezing for Major Purchase:
        </Typography>
        <Typography variant="body1" paragraph>
          Description: The user can create a contract for accumulating funds for a major purchase, such as a house or car, with the possibility of withdrawing funds only after reaching a certain amount or date.
        </Typography>
        <Typography variant="body1" paragraph>
          Settings: Periodic contributions, fixed or flexible withdrawal date, targeted accumulation.
        </Typography>
        <Typography variant="h6" gutterBottom>
          Financial Support for Children's Education:
        </Typography>
        <Typography variant="body1" paragraph>
          Description: Parents can create a contract for paying for their children's education by freezing funds until the children reach a certain age or educational stage.
        </Typography>
        <Typography variant="body1" paragraph>
          Settings: Regular or one-time contributions, flexible start date for withdrawals, possibility of phased withdrawal of funds.
        </Typography>
      </Box>
      <Typography variant="h6" gutterBottom>
        Target Audience:
      </Typography>
      <Typography variant="body1" paragraph>
        People planning long-term financial goals (retirees, young families).
      </Typography>
      <Typography variant="body1" paragraph>
        Parents wishing to ensure financial support for their children in the future.
      </Typography>
      <Typography variant="body1" paragraph>
        Investors looking for reliable and flexible ways to manage their capital.
      </Typography>
      <Typography variant="body1" paragraph>
        Retention offers a unique opportunity for users to safely and securely plan their financial future by providing flexible and personalized solutions for various life situations.
      </Typography>
    </ContentContainer>
  );
};

export default AboutTab;
