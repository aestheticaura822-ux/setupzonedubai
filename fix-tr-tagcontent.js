// fix-tr-tagcontent.js
import fs from 'fs';

const trPath = 'src/content/blog/tagContent.tr.json';
const enPath = 'src/content/blog/tagContent.json';

const en = JSON.parse(fs.readFileSync(enPath, 'utf8'));
const tr = JSON.parse(fs.readFileSync(trPath, 'utf8'));

// Har tag ka slug English se copy karo (name Turkish rahe)
let fixed = 0;
tr.tagContents.forEach((trTag, i) => {
  const enTag = en.tagContents[i];
  if (!enTag) return;
  if (trTag.slug !== enTag.slug) {
    trTag.slug = enTag.slug;
    fixed++;
  }
});

fs.writeFileSync(trPath, JSON.stringify(tr, null, 2), 'utf8');
console.log(`✅ ${fixed} slugs fixed in tagContent.tr.json`);