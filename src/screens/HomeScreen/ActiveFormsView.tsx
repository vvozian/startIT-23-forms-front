import {Divider, List, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import GradingIcon from '@mui/icons-material/Grading';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import {useInternationalization} from "../../hooks/useInternationalization";
import {useNavigation} from "../../hooks/useNavigation";
import {useQuery} from "@apollo/client";
import {GET_ACTIVE_FORMS} from "./queries";

export const ActiveFormsView = () => {
    const {i} = useInternationalization();
    const {goToScreen} = useNavigation();

    const {data} = useQuery(GET_ACTIVE_FORMS);

    return <List>

        {data?.activeForms?.map((activeForm: any) => {
            return <><ListItemButton onClick={() => goToScreen('activeForm', {formId: activeForm.form.formId, formProcessId: activeForm.id})}>
                <ListItemIcon>
                    <DocumentScannerIcon/>
                </ListItemIcon>
                <ListItemText primary={activeForm.form.formId} secondary={`#${activeForm.id} | ${activeForm.progress}%`}/>
            </ListItemButton>
                <Divider variant="fullWidth" component="li"/>
            </>
        })}
    </List>
}