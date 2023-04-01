import {SupportedLocales} from "./index";

export const detectLocale: () => SupportedLocales = () => {
    const locales = window.navigator.languages;

    console.log(">>>", locales)


    for (let locale of locales) {
        if (/^ar\b/.test(locale)) return SupportedLocales.AR;
        if (/^fa\b/.test(locale)) return SupportedLocales.FA;
        if (/^ru\b/.test(locale)) return SupportedLocales.RU;
        if (/^en\b/.test(locale)) return SupportedLocales.EN;
        if (/^tr\b/.test(locale)) return SupportedLocales.TR;
        if (/^ro\b/.test(locale)) return SupportedLocales.RO;
        if (/^es\b/.test(locale)) return SupportedLocales.ES;
        if (/^ti\b/.test(locale)) return SupportedLocales.TI;
        if (/^pl\b/.test(locale)) return SupportedLocales.PL;
        if (/^nl\b/.test(locale)) return SupportedLocales.NL;
        if (/^pt\b/.test(locale)) return SupportedLocales.PT;
        if (/^de\b/.test(locale)) return SupportedLocales.DE;
    }

    return SupportedLocales.EN
}