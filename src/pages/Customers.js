import React from 'react';
import { Box, Typography } from '@mui/material';
import Sidebar from '../components/Sidebar';

function Customers() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant="h4" gutterBottom>Customers</Typography>
      </Box>
    </Box>
  );
}

export default Customers;
