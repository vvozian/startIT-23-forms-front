import {useInternationalization} from "../../hooks/useInternationalization";
import {useNavigation} from "../../hooks/useNavigation";
import {Button, Container, Stack, Typography} from "@mui/material";
import {BasicTopBar, IBasicTopBarAction} from "../../components/BasicTopBar";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DescriptionIcon from '@mui/icons-material/Description';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import {useQuery} from "@apollo/client";
import {GET_ACTIVE_FORM} from "../HomeScreen/queries";
import {LoadingOverlay} from "../../components/LoadingOverlay";

export const ActiveFormScreen = () => {
    const {i} = useInternationalization();
    const {params: {formProcessId}, goToScreen} = useNavigation();

    const {data, loading} = useQuery(GET_ACTIVE_FORM, {variables: {id: formProcessId}});

    const goBackAction: IBasicTopBarAction = {
        icon: <ArrowBackIcon/>,
        onClick: () => goToScreen('home')
    }

    const infoAction: IBasicTopBarAction = {
        icon: <InfoOutlinedIcon/>,
        onClick: data?.activeForm?.form?.id ? () => goToScreen('formMain', {formId: data?.activeForm?.form?.id}) : () => null
    }

    if (loading) return <LoadingOverlay/>

    return <Container maxWidth={false}>
        <Stack direction="column" justifyContent="space-between" spacing={2} height="100vh" pb={2}>
            <BasicTopBar leftAction={goBackAction} rightAction={infoAction} title={`#${data?.activeForm?.id}`}/>
            <Stack direction="column" alignItems={"center"}>
                <DescriptionIcon sx={{fontSize: 200}} color="primary"/>
                <Typography variant="h4">{data?.activeForm?.form?.formId}</Typography>
            </Stack>
            <Stack direction="column">
                <Button variant="contained"
                        onClick={() => goToScreen('question', {
                            formProcessId: data?.activeForm?.id,
                            questionId: data?.activeForm?.nextQuestionId
                        })}>Continue
                    filling</Button>
            </Stack>
        </Stack>
    </Container>
}