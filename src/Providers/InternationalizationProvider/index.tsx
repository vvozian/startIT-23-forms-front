import {createContext, PropsWithChildren, useCallback, useMemo, useState} from "react";
import {detectLocale} from "./detectLocale";

export enum SupportedLocales {
    AR = 'ar',
    FA = 'fa',
    RU = 'ru',
    EN = 'en',
    TR = 'tr',
    RO = 'ro',
    ES = 'es',
    TI = 'ti',
    PL = 'pl',
    NL = 'nl',
    PT = 'pt',
    DE = 'de'
}


type InternationalizationContextType = {
    locale: SupportedLocales;
    setLocale: (locale: SupportedLocales) => void;
    wasStoredLocally: boolean;
}

export const InternationalizationContext = createContext<InternationalizationContextType>({
    locale: SupportedLocales.EN,
    setLocale: () => null,
    wasStoredLocally: false
});

export const InternationalizationProvider = ({children}: PropsWithChildren) => {
    const initialLocale = useMemo(() => detectLocale(), []);
    const [locale, setLocale] = useState<SupportedLocales>(initialLocale.locale);

    const setStoredLocale = useCallback((newLocale: SupportedLocales) => {
        setLocale(newLocale);
    }, [])
    const value = {locale, setLocale: setStoredLocale, wasStoredLocally: initialLocale.wasStoredLocally}

    return <InternationalizationContext.Provider value={value}>
        {children}
    </InternationalizationContext.Provider>
}