const fs = require('fs');
const path = require('path');

const urlKeys = ['slug', 'href', 'link', 'url', 'id', 'icon', 'color', 'gradient', 'glow', 'accentText', 'accentBg', 'accentBorder', 'bgAccent', 'borderAccent', 'iconBg', 'tagColor', 'image', 'src', 'poster', 'watermark', 'phoneHref', 'emailHref', 'mapLink', 'directionsLink', 'embedSrc', 'ctaHref'];
const langs = ['ar', 'fr', 'de', 'es', 'zh-CN', 'tr'];

function copyUrl(eng, trans) {
    if (eng && typeof eng === 'object' && !Array.isArray(eng) && trans && typeof trans === 'object' && !Array.isArray(trans)) {
        for (const k of Object.keys(eng)) {
            if (urlKeys.includes(k)) {
                trans[k] = eng[k];
            } else if (typeof eng[k] === 'object' && eng[k] !== null) {
                copyUrl(eng[k], trans[k]);
            }
        }
    } else if (Array.isArray(eng) && Array.isArray(trans)) {
        const min = Math.min(eng.length, trans.length);
        for (let i = 0; i < min; i++) copyUrl(eng[i], trans[i]);
    }
}

function walk(d) {
    for (const f of fs.readdirSync(d)) {
        const p = path.join(d, f);
        if (fs.statSync(p).isDirectory()) { walk(p); continue; }
        if (f.endsWith('.json') && !f.match(/\.(ar|fr|de|es|zh|tr)\.json$/) && !f.match(/\.zh-CN\.json$/)) {
            try {
                const eng = JSON.parse(fs.readFileSync(p, 'utf-8'));
                for (const lang of langs) {
                    const transPath = p.replace('.json', '.' + lang + '.json');
                    if (!fs.existsSync(transPath)) continue;
                    try {
                        const trans = JSON.parse(fs.readFileSync(transPath, 'utf-8'));
                        copyUrl(eng, trans);
                        fs.writeFileSync(transPath, JSON.stringify(trans, null, 2), 'utf-8');
                        console.log('✅ ' + f + ' → ' + lang);
                    } catch (e) {
                        console.log('❌ ' + f + ' → ' + lang + ': ' + e.message.slice(0, 80));
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