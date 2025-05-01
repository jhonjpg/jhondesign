import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import es from '../18next/es.json';
import en from '../18next/en.json';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            es: {
                translation: es,
            },
            en: {
                translation: en,
            },
        },
        lng: 'en', // Idioma por defecto (español)
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    })
    .then(() => console.log('i18n initialized successfully'))
    .catch(error => console.error('Error initializing i18n:', error));

export default i18n;