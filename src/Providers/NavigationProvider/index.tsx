import {createContext, PropsWithChildren, ReactNode, useCallback, useState} from "react";

interface INavigationProvider extends PropsWithChildren {
    routes: { [key: string]: ReactNode }
}

export const RouterContext = createContext<{ route: string, params: { [key: string]: any }, goToScreen: (screen: string, params?: { [key: string]: any }) => void }>({
    route: 'login',
    params: {},
    goToScreen: () => {
    }
});

export const NavigationProvider = ({children, routes}: INavigationProvider) => {
    const [route, setRoute] = useState<string>('welcome');
    const [params, setParams] = useState<{ [key: string]: any }>({})

    const goToScreen = useCallback((screen: string, params?: { [key: string]: any }) => {
        if (routes[screen]) {
            setParams(params || {})
            setRoute(screen)
        }
    }, [setRoute])

    const value = {
        route,
        params,
        goToScreen
    }

    return <RouterContext.Provider value={value}>
        {route && routes[route]}
    </RouterContext.Provider>
};