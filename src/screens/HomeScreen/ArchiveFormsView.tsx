import {Divider, List, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import GradingIcon from '@mui/icons-material/Grading';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import {useInternationalization} from "../../hooks/useInternationalization";
import {useNavigation} from "../../hooks/useNavigation";

export const ArchiveFormsView = () => {
    const {i} = useInternationalization();
    const {goToScreen} = useNavigation();

    return <List>
        <ListItemButton onClick={() => goToScreen('completedForm', {formId: 'F-21312', formProcessId: '110319312'})}>
            <ListItemIcon>
                <DocumentScannerIcon/>
            </ListItemIcon>
            <ListItemText primary="F-1231" secondary="#11021312"/>
        </ListItemButton>
        <Divider variant="fullWidth" component="li"/>
        <ListItemButton onClick={() => goToScreen('completedForm', {formId: 'F-21312', formProcessId: '110319312'})}>
            <ListItemIcon>
                <DocumentScannerIcon/>
            </ListItemIcon>
            <ListItemText primary="F-21312" secondary="#9201932"/>
        </ListItemButton>
    </List>
}