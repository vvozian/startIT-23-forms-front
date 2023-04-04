import {useInternationalization} from "../../hooks/useInternationalization";
import {Button, Container, Stack, TextField} from "@mui/material";
import {useNavigation} from "../../hooks/useNavigation";
import { BasicTopBar, IBasicTopBarAction } from "../../components/BasicTopBar";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export const RegisterScreen = () => {
    const {i} = useInternationalization();
    const { goToScreen } = useNavigation();

    const goBackAction: IBasicTopBarAction = {
        icon: <ArrowBackIcon />,
        onClick: () => goToScreen('login')
    }

    return <Container maxWidth={false} sx={{pb: 9}}>
        <Stack direction="column" justifyContent="center" spacing={2} minHeight="100vh" py={5}>
            <BasicTopBar leftAction={goBackAction} />
            <Container className="title">{i('noun:reg')}</Container>
            <br/><br/><br/>
            <TextField size="small" label={i('noun:IDnumber')}/>
            <TextField size="small" label={i('noun:names')}/>
            <TextField size="small" label={i('noun:surname')}/>
            <TextField size="small" label={i('noun:birthdate')} InputLabelProps={{ shrink: true }} type="date"/>
            <TextField size="small" label={i('noun:country')}/>
            <TextField size="small" label={i('noun:city')}/>
            <TextField size="small" label={i('noun:street-number')}/>
            <TextField size="small" label={i('noun:zipcode')}/>
            <TextField size="small" label={i('noun:phone')} type="tel"/>
            <TextField size="small" label={i('noun:email')} type="email"/>
            <TextField size="small" label={i('noun:password')} type="password"/>
            <TextField size="small" label={i('noun:confirm')} type="password"/>
            <br/><br/>
            <Button variant="contained" onClick={() => goToScreen('login')}>{i('action:register')}</Button>
        </Stack>
    </Container>
}   