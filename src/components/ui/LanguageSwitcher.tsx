import { useLanguage, Lang } from '../../i18n/LanguageContext';

const LANGS: { code: Lang; name: string; flag: string }[] = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'ar', name: 'العربية', flag: '🇦🇪' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
];

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <select
      value={lang}
      onChange={(e) => setLang(e.target.value as Lang)}
      className="px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white text-sm cursor-pointer"
    >
      {LANGS.map(l => (
        <option key={l.code} value={l.code} className="text-black">
          {l.flag} {l.name}
        </option>
      ))}
    </select>
  );
}