import {BasicTopBar, IBasicTopBarAction} from "../../components/BasicTopBar";
import {Button, Container, Stack, TextField, Typography} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import {useInternationalization} from "../../hooks/useInternationalization";
import {useNavigation} from "../../hooks/useNavigation";

export const QuestionScreen = () => {
    const {i} = useInternationalization();
    const {goToScreen, params} = useNavigation();

    const goBackAction: IBasicTopBarAction = {
        icon: <ArrowBackIcon />,
        onClick: () => goToScreen('activeForm')
    }

    const infoAction: IBasicTopBarAction = {
        icon: <InfoOutlinedIcon />,
        onClick: () => console.log(">>> help")
    }

    const _devNextQuestion = () => goToScreen('question', {questionId: (params.questionId || 0)+1})

    return <Container>
        <Stack direction="column" justifyContent="space-between" spacing={2} minHeight="100vh" pb={2}>
            <BasicTopBar leftAction={goBackAction} rightAction={infoAction} title={"28%"}/>
            <Typography>This is a question with {params.questionId} id</Typography>
            <Stack direction="column" spacing={1}>
                <TextField size="small" placeholder={i('noun:yourAnswer')}/>
                <Button variant="contained" onClick={_devNextQuestion}>{i('noun:next')}</Button>
                <Button variant="text" onClick={_devNextQuestion}>{i('action:skipQuestion')}</Button>
            </Stack>
        </Stack>
    </Container>
}