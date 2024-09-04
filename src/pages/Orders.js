// src/pages/Orders.js
import React from 'react';
import { Box, Typography } from '@mui/material';
import Sidebar from '../components/Sidebar';

function Orders() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant="h4" gutterBottom>Orders</Typography>
      </Box>
    </Box>
  );
}

export default Orders;
