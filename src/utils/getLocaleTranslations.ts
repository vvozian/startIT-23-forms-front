import {SupportedLocales} from "../Providers/InternationalizationProvider";

const enLang: { [key: string]: string } = {
    'action:login': 'Log in',
    'action:register': 'Register',
    'action:polish': 'Polish',
    'action:english': 'English',
    'action:german': 'German',
    'action:portuguese': 'Portuguese',
    'action:nedeland': 'Dutch',
    'action:russian': 'Russian',
    'noun:log': 'Login',
    'noun:reg': 'Registration',
    'noun:language': 'Select language',
    'noun:email': "Email",
    'noun:password': "Password",
    'noun:confirm': 'Confirm password',
    'noun:search': "Search",
    'noun:allForms': "All forms",
    'noun:inProgress': "In progress",
    'noun:archive': 'Archive',
    'noun:IDnumber': 'ID number',
    'noun:names':'Names',
    'noun:surname': 'Surname',
    'noun:birthdate': 'Date of birth',
    'noun:country': 'Nationality',
    'noun:city': 'City',
    'noun:street-number': 'Street, number',
    'noun:zipcode': 'Zip code',
    'noun:phone': 'Phone number',
}

const deLang: { [key: string]: string } = {
    'action:login': 'Anmelden',
    'action:register': 'Registrieren',
    'action:polish': 'Polnisch',
    'action:english': 'Englisch',
    'action:german': 'Deutsch',
    'action:portuguese': 'Portugiesisch',
    'action:nedeland': 'Niederländisch',
    'action:russian': 'Russisch',
    'noun:log': 'Anmeldung',
    'noun:reg': 'Registrierung',
    'noun:language': 'Sprache auswählen',
    'noun:email': "E-Mail",
    'noun:password': "Passwort",
    'noun:confirm': 'Passwort bestätigen',
    'noun:search': "Suche",
    'noun:allForms': "Alle Formulare",
    'noun:inProgress': "In Bearbeitung",
    'noun:archive': 'Archiv',
    'noun:IDnumber': 'Ausweisnummer',
    'noun:names':'Vorname',
    'noun:surname': 'Nachname',
    'noun:birthdate': 'Geburtsdatum',
    'noun:country': 'Nationalität',
    'noun:city': 'Stadt',
    'noun:street-number': 'Straße, Hausnummer',
    'noun:zipcode': 'Postleitzahl',
    'noun:phone': 'Telefonnummer',
}

const plLang: { [key: string]: string } = {
    'action:login': 'Zaloguj się',
    'action:register': 'Zarejestruj się',
    'action:polish': 'Polski',
    'action:english': 'Angielski',
    'action:german': 'Niemiecki',
    'action:portuguese': 'Portugalski',
    'action:nedeland': 'Niderlandzki',
    'action:russian': 'Rosyjski',
    'noun:log': 'Logowanie',
    'noun:reg': 'Rejestracja',
    'noun:language': 'Wybierz język',
    'noun:email': "E-mail",
    'noun:password': "Hasło",
    'noun:confirm': 'Potwierdź hasło',
    'noun:search': "Szukaj",
    'noun:allForms': "Wszystkie formularze",
    'noun:inProgress': "W trakcie realizacji",
    'noun:archive': 'Archiwum',
    'noun:IDnumber': 'Numer dowodu',
    'noun:names':'Imiona',
    'noun:surname': 'Nazwisko',
    'noun:birthdate': 'Data urodzenia',
    'noun:country': 'Narodowość',
    'noun:city': 'Miasto',
    'noun:street-number': 'Ulica, numer',
    'noun:zipcode': 'Kod pocztowy',
    'noun:phone': 'Numer telefonu',
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

const arLang: { [key: string]: string } = {
    'action:login': 'تسجيل الدخول',
    'action:register': 'التسجيل',
    'action:english': 'الإنجليزية',
    'noun:email': "البريد الإلكتروني",
    'noun:password': "كلمة السر",
    'noun:search': "بحث",
    'noun:allForms': "جميع النماذج",
    'noun:inProgress': "قيد التنفيذ",
    'noun:archive': 'الأرشيف'
}

const faLang: { [key: string]: string } = {
    'action:login': 'ورود',
    'action:register': 'ثبت‌نام',
    'action:english': 'انگلیسی',
    'noun:email': "ایمیل",
    'noun:password': "گذرواژه",
    'noun:search': "جستجو",
    'noun:allForms': "تمام فرم‌ها",
    'noun:inProgress': "در حال اجرا",
    'noun:archive': 'بایگانی'
}

const trLang: { [key: string]: string } = {
    'action:login': 'Giriş yap',
    'action:register': 'Kaydol',
    'action:english': 'İngilizce',
    'noun:email': "E-posta",
    'noun:password': "Parola",
    'noun:search': "Ara",
    'noun:allForms': "Tüm formlar",
    'noun:inProgress': "Devam eden",
    'noun:archive': 'Arşiv'
}

const roLang: { [key: string]: string } = {
    'action:login': 'Autentificare',
    'action:register': 'Înregistrare',
    'action:english': 'Engleză',
    'noun:email': "E-mail",
    'noun:password': "Parolă",
    'noun:search': "Căutare",
    'noun:allForms': "Toate formularele",
    'noun:inProgress': "În progres",
    'noun:archive': 'Arhivă'
}

const esLang: { [key: string]: string } = {
    'action:login': 'Iniciar sesión',
    'action:register': 'Registrarse',
    'action:english': 'Inglés',
    'noun:email': "Correo electrónico",
    'noun:password': "Contraseña",
    'noun:search': "Buscar",
    'noun:allForms': "Todos los formularios",
    'noun:inProgress': "En progreso",
    'noun:archive': 'Archivo'
}

const tiLang: { [key: string]: string } = {
    'action:login': 'ግባ',
    'action:register': 'መዝግብ',
    'action:english': 'እንግሊዝኛ',
    'noun:email': "ኢሜይል",
    'noun:password': "የይለፍ ቃል",
    'noun:search': "ፈልግ",
    'noun:allForms': "ሁሉም ቅርንጫፎች",
    'noun:inProgress': "በመስመር ላይ",
    'noun:archive': 'መፈለጊያ'
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