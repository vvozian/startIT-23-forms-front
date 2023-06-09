import {useCallback, useContext, useMemo} from "react";
import {InternationalizationContext, SupportedLocales} from "../../Providers/InternationalizationProvider";
import {getLocaleTranslations} from "../../utils/getLocaleTranslations";


export const useInternationalization = () => {
    const {locale, setLocale, wasStoredLocally} = useContext(InternationalizationContext);

    const bundle = useMemo(() => {
        return getLocaleTranslations(locale)
    }, [locale])

    const i = useCallback((token: string) => {
        return bundle[token] || token
    }, [bundle])

    return {i, setLocale, wasStoredLocally}
}