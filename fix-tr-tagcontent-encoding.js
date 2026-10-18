// fix-tr-tagcontent-encoding.js
import fs from 'fs';

const trPath = 'src/content/blog/tagContent.tr.json';

let raw = fs.readFileSync(trPath, 'utf8');

// Turkish mojibake fixes
const fixes = {
  'Ä°': 'İ',   // İ
  'ÅŸ': 'ş',   // ş
  'Ä±': 'ı',   // ı
  'ÄŸ': 'ğ',   // ğ
  'Ã§': 'ç',   // ç
  'Ã¼': 'ü',   // ü
  'Ã¶': 'ö',   // ö
  'Ãœ': 'Ü',   // Ü
  'Ã‡': 'Ç',   // Ç
  'Åž': 'Ş',   // Ş
  'Äž': 'Ğ',   // Ğ
  'Ã–': 'Ö',   // Ö
  'â€“': '–',  // –
  'â€ž': '„',  // „
  'â€œ': '“',  // “
  'â€™': "'",  // '
};

let totalFixes = 0;
for (const [bad, good] of Object.entries(fixes)) {
  const count = (raw.match(new RegExp(bad.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')) || []).length;
  if (count > 0) {
    raw = raw.split(bad).join(good);
    totalFixes += count;
    console.log(`  ${bad} → ${good}: ${count} occurrences`);
  }
}

// JSON parse karke verify karo
try {
  JSON.parse(raw);
  console.log(`\n✅ Valid JSON — ${totalFixes} mojibake fixes applied`);
} catch (e) {
  console.error(`\n❌ JSON invalid after fix: ${e.message}`);
  process.exit(1);
}

// UTF-8 mein save karo
fs.writeFileSync(trPath, raw, 'utf8');
console.log('✅ Saved as UTF-8');