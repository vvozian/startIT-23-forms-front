import {useInternationalization} from "../../hooks/useInternationalization";
import {useNavigation} from "../../hooks/useNavigation";
import {Button, Container, Stack, Typography} from "@mui/material";
import {BasicTopBar, IBasicTopBarAction} from "../../components/BasicTopBar";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DescriptionIcon from '@mui/icons-material/Description';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export const ReadyFormScreen = () => {
    const {i} = useInternationalization();
    const {params: {formFillId}, goToScreen} = useNavigation();

    const goBackAction: IBasicTopBarAction = {
        icon: <ArrowBackIcon/>,
        onClick: () => goToScreen('home')
    }

    const infoAction: IBasicTopBarAction = {
        icon: <InfoOutlinedIcon />,
        onClick: () => goToScreen('formMain')
    }

    return <Container maxWidth={false}>
        <Stack direction="column" justifyContent="space-between" spacing={2} height="100vh" pb={2}>
            <BasicTopBar leftAction={goBackAction} rightAction={infoAction} title={i('noun:completedForm')}/>
            <Stack direction="column" alignItems={"center"}>
                <DescriptionIcon sx={{fontSize: 200}} color="primary"/>
                <Typography variant="h4">F-1281</Typography>
            </Stack>
            <Stack direction="column">
                <Button variant="contained">{i('action:download')}</Button>
            </Stack>
        </Stack>
    </Container>
}