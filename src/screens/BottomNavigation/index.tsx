import * as React from 'react';
import  { Box, BottomNavigation, BottomNavigationAction } from '@mui/material';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentity';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { useNavigation } from "../../hooks/useNavigation";
import { useInternationalization } from '../../hooks/useInternationalization';

export default function SimpleBottomNavigation() {
  
    const [value, setValue] = React.useState(0);
    const {i} = useInternationalization();
    const { goToScreen } = useNavigation();
    
    return (
        <Box sx={(theme) => ({ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: theme.zIndex.appBar})}>
        <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
            setValue(newValue);
            }}
        >
            <BottomNavigationAction label={i('action:home')} icon={<HomeOutlinedIcon />} onClick={() => goToScreen('home')} />
            <BottomNavigationAction label={i('action:profile')} icon={<PermIdentityOutlinedIcon />} onClick={() => goToScreen('profile')} />
        </BottomNavigation>
        </Box>
  );
}
