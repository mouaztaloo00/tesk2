import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Box, IconButton, Typography, Divider } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import DarkModeSwitch from './DarkModeSwitch';

function Sidebar() {
  const [open, setOpen] = useState(true);

  const handleToggleSidebar = () => {
    setOpen(!open);
  };

  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={true}
      sx={{
        width: open ? 240 : 60, 
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: open ? 240 : 60,
          boxSizing: 'border-box',
          backgroundColor: 'background.default',
          color: 'text.primary',
          borderRight: '1px solid',
          borderColor: 'divider',
          transition: 'width 0.3s', 
        },
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', p: 2, justifyContent: open ? 'space-between' : 'center' }}>
        {open ? (
          <Typography variant="h6">Menu</Typography>
        ) : null}
        <IconButton onClick={handleToggleSidebar}>
          {open ? <ChevronLeftIcon /> : <MenuIcon />}
        </IconButton>
      </Box>
      <Divider />
      <List>
        <ListItem button component={Link} to="/">
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          {open ? <ListItemText primary="Dashboard" /> : null}
        </ListItem>
        <ListItem button component={Link} to="/products">
          <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
          {open ? <ListItemText primary="Products" /> : null}
        </ListItem>
        <ListItem button component={Link} to="/orders">
          <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
          {open ? <ListItemText primary="Orders" /> : null}
        </ListItem>
        <ListItem button component={Link} to="/customers">
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          {open ? <ListItemText primary="Customers" /> : null}
        </ListItem>
        <ListItem button component={Link} to="/reports">
          <ListItemIcon>
            <BarChartIcon />
          </ListItemIcon>
          {open ? <ListItemText primary="Reports" /> : null}
        </ListItem>
      </List>
      <Box sx={{ mt: 'auto', p: 2 }}>
        <DarkModeSwitch />
      </Box>
    </Drawer>
  );
}

export default Sidebar;
