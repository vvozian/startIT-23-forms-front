import {useContext} from "react";
import {RouterContext} from "../../Providers/NavigationProvider";

export const useNavigation = () => {
    // @ts-ignore
    const {route, goToScreen} = useContext(RouterContext);

    return {route, goToScreen}
}