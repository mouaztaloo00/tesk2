import React from 'react';
import { Switch, FormControlLabel } from '@mui/material';
import { useThemeContext } from '../context/ThemeContext';

function DarkModeSwitch() {
  const { darkMode, toggleDarkMode } = useThemeContext();

  return (
    <FormControlLabel
      control={<Switch checked={darkMode} onChange={toggleDarkMode} />}
      label="Dark Mode"
    />
  );
}

export default DarkModeSwitch;
