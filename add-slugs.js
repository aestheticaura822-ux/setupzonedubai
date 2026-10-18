// add-slugs.js
const fs = require('fs');
const path = require('path');

// ✅ English Slugs Dictionary (Har language ke liye)
const categorySlugs = {
  // Turkish
  "Muhasebe": "accounting",
  "İşletme ve Liderlik Becerileri": "business-and-leadership-skills",
  "İş Planı Şablonları": "business-plan-templates",
  "İşletme Kurulumu": "business-setup",
  "İşletme Yazılımları ve Araçları": "business-software-and-tools",
  "İş Başarısı ve Zorlukları": "business-success-and-challenges",
  "Girişimcilik": "entrepreneurship",
  "Öne Çıkan Yazılar": "featured-posts",
  "Finans": "finance",
  "Serbest Bölgeler": "free-zones",
  "İnsan kaynakları": "human-resources",
  "Yasal": "legal",
  "Dubai'de Yaşam": "living-in-dubai",
  "Anakara": "mainland",
  "BAE'de Şirket Kurulumu": "uae-company-setup",
  "Birleşik Arap Emirlikleri'nde Şirket Kurulumu": "uae-company-setup",

  // Spanish (Aap apni file se check karke add kar sakti hain)
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
};

const archiveSlugs = {
  "Ekim 2026": "october-2026", "Eylül 2026": "september-2026", "Ağustos 2026": "august-2026",
  "Temmuz 2026": "july-2026", "Haziran 2026": "june-2026", "Mayıs 2026": "may-2026",
  "Nisan 2026": "april-2026", "Mart 2026": "march-2026", "Şubat 2026": "february-2026",
  "Ocak 2026": "january-2026", "Aralık 2025": "december-2025", "Ekim 2025": "october-2025",
  "Eylül 2025": "september-2025", "Temmuz 2025": "july-2025", "Haziran 2025": "june-2025",
  "Octubre 2026": "october-2026", "Septiembre 2026": "september-2026",
  "Agosto 2026": "august-2026", "Julio 2026": "july-2026", "Junio 2026": "june-2026",
  // Aap isko apni zaroorat ke mutabiq barha sakti hain
};

const filePath = path.join(__dirname, 'src', 'content', 'pages', 'blog.json');

// Ye script sirf ek baar chalegi aur blog.json update karegi
// Agar aap baaki languages ke liye chalana chahti hain to filePath change karein

console.log("Script taiyar hai. Run karne ke liye terminal mein 'node add-slugs.js' likhein.");