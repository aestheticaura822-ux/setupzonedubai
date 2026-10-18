const fs = require('fs');
const path = require('path');

const fixes = {
    'Ð°': 'а', 'Ð±': 'б', 'Ð²': 'в', 'Ð³': 'г', 'Ð´': 'д',
    'Ðµ': 'е', 'Ð¶': 'ж', 'Ð·': 'з', 'Ð¸': 'и', 'Ð¹': 'й',
    'Ðº': 'к', 'Ð»': 'л', 'Ð¼': 'м', 'Ð½': 'н', 'Ð¾': 'о',
    'Ð¿': 'п', 'Ñ€': 'р', 'Ñ': 'с', 'Ñ‚': 'т', 'Ñƒ': 'у',
    'Ñ„': 'ф', 'Ñ…': 'х', 'Ñ†': 'ц', 'Ñ‡': 'ч', 'Ñˆ': 'ш',
    'Ñ‰': 'щ', 'ÑŠ': 'ъ', 'Ñ‹': 'ы', 'ÑŒ': 'ь', 'Ñ': 'э',
    'ÑŽ': 'ю', 'Ñ': 'я',
    'Ð': 'А', 'Ð': 'Б', 'Ð': 'В', 'Ð': 'Г', 'Ð': 'Д',
    'Ð•': 'Е', 'Ð–': 'Ж', 'Ð—': 'З', 'Ð˜': 'И', 'Ð™': 'Й',
    'Ðš': 'К', 'Ð›': 'Л', 'Ðœ': 'М', 'Ð': 'Н', 'Ðž': 'О',
    'ÐŸ': 'П', 'Ð ': 'Р', 'Ð¡': 'С', 'Ð¢': 'Т', 'Ð£': 'У',
    'Ð¤': 'Ф', 'Ð¥': 'Х', 'Ð¦': 'Ц', 'Ð§': 'Ч', 'Ð¨': 'Ш',
    'Ð©': 'Щ', 'Ðª': 'Ъ', 'Ð«': 'Ы', 'Ð¬': 'Ь', 'Ð­': 'Э',
    'Ð®': 'Ю', 'Ð¯': 'Я',
};

function walk(dir) {
    for (const file of fs.readdirSync(dir)) {
        const full = path.join(dir, file);
        if (fs.statSync(full).isDirectory()) { walk(full); continue; }
        if (file.endsWith('.ru.json')) {
            let c = fs.readFileSync(full, 'utf-8');
            const o = c;
            const sf = Object.entries(fixes).sort((a, b) => b[0].length - a[0].length);
            for (const [bad, good] of sf) {
                c = c.split(bad).join(good);
            }
            if (c !== o) {
                fs.writeFileSync(full, c, 'utf-8');
                console.log('✅ ' + file);
            }
        }
    }
}

walk('src/content');
console.log('\n🎉 Done!');