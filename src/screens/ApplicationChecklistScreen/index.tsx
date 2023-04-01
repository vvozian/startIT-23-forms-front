import {useInternationalization} from "../../hooks/useInternationalization";
import {useNavigation} from "../../hooks/useNavigation";
import {
    Checkbox,
    Container,
    Divider,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Stack
} from "@mui/material";
import {BasicTopBar, IBasicTopBarAction} from "../../components/BasicTopBar";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export const ApplicationChecklistScreen = () => {
    const {i} = useInternationalization();
    const {params: {applicationId, applicationProcessId}, goToScreen} = useNavigation();

    const goBackAction: IBasicTopBarAction = {
        icon: <ArrowBackIcon />,
        onClick: () => goToScreen('home')
    }

    return <Container maxWidth={false}>
        <Stack direction="column" justifyContent="start" spacing={2} height="100vh" pb={2}>
            <Stack>
                <BasicTopBar leftAction={goBackAction} title={`${applicationProcessId} | ${applicationId}`}/>
                <List disablePadding>
                    <ListItem>
                        <ListItemIcon>
                            <Checkbox
                                edge="start"
                                tabIndex={-1}
                                disableRipple
                            />
                        </ListItemIcon>
                        <ListItemText primary="ID"/>
                    </ListItem>
                    <Divider variant="fullWidth" component="li"/>
                    <ListItem>
                        <ListItemIcon>
                            <Checkbox
                                edge="start"
                                tabIndex={-1}
                                disableRipple
                            />
                        </ListItemIcon>
                        <ListItemText primary="Driver license"/>
                    </ListItem>
                    <Divider variant="fullWidth" component="li"/>
                    <ListItem>
                        <ListItemIcon>
                            <Checkbox
                                edge="start"
                                tabIndex={-1}
                                disableRipple
                            />
                        </ListItemIcon>
                        <ListItemText primary="Photo 2x3"/>
                    </ListItem>
                    <Divider variant="fullWidth" component="li"/>
                    <ListItem>
                        <ListItemIcon>
                            <Checkbox
                                edge="start"
                                tabIndex={-1}
                                disableRipple
                            />
                        </ListItemIcon>
                        <ListItemText primary="Birth certificate"/>
                    </ListItem>
                    <Divider variant="fullWidth" component="li"/>
                    <ListItem secondaryAction={
                        <IconButton edge="end" onClick={() => goToScreen('formMain', {formId: 'F-3311'})}>
                            <InfoOutlinedIcon />
                        </IconButton>
                    }>
                        <ListItemIcon>
                            <Checkbox
                                edge="start"
                                tabIndex={-1}
                                disableRipple
                            />
                        </ListItemIcon>
                        <ListItemText primary="F-3311"/>
                    </ListItem>
                    <Divider variant="fullWidth" component="li"/>
                    <ListItem secondaryAction={
                        <IconButton edge="end" onClick={() => goToScreen('formMain', {formId: 'F-1241'})}>
                            <InfoOutlinedIcon />
                        </IconButton>
                    }>
                        <ListItemIcon>
                            <Checkbox
                                edge="start"
                                tabIndex={-1}
                                disableRipple
                            />
                        </ListItemIcon>
                        <ListItemText primary="F-1241" />
                    </ListItem>
                </List>
            </Stack>
        </Stack>
    </Container>
}