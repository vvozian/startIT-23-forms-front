import {createContext, PropsWithChildren, useState} from "react";
import {detectLocale} from "./detectLocale";

export const InternationalizationContext = createContext({});

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

export const InternationalizationProvider = ({children}: PropsWithChildren) => {
    const [locale, setLocale] = useState<SupportedLocales>(detectLocale())

    const value = {locale}

    return <InternationalizationContext.Provider value={value}>
        {children}
    </InternationalizationContext.Provider>
}