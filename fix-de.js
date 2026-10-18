// fix-de.js — UPDATED
import fs from 'fs';

const dePath = 'src/content/blog/postContent.de.json';
const enPath = 'src/content/blog/postContent.json';

// STEP 1: Raw text load karo (JSON.parse se pehle)
let raw = fs.readFileSync(dePath, 'utf8');

// STEP 2: Corrupted German quotes fix karo
// „Text"  →  „Text“  (opening „ rahe, closing " ko “ banao)
// Pattern: „... "  (opening German quote ke baad text, phir ASCII ")
// Approach: German opening quote ke baad wale ASCII " ko “ mein badlo
raw = raw.replace(/„([^"“”]*?)"/g, '„$1“');

// STEP 3: Aur bhi mojibake fixes
const fixes = {
  'Ã¼': 'ü', 'Ã¤': 'ä', 'Ã¶': 'ö', 'ÃŸ': 'ß',
  'Ãœ': 'Ü', 'Ã„': 'Ä', 'Ã–': 'Ö',
  'â€“': '–', 'â€ž': '„', 'â€œ': '“', 'â€™': "'",
};
for (const [bad, good] of Object.entries(fixes)) {
  raw = raw.split(bad).join(good);
}

// STEP 4: Ab JSON.parse karo
let de;
try {
  de = JSON.parse(raw);
} catch (e) {
  console.error('❌ JSON still invalid:', e.message);
  console.error('Fix the file manually or re-translate.');
  process.exit(1);
}

// STEP 5: English se slug aur type copy karo
const en = JSON.parse(fs.readFileSync(enPath, 'utf8'));
de.postContents.forEach((dePost, i) => {
  const enPost = en.postContents[i];
  if (!enPost) return;
  dePost.slug = enPost.slug;
  dePost.content.forEach((block, j) => {
    if (enPost.content[j]) block.type = enPost.content[j].type;
  });
});

// STEP 6: Save karo
fs.writeFileSync(dePath, JSON.stringify(de, null, 2), 'utf8');
console.log('✅ Fixed! Slugs, types, quotes, mojibake — sab theek.');