import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    lng: 'pt-BR',
    resources: {
      'pt-BR': {
        translation: {
          // Adicione suas traduções aqui se necessário
        },
      },
    },
  });

export default i18n;