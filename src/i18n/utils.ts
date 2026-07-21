import type { Lang } from './ui';
import { defaultLang, getUI } from './ui';

export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split('/');
  if (first === 'es') return 'es';
  return defaultLang;
}

export function getTranslations(lang: Lang) {
  return getUI(lang);
}

export function localizedPath(lang: Lang, pathname = '/'): string {
  const normalized = pathname.startsWith('/') ? pathname : `/${pathname}`;
  if (lang === defaultLang) return normalized;
  return `/${lang}${normalized === '/' ? '' : normalized}`;
}

export const WHATSAPP_URL = `https://wa.me/573144798482?text=${encodeURIComponent('Hola RAGtional, me interesa iniciar un proyecto.')}`;
export const PHONE = '+573144798482';
export const PHONE_DISPLAY = '+57 314 479 8482';
export const SOCIAL = {
  linkedin: 'https://www.linkedin.com/company/ragtional/about/',
  github: 'https://github.com/JulianGiraldo97/RAGtional-Landpage',
  youtube: 'https://www.youtube.com/@JGiraldoAI',
};
