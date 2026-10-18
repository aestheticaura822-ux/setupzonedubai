import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

const SUPPORTED_LANGS = ['en', 'ar', 'fr', 'de', 'es', 'zh-CN', 'tr'] as const;
export type LanguageCode = typeof SUPPORTED_LANGS[number];

export const LANGUAGES: { code: LanguageCode; name: string; native: string; flag: string }[] = [
  { code: 'en', name: 'English', native: 'English', flag: '🇬🇧' },
  { code: 'ar', name: 'Arabic', native: 'العربية', flag: '🇦🇪' },
  { code: 'fr', name: 'French', native: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'German', native: 'Deutsch', flag: '🇩🇪' },
  { code: 'es', name: 'Spanish', native: 'Español', flag: '🇪🇸' },
  { code: 'zh-CN', name: 'Chinese', native: '中文', flag: '🇨🇳' },  // ← Changed
  { code: 'tr', name: 'Turkish', native: 'Türkçe', flag: '🇹🇷' },
];

interface LanguageContextType {
  language: LanguageCode;
  languageOption: typeof LANGUAGES[number];
  setLanguage: (lang: LanguageCode) => void;
  isTranslating: boolean;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  languageOption: LANGUAGES[0],
  setLanguage: () => {},
  isTranslating: false,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<LanguageCode>(() => {
    const saved = localStorage.getItem('lang') as LanguageCode;
    return SUPPORTED_LANGS.includes(saved) ? saved : 'en';
  });
  const [isTranslating, setIsTranslating] = useState(false);

  const setLanguage = (newLang: LanguageCode) => {
    setIsTranslating(true);
    setLanguageState(newLang);
    localStorage.setItem('lang', newLang);
    // Simulate short transition
    setTimeout(() => setIsTranslating(false), 300);
  };

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const languageOption = LANGUAGES.find(l => l.code === language) || LANGUAGES[0];

  return (
    <LanguageContext.Provider value={{ language, languageOption, setLanguage, isTranslating }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);