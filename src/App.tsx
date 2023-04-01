import {LoginScreen} from "./screens/LoginScreen";
import {createTheme, ThemeProvider} from "@mui/material";
import {HomeScreen} from "./screens/HomeScreen";
import {NavigationProvider} from "./Providers/NavigationProvider";
import {InternationalizationProvider} from "./Providers/InternationalizationProvider";
import {ApplicationChecklistScreen} from "./screens/ApplicationChecklistScreen";
import {FormMainScreen} from "./screens/FormMainScreen";
import {ActiveFormScreen} from "./screens/ActiveFormScreen";
import {QuestionScreen} from "./screens/QuestionScreen";
import {ReadyFormScreen} from "./screens/ReadyFormScreen";

const theme = createTheme();

export const App = () => {

    return <>
        <ThemeProvider theme={theme}>
            <InternationalizationProvider>
                <NavigationProvider routes={{
                    'home': <HomeScreen/>,
                    'login': <LoginScreen/>,
                    'applicationChecklist': <ApplicationChecklistScreen/>,
                    'formMain': <FormMainScreen/>,
                    'activeForm': <ActiveFormScreen/>,
                    'question': <QuestionScreen/>,
                    'completedForm': <ReadyFormScreen/>
                }
                }/>
            </InternationalizationProvider>
        </ThemeProvider>
    </>
}