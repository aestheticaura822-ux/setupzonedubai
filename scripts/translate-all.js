import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const LANGUAGES = ['ar', 'fr', 'de', 'es', 'ru', 'tr'];
const CONTENT_DIR = path.join(__dirname, '../src/content');

// ✅ Google Gemini API
const GEMINI_API_KEY = 'AQ.Ab8RN6J5OGVoId8DcHkVrgGRAkCWk_3yHSFRUh1psm4BbLYfBg';
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent?key=${GEMINI_API_KEY}`;
const BATCH_SIZE = 50;
const DELAY_BETWEEN_BATCHES = 1000; // 1 sec

function getAllJsonFiles(dir) {
  let results = [];
  for (const file of fs.readdirSync(dir)) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      results = results.concat(getAllJsonFiles(fullPath));
    } else if (file.endsWith('.json') && !file.match(/\.(ar|fr|de|es|ru|tr)\.json$/)) {
      results.push(fullPath);
    }
  }
  return results;
}

function collectStrings(obj, arr = []) {
  if (typeof obj === 'string') arr.push(obj);
  else if (Array.isArray(obj)) obj.forEach(item => collectStrings(item, arr));
  else if (typeof obj === 'object' && obj !== null) {
    Object.values(obj).forEach(val => collectStrings(val, arr));
  }
  return arr;
}

function replaceStrings(obj, translations, index = { i: 0 }) {
  if (typeof obj === 'string') return translations[index.i++];
  if (Array.isArray(obj)) return obj.map(item => replaceStrings(item, translations, index));
  if (typeof obj === 'object' && obj !== null) {
    const result = {};
    for (const key of Object.keys(obj)) {
      result[key] = replaceStrings(obj[key], translations, index);
    }
    return result;
  }
  return obj;
}

// ✅ Gemini translate
async function translateBatch(texts, targetLang, retries = 3) {
  const langNames = {
    ar: 'Arabic', fr: 'French', de: 'German',
    es: 'Spanish', ru: 'Russian', tr: 'Turkish'
  };

  const prompt = `Translate these English strings to ${langNames[targetLang]}. 
Return ONLY a valid JSON array of translated strings in the same order. 
No explanations, no markdown, just the JSON array.

Strings: ${JSON.stringify(texts)}`;

  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 120000);

      const res = await fetch(GEMINI_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            temperature: 0.3,
            responseMimeType: 'application/json'
          }
        }),
        signal: controller.signal
      });

      clearTimeout(timeout);

      if (!res.ok) {
        const errText = await res.text();
        throw new Error(`HTTP ${res.status}: ${errText.slice(0, 200)}`);
      }

      const data = await res.json();
      const content = data.candidates?.[0]?.content?.parts?.[0]?.text;
      
      if (!content) throw new Error('No content in response');

      // JSON parse karo
      const parsed = JSON.parse(content);
      
      if (!Array.isArray(parsed)) throw new Error('Response is not an array');
      if (parsed.length !== texts.length) {
        throw new Error(`Length mismatch: expected ${texts.length}, got ${parsed.length}`);
      }

      return parsed;
    } catch (err) {
      console.log(`   ⚠️  Attempt ${attempt}/${retries}: ${err.message}`);
      if (attempt === retries) throw err;
      await new Promise(r => setTimeout(r, 3000));
    }
  }
}

async function main() {
  const jsonFiles = getAllJsonFiles(CONTENT_DIR);
  console.log(`\n📁 Found ${jsonFiles.length} JSON files\n`);

  let total = 0;
  let skipped = 0;
  let failed = 0;

  for (const file of jsonFiles) {
    const relPath = path.relative(CONTENT_DIR, file);
    const englishContent = JSON.parse(fs.readFileSync(file, 'utf-8'));
    const strings = collectStrings(englishContent);

    for (const lang of LANGUAGES) {
      const outputFile = file.replace('.json', `.${lang}.json`);
      if (fs.existsSync(outputFile)) {
        skipped++;
        continue;
      }

      try {
        console.log(`🌐 ${relPath} → ${lang} (${strings.length} strings)`);
        const allTranslations = [];
        for (let i = 0; i < strings.length; i += BATCH_SIZE) {
          const batch = strings.slice(i, i + BATCH_SIZE);
          const translated = await translateBatch(batch, lang);
          allTranslations.push(...translated);
          await new Promise(r => setTimeout(r, DELAY_BETWEEN_BATCHES));
        }
        const translatedContent = replaceStrings(englishContent, allTranslations);
        fs.writeFileSync(outputFile, JSON.stringify(translatedContent, null, 2));
        total++;
      } catch (err) {
        console.error(`❌ Failed ${relPath} → ${lang}:`, err.message);
        failed++;
      }
    }
  }

  console.log(`\n✅ Done! Created: ${total} | Skipped: ${skipped} | Failed: ${failed}\n`);
}

main();