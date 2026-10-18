const fs = require('fs');
const path = require('path');

const folder = 'src/pages/mainland';

const contentMap = {
    'HiringEmployeeManagement.tsx': { fallback: 'hiringFallback', path: 'mainland/hiring-employee-management' },
    'LaunchOperateExpand.tsx': { fallback: 'launchFallback', path: 'mainland/launch-operate-expand' },
    'MainlandActivities.tsx': { fallback: 'activitiesFallback', path: 'mainland/mainland-activities' },
    'MainlandVisa.tsx': { fallback: 'visaFallback', path: 'mainland/mainland-visa' },
    'OfficeSpaceSolutions.tsx': { fallback: 'officeFallback', path: 'mainland/office-space-solutions' },
};

function processFile(filePath, info) {
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

    const componentRegex = /export default function (\w+)\s*\([^)]*\)\s*\{/;
    const match = content.match(componentRegex);
    
    if (match) {
        const componentName = match[1];
        content = content.replace(
            componentRegex,
            `export default function ${componentName}({ tinaData }: { tinaData?: any }) {
  const { language } = useLanguage();
  const ${info.fallback} = loadContent('${info.path}', language);
  const data = tinaData?.data?.mainland || ${info.fallback};`
        );
    }

    fs.writeFileSync(filePath, content, 'utf-8');
    console.log('✅ Updated: ' + fileName);
}

for (const [fileName, info] of Object.entries(contentMap)) {
    const filePath = path.join(folder, fileName);
    if (fs.existsSync(filePath)) {
        processFile(filePath, info);
    } else {
        console.log('❌ Not found: ' + fileName);
    }
}

console.log('Done!');