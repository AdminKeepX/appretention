import React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ContentContainer from "../components/ContentContainer";
  
const Request: React.FC = () => {
    return (
        <ContentContainer>
        <Stack spacing={2}>
            <TextField id="outlined-basic" label="Secret" variant="outlined" />
            
            <Button variant="contained" sx={{
                height: '50px', // Высота кнопки
                fontSize: '18px', // Размер текста
                padding: '10px 20px', // Отступы внутри кнопки
                    backgroundColor: '#3579ED', // Замените на нужный цвет
                    '&:hover': {
                    backgroundColor: '#3579ED', // Цвет при наведении
                    
                },
            }}>Request</Button>
            
        </Stack>
        </ContentContainer>
    );
  };
  
  export default Request;