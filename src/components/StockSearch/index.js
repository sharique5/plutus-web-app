import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export const StockSearch = ({ selectedStock = "", setSelectedStock }) => {
    return (
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={top100Films}
            sx={{ width: 300 }}
            value={selectedStock}
            onChange={(_, val) => setSelectedStock(val)}
            renderInput={(params) => <TextField {...params} label="Stock to predict" />}
        />
    )
}

const top100Films = [
    { label: 'State Bank of India', code: "SBIN" },
    { label: 'Indusind Bank Ltd', code: "INDUSINDBK" },
    { label: 'HDFC Bank Limited', code: "HDFCBANK" },
    { label: 'ICICI Bank Ltd', code: "ICICIBANK" },
    { label: 'Axis Bank Ltd', code: "AXISBANK" },
    { label: "Kotak Mahindra Bank Ltd", code: "KOTAKBANK" },
    { label: 'AU Small Finance Bank Ltd', code: "AUBANK" },
    {
      label: 'Bank of Baroda Ltd',
      code: "BANKBARODA",
    },
    { label: 'Federal Bank Ltd', code: "FEDERALBNK" },
    { label: 'Bandhan Bank Ltd', code: "BANDHANBNK" },
];
