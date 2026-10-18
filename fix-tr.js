// fix-tr.js
import fs from 'fs';

const trPath = 'src/content/blog/postContent.tr.json';
const enPath = 'src/content/blog/postContent.json';

let raw = fs.readFileSync(trPath, 'utf8');

// Turkish quotes fix (eğer varsa)
raw = raw.replace(/„([^"“”]*?)"/g, '„$1“');

// Mojibake fix (Turkish için)
const fixes = {
  'Ã¼': 'ü', 'Ã¤': 'ä', 'Ã¶': 'ö', 'ÃŸ': 'ß',
  'Ãœ': 'Ü', 'Ã„': 'Ä', 'Ã–': 'Ö',
  'Ä±': 'ı', 'ÅŸ': 'ş', 'ÄŸ': 'ğ', 'Ã§': 'ç',
  'â€“': '–', 'â€ž': '„', 'â€œ': '“', 'â€™': "'",
};
for (const [bad, good] of Object.entries(fixes)) {
  raw = raw.split(bad).join(good);
}

let tr;
try {
  tr = JSON.parse(raw);
} catch (e) {
  console.error('❌ JSON invalid:', e.message);
  process.exit(1);
}

const en = JSON.parse(fs.readFileSync(enPath, 'utf8'));

// Slug aur type English se copy karo
tr.postContents.forEach((trPost, i) => {
  const enPost = en.postContents[i];
  if (!enPost) return;
  trPost.slug = enPost.slug;
  trPost.content.forEach((block, j) => {
    if (enPost.content[j]) block.type = enPost.content[j].type;
  });
});

fs.writeFileSync(trPath, JSON.stringify(tr, null, 2), 'utf8');
console.log('✅ Fixed! Turkish slugs aur types theek.');