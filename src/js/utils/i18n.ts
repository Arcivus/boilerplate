import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import detector from "i18next-browser-languagedetector";
import * as enLocale from '../../translations/en.json';

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: enLocale
  }
};

i18n
  .use(detector) // detect language
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: 'en',
    keySeparator: '.',
    interpolation: {
      escapeValue: false // react already safes from xss
    },
    detection: { // language detection options
      order: ['navigator', 'htmlTag', 'path', 'subdomain', 'querystring', 'cookie', 'localStorage']
    }

  });

export default i18n;