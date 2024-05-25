import React, { useState, useEffect } from 'react';
import { Box, TextField, Button } from '@mui/material';
import { styled } from '@mui/system';

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
`;

const FormRow = styled(Box)`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 16px;
`;

const MemoField = styled(TextField)`
  width: 90px; /* Fixed width for 6 characters */
  margin-left: 16px;
`;

const SecretField = styled(TextField)`
  flex-grow: 1; /* Flexible width */
`;

const Request: React.FC = () => {
  const [secret, setSecret] = useState('');
  const [memo, setMemo] = useState("");

  const handleSecretChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSecret(value);
  };

  const handleMemoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMemo(value);
  };

  const handleCreate = () => {
    // Handle create logic
  };

  return (
    <Container>
      <FormRow>
        <SecretField
          label="Secret"
          variant="outlined"
          value={secret}
          onChange={handleSecretChange}
        />
        <MemoField
          label="Memo"
          variant="outlined"
          value={memo}
          onChange={handleMemoChange}
        />
      </FormRow>
      <Button
                variant="contained"
                sx={{
                    height: '50px',
                    fontSize: '18px',
                    padding: '10px 20px',
                    backgroundColor: '#3579ED',
                    '&:hover': {
                        backgroundColor: '#3579ED',
                    },
                }}
            >
                Request
            </Button>
    </Container>
  );
};

export default Request;
