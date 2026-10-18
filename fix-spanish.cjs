const fs = require('fs');
const path = require('path');

const fixes = {
    'Á³': 'ó', 'Á': 'í', 'Á¡': 'á', 'Á©': 'é', 'Áº': 'ú',
    'Á±': 'ñ', 'Á¢': 'â', 'Á¨': 'è', 'Áª': 'ê', 'Á«': 'ë',
    'Á®': 'î', 'Á¯': 'ï', 'Á´': 'ô', 'Á¹': 'ù', 'Á»': 'û',
    'Áœ': 'Ü', 'Á„': 'Ä', 'Á–': 'Ö', 'ÁŸ': 'ß'
};

function walk(d) {
    for (const f of fs.readdirSync(d)) {
        const p = path.join(d, f);
        if (fs.statSync(p).isDirectory()) {
            walk(p);
            continue;
        }
        if (f.endsWith('.es.json')) {
            let content = fs.readFileSync(p, 'utf-8');
            const original = content;
            for (const [bad, good] of Object.entries(fixes)) {
                content = content.split(bad).join(good);
            }
            if (content !== original) {
                fs.writeFileSync(p, content, 'utf-8');
                console.log('✅ Fixed: ' + f);
            }
        }
    }
}

walk('src/content');
console.log('Done!');