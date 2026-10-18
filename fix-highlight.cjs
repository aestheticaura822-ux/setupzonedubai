const fs = require('fs');
const path = require('path');

const langs = ['ar', 'fr', 'de', 'es', 'zh-CN', 'tr'];
const fields = ['highlightLabel'];

function fixObj(eng, trans) {
    if (eng && typeof eng === 'object' && !Array.isArray(eng) &&
        trans && typeof trans === 'object' && !Array.isArray(trans)) {
        for (const k of Object.keys(eng)) {
            if (fields.includes(k)) {
                trans[k] = eng[k];
            } else if (typeof eng[k] === 'object' && eng[k] !== null) {
                fixObj(eng[k], trans[k]);
            }
        }
    } else if (Array.isArray(eng) && Array.isArray(trans)) {
        const min = Math.min(eng.length, trans.length);
        for (let i = 0; i < min; i++) {
            fixObj(eng[i], trans[i]);
        }
    }
}

function walk(d) {
    for (const f of fs.readdirSync(d)) {
        const p = path.join(d, f);
        if (fs.statSync(p).isDirectory()) {
            walk(p);
            continue;
        }
        if (f.endsWith('.json') && !f.match(/\.(ar|fr|de|es|zh|tr)\.json$/) && !f.match(/\.zh-CN\.json$/)) {
            try {
                const eng = JSON.parse(fs.readFileSync(p, 'utf-8'));
                for (const lang of langs) {
                    const tp = p.replace('.json', '.' + lang + '.json');
                    if (!fs.existsSync(tp)) continue;
                    try {
                        const trans = JSON.parse(fs.readFileSync(tp, 'utf-8'));
                        fixObj(eng, trans);
                        fs.writeFileSync(tp, JSON.stringify(trans, null, 2), 'utf-8');
                        console.log('✅ ' + f + ' → ' + lang);
                    } catch (e) {
                        // skip
                    }
                }
            } catch (e) {
                // skip invalid JSON
            }
        }
    }
}

walk('src/content');
console.log('Done!');