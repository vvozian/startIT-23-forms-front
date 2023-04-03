import {useInternationalization} from "../../hooks/useInternationalization";
import {useNavigation} from "../../hooks/useNavigation";
import {Button, Container, Link, Stack, Typography} from "@mui/material";
import {BasicTopBar, IBasicTopBarAction} from "../../components/BasicTopBar";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DescriptionIcon from '@mui/icons-material/Description';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import {useQuery} from "@apollo/client";
import {GET_ACTIVE_FORM} from "../HomeScreen/queries";

export const ReadyFormScreen = () => {
    const {i} = useInternationalization();
    const {params: {archivedFormId}, goToScreen} = useNavigation();

    const goBackAction: IBasicTopBarAction = {
        icon: <ArrowBackIcon/>,
        onClick: () => goToScreen('home')
    }

    const infoAction: IBasicTopBarAction = {
        icon: <InfoOutlinedIcon />,
        onClick: () => goToScreen('formMain')
    }

    return <Container maxWidth={false}>
        <Stack direction="column" justifyContent="space-between" spacing={2} height="100vh" pb={2}>
            <BasicTopBar leftAction={goBackAction} rightAction={infoAction} title={archivedFormId}/>
            <Stack direction="column" alignItems={"center"}>
                <DescriptionIcon sx={{fontSize: 200}} color="primary"/>
                <Typography variant="h4">F-1281</Typography>
            </Stack>
            <Stack direction="column">
                <Button variant="contained" LinkComponent={Link} href={'https://www.kub-berlin.org/images/formularprojekt/pdf/AlgII_en_2022-08-01.pdf'}>{i('action:download')}</Button>
            </Stack>
        </Stack>
    </Container>
}