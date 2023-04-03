import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import {LoginScreen} from "./screens/LoginScreen";
import {createTheme, ThemeProvider} from "@mui/material";
import {HomeScreen} from "./screens/HomeScreen";
import {NavigationProvider} from "./Providers/NavigationProvider";
import {InternationalizationProvider} from "./Providers/InternationalizationProvider";
import {ApplicationChecklistScreen} from "./screens/ApplicationChecklistScreen";
import {FormMainScreen} from "./screens/FormMainScreen";
import {ActiveFormScreen} from "./screens/ActiveFormScreen";
import {QuestionScreen} from "./screens/QuestionScreen";
import {WelcomeScreen} from "./screens/WelcomeScreen";
import {LanguageScreen} from "./screens/LanguageScreen";
import {RegisterScreen} from "./screens/RegisterScreen";
import {ReadyFormScreen} from "./screens/ReadyFormScreen";

const theme = createTheme();
const client = new ApolloClient({
    uri: 'http://192.168.45.194:4000',
    cache: new InMemoryCache(),
});

export const App = () => {

    return <>

        <ApolloProvider client={client}>
            <ThemeProvider theme={theme}>
                <InternationalizationProvider>
                    <NavigationProvider routes={{
                        'home': <HomeScreen/>,
                        'login': <LoginScreen/>,
                        'register': <RegisterScreen/>,
                        'applicationChecklist': <ApplicationChecklistScreen/>,
                        'formMain': <FormMainScreen/>,
                        'activeForm': <ActiveFormScreen/>,
                        'completedForm': <ReadyFormScreen/>,
                        'question': <QuestionScreen/>,
                        'welcome': <WelcomeScreen/>,
                        'language': <LanguageScreen/>
                    }
                    }/>
                </InternationalizationProvider>
            </ThemeProvider>
        </ApolloProvider>
    </>
}