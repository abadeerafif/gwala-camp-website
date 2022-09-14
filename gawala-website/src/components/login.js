import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Lggincom = () => {
  
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
     
      <div>
        <TextField
          required
          id="standard-required"
          label="Email"
          
          variant="standard"
        />
        <TextField
          required
          id="standard-required"
          label="Password"
          
          variant="standard"
        />
        <Button variant="contained">Login</Button>
       
      </div>
    </Box>
  )
}


export default Lggincom