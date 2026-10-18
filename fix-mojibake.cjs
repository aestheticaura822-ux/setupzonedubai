const fs = require('fs');
const path = require('path');

// French + German + Spanish + Turkish + Quotes
const fixes = {
    // French
    'Ã©': 'é', 'Ã¨': 'è', 'Ãª': 'ê', 'Ã«': 'ë',
    'Ã ': 'à', 'Ã¢': 'â', 'Ã®': 'î', 'Ã¯': 'ï',
    'Ã´': 'ô', 'Ã¹': 'ù', 'Ã»': 'û', 'Ã¼': 'ü',
    'Ã±': 'ñ', 'Ã¡': 'á', 'Ã': 'í', 'Ã³': 'ó', 'Ãº': 'ú',
    'Ãœ': 'Ü', 'Ã–': 'Ö', 'Ã‡': 'Ç', 'Ã‰': 'É',
    'Ã§': 'ç', 'Ã¶': 'ö', 'Ã¤': 'ä', 'Ã„': 'Ä',
    // German
    'ÃŸ': 'ß',
    // Spanish
    'Á³': 'ó', 'Á': 'í', 'Á¡': 'á', 'Á©': 'é', 'Áº': 'ú',
    'Á±': 'ñ', 'Á¢': 'â', 'Á¨': 'è', 'Áª': 'ê', 'Á«': 'ë',
    'Á®': 'î', 'Á¯': 'ï', 'Á´': 'ô', 'Á¹': 'ù', 'Á»': 'û',
    'Áœ': 'Ü', 'Á„': 'Ä', 'Á–': 'Ö',
    // Turkish
    'Ã¼': 'ü', 'Ãœ': 'Ü', 'Ã¶': 'ö', 'Ã–': 'Ö',
    'Ã§': 'ç', 'Ã‡': 'Ç', 'Ä±': 'ı', 'Ä°': 'İ',
    'ÅŸ': 'ş', 'Åž': 'Ş', 'ÄŸ': 'ğ', 'Äž': 'Ğ',
    // Quotes & dashes
    'â€œ': '"', 'â€': '"', 'â€™': "'", 'â€˜': "'",
    'â€"': '"', 'â€"': '—', 'â€"': '–',
    // Misc
    'Â·': '·', 'Â ': ' ', 'Â': '',
    'â€¦': '…', 'â‚¬': '€', 'â„¢': '™'
};

function fixFile(filePath) {
    try {
        let content = fs.readFileSync(filePath, 'utf-8');
        const original = content;
        
        for (const [bad, good] of Object.entries(fixes)) {
            content = content.split(bad).join(good);
        }
        
        if (content !== original) {
            fs.writeFileSync(filePath, content, 'utf-8');
            console.log('✅ Fixed: ' + path.basename(filePath));
            return true;
        }
        return false;
    } catch (e) {
        console.log('❌ Error: ' + path.basename(filePath) + ' — ' + e.message);
        return false;
    }
}

let total = 0;
let fixed = 0;

function walk(d) {
    for (const f of fs.readdirSync(d)) {
        const p = path.join(d, f);
        if (fs.statSync(p).isDirectory()) {
            walk(p);
            continue;
        }
        if (f.endsWith('.json')) {
            total++;
            if (fixFile(p)) fixed++;
        }
    }
}

walk('src/content');

console.log('\n========================================');
console.log('Total: ' + total);
console.log('✅ Fixed: ' + fixed);
console.log('========================================');