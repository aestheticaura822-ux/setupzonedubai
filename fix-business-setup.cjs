const fs = require('fs');
const path = require('path');

const folder = 'src/pages/Services/business-setup';
const contentFolder = 'business-setup';

const contentMap = {
    'BranchOfficeSetup.tsx': 'branch-office-setup',
    'CompanyFormation.tsx': 'company-formation',
    'CompanyNameRegistration.tsx': 'company-name-registration',
    'CompanyRegistration.tsx': 'company-registration',
    'DependentVisa.tsx': 'dependent-visa',
    'EcommerceLicense.tsx': 'ecommerce-license',
    'FreeZoneCompanySetup.tsx': 'free-zone-company-setup',
    'GoldenVisaServices.tsx': 'golden-visa-services',
    'LocalBusinessPartner.tsx': 'local-business-partner',
    'LocalCorporateSponsor.tsx': 'local-corporate-sponsor',
    'MainlandCompanyFormation.tsx': 'mainland-company-formation',
    'OffshoreCompanySetup.tsx': 'offshore-company-setup',
    'ResidenceVisa.tsx': 'residence-visa',
    'ResidenceVisaServices.tsx': 'residence-visa-services',
};

function processFile(filePath, contentName) {
    let content = fs.readFileSync(filePath, 'utf-8');
    const fileName = path.basename(filePath);

    if (content.includes('loadContent')) {
        console.log('⏭️ Skip: ' + fileName);
        return;
    }

    if (!content.includes("from '../../../i18n/LanguageContext'")) {
        content = content.replace(
            /^(import .*?;)\n/m,
            "$1\nimport { useLanguage } from '../../../i18n/LanguageContext';\nimport { loadContent } from '../../../lib/loadContent';\n"
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