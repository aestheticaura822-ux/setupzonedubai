const fs = require('fs');
const file = 'src/content/blog/posts.fr.json';
let content = fs.readFileSync(file, 'utf-8');
content = content.replace(/cÅ“ur/g, 'cœur');
fs.writeFileSync(file, content, 'utf-8');
console.log('Fixed: posts.fr.json');