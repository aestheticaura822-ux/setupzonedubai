// scripts/translate.js
import fs from 'fs';
import path from 'path';

const SKIP_KEYS = ['slug', 'type', 'key', 'id', 'image', 'href', 'url', 'link', 'phone', 'email', 'date', 'readTime', 'author', 'count', 'icon', 'color'];

const GOOGLE_API_KEY = 'AIzaSyBOti4mM-6x9WDnZIjIeyEU21OpBXqWBgw';

async function translateText(text, targetLang, sourceLang = 'en') {
  const url = `https://translation.googleapis.com/language/translate/v2?key=${GOOGLE_API_KEY}`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ q: text, target: targetLang, source: sourceLang, format: 'text' }),
  });
  const data = await res.json();
  if (data.data?.translations?.[0]) {
    return data.data.translations[0].translatedText;
  }
  throw new Error('Translation failed: ' + JSON.stringify(data));
}

async function translateJSON(obj, targetLang, sourceLang = 'en') {
  if (Array.isArray(obj)) {
    return Promise.all(obj.map(item => translateJSON(item, targetLang, sourceLang)));
  }
  if (typeof obj === 'object' && obj !== null) {
    const result = {};
    for (const [key, value] of Object.entries(obj)) {
      if (SKIP_KEYS.includes(key)) {
        result[key] = value;
      } else if (typeof value === 'string') {
        // URLs/emails skip
        if (value.startsWith('http') || value.includes('@') || value.startsWith('/')) {
          result[key] = value;
        } else {
          result[key] = await translateText(value, targetLang, sourceLang);
          await new Promise(r => setTimeout(r, 50));  // rate limit
        }
      } else {
        result[key] = await translateJSON(value, targetLang, sourceLang);
      }
    }
    return result;
  }
  return obj;
}

async function main() {
  const sourcePath = process.argv[2];
  const targetLangs = process.argv.slice(3);
  
  const sourceData = JSON.parse(fs.readFileSync(sourcePath, 'utf8'));
  const ext = path.extname(sourcePath);
  const dir = path.dirname(sourcePath);
  const base = path.basename(sourcePath, ext);
  
  for (const lang of targetLangs) {
    console.log(`\n🌍 Translating to ${lang}...`);
    const translated = await translateJSON(sourceData, lang);
    const outputPath = path.join(dir, `${base}.${lang}${ext}`);
    fs.writeFileSync(outputPath, JSON.stringify(translated, null, 2), 'utf8');
    console.log(`✅ ${outputPath}`);
  }
}

main().catch(console.error);