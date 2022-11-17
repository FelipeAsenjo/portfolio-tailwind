import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import global_es from './global_es.json'
import global_en from './global_en.json'

const resources = {
    es: {
        global: global_es
    },
    en: {
        global: global_en
    }
}

i18n
    .use(initReactI18next)
    .init({
        interpolation: { escapeValue: false },
        lng: 'es',
        resources
    })

export default i18n