import React from 'react';
import { Box, Typography } from '@mui/material';
import Sidebar from '../components/Sidebar';

function Reports() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant="h4" gutterBottom>Reports</Typography>
      </Box>
    </Box>
  );
}

export default Reports;
