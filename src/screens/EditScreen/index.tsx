import {useInternationalization} from "../../hooks/useInternationalization";
import {Button, Container, Stack, TextField} from "@mui/material";
import {useNavigation} from "../../hooks/useNavigation";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { BasicTopBar, IBasicTopBarAction } from "../../components/BasicTopBar";

export const EditScreen = () => {
    const {i} = useInternationalization();
    const {params: {applicationId, applicationProcessId}, goToScreen} = useNavigation();

    const goBackAction: IBasicTopBarAction = {
        icon: <ArrowBackIcon />,
        onClick: () => goToScreen('profile')
    }

    return( <Container maxWidth={false}>
        <Stack direction="column" justifyContent="center" spacing={2} minHeight="100vh" py={5}> 
            <BasicTopBar leftAction={goBackAction} />
            <Container className="title">{i('noun:edit')}</Container>
            <br/><br/><br/>
            <TextField size="small" label={i('noun:IDnumber')}/>
            <TextField size="small" label={i('noun:names')}/>
            <TextField size="small" label={i('noun:surname')}/>
            <TextField size="small" label={i('noun:birthdate')}  InputLabelProps={{ shrink: true }} type="date"/>
            <TextField size="small" label={i('noun:country')}/>
            <TextField size="small" label={i('noun:city')}/>
            <TextField size="small" label={i('noun:street-number')}/>
            <TextField size="small" label={i('noun:zipcode')}/>
            <TextField size="small" label={i('noun:phone')} type="tel"/>
            <TextField size="small" label={i('noun:email')} type="email"/>
            <TextField size="small" label={i('noun:password')} type="password"/>
            <TextField size="small" label={i('noun:confirm')} type="password"/>
            <br/><br/>
            <Button variant="contained" onClick={() => goToScreen('profile')}>{i('action:edit')}</Button>
        </Stack>
    </Container>
    );
}   