const fs = require('fs');
const path = require('path');
const https = require('https');

const KEY = 'AQ.Ab8RN6J5OGVoId8DcHkVrgGRAkCWk_3yHSFRUh1psm4BbLYfBg';
const HOSTNAME = 'generativelanguage.googleapis.com';
const MODEL = 'gemini-3.8-flash';
const PATH_URL = `/v1beta/models/${MODEL}:generateContent?key=${KEY}`;

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

function httpsPost(data) {
    return new Promise((resolve, reject) => {
        const body = JSON.stringify(data);
        const options = {
            hostname: HOSTNAME,
            path: PATH_URL,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': Buffer.byteLength(body)
            }
        };
        
        const req = https.request(options, (res) => {
            let responseData = '';
            res.on('data', chunk => responseData += chunk);
            res.on('end', () => {
                try {
                    resolve(JSON.parse(responseData));
                } catch (e) {
                    reject(new Error('Invalid JSON: ' + responseData.slice(0, 200)));
                }
            });
        });
        
        req.on('error', reject);
        req.write(body);
        req.end();
    });
}

async function translate(eng) {
    const result = await httpsPost({
        contents: [{
            parts: [{
                text: 'Translate this JSON to Simplified Chinese (zh-CN). Return ONLY valid JSON, preserve all keys exactly, no markdown, no explanations:\n' + eng
            }]
        }],
        generationConfig: {
            temperature: 0.3,
            responseMimeType: 'application/json'
        }
    });
    
    if (!result.candidates) {
        const err = new Error(JSON.stringify(result).slice(0, 200));
        err.status = result.error?.code;
        throw err;
    }
    
    return result.candidates[0].content.parts[0].text;
}

// ✅ RETRY LOOP — 503 aaye toh 30 sec baad dobara try karo
async function translateWithRetry(eng, maxRetries = 10) {
    for (let i = 1; i <= maxRetries; i++) {
        try {
            const result = await translate(eng);
            console.log(`   ✅ Success on attempt ${i}`);
            return result;
        } catch (e) {
            const is503 = e.status === 503 || e.message.includes('503');
            console.log(`   ⚠️ Attempt ${i}/${maxRetries}: ${is503 ? '503 Busy' : e.message.slice(0, 100)}`);
            
            if (i === maxRetries) throw e;
            
            // Wait 30 sec before retry (503 ke liye zyada wait)
            await sleep(is503 ? 30000 : 10000);
        }
    }
}

async function walk(dir) {
    for (const f of fs.readdirSync(dir)) {
        const p = path.join(dir, f);
        if (fs.statSync(p).isDirectory()) {
            await walk(p);
            continue;
        }
        if (f.endsWith('.json') && !f.match(/\.(ar|fr|de|es|zh|tr)\.json$/)) {
            const out = p.replace('.json', '.zh.json');
            if (fs.existsSync(out)) {
                console.log('⏭️ ' + f);
                continue;
            }
            try {
                const eng = fs.readFileSync(p, 'utf-8');
                console.log('🌐 ' + f);
                const zh = await translateWithRetry(eng);
                JSON.parse(zh);
                fs.writeFileSync(out, zh, 'utf-8');
                console.log('✅ ' + f);
                await sleep(10000);  // 10 sec delay between files
            } catch (e) {
                console.log('❌ ' + f + ': ' + e.message.slice(0, 100));
                await sleep(10000);
            }
        }
    }
}

walk('src/content').then(() => console.log('🎉 Done!'));