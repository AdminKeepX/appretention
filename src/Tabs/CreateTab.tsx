import { useState } from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { FieldSectionType, FieldSelectedSections } from '@mui/x-date-pickers/models';
import { DateField } from '@mui/x-date-pickers/DateField';
import ContentContainer from "../components/ContentContainer";

const CreateTab: React.FC = () => {
    const [amount, setAmount] = useState(10);
    const [selectedContract, setSelectedContract] = useState("");

    const handleChangeAmount = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAmount(Number(event.target.value));
    };

    const handleChangeContract = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedContract(event.target.value);
    };

    const [selectedSections, setSelectedSections] =
    React.useState<FieldSelectedSections>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const setSelectedSectionType = (selectedSectionType: FieldSectionType) => {
    inputRef.current?.focus();
    setSelectedSections(selectedSectionType);
  };

    return (
      <ContentContainer>
        <Stack spacing={2}>
            <TextField
                id="outlined-number"
                label="Amount of Ton"
                type="number"
                value={amount}
                onChange={handleChangeAmount}
            />
            <TextField id="outlined-basic" label="Secret" variant="outlined" />
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
      <Stack spacing={2}>
        <Stack direction="row" spacing={2}>
          <Button variant="outlined" onClick={() => setSelectedSectionType('month')}>
            Month
          </Button>
          <Button variant="outlined" onClick={() => setSelectedSectionType('day')}>
            Day
          </Button>
          <Button variant="outlined" onClick={() => setSelectedSectionType('year')}>
            Year
          </Button>
        </Stack>
        <DateField
          inputRef={inputRef}
          selectedSections={selectedSections}
          onSelectedSectionsChange={setSelectedSections}
        />
      </Stack>
    </LocalizationProvider>
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
