import React, { useState } from 'react';
import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import createTheme from '@mui/system/createTheme';
import { ThemeProvider } from '@mui/system';

const CreateTab: React.FC = () => {

    const [amount, setAmount] = useState(10);

    const handleChangeAmount = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAmount(Number(event.target.value));
    };
    
    return (
        <Stack spacing={2}>
            <TextField id="outlined-number" label="Amount of Ton" type="number"  value={amount} onChange={handleChangeAmount}
            />
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