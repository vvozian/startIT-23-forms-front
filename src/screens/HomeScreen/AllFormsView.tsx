import {Divider, List, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import GradingIcon from '@mui/icons-material/Grading';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import {useInternationalization} from "../../hooks/useInternationalization";
import {useNavigation} from "../../hooks/useNavigation";

export const AllFormsView = () => {
    const {i} = useInternationalization();
    const {goToScreen} = useNavigation();

    return <List>
        <ListItemButton onClick={() => goToScreen('formMain', {formId: 'F-21312', formProcessId: '110319312'})}>
            <ListItemIcon>
                <DocumentScannerIcon/>
            </ListItemIcon>
            <ListItemText primary="F-1231" secondary="Usually used for work permit"/>
        </ListItemButton>
        <Divider variant="fullWidth" component="li"/>
        <ListItemButton onClick={() => goToScreen('formMain', {formId: 'F-21312', formProcessId: '110319312'})}>
            <ListItemIcon>
                <DocumentScannerIcon/>
            </ListItemIcon>
            <ListItemText primary="F-21312" secondary="Very important form"/>
        </ListItemButton>
    </List>
}