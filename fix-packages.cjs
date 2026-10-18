const fs = require('fs');
const path = require('path');

const folder = 'src/pages/packages';
const contentFolder = 'packages';

const contentMap = {
    'CreativeCitySetup.tsx': 'creative-city',
    'DIFCCompanySetup.tsx': 'difc-company-setup',
    'DMCCSetupPackage.tsx': 'dmcc-setup-package',
    'IFZASetupPackage.tsx': 'ifza-setup-package',
    'JAFZASetupPackage.tsx': 'jafza-setup-package',
    'MeydanSetupPackage.tsx': 'meydan-setup-package',
    'RAKEZSetupPackage.tsx': 'rakez-setup-package',
    'SHAMSSetupPackage.tsx': 'shams-setup-package',
    'SPCSetupPackage.tsx': 'spc-setup-package',
    'SRTIPSetupPackage.tsx': 'srtip-setup-package',
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