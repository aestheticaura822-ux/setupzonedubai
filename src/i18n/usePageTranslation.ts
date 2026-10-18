// ✅ Static translation hook — no API calls
// Content ab JSON files se load hota hai via loadContent()

import { useEffect } from 'react';
import { useLanguage } from './LanguageContext';

export function usePageTranslation() {
  const { language } = useLanguage();

  useEffect(() => {
    // Set document language and direction
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  // ✅ Koi API call nahi — static pages hain
  return { language };
}