import {createContext, PropsWithChildren, ReactNode, useCallback, useState} from "react";

interface INavigationProvider extends PropsWithChildren {
    routes: { [key: string]: ReactNode }
}

export const RouterContext = createContext({});

export const NavigationProvider = ({children, routes}: INavigationProvider) => {
    const [route, setRoute] = useState<string | null>('login');

    const goToScreen = useCallback((screen: string) => {
        if (routes[screen]) setRoute(screen)
    }, [setRoute])

    const value = {
        route,
        goToScreen
    }

    return <RouterContext.Provider value={value}>
        {route && routes[route]}
    </RouterContext.Provider>
};