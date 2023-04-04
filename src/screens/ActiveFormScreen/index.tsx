import {useInternationalization} from "../../hooks/useInternationalization";
import {useNavigation} from "../../hooks/useNavigation";
import {Button, Container, Stack, Typography} from "@mui/material";
import {BasicTopBar, IBasicTopBarAction} from "../../components/BasicTopBar";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DescriptionIcon from '@mui/icons-material/Description';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export const ActiveFormScreen = () => {
    const {i} = useInternationalization();
    const {params: {formProcessId, formId}, goToScreen} = useNavigation();

    const goBackAction: IBasicTopBarAction = {
        icon: <ArrowBackIcon/>,
        onClick: () => goToScreen('home')
    }

    const infoAction: IBasicTopBarAction = {
        icon: <InfoOutlinedIcon/>,
        onClick: () => goToScreen('formMain', {formId})
    }

    return <Container maxWidth={false}>
        <Stack direction="column" justifyContent="space-between" spacing={2} height="100vh" pb={10}>
            <BasicTopBar leftAction={goBackAction} rightAction={infoAction} title={formProcessId}/>
            <Stack direction="column" alignItems={"center"}>
                <DescriptionIcon sx={{fontSize: 200}} color="primary"/>
                <Typography variant="h4">{formId}</Typography>
            </Stack>
            <Stack direction="column">
                <Button variant="contained" onClick={() => goToScreen('question', {activeFormContext: '123213123-123213123'})}>Continue filling</Button>
            </Stack>
        </Stack>
    </Container>
}