const fs = require('fs');
const path = require('path');

const files = [
    'src/content/blog/archives.de.json',
    'src/content/blog/archives.fr.json',
    'src/content/blog/archives.es.json',
    'src/content/blog/archives.tr.json'
];

// Common mojibake fixes
const fixes = {
    'û¥': 'ü', 'ûÙ': 'í', 'ôÊ': 'ä', 'ôÑ': 'ö', 'ôú': 'ú',
    'ôü': 'ü', 'é': 'ü', 'ã': '"', 'ã': '"',
    'éƒ': '', 'ûÂã ã': '→', 'ûÂ': '', 'ã ': '',
    'ûÙôÊ': 'ä', 'ûÙôÑ': 'ö', 'ûÙôú': 'ú',
    'ûÙé': 'Ü', 'ûÙã': 'Ä', 'ûÙã°': 'Ö',
    'ûô': 'ü', 'û¥': 'ü', 'ô': '', 'é': '',
    'ûÙ': 'í', 'Ùô': '', 'ô': '', 'Ê': 'ä',
};

function repair(filePath) {
    try {
        let content = fs.readFileSync(filePath, 'utf-8');
        
        // Remove BOM
        if (content.charCodeAt(0) === 0xFEFF) content = content.slice(1);
        
        // Fix mojibake
        for (const [bad, good] of Object.entries(fixes)) {
            content = content.split(bad).join(good);
        }
        
        // Fix broken quotes inside strings
        // Replace “ and ” with escaped quotes
        content = content.replace(/“/g, '\\"').replace(/”/g, '\\"');
        
        // Try parse
        try {
            JSON.parse(content);
            fs.writeFileSync(filePath, content, 'utf-8');
            console.log(`✅ Fixed: ${path.basename(filePath)}`);
        } catch (e) {
            console.log(`❌ Still broken: ${path.basename(filePath)} — ${e.message.slice(0, 100)}`);
        }
    } catch (e) {
        console.log(`❌ Error: ${path.basename(filePath)} — ${e.message}`);
    }
}

files.forEach(repair);
console.log('Done!');