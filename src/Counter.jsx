import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

// Creating the Counter component
const Counter = () => {
    const [count, setCount] = React.useState(0);

    const doIncrement = () => {
        setCount(count + 1);
    };

    const doDecrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    const doReset = () => {
        setCount(0);
    };

    return (
        <div>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh',backgroundColor:'#c4b5fd',width:'250vh'}}>
                <Box sx={{ border: '2px solid #9333ea', width: 800, height: 400, justifyContent: 'center', marginRight: 35, padding: 5,backgroundColor:'#c4b5fd' }}>
                    <Typography variant='h1' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 5, marginTop: 10 ,color:'#2e1065'}}>
                        {count}
                    </Typography>
                    <Stack direction="row" spacing={2} justifyContent={'center'} marginTop={20}>

                        <Button variant="contained" onClick={doIncrement} sx={{ backgroundColor: '#6d28d9', '&:hover': { backgroundColor: '#5a21b7',borderColor: '#5a21b7'} ,'&:active':{backgroundColor:'#7e22ce',borderColor: '#5a21b7'} }}>+</Button>
                        <Button variant="contained" onClick={doReset} sx={{ backgroundColor: '#6d28d9', '&:hover': { backgroundColor: '#5a21b7' } }}>RESET</Button>
                        <Button variant="contained" disabled={count === 0} onClick={doDecrement} sx={{ backgroundColor: '#6d28d9', '&:hover': { backgroundColor: '#5a21b7' } }}>-</Button>
                 
                    </Stack>
                </Box>
            </Box>
        </div>
    );
};

export default Counter;
