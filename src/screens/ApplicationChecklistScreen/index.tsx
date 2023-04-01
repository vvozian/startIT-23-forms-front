import {useInternationalization} from "../../hooks/useInternationalization";
import {useNavigation} from "../../hooks/useNavigation";
import {
    Checkbox,
    Container,
    Divider,
    IconButton,
    InputAdornment,
    List, ListItem,
    ListItemButton,
    ListItemIcon, ListItemText,
    Stack,
    Tab,
    Tabs,
    TextField
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ListAltIcon from "@mui/icons-material/ListAlt";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import ArchiveIcon from "@mui/icons-material/Archive";
import GradingIcon from "@mui/icons-material/Grading";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import {BasicTopBar, IBasicTopBarAction} from "../../components/BasicTopBar";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export const ApplicationChecklistScreen = () => {
    const {i} = useInternationalization();
    const {params: {applicationId}, goToScreen} = useNavigation();

    const goBackAction: IBasicTopBarAction = {
        icon: <ArrowBackIcon />,
        onClick: () => goToScreen('home')
    }

    return <Container maxWidth={false}>
        <Stack direction="column" justifyContent="start" spacing={2} height="100vh" py={2}>
            <Stack>
                <BasicTopBar leftAction={goBackAction} title={"Work permit application"}/>
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
                    <ListItem>
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
                    <ListItem>
                        <ListItemIcon>
                            <Checkbox
                                edge="start"
                                tabIndex={-1}
                                disableRipple
                            />
                        </ListItemIcon>
                        <ListItemText primary="F-1241"/>
                    </ListItem>
                </List>
            </Stack>
        </Stack>
    </Container>
}