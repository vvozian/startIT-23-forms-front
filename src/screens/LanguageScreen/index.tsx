import "C:/StartIT/src/App.css"
import {useInternationalization} from "../../hooks/useInternationalization";
import {Button, Container, Stack, TextField} from "@mui/material";
import {useNavigation} from "../../hooks/useNavigation";

export const LanguageScreen = () => {
    const {i} = useInternationalization();
    const {goToScreen} = useNavigation();


    return <Container maxWidth={false}>
        <Stack direction="column" justifyContent="center" spacing={2} minHeight="100vh" py={5}>
            <Container className="title">{i('noun:language')}</Container>
            <br/><br/><br/>
            <Button onClick={() => goToScreen('login')}>{i('action:english')}</Button>
            <Button onClick={() => goToScreen('login')}>{i('action:polish')}</Button>
            <Button onClick={() => goToScreen('login')}>{i('action:german')}</Button>
            <Button onClick={() => goToScreen('login')}>{i('action:portuguese')}</Button>
            <Button onClick={() => goToScreen('login')}>{i('action:russian')}</Button>
        </Stack>
    </Container>
}