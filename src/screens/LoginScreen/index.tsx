import {useInternationalization} from "../../hooks/useInternationalization";
import {Button, Container, Stack, TextField} from "@mui/material";
import {useNavigation} from "../../hooks/useNavigation";

export const LoginScreen = () => {
    const {i} = useInternationalization();
    const {goToScreen} = useNavigation();


    return <Container maxWidth={false}>
        <Stack direction="column" justifyContent="center" spacing={2} minHeight="100vh" py={5}>
            <Container className="title">{i('noun:log')}</Container>
            <br/><br/><br/>
            <TextField size="small" label={i('noun:email')}/>
            <TextField size="small" label={i('noun:password')} type="password"/>
            <br/><br/>
            <Button variant="contained" onClick={() => goToScreen('home')}>{i('action:login')}</Button>
            <Button onClick={() => goToScreen('register')}>{i('action:register')}</Button>
            <Button onClick={() => goToScreen('profile')}>{i('action:profile')}</Button>

        </Stack>
    </Container>
}