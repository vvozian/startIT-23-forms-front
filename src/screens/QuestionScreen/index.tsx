import {BasicTopBar, IBasicTopBarAction} from "../../components/BasicTopBar";
import {Button, Container, Stack, TextField, Typography} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import {useInternationalization} from "../../hooks/useInternationalization";

export const QuestionScreen = () => {
    const {i} = useInternationalization();

    const goBackAction: IBasicTopBarAction = {
        icon: <ArrowBackIcon />,
        onClick: () => console.log(">>> went back")
    }

    const infoAction: IBasicTopBarAction = {
        icon: <InfoOutlinedIcon />,
        onClick: () => console.log(">>> help")
    }

    return <Container>
        <Stack direction="column" justifyContent="space-between" spacing={2} minHeight="100vh" pb={2}>
            <BasicTopBar leftAction={goBackAction} rightAction={infoAction} title={"28%"}/>
            <Typography>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aspernatur error,
                exercitationem facilis hic, inventore ipsum iusto laboriosam magnam modi nulla perferendis tempora
                voluptatum? A deleniti in quas. Ducimus, voluptas!</Typography>
            <Stack direction="column" spacing={1}>
                <TextField size="small" placeholder={i('noun:yourAnswer')}/>
                <Button variant="contained">{i('noun:next')}</Button>
                <Button variant="text">{i('action:skipQuestion')}</Button>
            </Stack>
        </Stack>
    </Container>
}