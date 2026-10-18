const fs = require('fs');
const path = require('path');

const folder = 'src/pages/freezones';
const contentFolder = 'freezones';

const contentMap = {
    'ADGM.tsx': 'adgm',
    'AjmanFreeZone.tsx': 'ajman-free-zone',
    'BusinessActivities.tsx': 'business-activities',
    'D3.tsx': 'd3-free-zone',
    'DHCC.tsx': 'dhcc-free-zone',
    'DIC.tsx': 'dic',
    'DMCC.tsx': 'dmcc-free-zone',
    'DubaiAirportFreeZone.tsx': 'dafza-free-zone',
    'DubaiCommerCity.tsx': 'dubai-commer-city',
    'DubaiKnowledgePark.tsx': 'dubai-knowledge-park',
    'DubaiMediaCity.tsx': 'dubai-media-city-free-zone',
    'DubaiSiliconOasis.tsx': 'dubai-silicon-oasis-free-zone',
    'DubaiSouth.tsx': 'dubai-south-free-zone',
    'DUQE.tsx': 'duqe-free-zone',
    'DWTC.tsx': 'dwtc-free-zone',
    'FujairahCreativeCity.tsx': 'fujairah-creative-city-free-zone',
    'Hamriyah.tsx': 'hamriyah-free-zone',
    'IFZA.tsx': 'ifza-free-zone',
    'JAFZA.tsx': 'jafza-free-zone',
    'KIZAD.tsx': 'kizad-free-zone',
    'Meydan.tsx': 'meydan-free-zone',
    'RAKEZ.tsx': 'rakez-free-zone',
    'SAIF.tsx': 'saif-free-zone',
    'SHAMS.tsx': 'shams-free-zone',
    'UAQFreeZone.tsx': 'uaq-free-zone',
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