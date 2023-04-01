import "C:/StartIT/src/App.css"
import {Button, Container, Stack, TextField, Typography} from "@mui/material";
import {useInternationalization} from "../../hooks/useInternationalization";
import {useNavigation} from "../../hooks/useNavigation";
import { useEffect } from "react";

export const WelcomeScreen = () => {
    const { i } = useInternationalization();
    const {goToScreen} = useNavigation();

    useEffect(() => {
        const redirectTimer = setTimeout(() => {
            goToScreen('language');
        }, 3000);
        
        return () => clearTimeout(redirectTimer);
    }, []);

    return (
        <Container maxWidth = {false}>
            <Stack direction="column" justifyContent="center" spacing={2} minHeight="100vh" py={5}>
                <img src="./easyberlinlogo.png" className="logo-center" alt="EasyBerlin Logo" width="350" height="440" />
                <Container className="name-center">
                    <h1>EasyBerlin</h1>
                </Container>
            </Stack>
        </Container>
    );
};