import i18n from 'i18next';
import { initReactI18next, useTranslation as useTranslationI18n } from 'react-i18next';

import ru from 'assets/lang/ru.json';
import en from 'assets/lang/en.json';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      ru: {
        translation: ru,
      },
      en: {
        translation: en,
      },
    },
    lng: 'en',
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: true,
    },
  });

i18n.on('initialized', () => {
  document.documentElement.setAttribute('lang', i18n.language);
});

i18n.on('languageChanged', () => {
  document.documentElement.setAttribute('lang', i18n.language);
});

export const useTranslation = () => useTranslationI18n('translation');

export default i18n;
