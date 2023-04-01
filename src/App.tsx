import {LoginScreen} from "./screens/LoginScreen";
import {QuestionScreen} from "./screens/QuestionScreen";
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import {HomeScreen} from "./screens/HomeScreen";
import {createMemoryRouter, redirect, RouterProvider} from "react-router-dom";
import {NavigationProvider} from "./Providers/NavigationProvider";
import {InternationalizationProvider} from "./Providers/InternationalizationProvider";
import {ApplicationChecklistScreen} from "./screens/ApplicationChecklistScreen";

const theme = createTheme();

export const App = () => {

    return <>
        <ThemeProvider theme={theme}>
            <InternationalizationProvider>
            <NavigationProvider routes={{
            'home': <HomeScreen />,
            'login': <LoginScreen />,
            'applicationChecklist': <ApplicationChecklistScreen />}
            } />
            </InternationalizationProvider>
        </ThemeProvider>
    </>
}