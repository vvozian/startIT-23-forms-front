import '../../App.css'
import {useInternationalization} from "../../hooks/useInternationalization";
import {Button, Container, Stack} from "@mui/material";
import {useNavigation} from "../../hooks/useNavigation";
import {useCallback} from "react";
import {SupportedLocales} from "../../Providers/InternationalizationProvider";

export const LanguageScreen = () => {
    const {i, setLocale, wasStoredLocally} = useInternationalization();
    const {goToScreen} = useNavigation();

    if (wasStoredLocally) goToScreen('home')

    const onLanguageChoice = useCallback((locale: SupportedLocales) => {
        setLocale(locale);
        localStorage.setItem('locale', locale);
        goToScreen('home');
    }, []);

    return <Container maxWidth={false}>
        <Stack direction="column" justifyContent="center" spacing={2} minHeight="100vh" py={5}>
            <Container className="title">{i('noun:language')}</Container>
            <br/><br/><br/>
            <Button onClick={() => onLanguageChoice(SupportedLocales.EN)}>{i('action:english')}</Button>
            <Button onClick={() => onLanguageChoice(SupportedLocales.PL)}>{i('action:polish')}</Button>
            <Button onClick={() => onLanguageChoice(SupportedLocales.DE)}>{i('action:german')}</Button>
            <Button onClick={() => onLanguageChoice(SupportedLocales.PT)}>{i('action:portuguese')}</Button>
            <Button onClick={() => onLanguageChoice(SupportedLocales.RU)}>{i('action:russian')}</Button>
        </Stack>
    </Container>
}