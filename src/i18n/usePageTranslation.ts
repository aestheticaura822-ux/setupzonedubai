import { useEffect, useRef } from 'react';
import { useLanguage } from './LanguageContext';
import type { LanguageCode } from './LanguageContext';

const API_URL = import.meta.env.VITE_API_URL || '/api';
const cache = new Map<string, string>();

export function usePageTranslation() {
  const { language } = useLanguage();
  const originalTexts = useRef<Map<Text, string>>(new Map());
  const isRunning = useRef(false);

  useEffect(() => {
    const collectTextNodes = (): Text[] => {
      const walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT,
        {
          acceptNode: (node) => {
            const parent = node.parentElement;
            if (!parent) return NodeFilter.FILTER_REJECT;
            const skip = ['SCRIPT', 'STYLE', 'CODE', 'PRE', 'NOSCRIPT', 'SVG'];
            if (skip.includes(parent.tagName)) return NodeFilter.FILTER_REJECT;
            if (parent.closest('[data-no-translate]')) return NodeFilter.FILTER_REJECT;
            const text = node.textContent?.trim();
            if (!text || text.length < 2 || !/[a-zA-Z]/.test(text)) return NodeFilter.FILTER_REJECT;
            return NodeFilter.FILTER_ACCEPT;
          },
        }
      );
      const nodes: Text[] = [];
      let n;
      while ((n = walker.nextNode())) {
        const t = n as Text;
        if (!originalTexts.current.has(t)) {
          originalTexts.current.set(t, t.textContent || '');
        }
        nodes.push(t);
      }
      return nodes;
    };

    const run = async () => {
      if (isRunning.current) return;
      isRunning.current = true;

      const nodes = collectTextNodes();

      // If English — restore originals
      if (language === 'en') {
        nodes.forEach(n => {
          const orig = originalTexts.current.get(n);
          if (orig !== undefined) n.textContent = orig;
        });
        isRunning.current = false;
        return;
      }

      const texts = nodes.map(n => originalTexts.current.get(n) ?? n.textContent ?? '');

      // Batch translate — 40 per request
      const BATCH = 40;
      for (let i = 0; i < texts.length; i += BATCH) {
        const batchTexts = texts.slice(i, i + BATCH);
        const batchNodes = nodes.slice(i, i + BATCH);

        try {
          const translations = await translateBatch(batchTexts, language);
          batchNodes.forEach((node, idx) => {
            if (translations[idx] !== undefined && translations[idx] !== null) {
              node.textContent = translations[idx];
            }
          });
        } catch (err) {
          console.error('[Translation] batch failed:', err);
        }
      }

      isRunning.current = false;
    };

    const t = setTimeout(run, 250);
    return () => clearTimeout(t);
  }, [language]);

  // Watch for new content (dynamic page changes)
  useEffect(() => {
    const observer = new MutationObserver(() => {
      // New nodes — re-collect originals
      const walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT,
        {
          acceptNode: (node) => {
            const parent = node.parentElement;
            if (!parent) return NodeFilter.FILTER_REJECT;
            const skip = ['SCRIPT', 'STYLE', 'CODE', 'PRE', 'NOSCRIPT', 'SVG'];
            if (skip.includes(parent.tagName)) return NodeFilter.FILTER_REJECT;
            if (parent.closest('[data-no-translate]')) return NodeFilter.FILTER_REJECT;
            const text = node.textContent?.trim();
            if (!text || text.length < 2) return NodeFilter.FILTER_REJECT;
            return NodeFilter.FILTER_ACCEPT;
          },
        }
      );
      let n;
      while ((n = walker.nextNode())) {
        const t = n as Text;
        if (!originalTexts.current.has(t)) {
          originalTexts.current.set(t, t.textContent || '');
        }
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);
}

// ============================================
// Translation API caller
// ============================================
async function translateBatch(texts: string[], targetLang: LanguageCode): Promise<string[]> {
  if (!texts.length) return [];

  const results: string[] = new Array(texts.length);

  // Per-text cache lookup + collect missing
  const missing: { index: number; text: string }[] = [];
  texts.forEach((text, idx) => {
    const key = `${targetLang}:${text}`;
    if (cache.has(key)) {
      results[idx] = cache.get(key)!;
    } else {
      missing.push({ index: idx, text });
    }
  });

  if (!missing.length) return results;

  try {
    const res = await fetch(`${API_URL}/translate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        texts: missing.map(m => m.text),
        targetLang,
        sourceLang: 'en',
      }),
    });

    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const data = await res.json();
    const translations: string[] = data.translations || [];

    missing.forEach((m, i) => {
      const translated = translations[i] ?? m.text;
      results[m.index] = translated;
      cache.set(`${targetLang}:${m.text}`, translated);
    });

    return results;
  } catch (err) {
    console.error('[Translation] API error:', err);
    missing.forEach(m => { results[m.index] = m.text; });
    return results;
  }
}