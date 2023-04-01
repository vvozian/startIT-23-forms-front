import {useContext} from "react";
import {RouterContext} from "../../Providers/NavigationProvider";

export const useNavigation = () => {
    const {route, goToScreen, params} = useContext(RouterContext);

    return {route, goToScreen, params}
}