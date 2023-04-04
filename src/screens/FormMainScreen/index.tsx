import {useInternationalization} from "../../hooks/useInternationalization";
import {useNavigation} from "../../hooks/useNavigation";
import {Button, Container, Stack, Typography} from "@mui/material";
import {BasicTopBar, IBasicTopBarAction} from "../../components/BasicTopBar";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DescriptionIcon from '@mui/icons-material/Description';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export const FormMainScreen = () => {
    const {i} = useInternationalization();
    const {params: {formId}, goToScreen} = useNavigation();

    const goBackAction: IBasicTopBarAction = {
        icon: <ArrowBackIcon/>,
        onClick: () => goToScreen('home')
    }

    return <Container maxWidth={false} sx={{pb: 6}}>
        <Stack direction="column" justifyContent="space-between" spacing={2} height="100vh" pb={2}>
            <BasicTopBar leftAction={goBackAction} title={"Form"}/>
            <Stack direction="column" alignItems={"center"}>
                <DescriptionIcon sx={{fontSize: 200}} color="primary"/>
                <Typography variant="h4">{formId}</Typography>
            </Stack>
            <Stack direction="column">
                <Button>{i('noun:aboutTheForm')}</Button>
                <Button>{i('noun:translation')}</Button>
                <Button variant="contained">{i('action:startFillingTheForm')}</Button>
            </Stack>
        </Stack>
    </Container>
}