import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import Sidebar from '../components/Sidebar';

function Dashboard() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant="h4" gutterBottom>
          Dashboard
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 3, 
            '& > div': {
              flex: '1 1 calc(25% - 24px)', 
              minWidth: 200, 
            },
          }}
        >
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Total Sales</Typography>
            <Typography variant="h4">$50,000</Typography>
          </Paper>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Total Orders</Typography>
            <Typography variant="h4">120</Typography>
          </Paper>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Total Customers</Typography>
            <Typography variant="h4">200</Typography>
          </Paper>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Products in Stock</Typography>
            <Typography variant="h4">500</Typography>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}

export default Dashboard;
