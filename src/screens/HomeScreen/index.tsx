import {
    Container,
    Divider,
    IconButton,
    InputAdornment,
    List,
    ListItemButton, ListItemIcon,
    ListItemText,
    Stack,
    Tab,
    Tabs,
    TextField
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import ArchiveIcon from '@mui/icons-material/Archive';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import ListAltIcon from '@mui/icons-material/ListAlt';
import GradingIcon from '@mui/icons-material/Grading';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import {useInternationalization} from "../../hooks/useInternationalization";
import {useNavigation} from "../../hooks/useNavigation";

export const HomeScreen = () => {
    const {i} = useInternationalization();
    const {goToScreen} = useNavigation();

    return <Container maxWidth={false}>
        <Stack direction="column" justifyContent="start" spacing={2} height="100vh" py={2}>
            <Stack>
                <TextField placeholder={i('noun:search')} size="small" InputProps={{
                    endAdornment: <InputAdornment position="end">
                        <IconButton edge="end">
                            <SearchIcon/>
                        </IconButton>
                    </InputAdornment>
                }}/>
                <Tabs value={1} variant="scrollable" scrollButtons >
                    <Tab icon={<ListAltIcon/>} iconPosition="start" label={i('noun:allForms')} />
                    <Tab icon={<AutorenewIcon/>} iconPosition="start" label={i('noun:inProgress')}/>
                    <Tab icon={<ArchiveIcon/>} iconPosition="start" label={i('noun:archive')} />
                </Tabs>
                <List>
                    <ListItemButton onClick={() =>goToScreen('applicationChecklist', {applicationId: '213120213120312-123-12-123'})}>
                        <ListItemIcon >
                            <GradingIcon />
                        </ListItemIcon>
                        <ListItemText primary="Work permit application" secondary="10%"/>
                    </ListItemButton>
                    <Divider variant="fullWidth" component="li"/>
                    <ListItemButton onClick={() => goToScreen('activeForm')}>
                        <ListItemIcon >
                            <DocumentScannerIcon />
                        </ListItemIcon>
                        <ListItemText primary="F-21312" secondary="10%"/>
                    </ListItemButton>
                    <Divider variant="fullWidth" component="li"/>
                    <ListItemButton>
                        <ListItemIcon >
                            <DocumentScannerIcon />
                        </ListItemIcon>
                        <ListItemText primary="F-332" secondary="10%"/>
                    </ListItemButton>
                    <Divider variant="fullWidth" component="li"/>
                    <ListItemButton>
                        <ListItemIcon >
                            <GradingIcon />
                        </ListItemIcon>
                        <ListItemText primary="Visa application" secondary="10%"/>
                    </ListItemButton>
                    <Divider variant="fullWidth" component="li"/>
                    <ListItemButton>
                        <ListItemIcon >
                            <DocumentScannerIcon />
                        </ListItemIcon>
                        <ListItemText primary="F-23" secondary="10%"/>
                    </ListItemButton>
                </List>
            </Stack>
        </Stack>
    </Container>
}