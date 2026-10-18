// fix-all-postcontent.js
import fs from 'fs';
import path from 'path';

const blogDir = 'src/content/blog';
const enPath = path.join(blogDir, 'postContent.json');
const en = JSON.parse(fs.readFileSync(enPath, 'utf8'));

const languages = ['de', 'tr', 'ar', 'zh-CN', 'es', 'fr'];

for (const lang of languages) {
  const filePath = path.join(blogDir, `postContent.${lang}.json`);
  
  if (!fs.existsSync(filePath)) {
    console.log(`⏭️  ${lang}: file nahi hai, skip`);
    continue;
  }
  
  console.log(`\n🔧 Fixing ${lang}...`);
  
  let raw = fs.readFileSync(filePath, 'utf8');
  
  // Quotes fix (German „...")
  raw = raw.replace(/„([^"“”]*?)"/g, '„$1“');
  
  // Mojibake fixes (sab languages ke liye common)
  const fixes = {
    'Ã¼': 'ü', 'Ã¤': 'ä', 'Ã¶': 'ö', 'ÃŸ': 'ß',
    'Ãœ': 'Ü', 'Ã„': 'Ä', 'Ã–': 'Ö',
    'Ä±': 'ı', 'ÅŸ': 'ş', 'ÄŸ': 'ğ', 'Ã§': 'ç',
    'â€“': '–', 'â€ž': '„', 'â€œ': '“', 'â€™': "'",
  };
  for (const [bad, good] of Object.entries(fixes)) {
    raw = raw.split(bad).join(good);
  }
  
  let data;
  try {
    data = JSON.parse(raw);
  } catch (e) {
    console.error(`❌ ${lang}: JSON invalid — ${e.message}`);
    continue;
  }
  
  // Slug aur type English se copy karo
  let fixedSlugs = 0, fixedTypes = 0;
  data.postContents.forEach((post, i) => {
    const enPost = en.postContents[i];
    if (!enPost) return;
    
    if (post.slug !== enPost.slug) {
      post.slug = enPost.slug;
      fixedSlugs++;
    }
    
    post.content.forEach((block, j) => {
      if (enPost.content[j] && block.type !== enPost.content[j].type) {
        block.type = enPost.content[j].type;
        fixedTypes++;
      }
    });
  });
  
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`✅ ${lang}: ${fixedSlugs} slugs, ${fixedTypes} types fixed`);
}

console.log('\n🎉 All done!');