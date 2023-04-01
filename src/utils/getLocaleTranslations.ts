import {SupportedLocales} from "../Providers/InternationalizationProvider";

const enLang: { [key: string]: string } = {
    'action:login': 'Login',
    'action:register': 'Register',
    'noun:email': "Email",
    'noun:password': "Password",
    'noun:search': "Search",
    'noun:allForms': "All forms",
    'noun:inProgress': "In progress",
    'noun:archive': 'Archive'
}

const plLang: { [key: string]: string } = {
    'action:login': 'Zaloguj się',
    'action:register': 'Zarejestruj się',
    'noun:email': "E-mail",
    'noun:password': "Hasło",
    'noun:search': "Szukaj",
    'noun:allForms': "Wszystkie formularze",
    'noun:inProgress': "W trakcie realizacji",
    'noun:archive': 'Archiwum'
}

const deLang: { [key: string]: string } = {
    'action:login': 'Anmelden',
    'action:register': 'Registrieren',
    'noun:email': "E-Mail",
    'noun:password': "Passwort",
    'noun:search': "Suche",
    'noun:allForms': "Alle Formulare",
    'noun:inProgress': "In Bearbeitung",
    'noun:archive': 'Archiv'
}

const ptLang: { [key: string]: string } = {
    'action:login': 'Entrar',
    'action:register': 'Registrar',
    'noun:email': "E-mail",
    'noun:password': "Senha",
    'noun:search': "Buscar",
    'noun:allForms': "Todos os formulários",
    'noun:inProgress': "Em progresso",
    'noun:archive': 'Arquivo'
}

const nlLang: { [key: string]: string } = {
    'action:login': 'Inloggen',
    'action:register': 'Registreren',
    'noun:email': "E-mail",
    'noun:password': "Wachtwoord",
    'noun:search': "Zoeken",
    'noun:allForms': "Alle formulieren",
    'noun:inProgress': "In uitvoering",
    'noun:archive': 'Archief'
}

const ruLang: { [key: string]: string } = {
    'action:login': 'Войти',
    'action:register': 'Зарегистрироваться',
    'noun:email': "Электронная почта",
    'noun:password': "Пароль",
    'noun:search': "Поиск",
    'noun:allForms': "Все формы",
    'noun:inProgress': "В работе",
    'noun:archive': 'Архив'
}

export const getLocaleTranslations = (locale: SupportedLocales) => {
    if (locale === SupportedLocales.EN) return enLang;
    if (locale === SupportedLocales.NL) return nlLang;
    if (locale === SupportedLocales.RU) return ruLang;
    if (locale === SupportedLocales.PL) return plLang;
    if (locale === SupportedLocales.PT) return ptLang;
    if (locale === SupportedLocales.DE) return deLang;
    return enLang
}