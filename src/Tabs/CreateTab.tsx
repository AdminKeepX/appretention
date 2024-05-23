import { useState } from 'react';
import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import createTheme from '@mui/system/createTheme';
import { ThemeProvider } from '@mui/system';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimeField } from '@mui/x-date-pickers/DateTimeField';
import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';


const CreateTab: React.FC = () => {

    const [amount, setAmount] = useState(10);

    const [value, setValue] = React.useState<Dayjs | null>(dayjs('2022-04-17T15:30'));

    const handleChangeAmount = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAmount(Number(event.target.value));
    };
    
    const [timeValue, setTimeValue] = React.useState<Dayjs | null>(dayjs('2022-04-17T15:30'));

    return (
        <Stack spacing={2}>
            <TextField id="outlined-number" label="Amount of Ton" type="number"  value={amount} onChange={handleChangeAmount}
            />
            <TextField id="outlined-basic" label="Secret" variant="outlined" />
            
            <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateTimeField']}>
      <DateTimeField
          label="Expiration Date (MM/DD/YYYY)"
          value={timeValue}
          onChange={(timeValue) => setValue(timeValue)}
        />
        
      </DemoContainer>
    </LocalizationProvider>
      

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