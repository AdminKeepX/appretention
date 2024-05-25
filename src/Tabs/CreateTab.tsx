import { useEffect, useState } from 'react';

import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Box } from '@mui/material';
import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import ContentContainer from "../components/ContentContainer";
import { styled } from '@mui/system';

const FormRow = styled(Box)`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 16px;
`;

const MemoField = styled(TextField)`
width: 100px; /* Fixed width for 6 characters */
margin-left: 16px;
`;

const SecretField = styled(TextField)`
flex-grow: 1; /* Flexible width */
`;


const generateMemo = (): string => {
    // return "Hello"
    const now = Date.now();
    let updated = now - Math.floor(Math.random() * 1000);
    updated += Math.floor(Math.random() * 100);
    updated = updated % 1000000
    return updated.toString()
};

const generateAmountHelperText = (amount: number): string => {
    const total = amount + 1
    const comsa = amount * 0.03
    const storage = 0.05
    const gas = 0.1
    return `Amount is ${amount} will be stored on Contract. \nService commision is 3% = ${comsa} \nContract storage, gas for transcation) (included service commision, contract storage is ${storage} \n Total: ${total}) `;
  };

const CreateTab: React.FC = () => {

    const [amount, setAmount] = useState(10);
    const [selectedContract, setSelectedContract] = useState("");
    const [dateTime, setDateTime] = useState<Dayjs | null>(dayjs());
    const [amountHelperText, setAmountHelperText] = useState(generateAmountHelperText(amount));

    useEffect(() => {
        setMemo(generateMemo());
      }, []);

    const handleChangeAmount = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value, 10);
        if (value >= 5) {
            setAmount(value);
            setAmountHelperText(generateAmountHelperText(value));
          }
    };

    const handleChangeContract = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedContract(event.target.value);
    };

    const handleDateTimeChange = (newValue: Dayjs | null) => {
        setDateTime(newValue);
    };

    const handleSecretChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const regex = /^[a-zA-Z0-9!@#$%^&*()_+[\]{};':"\\|,.<>/?-]*$/;
        if (regex.test(value)) {
          setSecret(value);
        }
      };

    const [secret, setSecret] = useState('');
    const [memo, setMemo] = useState('');

    return (
      <ContentContainer>
        <Stack spacing={2}>
        <TextField
                fullWidth
                select
                label="Select Contract"
                value={selectedContract}
                onChange={handleChangeContract}
                margin="normal"
            >
                <MenuItem value="Contract 1">Contract 1</MenuItem>
                <MenuItem value="Contract 2">Contract 2</MenuItem>
                <MenuItem value="Contract 3">Contract 3</MenuItem>
            </TextField>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                    label="Select Date and Time"
                    value={dateTime}
                    onChange={handleDateTimeChange}
                    renderInput={(params) => <TextField {...params} fullWidth margin="normal" />}
                />
            </LocalizationProvider>            
            <FormRow>
                <SecretField
                    label="Secret"
                    variant="outlined"
                    value={secret}
                    onChange = { handleSecretChange }
                    inputProps={{ minLength: 16 }}
                    helperText={secret.length < 16 ? "Minimum length is 16 characters" : "A-z, 0-9 and symbols" }
                    error={secret.length < 16}
                />
                <MemoField
                    label="Memo"
                    variant="outlined"
                    value={memo}
                    InputProps={{
                        readOnly: true,
                    }}
                    helperText= "Required"
                />
            </FormRow>
                <TextField
                    id="outlined-number"
                    label="Amount of Ton"
                    type="number"
                    value={amount}
                    onChange={handleChangeAmount}
                    inputProps={{ min: 5 }}
                    helperText={amountHelperText}
                />
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
                Create
            </Button>
        </Stack>
      </ContentContainer>
    );
};

export default CreateTab;
