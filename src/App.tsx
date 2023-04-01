import {LoginScreen} from "./screens/LoginScreen";
import {QuestionScreen} from "./screens/QuestionScreen";
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import {HomeListView} from "./screens/HomeListView";
import {createMemoryRouter, redirect, RouterProvider} from "react-router-dom";
import {NavigationProvider} from "./Providers/NavigationProvider";

const theme = createTheme();

export const App = () => {

    return <>
        <ThemeProvider theme={theme}>
            <NavigationProvider routes={{
            'home': <HomeListView />,
            'login': <LoginScreen />}
            } />
        </ThemeProvider>
    </>
}