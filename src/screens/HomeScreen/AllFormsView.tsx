import {Divider, List, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import {useInternationalization} from "../../hooks/useInternationalization";
import {useNavigation} from "../../hooks/useNavigation";
import {useQuery} from "@apollo/client";
import {GET_ALL_FORMS} from "./queries";
import {LoadingOverlay} from "../../components/LoadingOverlay";

export const AllFormsView = () => {
    const {i} = useInternationalization();
    const {goToScreen} = useNavigation();

    const {data, loading} = useQuery(GET_ALL_FORMS);

    if (loading) return <LoadingOverlay/>

    return <List>
        {data?.allForms?.map((form: any) => {
            return <><ListItemButton
                onClick={() => goToScreen('formMain', {formId: 'F-21312', formProcessId: '110319312'})}>
                <ListItemIcon>
                    <DocumentScannerIcon/>
                </ListItemIcon>
                <ListItemText primary={form.formId} secondary={form.subtitle}/>
            </ListItemButton>
                <Divider variant="fullWidth" component="li"/>
            </>
        })}

    </List>
}