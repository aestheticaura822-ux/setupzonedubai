const fs = require('fs');
const path = require('path');

function tryParse(content) {
    try {
        JSON.parse(content);
        return { valid: true, data: JSON.parse(content) };
    } catch (e) {
        return { valid: false, error: e.message };
    }
}

function repairJSON(content) {
    let fixed = content;
    
    // Remove BOM
    if (fixed.charCodeAt(0) === 0xFEFF) fixed = fixed.slice(1);
    
    // Fix common issues:
    // 1. Missing comma between objects
    fixed = fixed.replace(/}\s*{/g, '},{');
    
    // 2. Missing comma after string before object
    fixed = fixed.replace(/"\s*{/g, '",{');
    
    // 3. Missing comma after ] before {
    fixed = fixed.replace(/]\s*{/g, '],{');
    
    // 4. Missing comma after } before "
    fixed = fixed.replace(/}\s*"/g, '},"');
    
    // 5. Missing comma after " before [ or {
    fixed = fixed.replace(/"\s*\[/g, '",[');
    
    // 6. Trailing commas
    fixed = fixed.replace(/,\s*}/g, '}').replace(/,\s*]/g, ']');
    
    // 7. Fix curly quotes
    fixed = fixed.replace(/[""]/g, '"').replace(/['']/g, "'");
    
    // 8. Fix escaped quotes in text
    fixed = fixed.replace(/\\"/g, '\\"');
    
    return fixed;
}

function repairFile(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf-8');
        const parseResult = tryParse(content);
        
        if (parseResult.valid) {
            console.log('✅ Already valid: ' + path.basename(filePath));
            return true;
        }
        
        console.log('🔧 Repairing: ' + path.basename(filePath));
        
        // Try basic repair
        let fixed = repairJSON(content);
        
        try {
            JSON.parse(fixed);
            fs.writeFileSync(filePath, fixed, 'utf-8');
            console.log('✅ Fixed: ' + path.basename(filePath));
            return true;
        } catch (e) {
            console.log('❌ Cannot fix: ' + path.basename(filePath) + ' — ' + e.message.slice(0, 80));
            return false;
        }
    } catch (e) {
        console.log('❌ Error reading: ' + path.basename(filePath) + ' — ' + e.message);
        return false;
    }
}

let total = 0;
let fixed = 0;
let failed = 0;

function walk(dir) {
    for (const f of fs.readdirSync(dir)) {
        const p = path.join(dir, f);
        if (fs.statSync(p).isDirectory()) {
            walk(p);
            continue;
        }
        if (f.endsWith('.json')) {
            total++;
            if (repairFile(p)) fixed++;
            else failed++;
        }
    }
}

walk('src/content');

console.log('\n========================================');
console.log('Total: ' + total);
console.log('✅ Fixed: ' + fixed);
console.log('❌ Failed: ' + failed);
console.log('========================================');