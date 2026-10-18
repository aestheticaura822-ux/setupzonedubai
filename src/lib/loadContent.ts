const modules = import.meta.glob('../content/**/*.json', { eager: true });

export function loadContent<T = any>(basePath: string, lang: string): T {
  const key = lang === 'en'
    ? `../content/${basePath}.json`
    : `../content/${basePath}.${lang}.json`;

  const mod = modules[key] as any;
  if (!mod) {
    console.warn(`Missing content: ${key}`);
    return (modules[`../content/${basePath}.json`] as any)?.default || ({} as T);
  }

  // ✅ Naya: Agar koi field object hai with "text" key, use string banao
  const raw = mod.default as any;
  const clean = (obj: any): any => {
    if (Array.isArray(obj)) return obj.map(clean);
    if (obj && typeof obj === 'object') {
      // Agar is object mein sirf "text" aur "showPulse" hai, to string return karo
      if ('text' in obj && typeof obj.text === 'string' && 
          ('showPulse' in obj || Object.keys(obj).length <= 2)) {
        return obj.text;
      }
      const out: any = {};
      for (const [k, v] of Object.entries(obj)) out[k] = clean(v);
      return out;
    }
    return obj;
  };

  return clean(raw) as T;
}