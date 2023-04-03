import { useInternationalization } from "../../hooks/useInternationalization";
import { Button, Container, Stack, Grid, List, ListItem } from "@mui/material";
import {useNavigation} from "../../hooks/useNavigation";
import { BasicTopBar, IBasicTopBarAction } from "../../components/BasicTopBar";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LanguageIcon from '@mui/icons-material/Language';

export const ProfileScreen = () => {
    const {i} = useInternationalization();
    const {params: {applicationId, applicationProcessId}, goToScreen} = useNavigation();

    const goBackAction: IBasicTopBarAction = {
        icon: <ArrowBackIcon />,
        onClick: () => goToScreen('home')
    }

    const goChangeLanguage: IBasicTopBarAction = {
        icon: <LanguageIcon />,
        onClick: () => goToScreen('language')
    }    

    return <Container maxWidth={false}>
        <Stack direction="column" justifyContent="center" spacing={2} minHeight="100vh" py={5}>
            <BasicTopBar leftAction={goBackAction} rightAction={goChangeLanguage}/>
            <Container className="title">{i('action:profile')}</Container>
            <br/><br/><br/>
            <List>
                <ListItem>
                    <Grid container spacing={2}>
                        <Grid item xs={5}>
                            <Container>{i('noun:IDnumber')}</Container>
                        </Grid>
                        <Grid item xs="auto">
                            <Container>variable width content</Container>
                        </Grid>               
                    </Grid>
                </ListItem>
                <ListItem>
                    <Grid container spacing={2}>
                        <Grid item xs={5}>
                            <Container>{i('noun:names')}</Container>
                        </Grid>
                        <Grid item xs="auto">
                            <Container>variable width content</Container>
                        </Grid>               
                    </Grid>
                </ListItem>
                <ListItem>
                    <Grid container spacing={2}>
                        <Grid item xs={5}>
                            <Container>{i('noun:surname')}</Container>
                        </Grid>
                        <Grid item xs="auto">
                            <Container>variable width content</Container>
                        </Grid>               
                    </Grid>
                </ListItem>
                <ListItem>
                    <Grid container spacing={1}>
                        <Grid item xs={5.1}>
                            <Container>{i('noun:birthdate')}</Container>
                        </Grid>
                        <Grid item xs="auto">
                            <Container>01.01.2000</Container>
                        </Grid>               
                    </Grid>
                </ListItem>
                <ListItem>
                    <Grid container spacing={2}>
                        <Grid item xs={5}>
                            <Container>{i('noun:country')}</Container>
                        </Grid>
                        <Grid item xs="auto">
                            <Container>variable width content</Container>
                        </Grid>               
                    </Grid>
                </ListItem>
                <ListItem>
                    <Grid container spacing={2}>
                        <Grid item xs={5}>
                            <Container>{i('noun:city')}</Container>
                        </Grid>
                        <Grid item xs="auto">
                            <Container>variable width content</Container>
                        </Grid>               
                    </Grid>
                </ListItem>
                <ListItem>
                    <Grid container spacing={2}>
                        <Grid item xs={5}>
                            <Container>{i('noun:street-number')}</Container>
                        </Grid>
                        <Grid item xs="auto">
                            <Container>variable width content</Container>
                        </Grid>               
                    </Grid>
                </ListItem>
                <ListItem>
                    <Grid container spacing={2}>
                        <Grid item xs={5}>
                            <Container>{i('noun:zipcode')}</Container>
                        </Grid>
                        <Grid item xs="auto">
                            <Container>variable width content</Container>
                        </Grid>               
                    </Grid>
                </ListItem>
                <ListItem>
                    <Grid container spacing={1}>
                        <Grid item xs={5.1}>
                            <Container>{i('noun:phone')}</Container>
                        </Grid>
                        <Grid item xs="auto">
                            <Container>variable width content</Container>
                        </Grid>               
                    </Grid>
                </ListItem>
                <ListItem>
                    <Grid container spacing={2}>
                        <Grid item xs={5}>
                            <Container>{i('noun:email')}</Container>
                        </Grid>
                        <Grid item xs="auto">
                            <Container>variable width content</Container>
                        </Grid>               
                    </Grid>
                </ListItem>
                <ListItem>
                    <Grid container spacing={2}>
                        <Grid item xs={5}>
                            <Container>{i('noun:password')}</Container>
                        </Grid>
                        <Grid item xs="auto">
                            <Container>variable width content</Container>
                        </Grid>               
                    </Grid>
                </ListItem>
            </List>
            <Button variant="contained" onClick={() => goToScreen('edit')}>{i('action:edit')}</Button>
        </Stack>
    </Container>
}