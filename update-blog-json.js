// update-blog-json.js
const fs = require('fs');
const path = require('path');

const contentDir = path.join(__dirname, 'src', 'content', 'pages');

// ✅ English Slugs
const categorySlugs = {
  "Muhasebe": "accounting", "İşletme ve Liderlik Becerileri": "business-and-leadership-skills",
  "İş Planı Şablonları": "business-plan-templates", "İşletme Kurulumu": "business-setup",
  "İşletme Yazılımları ve Araçları": "business-software-and-tools", "İş Başarısı ve Zorlukları": "business-success-and-challenges",
  "Girişimcilik": "entrepreneurship", "Öne Çıkan Yazılar": "featured-posts", "Finans": "finance",
  "Serbest Bölgeler": "free-zones", "İnsan kaynakları": "human-resources", "Yasal": "legal",
  "Dubai'de Yaşam": "living-in-dubai", "Anakara": "mainland", "BAE'de Şirket Kurulumu": "uae-company-setup",
  "Birleşik Arap Emirlikleri'nde Şirket Kurulumu": "uae-company-setup"
};

const archiveSlugs = {
  "Ekim 2026": "october-2026", "Eylül 2026": "september-2026", "Ağustos 2026": "august-2026",
  "Temmuz 2026": "july-2026", "Haziran 2026": "june-2026", "Mayıs 2026": "may-2026",
  "Nisan 2026": "april-2026", "Mart 2026": "march-2026", "Şubat 2026": "february-2026",
  "Ocak 2026": "january-2026", "Aralık 2025": "december-2025", "Ekim 2025": "october-2025",
  "Eylül 2025": "september-2025", "Temmuz 2025": "july-2025", "Haziran 2025": "june-2025"
};

fs.readdirSync(contentDir).forEach(file => {
  if (file.startsWith('blog.') && file.endsWith('.json')) {
    const filePath = path.join(contentDir, file);
    let json = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    let changed = false;

    // Categories
    if (json.categories) {
      json.categories = json.categories.map(cat => {
        if (!cat.slug) {
          cat.slug = categorySlugs[cat.name] || cat.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
          changed = true;
        }
        return cat;
      });
    }

    // Archives
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

    if (changed) {
      fs.writeFileSync(filePath, JSON.stringify(json, null, 2));
      console.log(`✅ Updated: ${file}`);
    }
  }
});
console.log("🎉 All files updated!");