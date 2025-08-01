import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function MultilineTextFields() {
  return (
    <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '75ch' } }}
      noValidate
      autoComplete="off"
    >

      <div>
        <TextField
          id="standard-multiline-static"
          multiline
          rows={2}
          
          variant="standard"
           />

      </div>
    </Box>
  );
}
