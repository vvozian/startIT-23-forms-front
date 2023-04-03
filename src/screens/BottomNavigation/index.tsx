import * as React from 'react';
import  { Box, BottomNavigation, BottomNavigationAction } from '@mui/material';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentity';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Home" icon={<HomeOutlinedIcon />} />
        <BottomNavigationAction label="Profile" icon={<PermIdentityOutlinedIcon />} />
      </BottomNavigation>
    </Box>
  );
}
