const fs = require('fs');
const path = require('path');

const fields = [
    'gradient', 'glow', 'accentText', 'accentBg', 'accentBorder',
    'bgAccent', 'borderAccent', 'iconBg', 'tagColor', 'icon', 'color',
    'slug', 'href', 'link', 'url', 'image', 'src', 'poster', 'watermark',
    'phoneHref', 'emailHref', 'mapLink', 'directionsLink', 'embedSrc',
    'ctaHref', 'highlightLabel'
];

const langs = ['ar', 'fr', 'de', 'es', 'zh-CN', 'tr'];
let bad = [];

function checkObj(eng, trans, file, lang, pathStr) {
    if (eng && typeof eng === 'object' && !Array.isArray(eng) &&
        trans && typeof trans === 'object' && !Array.isArray(trans)) {
        for (const k of Object.keys(eng)) {
            const newPath = pathStr ? pathStr + '.' + k : k;
            if (fields.includes(k)) {
                if (eng[k] !== trans[k]) {
                    bad.push({ file, lang, field: newPath, eng: eng[k], trans: trans[k] });
                }
            } else if (typeof eng[k] === 'object' && eng[k] !== null) {
                checkObj(eng[k], trans[k], file, lang, newPath);
            }
        }
    } else if (Array.isArray(eng) && Array.isArray(trans)) {
        for (let i = 0; i < Math.min(eng.length, trans.length); i++) {
            checkObj(eng[i], trans[i], file, lang, pathStr + '[' + i + ']');
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
                        checkObj(eng, trans, f, lang, '');
                    } catch (e) {
                        // skip invalid JSON
                    }
                }
            } catch (e) {
                // skip invalid JSON
            }
        }
    }
}

walk('src/content');

if (bad.length === 0) {
    console.log('✅ All styling/technical fields are correct!');
} else {
    console.log('❌ Found ' + bad.length + ' problems:');
    bad.slice(0, 20).forEach(b => {
        console.log('  ' + b.file + ' → ' + b.lang + ' | ' + b.field + ': "' + b.eng + '" vs "' + b.trans + '"');
    });
}