// File: server/translate-api.js
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json({ limit: '5mb' }));

// LibreTranslate running on port 5000
const LIBRETRANSLATE_URL = process.env.LIBRETRANSLATE_URL || 'http://localhost:5000';

// In-memory cache
const cache = new Map();

app.post('/api/translate', async (req, res) => {
  const { texts, targetLang, sourceLang = 'en' } = req.body;

  if (!Array.isArray(texts) || !targetLang) {
    return res.status(400).json({ error: 'Invalid request' });
  }

  // If same language, return as-is
  if (targetLang === sourceLang) {
    return res.json({ translations: texts });
  }

  try {
    const translations = await translateBatch(texts, targetLang, sourceLang);
    res.json({ translations });
  } catch (err) {
    console.error('[API] translate error:', err);
    res.json({ translations: texts }); // fallback
  }
});

// Health check
app.get('/api/health', async (_req, res) => {
  try {
    const r = await fetch(`${LIBRETRANSLATE_URL}/languages`);
    const langs = await r.json();
    res.json({
      status: 'ok',
      libretranslate: LIBRETRANSLATE_URL,
      languagesLoaded: langs.length,
      cacheSize: cache.size,
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: 'LibreTranslate not reachable',
      url: LIBRETRANSLATE_URL,
    });
  }
});

async function translateBatch(texts, targetLang, sourceLang) {
  const results = new Array(texts.length);
  const missing = [];

  // Check cache first
  texts.forEach((text, i) => {
    const key = `${targetLang}:${text}`;
    if (cache.has(key)) {
      results[i] = cache.get(key);
    } else {
      missing.push({ i, text });
    }
  });

  if (!missing.length) return results;

  // Send each text individually (batch API can be unreliable)
  for (const { i, text } of missing) {
    try {
      const r = await fetch(`${LIBRETRANSLATE_URL}/translate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          q: text,
          source: sourceLang,
          target: targetLang,
          format: 'text',
        }),
      });

      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      const data = await r.json();
      const translated = data.translatedText || text;

      results[i] = translated;
      cache.set(`${targetLang}:${text}`, translated);
    } catch (err) {
      console.error(`[Translation] Failed for "${text.substring(0, 30)}...":`, err.message);
      results[i] = text; // fallback to original
    }
  }

  return results;
}

const PORT = 4002;
app.listen(PORT, () => {
  console.log(`🌐 Translate API → http://localhost:${PORT}`);
  console.log(`🔗 Using LibreTranslate at ${LIBRETRANSLATE_URL}`);
});