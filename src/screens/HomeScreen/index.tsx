import {Container, IconButton, InputAdornment, Stack, Tab, Tabs, TextField} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import ArchiveIcon from '@mui/icons-material/Archive';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import ListAltIcon from '@mui/icons-material/ListAlt';
import {useInternationalization} from "../../hooks/useInternationalization";
import {useNavigation} from "../../hooks/useNavigation";
import {ActiveFormsView} from "./ActiveFormsView";
import {useMemo, useState} from "react";
import {AllFormsView} from "./AllFormsView";
import {ArchiveFormsView} from "./ArchiveFormsView";

enum FormListsView {
    All,
    Active,
    Archive
}

export const HomeScreen = () => {
    const {i} = useInternationalization();
    const {goToScreen, params: {homeTab}} = useNavigation();
    const [activeTab, setActiveTab] = useState<FormListsView>(FormListsView.Active);

    const ListView = useMemo(() => {
        switch (activeTab) {
            case FormListsView.All:
                return () => <AllFormsView/>;
            case FormListsView.Active:
                return () => <ActiveFormsView/>;
            case FormListsView.Archive:
                return () => <ArchiveFormsView/>;
        }
        return () => <ActiveFormsView/>
    }, [activeTab])

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
                <Tabs value={activeTab} variant="scrollable" scrollButtons onChange={(e, tab) => setActiveTab(tab)}>
                    <Tab value={FormListsView.All} icon={<ListAltIcon/>} iconPosition="start"
                         label={i('noun:allForms')}/>
                    <Tab value={FormListsView.Active} icon={<AutorenewIcon/>} iconPosition="start"
                         label={i('noun:inProgress')}/>
                    <Tab value={FormListsView.Archive} icon={<ArchiveIcon/>} iconPosition="start"
                         label={i('noun:archive')}/>
                </Tabs>
                <ListView/>
            </Stack>
        </Stack>
    </Container>
}