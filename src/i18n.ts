import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation resources
import enTranslations from './locales/en.json';
import esTranslations from './locales/es.json';

// Spanish-speaking countries (ISO 3166-1 alpha-2 codes)
const SPANISH_SPEAKING_COUNTRIES = [
  'AR', 'BO', 'CL', 'CO', 'CR', 'CU', 'DO', 'EC', 'SV', 'GQ', 
  'GT', 'HN', 'MX', 'NI', 'PA', 'PY', 'PE', 'PR', 'ES', 'UY', 'VE'
];

// Custom language detector for IP-based geolocation
const customLanguageDetector = {
  name: 'ipGeolocation',
  lookup: async () => {
    try {
      const response = await fetch('https://ipapi.co/json/');
      const data = await response.json();
      const countryCode = data.country_code;
      
      if (SPANISH_SPEAKING_COUNTRIES.includes(countryCode)) {
        return 'es';
      }
      return 'en';
    } catch (error) {
      console.warn('Failed to detect location via IP, falling back to browser language');
      return null;
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslations
      },
      es: {
        translation: esTranslations
      }
    },
    fallbackLng: 'en',
    debug: process.env.NODE_ENV === 'development',
    
    detection: {
      order: ['localStorage', 'ipGeolocation', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng',
      checkWhitelist: true
    },
    
    interpolation: {
      escapeValue: false, // React already does escaping
    },
    
    react: {
      useSuspense: false
    }
  });

// Add custom detector
i18n.services.languageDetector.addDetector(customLanguageDetector);

export default i18n;
