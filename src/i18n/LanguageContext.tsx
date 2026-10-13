import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// ✅ CHANGE 1: `export type` (not just `export`)
export type LanguageCode = 'en' | 'ar' | 'ru' | 'de' | 'es' | 'fr' | 'tr' ;

// ✅ CHANGE 2: `export interface` already theek hai, lekin confirm karo
export type LanguageOption = {
  code: LanguageCode;
  name: string;
  native: string;
  flag: string;
  dir: 'ltr' | 'rtl';
}

// ✅ LANGUAGES — same as before (ye value export hai, isme change nahi)
export const LANGUAGES: LanguageOption[] = [
  { code: 'en', name: 'English',    native: 'English',    flag: '🇬🇧', dir: 'ltr' },
  { code: 'ar', name: 'Arabic',     native: 'العربية',    flag: '🇦🇪', dir: 'rtl' },
  { code: 'ru', name: 'Russian',    native: 'Русский',    flag: '🇷🇺', dir: 'ltr' },
  { code: 'de', name: 'German',     native: 'Deutsch',    flag: '🇩🇪', dir: 'ltr' },
  { code: 'es', name: 'Spanish',    native: 'Español',    flag: '🇪🇸', dir: 'ltr' },
  { code: 'fr', name: 'French',     native: 'Français',   flag: '🇫🇷', dir: 'ltr' },
  { code: 'tr', name: 'Turkish',    native: 'Türkçe',     flag: '🇹🇷', dir: 'ltr' },
];

export const DEFAULT_LANGUAGE: LanguageCode = 'en';

interface LanguageContextValue {
  language: LanguageCode;
  languageOption: LanguageOption;
  setLanguage: (code: LanguageCode) => void;
  dir: 'ltr' | 'rtl';
  isTranslating: boolean;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<LanguageCode>(() => {
    if (typeof window === 'undefined') return DEFAULT_LANGUAGE;
    const saved = localStorage.getItem('preferred-language') as LanguageCode | null;
    if (saved && LANGUAGES.some(l => l.code === saved)) return saved;
    return DEFAULT_LANGUAGE;
  });

  const [isTranslating, setIsTranslating] = useState(false);

  const setLanguage = (code: LanguageCode) => {
    setIsTranslating(true);
    setLanguageState(code);
    if (typeof window !== 'undefined') {
      localStorage.setItem('preferred-language', code);
    }
    setTimeout(() => setIsTranslating(false), 1500);
  };

  const languageOption = LANGUAGES.find(l => l.code === language) || LANGUAGES[0];
  const dir = languageOption.dir;

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language;
      document.documentElement.dir = dir;
    }
  }, [language, dir]);

  return (
    <LanguageContext.Provider
      value={{ language, languageOption, setLanguage, dir, isTranslating }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used inside <LanguageProvider>');
  return ctx;
}