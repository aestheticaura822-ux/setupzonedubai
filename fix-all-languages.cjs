// fix-all-languages.js
const fs = require('fs');
const path = require('path');

const contentDir = path.join(__dirname, 'src', 'content', 'pages');

// ✅ Universal English Dictionary (Har language ke liye)
const categorySlugs = {
  // English & Turkish
  "Muhasebe": "accounting", "Accounting": "accounting",
  "İşletme ve Liderlik Becerileri": "business-and-leadership-skills", "Business & Leadership Skills": "business-and-leadership-skills",
  "İş Planı Şablonları": "business-plan-templates", "Business Plan Templates": "business-plan-templates",
  "İşletme Kurulumu": "business-setup", "Business Setup": "business-setup",
  "İşletme Yazılımları ve Araçları": "business-software-and-tools", "Business Software & Tools": "business-software-and-tools",
  "İş Başarısı ve Zorlukları": "business-success-and-challenges", "Business Success & Challenges": "business-success-and-challenges",
  "Girişimcilik": "entrepreneurship", "Entrepreneurship": "entrepreneurship",
  "Öne Çıkan Yazılar": "featured-posts", "Featured Posts": "featured-posts",
  "Finans": "finance", "Finance": "finance",
  "Serbest Bölgeler": "free-zones", "Free Zones": "free-zones",
  "İnsan kaynakları": "human-resources", "Human Resources": "human-resources",
  "Yasal": "legal", "Legal": "legal",
  "Dubai'de Yaşam": "living-in-dubai", "Living in Dubai": "living-in-dubai",
  "Anakara": "mainland", "Mainland": "mainland",
  "BAE'de Şirket Kurulumu": "uae-company-setup", "UAE Company Setup": "uae-company-setup",
  "Birleşik Arap Emirlikleri'nde Şirket Kurulumu": "uae-company-setup",
  
  // Arabic (Agar aapki Arabic file mein naam alag hain to yahan add karein)
  "محاسبة": "accounting",
  "المحاسبة": "accounting",
  
  // Spanish
  "Contabilidad": "accounting",
  "Habilidades de Liderazgo": "business-and-leadership-skills",
  "Plantillas de Planes de Negocio": "business-plan-templates",
  "Configuración de Empresa": "business-setup",
  "Software y Herramientas": "business-software-and-tools",
  "Éxito y Desafíos": "business-success-and-challenges",
  "Emprendimiento": "entrepreneurship",
  "Artículos Destacados": "featured-posts",
  "Finanzas": "finance",
  "Zonas Francas": "free-zones",
  "Recursos Humanos": "human-resources",
  "Legal": "legal",
  "Vivir en Dubái": "living-in-dubai",
  "Continente": "mainland",
  
  // German
  "Buchhaltung": "accounting",
  "Geschäfts- und Führungskompetenzen": "business-and-leadership-skills",
  "Vorlagen für Geschäftspläne": "business-plan-templates",
  "Unternehmensgründung": "business-setup",
  "Business-Software und Tools": "business-software-and-tools",
  "Geschäftlicher Erfolg und Herausforderungen": "business-success-and-challenges",
  "Unternehmertum": "entrepreneurship",
  "Ausgewählte Beiträge": "featured-posts",
  "Finanzen": "finance",
  "Freizonen": "free-zones",
  "Personalwesen": "human-resources",
  "Recht": "legal",
  "Leben in Dubai": "living-in-dubai",
  "Festland": "mainland",
  "Firmengründung in den VAE": "uae-company-setup"
};

const archiveSlugs = {
  "Ekim 2026": "october-2026", "October 2026": "october-2026",
  "Eylül 2026": "september-2026", "September 2026": "september-2026",
  "Ağustos 2026": "august-2026", "August 2026": "august-2026",
  "Temmuz 2026": "july-2026", "July 2026": "july-2026",
  "Haziran 2026": "june-2026", "June 2026": "june-2026",
  "Mayıs 2026": "may-2026", "May 2026": "may-2026",
  "Nisan 2026": "april-2026", "April 2026": "april-2026",
  "Mart 2026": "march-2026", "March 2026": "march-2026",
  "Şubat 2026": "february-2026", "February 2026": "february-2026",
  "Ocak 2026": "january-2026", "January 2026": "january-2026",
  "Aralık 2025": "december-2025", "December 2025": "december-2025",
  "Ekim 2025": "october-2025", "October 2025": "october-2025",
  "Eylül 2025": "september-2025",
  "Temmuz 2025": "july-2025",
  "Haziran 2025": "june-2025"
};

// ✅ Ye function har file ko check karega
fs.readdirSync(contentDir).forEach(file => {
  // Sirf blog.*.json files ko pakdo
  if (file.startsWith('blog.') && file.endsWith('.json')) {
    const filePath = path.join(contentDir, file);
    let json = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    let changed = false;

    // Categories mein slug add karo
    if (json.categories) {
      json.categories = json.categories.map(cat => {
        if (!cat.slug) {
          // Agar dictionary mein hai to wahan se lo, warna auto-generate karo
          cat.slug = categorySlugs[cat.name] || cat.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
          changed = true;
        }
        return cat;
      });
    }

    // Archives ko object mein badlo aur monthKey add karo
    if (json.archives) {
      json.archives = json.archives.map(arch => {
        if (typeof arch === 'string') {
          const name = arch;
          const monthKey = archiveSlugs[name] || name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
          changed = true;
          return { name, monthKey };
        }
        return arch;
      });
    }

    // Agar kuch change hua to file save karo
    if (changed) {
      fs.writeFileSync(filePath, JSON.stringify(json, null, 2));
      console.log(`✅ Success: ${file} updated with English slugs.`);
    } else {
      console.log(`⏭️  Skipped: ${file} (already has slugs).`);
    }
  }
});
console.log("🎉 All 7 languages processed successfully!");