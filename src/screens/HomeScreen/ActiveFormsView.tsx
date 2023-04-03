import {Divider, List, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import GradingIcon from '@mui/icons-material/Grading';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import {useInternationalization} from "../../hooks/useInternationalization";
import {useNavigation} from "../../hooks/useNavigation";

export const ActiveFormsView = () => {
    const {i} = useInternationalization();
    const {goToScreen} = useNavigation();

    return <List>
        <ListItemButton onClick={() => goToScreen('applicationChecklist', {
            applicationId: '213120213120312-123-12-123',
            applicationProcessId: '23431-21312'
        })}>
            <ListItemIcon>
                <GradingIcon/>
            </ListItemIcon>
            <ListItemText primary="Work permit application" secondary="#110319312 | 10%"/>
        </ListItemButton>
        <Divider variant="fullWidth" component="li"/>
        <ListItemButton onClick={() => goToScreen('activeForm', {formId: 'F-21312', formProcessId: '110319312'})}>
            <ListItemIcon>
                <DocumentScannerIcon/>
            </ListItemIcon>
            <ListItemText primary="F-21312" secondary="#110319312 | 10%"/>
        </ListItemButton>
        <Divider variant="fullWidth" component="li"/>
        <ListItemButton>
            <ListItemIcon>
                <DocumentScannerIcon/>
            </ListItemIcon>
            <ListItemText primary="F-332" secondary="#110319312 | 10%"/>
        </ListItemButton>
        <Divider variant="fullWidth" component="li"/>
        <ListItemButton>
            <ListItemIcon>
                <GradingIcon/>
            </ListItemIcon>
            <ListItemText primary="Visa application" secondary="#110319312 | 10%"/>
        </ListItemButton>
        <Divider variant="fullWidth" component="li"/>
        <ListItemButton>
            <ListItemIcon>
                <DocumentScannerIcon/>
            </ListItemIcon>
            <ListItemText primary="F-23" secondary="#110319312 | 10%"/>
        </ListItemButton>
    </List>
}