import React from 'react';
import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import createTheme from '@mui/system/createTheme';
import { ThemeProvider } from '@mui/system';

const theme = createTheme({
    palette: {
      primary: {
        main: '#4caf50', // Цвет кнопки
        contrastText: '#fff', // Цвет текста на кнопке
      },
    },
  });
  
const CreateTab: React.FC = () => {
    return (
        <Stack spacing={2}>
            <TextField id="outlined-basic" label="Amount" variant="outlined" />
            <TextField id="outlined-basic" label="Secret" variant="outlined" />
            <TextField id="outlined-basic" label="Expiration Date" variant="outlined" />
            
            <Button variant="contained" sx={{
                height: '50px', // Высота кнопки
                fontSize: '18px', // Размер текста
                padding: '10px 20px', // Отступы внутри кнопки
                    backgroundColor: '#3579ED', // Замените на нужный цвет
                    '&:hover': {
                    backgroundColor: '#3579ED', // Цвет при наведении
                    
                },
            }}>Create</Button>
            
        </Stack>
    );
  };
  
  export default CreateTab;