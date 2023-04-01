import {useInternationalization} from "../../hooks/useInternationalization";
import {Button, Container, Stack, TextField} from "@mui/material";
import {useNavigation} from "../../hooks/useNavigation";

export const LoginScreen = () => {
    const {i} = useInternationalization()
    const nav = useNavigation();


    return <Container maxWidth={false}>
        <Stack direction="column" justifyContent="center" spacing={2} minHeight="100vh" py={5}>
            <TextField size="small" label={i('noun:email')}/>
            <TextField size="small" label={i('noun:password')} type="password"/>
            <Button variant="contained" onClick={() => nav.goToScreen('home')}>{i('action:login')}</Button>
            <Button>{i('action:register')}</Button>
        </Stack>
    </Container>
}