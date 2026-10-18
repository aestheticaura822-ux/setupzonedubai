// fix-all-mojibake.js
import fs from 'fs';
import path from 'path';

const blogDir = 'src/content/blog';

// Sab languages ke mojibake fixes
const fixes = {
  // German
  'Ã¼': 'ü', 'Ã¤': 'ä', 'Ã¶': 'ö', 'ÃŸ': 'ß',
  'Ãœ': 'Ü', 'Ã„': 'Ä', 'Ã–': 'Ö',
  // Turkish
  'Ä°': 'İ', 'ÅŸ': 'ş', 'Ä±': 'ı', 'ÄŸ': 'ğ',
  'Ã§': 'ç', 'Åž': 'Ş', 'Äž': 'Ğ', 'Ã‡': 'Ç',
  // Common
  'â€“': '–', 'â€ž': '„', 'â€œ': '“', 'â€™': "'",
};

const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.json'));

for (const file of files) {
  const filePath = path.join(blogDir, file);
  let raw = fs.readFileSync(filePath, 'utf8');
  let totalFixes = 0;

  for (const [bad, good] of Object.entries(fixes)) {
    const count = (raw.match(new RegExp(bad.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')) || []).length;
    if (count > 0) {
      raw = raw.split(bad).join(good);
      totalFixes += count;
    }
  }

  if (totalFixes > 0) {
    try {
      JSON.parse(raw);
      fs.writeFileSync(filePath, raw, 'utf8');
      console.log(`✅ ${file}: ${totalFixes} fixes`);
    } catch (e) {
      console.error(`❌ ${file}: JSON invalid — ${e.message}`);
    }
  } else {
    console.log(`⏭️  ${file}: no mojibake found`);
  }
}

console.log('\n🎉 Done!');