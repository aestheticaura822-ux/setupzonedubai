const fs = require('fs');
const path = require('path');

const fixes = {
    'Ã©': 'é', 'Ã¨': 'è', 'Ãª': 'ê', 'Ã«': 'ë',
    'Ã ': 'à', 'Ã¢': 'â', 'Ã®': 'î', 'Ã¯': 'ï',
    'Ã´': 'ô', 'Ã¹': 'ù', 'Ã»': 'û', 'Ã¼': 'ü',
    'Ã±': 'ñ', 'Ã¡': 'á', 'Ã': 'í', 'Ã³': 'ó', 'Ãº': 'ú',
    'Ãœ': 'Ü', 'Ã–': 'Ö', 'Ã‡': 'Ç',
    'Ã§': 'ç', 'Ã¶': 'ö', 'Ã¤': 'ä', 'Ã„': 'Ä',
    'ÃŸ': 'ß',
    'Ð°': 'а', 'Ð±': 'б', 'Ð²': 'в', 'Ð³': 'г', 'Ð´': 'д',
    'Ðµ': 'е', 'Ð¶': 'ж', 'Ð·': 'з', 'Ð¸': 'и', 'Ð¹': 'й',
    'Ðº': 'к', 'Ð»': 'л', 'Ð¼': 'м', 'Ð½': 'н', 'Ð¾': 'о',
    'Ð¿': 'п', 'Ñ€': 'р', 'Ñ': 'с', 'Ñ‚': 'т', 'Ñƒ': 'у',
    'Ñ„': 'ф', 'Ñ…': 'х', 'Ñ†': 'ц', 'Ñ‡': 'ч', 'Ñˆ': 'ш',
    'Ñ‰': 'щ', 'ÑŠ': 'ъ', 'Ñ‹': 'ы', 'ÑŒ': 'ь', 'Ñ': 'э',
    'ÑŽ': 'ю', 'Ñ': 'я',
    'â€œ': '"', 'â€': '"', 'â€™': "'", 'â€˜': "'",
    'â€"': '"', 'â€"': '—', 'â€"': '–',
    'Â·': '·', 'Â ': ' ', 'Â': '',
};

const languages = ['fr', 'de', 'es', 'ru'];
const contentDir = 'src/content';

function walkDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
            walkDir(fullPath);
        } else {
            for (const lang of languages) {
                if (file.endsWith(`.${lang}.json`)) {
                    try {
                        let content = fs.readFileSync(fullPath, 'utf-8');
                        const original = content;
                        
                        for (const [bad, good] of Object.entries(fixes)) {
                            content = content.split(bad).join(good);
                        }
                        
                        if (content !== original) {
                            fs.writeFileSync(fullPath, content, 'utf-8');
                            console.log(`✅ Fixed: ${fullPath}`);
                        }
                    } catch (e) {
                        console.log(`❌ Error in ${fullPath}: ${e.message}`);
                    }
                }
            }
        }
    }
}

walkDir(contentDir);
console.log('\n🎉 All done!');