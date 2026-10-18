const fs = require('fs');
const path = require('path');

const folder = 'src/pages/Services';
const contentFolder = 'services';

const contentMap = {
    'Accounting.tsx': 'accounting',
    'BankAccount.tsx': 'bank-account',
    'Compliance.tsx': 'compliance',
    'CorporateTax.tsx': 'corporate-tax-vat',
    'DigitalMarketing.tsx': 'digital-marketing',
    'GoldenVisa.tsx': 'golden-visa',
    'ProServices.tsx': 'pro-services',
    'SEO.tsx': 'seo',
    'WebDevelopment.tsx': 'web-development',
};

function processFile(filePath, contentName) {
    let content = fs.readFileSync(filePath, 'utf-8');
    const fileName = path.basename(filePath);

    if (content.includes('loadContent')) {
        console.log('⏭️ Skip: ' + fileName);
        return;
    }

    if (!content.includes("from '../../i18n/LanguageContext'")) {
        content = content.replace(
            /^(import .*?;)\n/m,
            "$1\nimport { useLanguage } from '../../i18n/LanguageContext';\nimport { loadContent } from '../../lib/loadContent';\n"
        );
    }

    const componentRegex = /(export default function \w+\s*\([^)]*\)\s*\{)/;
    const match = content.match(componentRegex);
    
    if (match) {
        content = content.replace(
            componentRegex,
            `$1
  const { language } = useLanguage();
  const data = loadContent('${contentFolder}/${contentName}', language);
`
        );
    }

    fs.writeFileSync(filePath, content, 'utf-8');
    console.log('✅ Updated: ' + fileName);
}

for (const [fileName, contentName] of Object.entries(contentMap)) {
    const filePath = path.join(folder, fileName);
    if (fs.existsSync(filePath)) {
        processFile(filePath, contentName);
    } else {
        console.log('❌ Not found: ' + fileName);
    }
}

console.log('Done!');