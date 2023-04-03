import {Divider, List, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import GradingIcon from '@mui/icons-material/Grading';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import {useInternationalization} from "../../hooks/useInternationalization";
import {useNavigation} from "../../hooks/useNavigation";
import {useQuery} from "@apollo/client";
import {GET_ALL_FORMS, GET_ARCHIVED_FORMS} from "./queries";

export const ArchiveFormsView = () => {
    const {i} = useInternationalization();
    const {goToScreen} = useNavigation();

    const {data, loading} = useQuery(GET_ARCHIVED_FORMS);

    return <List>
        {data?.archivedForms?.map((archivedForm: any) => {
            return <><ListItemButton onClick={() => goToScreen('completeForm', {formId: archivedForm.form.formId, archivedFormId: archivedForm.id})}>
                <ListItemIcon>
                    <DocumentScannerIcon/>
                </ListItemIcon>
                <ListItemText primary={archivedForm.form.formId} secondary={`#${archivedForm.id}`}/>
            </ListItemButton>
                <Divider variant="fullWidth" component="li"/>
            </>
        })}
    </List>

}