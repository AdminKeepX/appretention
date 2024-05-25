import React from 'react';
import { Button, Typography, Box } from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox';

interface EmptyScreenProps {
  onCreateContract: () => void;
}

const EmptyScreen: React.FC<EmptyScreenProps> = ({ onCreateContract }) => {
  return (
    <Box textAlign="center" mt={10}> {/* Увеличиваем отступ сверху */}
      <InboxIcon style={{ fontSize: 50, marginBottom: 20 }} /> {/* Иконка с отступом снизу */}
      <Typography variant="h6" gutterBottom>
        У вас сейчас нет активных контрактов
      </Typography>
      <Button variant="contained" color="primary" onClick={onCreateContract}>
        Создать контракт
      </Button>
    </Box>
  );
};

export default EmptyScreen;
