// tina/config.ts
import { defineConfig } from "tinacms";
var config_default = defineConfig({
  branch: process.env.VERCEL_GIT_COMMIT_REF || "main",
  clientId: process.env.TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public"
    }
  },
  // search: {
  //   tina: {
  //     indexerToken: "",
  //     stopwordLanguages: ["eng"],
  //   },
  // },
  schema: {
    collections: [
      // ============================================================
      // COLLECTION 2: Footer
      // ============================================================
      {
        name: "footer",
        label: "Footer",
        path: "src/content/footer",
        match: { include: "footer" },
        // ✅ یہ شامل کریں
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          {
            type: "object",
            name: "brand",
            label: "Brand Info",
            fields: [
              { type: "string", name: "name", label: "Brand Name" },
              { type: "string", name: "shortName", label: "Short Name (Logo)" },
              { type: "string", name: "operatedBy", label: "Operated By" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              {
                type: "object",
                name: "badges",
                label: "Trust Badges",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.label || "Badge" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon (ShieldCheck | Star | Building2)" },
                  { type: "string", name: "label", label: "Label" }
                ]
              },
              { type: "string", name: "socialsTitle", label: "Socials Title" }
            ]
          },
          {
            type: "object",
            name: "ctaBanner",
            label: "CTA Banner",
            fields: [
              { type: "image", name: "image", label: "Background Image" },
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlighted Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              { type: "string", name: "primaryCta", label: "Primary CTA Text" },
              { type: "string", name: "secondaryCta", label: "Secondary CTA Text" },
              {
                type: "object",
                name: "stats",
                label: "Stats",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.value || "Stat" }) },
                fields: [
                  { type: "string", name: "value", label: "Value" },
                  { type: "string", name: "label", label: "Label" }
                ]
              }
            ]
          },
          { type: "string", name: "quickLinksTitle", label: "Quick Links Title" },
          {
            type: "object",
            name: "quickLinks",
            label: "Quick Links",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.name || "Link" }) },
            fields: [
              { type: "string", name: "name", label: "Name" },
              { type: "string", name: "href", label: "Href" },
              { type: "string", name: "icon", label: "Icon (HomeIcon | Users | Wallet | FileText | MessageCircle)" }
            ]
          },
          { type: "string", name: "servicesTitle", label: "Services Title" },
          {
            type: "object",
            name: "serviceLinks",
            label: "Service Links",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.name || "Service" }) },
            fields: [
              { type: "string", name: "name", label: "Name" },
              { type: "string", name: "slug", label: "Slug" }
            ]
          },
          { type: "string", name: "contactTitle", label: "Contact Title" },
          {
            type: "object",
            name: "contact",
            label: "Contact Info",
            fields: [
              {
                type: "object",
                name: "phone",
                label: "Phone",
                fields: [
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "value", label: "Value" },
                  { type: "string", name: "hours", label: "Hours" },
                  { type: "string", name: "href", label: "Href" }
                ]
              },
              {
                type: "object",
                name: "email",
                label: "Email",
                fields: [
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "value", label: "Value" },
                  { type: "string", name: "href", label: "Href" }
                ]
              },
              {
                type: "object",
                name: "address",
                label: "Address",
                fields: [
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "line1", label: "Line 1" },
                  { type: "string", name: "line2", label: "Line 2" },
                  { type: "string", name: "href", label: "Href" }
                ]
              },
              {
                type: "object",
                name: "whatsapp",
                label: "WhatsApp",
                fields: [
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "message", label: "Message", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "socials",
            label: "Social Links",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.name || "Social" }) },
            fields: [
              { type: "string", name: "name", label: "Name" },
              { type: "string", name: "icon", label: "Icon (FaFacebookF | FaInstagram | FaTiktok | FaYoutube | FaLinkedinIn | FaXTwitter | FaTelegramPlane | FaPinterestP)" },
              { type: "string", name: "href", label: "Href" },
              { type: "string", name: "color", label: "Gradient Color (Tailwind classes)" }
            ]
          },
          {
            type: "object",
            name: "reviews",
            label: "Google Reviews",
            fields: [
              { type: "string", name: "rating", label: "Rating" },
              { type: "string", name: "outOf", label: "Out Of" },
              { type: "string", name: "reviewCount", label: "Review Count" },
              { type: "string", name: "googleLabel", label: "Google Label" },
              { type: "string", name: "ctaText", label: "CTA Text" },
              { type: "string", name: "ctaHref", label: "CTA Href" }
            ]
          },
          {
            type: "object",
            name: "bottomBar",
            label: "Bottom Bar",
            fields: [
              { type: "string", name: "copyright", label: "Copyright" },
              { type: "string", name: "rightsText", label: "Rights Text" },
              { type: "string", name: "madeWithText", label: "Made With Text" }
            ]
          },
          {
            type: "object",
            name: "disclaimer",
            label: "Disclaimer",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "text", label: "Text", ui: { component: "textarea" } },
              { type: "string", name: "lastReviewed", label: "Last Reviewed" },
              { type: "string", name: "verifiedText", label: "Verified Text" }
            ]
          }
        ]
      },
      // ============================================================
      // COLLECTION 3: Pages (with blog fields included)
      // ============================================================
      {
        name: "pages",
        label: "Pages",
        path: "src/content/pages",
        match: { include: "pages*" },
        // ✅ ye change karo
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: "image", name: "heroImage", label: "Hero Background" },
          { type: "string", name: "heroBadge", label: "Hero Badge" },
          { type: "string", name: "heroTitle", label: "Hero Title" },
          { type: "string", name: "heroTitleHighlight", label: "Hero Highlighted Words" },
          { type: "string", name: "heroSubtitle", label: "Hero Subtitle", ui: { component: "textarea" } },
          { type: "string", name: "heroChips", label: "Hero Chips", list: true },
          { type: "image", name: "heroImageCard", label: "Hero Card Image" },
          { type: "string", name: "heroCardBadge", label: "Hero Card Badge" },
          { type: "string", name: "heroCardTitle", label: "Hero Card Title" },
          { type: "string", name: "heroCardText", label: "Hero Card Text", ui: { component: "textarea" } },
          {
            type: "object",
            name: "stats",
            label: "Stats",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.value || "Stat" }) },
            fields: [
              { type: "string", name: "icon", label: "Icon" },
              { type: "string", name: "value", label: "Value" },
              { type: "string", name: "label", label: "Label" }
            ]
          },
          {
            type: "object",
            name: "whoWeAre",
            label: "Who We Are",
            fields: [
              { type: "image", name: "image", label: "Image" },
              { type: "string", name: "imageBadgeTitle", label: "Image Badge Title" },
              { type: "string", name: "imageBadgeText", label: "Image Badge Text" },
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "paragraphs", label: "Paragraphs", list: true, ui: { component: "textarea" } },
              { type: "string", name: "highlights", label: "Highlights", list: true }
            ]
          },
          {
            type: "object",
            name: "whatMakesUsDifferent",
            label: "What Makes Us Different",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "paragraphs", label: "Paragraphs", list: true, ui: { component: "textarea" } },
              {
                type: "object",
                name: "features",
                label: "Features",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.label || "Feature" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "label", label: "Label" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "whatWeDo",
            label: "What We Do",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle" },
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Item" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "desc", label: "Description", ui: { component: "textarea" } }
                ]
              },
              {
                type: "object",
                name: "ctaCard",
                label: "CTA Card",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "text", label: "Text" },
                  { type: "string", name: "buttonText", label: "Button Text" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "whoWeServe",
            label: "Who We Serve",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Item" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "desc", label: "Description", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "missionVision",
            label: "Mission & Vision",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              {
                type: "object",
                name: "mission",
                label: "Mission",
                fields: [
                  { type: "string", name: "number", label: "Number" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "text", label: "Text", ui: { component: "textarea" } }
                ]
              },
              {
                type: "object",
                name: "vision",
                label: "Vision",
                fields: [
                  { type: "string", name: "number", label: "Number" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "text", label: "Text", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "whyChooseUs",
            label: "Why Choose Us",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.text || "Item" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "text", label: "Text", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "setupSimplified",
            label: "Setup Simplified",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "features",
                label: "Features",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Feature" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "desc", label: "Description", ui: { component: "textarea" } }
                ]
              },
              { type: "string", name: "footerText", label: "Footer Text", ui: { component: "textarea" } }
            ]
          },
          {
            type: "object",
            name: "faqs",
            label: "FAQs",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "contactCard",
                label: "Contact Card",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "text", label: "Text" },
                  { type: "string", name: "phone", label: "Phone" },
                  { type: "string", name: "phoneHref", label: "Phone Href" },
                  { type: "string", name: "email", label: "Email" },
                  { type: "string", name: "emailHref", label: "Email Href" },
                  { type: "string", name: "whatsappText", label: "WhatsApp Text" },
                  { type: "string", name: "whatsappMessage", label: "WhatsApp Message", ui: { component: "textarea" } }
                ]
              },
              {
                type: "object",
                name: "items",
                label: "FAQ Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.q || "FAQ" }) },
                fields: [
                  { type: "string", name: "q", label: "Question" },
                  { type: "string", name: "a", label: "Answer", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "finalCTA",
            label: "Final CTA",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              { type: "string", name: "chips", label: "Chips", list: true },
              {
                type: "object",
                name: "buttons",
                label: "Buttons",
                fields: [
                  { type: "string", name: "primary", label: "Primary Button" },
                  { type: "string", name: "secondary", label: "Secondary Button" }
                ]
              },
              {
                type: "object",
                name: "whatsapp",
                label: "WhatsApp",
                fields: [
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "value", label: "Value" },
                  { type: "string", name: "note", label: "Note" }
                ]
              },
              {
                type: "object",
                name: "email",
                label: "Email",
                fields: [
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "value", label: "Value" },
                  { type: "string", name: "note", label: "Note" }
                ]
              },
              {
                type: "object",
                name: "office",
                label: "Office",
                fields: [
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "line1", label: "Line 1" },
                  { type: "string", name: "line2", label: "Line 2" }
                ]
              }
            ]
          },
          // ----- Blog fields (added to pages collection) -----
          { type: "string", name: "blogHeroBadge", label: "Blog Hero Badge" },
          { type: "string", name: "blogHeroTitle", label: "Blog Hero Title" },
          { type: "string", name: "blogHeroTitleHighlight", label: "Blog Hero Highlight Word" },
          { type: "string", name: "blogHeroSubtitle", label: "Blog Hero Subtitle", ui: { component: "textarea" } },
          { type: "image", name: "blogHeroImage", label: "Blog Hero Background Image" },
          { type: "string", name: "latestArticlesTitle", label: "Latest Articles Title" },
          { type: "string", name: "trendingLabel", label: "Trending Label" },
          { type: "string", name: "readMoreLabel", label: "Read More Label" },
          {
            type: "object",
            name: "blogPosts",
            label: "Blog Posts",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.title || "Post" }) },
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "date", label: "Date" },
              { type: "string", name: "readTime", label: "Read Time" },
              { type: "string", name: "category", label: "Category" },
              { type: "string", name: "excerpt", label: "Excerpt", ui: { component: "textarea" } },
              { type: "image", name: "image", label: "Image" }
            ]
          },
          {
            type: "object",
            name: "blogCategories",
            label: "Blog Categories",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.name || "Category" }) },
            fields: [
              { type: "string", name: "name", label: "Name" },
              { type: "number", name: "count", label: "Count" }
            ]
          },
          { type: "string", name: "archives", label: "Archives", list: true },
          { type: "string", name: "popularTags", label: "Popular Tags", list: true },
          {
            type: "object",
            name: "blogSidebar",
            label: "Blog Sidebar",
            fields: [
              { type: "string", name: "searchTitle", label: "Search Title" },
              { type: "string", name: "searchPlaceholder", label: "Search Placeholder" },
              { type: "string", name: "recentPostsTitle", label: "Recent Posts Title" },
              { type: "string", name: "archivesTitle", label: "Archives Title" },
              { type: "string", name: "categoriesTitle", label: "Categories Title" },
              { type: "string", name: "tagsTitle", label: "Tags Title" },
              {
                type: "object",
                name: "ctaCard",
                label: "CTA Card",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "text", label: "Text", ui: { component: "textarea" } },
                  { type: "string", name: "buttonText", label: "Button Text" },
                  { type: "string", name: "whatsappMessage", label: "WhatsApp Message", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "blogFaqs",
            label: "Blog FAQs",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "contactCard",
                label: "Contact Card",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "text", label: "Text" },
                  { type: "string", name: "phone", label: "Phone" },
                  { type: "string", name: "phoneHref", label: "Phone Href" },
                  { type: "string", name: "email", label: "Email" },
                  { type: "string", name: "emailHref", label: "Email Href" },
                  { type: "string", name: "whatsappText", label: "WhatsApp Text" },
                  { type: "string", name: "whatsappMessage", label: "WhatsApp Message", ui: { component: "textarea" } }
                ]
              },
              {
                type: "object",
                name: "items",
                label: "FAQ Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.q || "FAQ" }) },
                fields: [
                  { type: "string", name: "q", label: "Question" },
                  { type: "string", name: "a", label: "Answer", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "blogFinalCTA",
            label: "Blog Final CTA",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "buttons",
                label: "Buttons",
                fields: [
                  { type: "string", name: "primary", label: "Primary Button" },
                  { type: "string", name: "secondary", label: "Secondary Button" }
                ]
              },
              {
                type: "object",
                name: "stats",
                label: "Stats",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.value || "Stat" }) },
                fields: [
                  { type: "string", name: "value", label: "Value" },
                  { type: "string", name: "label", label: "Label" }
                ]
              }
            ]
          }
        ]
      },
      // ============================================================
      // COLLECTION 4: Blog Posts
      // ============================================================
      {
        name: "blogPosts",
        label: "Blog Posts",
        path: "src/content/blog",
        match: { include: "posts" },
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          {
            type: "object",
            name: "posts",
            label: "All Posts",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.title || "Post" }) },
            fields: [
              { type: "string", name: "slug", label: "Slug (URL)" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "date", label: "Date (e.g., Oct 15, 2026)" },
              { type: "string", name: "readTime", label: "Read Time (e.g., 8 min)" },
              { type: "string", name: "category", label: "Category" },
              { type: "string", name: "tags", label: "Tags", list: true },
              { type: "string", name: "excerpt", label: "Excerpt", ui: { component: "textarea" } },
              { type: "image", name: "image", label: "Featured Image" }
            ]
          },
          {
            type: "object",
            name: "categories",
            label: "Categories",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.name || "Category" }) },
            fields: [
              { type: "string", name: "name", label: "Name" },
              { type: "string", name: "slug", label: "Slug" },
              { type: "number", name: "count", label: "Count" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } }
            ]
          },
          { type: "string", name: "archiveNames", label: "Archive Month Names (e.g., October 2026)", list: true },
          { type: "string", name: "popularTags", label: "Popular Tags", list: true }
        ]
      },
      // ============================================================
      // COLLECTION 5: Blog Archives
      // ============================================================
      {
        name: "blogArchives",
        label: "Blog Archives (Monthly)",
        path: "src/content/blog",
        match: { include: "archives" },
        // ← YE
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          {
            type: "object",
            name: "archives",
            label: "Archive Months",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.name ? `${item.name} ${item.year || ""}` : "Archive Month" }) },
            fields: [
              { type: "string", name: "monthKey", label: "Month Key (e.g., october-2026)" },
              { type: "string", name: "name", label: "Month Name (e.g., October)" },
              { type: "string", name: "year", label: "Year (e.g., 2026)" },
              { type: "string", name: "intro", label: "Intro Paragraphs", list: true, ui: { component: "textarea" } },
              {
                type: "object",
                name: "featuredPosts",
                label: "Featured Posts",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Featured Post" }) },
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "date", label: "Date" },
                  { type: "string", name: "readTime", label: "Read Time" },
                  { type: "string", name: "author", label: "Author" },
                  { type: "string", name: "category", label: "Category" },
                  { type: "image", name: "image", label: "Featured Image" },
                  { type: "string", name: "intro", label: "Intro Paragraph", ui: { component: "textarea" } },
                  {
                    type: "object",
                    name: "sections",
                    label: "Content Sections",
                    list: true,
                    ui: { itemProps: (item) => ({ label: item?.heading || "Section" }) },
                    fields: [
                      { type: "string", name: "heading", label: "Heading" },
                      { type: "string", name: "content", label: "Content Paragraphs", list: true, ui: { component: "textarea" } }
                    ]
                  },
                  {
                    type: "object",
                    name: "faq",
                    label: "FAQs",
                    list: true,
                    ui: { itemProps: (item) => ({ label: item?.q || "FAQ" }) },
                    fields: [
                      { type: "string", name: "q", label: "Question" },
                      { type: "string", name: "a", label: "Answer", ui: { component: "textarea" } }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      // ============================================================
      // COLLECTION 6: Blog Post Content
      // ============================================================
      {
        name: "postContent",
        label: "Blog Post Content",
        path: "src/content/blog",
        match: { include: "postContent" },
        // ← YE
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          {
            type: "object",
            name: "postContents",
            label: "Post Contents",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.slug ? `\u{1F4C4} ${item.slug}` : "Post Content" }) },
            fields: [
              { type: "string", name: "slug", label: "Slug (must match posts.json)", description: "This must exactly match the slug in posts.json" },
              {
                type: "object",
                name: "content",
                label: "Content Blocks",
                list: true,
                ui: {
                  itemProps: (item) => {
                    const type = item?.type || "block";
                    const preview = item?.text?.slice(0, 40) || item?.heading?.slice(0, 40) || item?.items?.[0]?.slice(0, 40) || item?.faqItems?.[0]?.q?.slice(0, 40) || "";
                    return `${type}: ${preview}${preview.length >= 40 ? "..." : ""}`;
                  }
                },
                fields: [
                  {
                    type: "string",
                    name: "type",
                    label: "Block Type",
                    options: [
                      { value: "paragraph", label: "Paragraph" },
                      { value: "h2", label: "Heading 2" },
                      { value: "h3", label: "Heading 3" },
                      { value: "callout", label: "Callout / Note" },
                      { value: "list", label: "Bullet List" },
                      { value: "steps", label: "Numbered Steps" },
                      { value: "faq", label: "FAQ Block" },
                      { value: "closing", label: "Closing / CTA Box" }
                    ]
                  },
                  { type: "string", name: "heading", label: "Heading (for h2, h3)", ui: { component: "textarea" } },
                  { type: "string", name: "text", label: "Text (for paragraph, h2, h3, callout, closing)", ui: { component: "textarea" } },
                  { type: "string", name: "items", label: "Items (for list, steps)", list: true, ui: { component: "textarea" } },
                  {
                    type: "object",
                    name: "faqItems",
                    label: "FAQ Items",
                    list: true,
                    ui: { itemProps: (item) => ({ label: item?.q?.slice(0, 50) || "FAQ" }) },
                    fields: [
                      { type: "string", name: "q", label: "Question" },
                      { type: "string", name: "a", label: "Answer", ui: { component: "textarea" } }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      // ============================================================
      // COLLECTION 7: Blog Tag Content
      // ============================================================
      {
        name: "tagContent",
        label: "Blog Tag Content",
        path: "src/content/blog",
        match: { include: "tagContent" },
        // ← YE
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          {
            type: "object",
            name: "tagContents",
            label: "Tag Contents",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.name ? `#${item.name}` : "Tag" }) },
            fields: [
              { type: "string", name: "slug", label: "Slug (must match tag name)" },
              { type: "string", name: "name", label: "Tag Name" },
              { type: "string", name: "description", label: "Short Description", ui: { component: "textarea" } },
              { type: "string", name: "longIntro", label: "Long Intro", ui: { component: "textarea" } },
              {
                type: "object",
                name: "featuredPosts",
                label: "Featured Posts",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Featured Post" }) },
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "date", label: "Date" },
                  { type: "string", name: "readTime", label: "Read Time" },
                  { type: "string", name: "author", label: "Author" },
                  { type: "string", name: "category", label: "Category" },
                  { type: "image", name: "image", label: "Image" },
                  { type: "string", name: "intro", label: "Intro", ui: { component: "textarea" } },
                  {
                    type: "object",
                    name: "sections",
                    label: "Content Sections",
                    list: true,
                    ui: { itemProps: (item) => ({ label: item?.heading || "Section" }) },
                    fields: [
                      { type: "string", name: "heading", label: "Heading" },
                      { type: "string", name: "content", label: "Content Paragraphs", list: true, ui: { component: "textarea" } }
                    ]
                  },
                  {
                    type: "object",
                    name: "faq",
                    label: "FAQs",
                    list: true,
                    // ← ADD THIS
                    ui: { itemProps: (item) => ({ label: item?.q || "FAQ" }) },
                    fields: [
                      { type: "string", name: "q", label: "Question" },
                      { type: "string", name: "a", label: "Answer", ui: { component: "textarea" } }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      // ============================================================
      // COLLECTION 8: Calculator
      // ============================================================
      {
        name: "calculator",
        label: "Calculator",
        path: "src/content/pages",
        match: { include: "calculator" },
        // ← YE
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: "string", name: "heroBadge", label: "Hero Badge" },
          { type: "string", name: "heroTitle", label: "Hero Title" },
          { type: "string", name: "heroTitleHighlight", label: "Hero Highlight Word" },
          { type: "string", name: "heroSubtitle", label: "Hero Subtitle", ui: { component: "textarea" } },
          {
            type: "object",
            name: "steps",
            label: "Progress Steps",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.label || "Step" }) },
            fields: [
              { type: "number", name: "id", label: "ID" },
              { type: "string", name: "label", label: "Label" },
              { type: "string", name: "icon", label: "Icon" }
            ]
          },
          {
            type: "object",
            name: "stepTitles",
            label: "Step Titles",
            fields: [
              { type: "object", name: "license", label: "Step 1 (License)", fields: [{ type: "string", name: "title", label: "Title" }, { type: "string", name: "subtitle", label: "Subtitle" }] },
              { type: "object", name: "activity", label: "Step 2 (Activity)", fields: [{ type: "string", name: "title", label: "Title" }, { type: "string", name: "subtitle", label: "Subtitle" }] },
              { type: "object", name: "office", label: "Step 3 (Office)", fields: [{ type: "string", name: "title", label: "Title" }, { type: "string", name: "subtitle", label: "Subtitle" }] },
              { type: "object", name: "extras", label: "Step 4 (Extras)", fields: [{ type: "string", name: "title", label: "Title" }, { type: "string", name: "subtitle", label: "Subtitle" }] },
              { type: "object", name: "contact", label: "Step 5 (Contact)", fields: [{ type: "string", name: "title", label: "Title" }, { type: "string", name: "subtitle", label: "Subtitle" }] }
            ]
          },
          {
            type: "object",
            name: "licenseTypes",
            label: "License Types",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.title || "License" }) },
            fields: [
              { type: "string", name: "id", label: "ID" },
              { type: "string", name: "icon", label: "Icon" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "desc", label: "Description" },
              { type: "number", name: "basePrice", label: "Base Price (AED)" },
              { type: "string", name: "badge", label: "Badge (optional)" }
            ]
          },
          {
            type: "object",
            name: "activities",
            label: "Activities",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.title || "Activity" }) },
            fields: [
              { type: "string", name: "id", label: "ID" },
              { type: "string", name: "icon", label: "Icon" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "desc", label: "Description" },
              { type: "number", name: "price", label: "Price (AED)" },
              { type: "string", name: "color", label: "Gradient Color (Tailwind)" }
            ]
          },
          {
            type: "object",
            name: "officeOptions",
            label: "Office Options",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.title || "Office" }) },
            fields: [
              { type: "string", name: "id", label: "ID" },
              { type: "string", name: "icon", label: "Icon" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "desc", label: "Description" },
              { type: "number", name: "price", label: "Price (AED)" },
              { type: "string", name: "badge", label: "Badge (optional)" }
            ]
          },
          {
            type: "object",
            name: "extrasList",
            label: "Extras",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.title || "Extra" }) },
            fields: [
              { type: "string", name: "id", label: "ID" },
              { type: "string", name: "icon", label: "Icon" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "desc", label: "Description" },
              { type: "number", name: "price", label: "Price (AED)" },
              { type: "string", name: "badge", label: "Badge (optional)" }
            ]
          },
          {
            type: "object",
            name: "quickAnswers",
            label: "Quick Answers (FAQ)",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.q || "FAQ" }) },
            fields: [
              { type: "string", name: "q", label: "Question" },
              { type: "string", name: "a", label: "Answer", ui: { component: "textarea" } }
            ]
          }
        ]
      },
      // ============================================================
      // COLLECTION 9: Contact
      // ============================================================
      {
        name: "contact",
        label: "Contact Page",
        path: "src/content/pages",
        match: { include: "contact" },
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: "string", name: "heroBadge", label: "Hero Badge" },
          { type: "string", name: "heroTitle", label: "Hero Title" },
          { type: "string", name: "heroTitleHighlight", label: "Hero Highlight Word" },
          { type: "string", name: "heroSubtitle", label: "Hero Subtitle", ui: { component: "textarea" } },
          { type: "image", name: "heroImage", label: "Hero Background Image (final CTA)" },
          {
            type: "object",
            name: "contactCards",
            label: "Contact Info Cards",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.title || "Card" }) },
            fields: [
              { type: "string", name: "icon", label: "Icon (Headset | Building2 | Globe)" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "lines", label: "Lines", list: true },
              { type: "string", name: "color", label: "Gradient Color (Tailwind)" },
              {
                type: "object",
                name: "actions",
                label: "Actions",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.label || "Action" }) },
                fields: [
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "link", label: "Link (or 'whatsapp')" },
                  { type: "string", name: "icon", label: "Icon (Phone | Mail | MapPin | MessageCircle)" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "trustBar",
            label: "Trust Bar",
            fields: [
              { type: "string", name: "ratingText", label: "Rating Text" },
              { type: "string", name: "scoreLabel", label: "Score Label" },
              { type: "string", name: "awardText", label: "Award Text" }
            ]
          },
          {
            type: "object",
            name: "formSection",
            label: "Contact Form",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              { type: "string", name: "submitButton", label: "Submit Button Text" },
              { type: "string", name: "secureNote", label: "Secure Note" },
              { type: "string", name: "successTitle", label: "Success Title" },
              { type: "string", name: "successText", label: "Success Text", ui: { component: "textarea" } },
              { type: "string", name: "successWhatsappText", label: "Success WhatsApp Text" },
              { type: "string", name: "successWhatsappMessage", label: "Success WhatsApp Message", ui: { component: "textarea" } },
              { type: "string", name: "subjects", label: "Subject Options", list: true }
            ]
          },
          {
            type: "object",
            name: "sidebar",
            label: "Sidebar",
            fields: [
              {
                type: "object",
                name: "instantCard",
                label: "Instant Contact Card",
                fields: [
                  { type: "string", name: "availableBadge", label: "Available Badge" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "text", label: "Text", ui: { component: "textarea" } },
                  { type: "string", name: "callLabel", label: "Call Label" },
                  { type: "string", name: "callNumber", label: "Call Number" },
                  { type: "string", name: "callHref", label: "Call Href" },
                  { type: "string", name: "whatsappLabel", label: "WhatsApp Label" },
                  { type: "string", name: "whatsappValue", label: "WhatsApp Value" },
                  { type: "string", name: "whatsappMessage", label: "WhatsApp Message", ui: { component: "textarea" } }
                ]
              },
              {
                type: "object",
                name: "officeCard",
                label: "Office Card",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "officeLabel", label: "Office Label" },
                  { type: "string", name: "addressLine1", label: "Address Line 1" },
                  { type: "string", name: "addressLine2", label: "Address Line 2" },
                  { type: "string", name: "phone", label: "Phone" },
                  { type: "string", name: "phoneHref", label: "Phone Href" },
                  { type: "string", name: "directionsHref", label: "Directions Href" },
                  { type: "string", name: "emailLabel", label: "Email Label" },
                  { type: "string", name: "email1", label: "Email 1" },
                  { type: "string", name: "email1Href", label: "Email 1 Href" },
                  { type: "string", name: "email2", label: "Email 2" },
                  { type: "string", name: "email2Href", label: "Email 2 Href" },
                  { type: "string", name: "hoursLabel", label: "Hours Label" },
                  {
                    type: "object",
                    name: "hours",
                    label: "Hours",
                    list: true,
                    ui: { itemProps: (item) => ({ label: item?.day || "Day" }) },
                    fields: [
                      { type: "string", name: "day", label: "Day" },
                      { type: "string", name: "time", label: "Time" },
                      { type: "boolean", name: "closed", label: "Closed?" }
                    ]
                  }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "faqs",
            label: "FAQs Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              { type: "string", name: "relatedServicesTitle", label: "Related Services Title" },
              {
                type: "object",
                name: "items",
                label: "FAQ Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.q || "FAQ" }) },
                fields: [
                  { type: "string", name: "q", label: "Question" },
                  { type: "string", name: "a", label: "Answer", ui: { component: "textarea" } }
                ]
              },
              {
                type: "object",
                name: "relatedServices",
                label: "Related Services",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Service" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon (FileText | Gift)" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "desc", label: "Description" },
                  { type: "string", name: "color", label: "Gradient Color" },
                  { type: "string", name: "cta", label: "CTA Text" },
                  { type: "string", name: "link", label: "Link" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "finalCTA",
            label: "Final CTA",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              { type: "string", name: "phone", label: "Phone" },
              { type: "string", name: "phoneHref", label: "Phone Href" },
              { type: "string", name: "whatsappText", label: "WhatsApp Text" },
              { type: "string", name: "whatsappMessage", label: "WhatsApp Message", ui: { component: "textarea" } },
              { type: "string", name: "chips", label: "Chips", list: true },
              {
                type: "object",
                name: "cards",
                label: "Contact Cards",
                fields: [
                  {
                    type: "object",
                    name: "call",
                    label: "Call Card",
                    fields: [
                      { type: "string", name: "label", label: "Label" },
                      { type: "string", name: "value", label: "Value" },
                      { type: "string", name: "note", label: "Note" },
                      { type: "string", name: "href", label: "Href" }
                    ]
                  },
                  {
                    type: "object",
                    name: "email",
                    label: "Email Card",
                    fields: [
                      { type: "string", name: "label", label: "Label" },
                      { type: "string", name: "value", label: "Value" },
                      { type: "string", name: "note", label: "Note" },
                      { type: "string", name: "href", label: "Href" }
                    ]
                  },
                  {
                    type: "object",
                    name: "office",
                    label: "Office Card",
                    fields: [
                      { type: "string", name: "label", label: "Label" },
                      { type: "string", name: "line1", label: "Line 1" },
                      { type: "string", name: "line2", label: "Line 2" }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      // ============================================================
      // COLLECTION 10: Privacy Policy
      // ============================================================
      {
        name: "privacyPolicy",
        label: "Privacy Policy",
        path: "src/content/pages",
        match: { include: "privacy-policy" },
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: "string", name: "heroBadge", label: "Hero Badge" },
          { type: "string", name: "heroTitle", label: "Hero Title" },
          { type: "string", name: "heroTitleHighlight", label: "Hero Highlight Word" },
          { type: "string", name: "heroSubtitle", label: "Hero Subtitle", ui: { component: "textarea" } },
          {
            type: "object",
            name: "trustBadges",
            label: "Trust Badges",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.label || "Badge" }) },
            fields: [
              { type: "string", name: "icon", label: "Icon (Lock | Server | ShieldCheck | CheckCircle2)" },
              { type: "string", name: "label", label: "Label" },
              { type: "string", name: "color", label: "Gradient Color" }
            ]
          },
          { type: "string", name: "tocTitle", label: "TOC Title" },
          {
            type: "object",
            name: "tocSections",
            label: "Table of Contents Sections",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.title || "Section" }) },
            fields: [
              { type: "string", name: "id", label: "Anchor ID (e.g., info-collection)" },
              { type: "string", name: "title", label: "Title" }
            ]
          },
          {
            type: "object",
            name: "sidebarCard",
            label: "Sidebar Contact Card",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "text", label: "Text", ui: { component: "textarea" } },
              { type: "string", name: "buttonText", label: "Button Text" },
              { type: "string", name: "email", label: "Email" },
              { type: "string", name: "emailHref", label: "Email Href" }
            ]
          },
          {
            type: "object",
            name: "intro",
            label: "Introduction",
            fields: [
              { type: "string", name: "heading", label: "Heading" },
              { type: "string", name: "subheading", label: "Subheading" },
              { type: "string", name: "paragraphs", label: "Paragraphs", list: true, ui: { component: "textarea" } },
              { type: "string", name: "importantNote", label: "Important Note", ui: { component: "textarea" } }
            ]
          },
          {
            type: "object",
            name: "section01",
            label: "Section 01 \u2014 Information Collection",
            fields: [
              { type: "string", name: "label", label: "Label (Section XX)" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "intro", label: "Intro Text", ui: { component: "textarea" } },
              {
                type: "object",
                name: "personalInfo",
                label: "Personal Information",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "text", label: "Text", ui: { component: "textarea" } },
                  { type: "string", name: "items", label: "List Items", list: true, ui: { component: "textarea" } }
                ]
              },
              {
                type: "object",
                name: "aggregateInfo",
                label: "Aggregate Information",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "text", label: "Text", ui: { component: "textarea" } }
                ]
              },
              { type: "string", name: "note", label: "Note", ui: { component: "textarea" } }
            ]
          },
          {
            type: "object",
            name: "section02",
            label: "Section 02 \u2014 Disclosure",
            fields: [
              { type: "string", name: "label", label: "Label" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "intro", label: "Intro Text", ui: { component: "textarea" } },
              { type: "string", name: "items", label: "List Items", list: true, ui: { component: "textarea" } }
            ]
          },
          {
            type: "object",
            name: "section03",
            label: "Section 03 \u2014 Use of Information",
            fields: [
              { type: "string", name: "label", label: "Label" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "intro", label: "Intro Text", ui: { component: "textarea" } },
              { type: "string", name: "items", label: "List Items", list: true, ui: { component: "textarea" } }
            ]
          },
          {
            type: "object",
            name: "section04",
            label: "Section 04 \u2014 Cookies & Tracking",
            fields: [
              { type: "string", name: "label", label: "Label" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "paragraphs", label: "Paragraphs", list: true, ui: { component: "textarea" } },
              {
                type: "object",
                name: "cookieUses",
                label: "Cookie Uses",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "items", label: "List Items", list: true, ui: { component: "textarea" } }
                ]
              },
              { type: "string", name: "note", label: "Note", ui: { component: "textarea" } },
              { type: "string", name: "analyticsText", label: "Analytics Text", ui: { component: "textarea" } }
            ]
          },
          {
            type: "object",
            name: "section05",
            label: "Section 05 \u2014 Content Providers",
            fields: [
              { type: "string", name: "label", label: "Label" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "text", label: "Text", ui: { component: "textarea" } }
            ]
          },
          {
            type: "object",
            name: "section06",
            label: "Section 06 \u2014 Opting In & Out",
            fields: [
              { type: "string", name: "label", label: "Label" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "intro", label: "Intro Text", ui: { component: "textarea" } },
              {
                type: "object",
                name: "options",
                label: "Options",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Option" }) },
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "desc", label: "Description", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "section07",
            label: "Section 07 \u2014 Protecting Info",
            fields: [
              { type: "string", name: "label", label: "Label" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "paragraphs", label: "Paragraphs", list: true, ui: { component: "textarea" } },
              {
                type: "object",
                name: "protectionBadges",
                label: "Protection Badges",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.label || "Badge" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon (Lock | Server | ShieldCheck)" },
                  { type: "string", name: "label", label: "Label" }
                ]
              },
              { type: "string", name: "importantNote", label: "Important Note", ui: { component: "textarea" } }
            ]
          },
          {
            type: "object",
            name: "section08",
            label: "Section 08 \u2014 Overseas",
            fields: [
              { type: "string", name: "label", label: "Label" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "text", label: "Text", ui: { component: "textarea" } }
            ]
          },
          {
            type: "object",
            name: "section09",
            label: "Section 09 \u2014 Holding & Correcting",
            fields: [
              { type: "string", name: "label", label: "Label" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "text", label: "Text", ui: { component: "textarea" } }
            ]
          },
          {
            type: "object",
            name: "section10",
            label: "Section 10 \u2014 Amendments",
            fields: [
              { type: "string", name: "label", label: "Label" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "text", label: "Text", ui: { component: "textarea" } }
            ]
          },
          {
            type: "object",
            name: "section11",
            label: "Section 11 \u2014 Acceptance",
            fields: [
              { type: "string", name: "label", label: "Label" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "text", label: "Text", ui: { component: "textarea" } }
            ]
          },
          {
            type: "object",
            name: "section12",
            label: "Section 12 \u2014 How to Contact Us",
            fields: [
              { type: "string", name: "label", label: "Label" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "intro", label: "Intro Text", ui: { component: "textarea" } },
              { type: "string", name: "emailLabel", label: "Email Label" },
              { type: "string", name: "email", label: "Email" },
              { type: "string", name: "emailHref", label: "Email Href" },
              { type: "string", name: "phoneLabel", label: "Phone Label" },
              { type: "string", name: "phone", label: "Phone" },
              { type: "string", name: "phoneHref", label: "Phone Href" },
              { type: "string", name: "whatsappLabel", label: "WhatsApp Label" },
              { type: "string", name: "whatsappValue", label: "WhatsApp Value" },
              { type: "string", name: "whatsappMessage", label: "WhatsApp Message", ui: { component: "textarea" } }
            ]
          },
          {
            type: "object",
            name: "faqs",
            label: "FAQs Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              {
                type: "object",
                name: "items",
                label: "FAQ Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.q || "FAQ" }) },
                fields: [
                  { type: "string", name: "q", label: "Question" },
                  { type: "string", name: "a", label: "Answer", ui: { component: "textarea" } }
                ]
              }
            ]
          }
        ]
      },
      // ============================================================
      // COLLECTION 11: Services
      // ============================================================
      {
        name: "services",
        label: "Services",
        path: "src/content/services",
        match: { include: "*" },
        // ✅ ye add karo
        format: "json",
        ui: { allowedActions: { create: true, delete: false } },
        fields: [
          { type: "image", name: "heroImage", label: "Hero Image" },
          { type: "string", name: "heroBadge", label: "Hero Badge" },
          { type: "string", name: "heroTitle", label: "Hero Title" },
          { type: "string", name: "heroTitleHighlight", label: "Hero Highlight Word" },
          { type: "string", name: "heroSubtitle", label: "Hero Subtitle", ui: { component: "textarea" } },
          { type: "string", name: "heroChips", label: "Hero Chips", list: true },
          {
            type: "object",
            name: "stats",
            label: "Stats",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.label || "Stat" }) },
            fields: [
              { type: "string", name: "icon", label: "Icon" },
              { type: "string", name: "value", label: "Value" },
              { type: "string", name: "label", label: "Label" },
              { type: "string", name: "color", label: "Gradient Color" }
            ]
          },
          {
            type: "object",
            name: "whyEssentialSection",
            label: "Why Essential Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              { type: "image", name: "image", label: "Image" },
              { type: "string", name: "imageBadgeTitle", label: "Image Badge Title" },
              { type: "string", name: "imageBadgeText", label: "Image Badge Text" },
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Item" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "businessTypesSection",
            label: "Business Types Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Item" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "whyChooseUsSection",
            label: "Why Choose Us",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              { type: "string", name: "ctaText", label: "CTA Text" },
              { type: "string", name: "ctaMessage", label: "CTA WhatsApp Message", ui: { component: "textarea" } },
              {
                type: "object",
                name: "features",
                label: "Features",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.label || "Feature" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "label", label: "Label" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "servicesSection",
            label: "Services Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Service Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Service" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "image", name: "image", label: "Image" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "penaltiesSection",
            label: "Penalties Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              { type: "image", name: "image", label: "Background Image" },
              {
                type: "object",
                name: "items",
                label: "Penalty Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Penalty" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "amount", label: "Amount" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "auditSection",
            label: "Audit Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              { type: "image", name: "image", label: "Image" },
              { type: "string", name: "imageBadgeTitle", label: "Image Badge Title" },
              { type: "string", name: "imageBadgeText", label: "Image Badge Text" },
              { type: "string", name: "ctaText", label: "CTA Text" },
              { type: "string", name: "ctaMessage", label: "CTA WhatsApp Message", ui: { component: "textarea" } },
              {
                type: "object",
                name: "steps",
                label: "Steps",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Step" }) },
                fields: [
                  { type: "string", name: "step", label: "Step Number" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "faqsSection",
            label: "FAQs Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "sidebarCard",
                label: "Sidebar Card",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "text", label: "Text", ui: { component: "textarea" } },
                  { type: "string", name: "whatsappMessage", label: "WhatsApp Message", ui: { component: "textarea" } }
                ]
              },
              {
                type: "object",
                name: "items",
                label: "FAQ Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.q || "FAQ" }) },
                fields: [
                  { type: "string", name: "q", label: "Question" },
                  { type: "string", name: "a", label: "Answer", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "relatedServicesSection",
            label: "Related Services",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Related Services",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Service" }) },
                fields: [
                  { type: "string", name: "slug", label: "Slug" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "image", name: "image", label: "Image" },
                  { type: "string", name: "gradient", label: "Gradient" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "finalCTA",
            label: "Final CTA",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              { type: "string", name: "chips", label: "Chips", list: true },
              { type: "string", name: "whatsappMessage", label: "WhatsApp Message", ui: { component: "textarea" } },
              { type: "string", name: "whatsappCardMessage", label: "WhatsApp Card Message", ui: { component: "textarea" } }
            ]
          }
        ]
      },
      // ============================================================
      // COLLECTION 12: Business Setup Services
      // ============================================================
      {
        name: "businessSetup",
        label: "\u{1F3E2} Business Setup Services",
        path: "src/content/business-setup",
        match: { include: "*" },
        format: "json",
        ui: { allowedActions: { create: true, delete: false } },
        fields: [
          { type: "image", name: "heroImage", label: "Hero Image" },
          { type: "string", name: "heroBadge", label: "Hero Badge" },
          { type: "string", name: "heroTitle", label: "Hero Title" },
          { type: "string", name: "heroTitleHighlight", label: "Hero Highlight Word" },
          { type: "string", name: "heroSubtitle", label: "Hero Subtitle", ui: { component: "textarea" } },
          { type: "string", name: "heroChips", label: "Hero Chips", list: true },
          {
            type: "object",
            name: "stats",
            label: "Stats",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.label || "Stat" }) },
            fields: [
              { type: "string", name: "icon", label: "Icon" },
              { type: "string", name: "value", label: "Value" },
              { type: "string", name: "label", label: "Label" },
              { type: "string", name: "color", label: "Gradient Color" }
            ]
          },
          {
            type: "object",
            name: "whatIsSection",
            label: "What Is Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "image", name: "image", label: "Image" },
              { type: "string", name: "imageBadgeTitle", label: "Image Badge Title" },
              { type: "string", name: "imageBadgeText", label: "Image Badge Text" },
              { type: "string", name: "paragraphs", label: "Paragraphs", list: true, ui: { component: "textarea" } },
              { type: "string", name: "highlights", label: "Highlights", list: true }
            ]
          },
          {
            type: "object",
            name: "namingRulesSection",
            label: "Naming Rules Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "allowedItems",
                label: "Allowed Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Rule" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              },
              {
                type: "object",
                name: "prohibitedItems",
                label: "Prohibited Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Rule" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "servicesSection",
            label: "Services Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Item" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "processSection",
            label: "Process Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              { type: "image", name: "image", label: "Background Image" },
              {
                type: "object",
                name: "steps",
                label: "Steps",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Step" }) },
                fields: [
                  { type: "string", name: "step", label: "Step Number" },
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "namingTipsSection",
            label: "Naming Tips Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.label || "Tip" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "desc", label: "Description" },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "documentsSection",
            label: "Documents Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.label || "Doc" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "desc", label: "Description" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "whyChooseUsSection",
            label: "Why Choose Us",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.label || "Item" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "desc", label: "Description" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "growthStatsSection",
            label: "Growth Stats",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.label || "Stat" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "value", label: "Value" },
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "faqsSection",
            label: "FAQs Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "sidebarCard",
                label: "Sidebar Card",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "text", label: "Text", ui: { component: "textarea" } },
                  { type: "string", name: "whatsappMessage", label: "WhatsApp Message", ui: { component: "textarea" } }
                ]
              },
              {
                type: "object",
                name: "items",
                label: "FAQ Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.q || "FAQ" }) },
                fields: [
                  { type: "string", name: "q", label: "Question" },
                  { type: "string", name: "a", label: "Answer", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "relatedServicesSection",
            label: "Related Services",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Service" }) },
                fields: [
                  { type: "string", name: "slug", label: "Slug" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "image", name: "image", label: "Image" },
                  { type: "string", name: "gradient", label: "Gradient" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "finalCTA",
            label: "Final CTA",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              { type: "string", name: "chips", label: "Chips", list: true },
              { type: "string", name: "whatsappMessage", label: "WhatsApp Message", ui: { component: "textarea" } },
              { type: "string", name: "whatsappCardMessage", label: "WhatsApp Card Message", ui: { component: "textarea" } }
            ]
          },
          {
            type: "object",
            name: "whyDubaiSection",
            label: "Why Dubai Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "image", name: "image", label: "Image" },
              { type: "string", name: "imageBadgeTitle", label: "Image Badge Title" },
              { type: "string", name: "imageBadgeText", label: "Image Badge Text" },
              { type: "string", name: "paragraphs", label: "Paragraphs", list: true, ui: { component: "textarea" } },
              { type: "string", name: "highlights", label: "Highlights", list: true }
            ]
          },
          {
            type: "object",
            name: "benefitsSection",
            label: "Benefits Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Benefit" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "jurisdictionsSection",
            label: "Jurisdictions Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Jurisdictions",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Jurisdiction" }) },
                fields: [
                  { type: "string", name: "id", label: "ID" },
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "tagline", label: "Tagline" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "image", name: "image", label: "Image" },
                  { type: "string", name: "color", label: "Gradient Color" },
                  { type: "string", name: "features", label: "Features", list: true },
                  { type: "string", name: "bestFor", label: "Best For" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "audienceSection",
            label: "Audience Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Segment" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "image", name: "image", label: "Image" },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---- Duplicate sections (renamed) ----
          {
            type: "object",
            name: "whatIsSection_2",
            label: "What Is Section (2)",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "image", name: "image", label: "Image" },
              { type: "string", name: "imageBadgeTitle", label: "Image Badge Title" },
              { type: "string", name: "imageBadgeText", label: "Image Badge Text" },
              { type: "string", name: "paragraphs", label: "Paragraphs", list: true, ui: { component: "textarea" } },
              { type: "string", name: "highlights", label: "Highlights", list: true }
            ]
          },
          {
            type: "object",
            name: "processSection_2",
            label: "Process Section (2)",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "steps",
                label: "Steps",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Step" }) },
                fields: [
                  { type: "string", name: "step", label: "Step Number" },
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "documentsSection_2",
            label: "Documents Section (2)",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.label || "Doc" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "desc", label: "Description" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "activitiesSection",
            label: "Activities Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Activities",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Activity" }) },
                fields: [
                  { type: "string", name: "id", label: "ID" },
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "tagline", label: "Tagline" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "image", name: "image", label: "Image" },
                  { type: "string", name: "color", label: "Gradient Color" },
                  { type: "string", name: "features", label: "Features", list: true },
                  { type: "string", name: "bestFor", label: "Best For" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "complianceSection",
            label: "Compliance Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.label || "Item" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              },
              { type: "string", name: "footerText", label: "Footer Text", ui: { component: "textarea" } }
            ]
          },
          {
            type: "object",
            name: "bankingSection",
            label: "Banking Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              {
                type: "object",
                name: "items",
                label: "Banks",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.name || "Bank" }) },
                fields: [
                  { type: "string", name: "name", label: "Name" },
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              },
              { type: "string", name: "footerText", label: "Footer Text", ui: { component: "textarea" } }
            ]
          },
          {
            type: "object",
            name: "costComparisonSection",
            label: "Cost Comparison Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.route || "Route" }) },
                fields: [
                  { type: "string", name: "route", label: "Route" },
                  { type: "string", name: "cost", label: "Cost" },
                  { type: "string", name: "ownership", label: "Ownership" },
                  { type: "string", name: "timeline", label: "Timeline" },
                  { type: "string", name: "bestFor", label: "Best For" },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              },
              { type: "string", name: "footerNote", label: "Footer Note", ui: { component: "textarea" } }
            ]
          },
          {
            type: "object",
            name: "mistakesSection",
            label: "Mistakes Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.label || "Mistake" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "desc", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              },
              {
                type: "object",
                name: "ctaCard",
                label: "CTA Card",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "text", label: "Text", ui: { component: "textarea" } },
                  { type: "string", name: "buttonText", label: "Button Text" },
                  { type: "string", name: "whatsappMessage", label: "WhatsApp Message", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "dependentTypesSection",
            label: "Dependent Types Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Type" }) },
                fields: [
                  { type: "string", name: "id", label: "ID" },
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "tagline", label: "Tagline" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "image", name: "image", label: "Image" },
                  { type: "string", name: "color", label: "Gradient Color" },
                  { type: "string", name: "features", label: "Features", list: true },
                  { type: "string", name: "bestFor", label: "Best For" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "requirementsSection",
            label: "Requirements Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Requirement" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "whoNeedsItSection",
            label: "Who Needs It Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.label || "Item" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "desc", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              },
              {
                type: "object",
                name: "ctaCard",
                label: "CTA Card",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "text", label: "Text" },
                  { type: "string", name: "buttonText", label: "Button Text" },
                  { type: "string", name: "whatsappMessage", label: "WhatsApp Message", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "platformsSection",
            label: "Platforms Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Platforms",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.name || "Platform" }) },
                fields: [
                  { type: "string", name: "name", label: "Name" },
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "integrationsSection",
            label: "Integrations Section",
            fields: [
              { type: "string", name: "title", label: "Title" },
              {
                type: "object",
                name: "paymentGateways",
                label: "Payment Gateways",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.name || "Gateway" }) },
                fields: [
                  { type: "string", name: "name", label: "Name" },
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              },
              {
                type: "object",
                name: "logisticsPartners",
                label: "Logistics Partners",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.name || "Partner" }) },
                fields: [
                  { type: "string", name: "name", label: "Name" },
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "licenseTypesSection",
            label: "License Types Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "License" }) },
                fields: [
                  { type: "string", name: "id", label: "ID" },
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "tagline", label: "Tagline" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "image", name: "image", label: "Image" },
                  { type: "string", name: "color", label: "Gradient Color" },
                  { type: "string", name: "features", label: "Features", list: true },
                  { type: "string", name: "bestFor", label: "Best For" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "topFreeZonesSection",
            label: "Top Free Zones Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Free Zones",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.name || "Zone" }) },
                fields: [
                  { type: "string", name: "name", label: "Name" },
                  { type: "string", name: "tagline", label: "Tagline" },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "comparisonSection",
            label: "Comparison Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.factor || "Factor" }) },
                fields: [
                  { type: "string", name: "factor", label: "Factor" },
                  { type: "string", name: "freezone", label: "Free Zone" },
                  { type: "string", name: "mainland", label: "Mainland" },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "categoriesSection",
            label: "Categories Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Categories",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Category" }) },
                fields: [
                  { type: "string", name: "id", label: "ID" },
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "tagline", label: "Tagline" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "image", name: "image", label: "Image" },
                  { type: "string", name: "color", label: "Gradient Color" },
                  { type: "string", name: "features", label: "Features", list: true },
                  { type: "string", name: "bestFor", label: "Best For" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "partnerTypesSection",
            label: "Partner Types Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Type" }) },
                fields: [
                  { type: "string", name: "id", label: "ID" },
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "tagline", label: "Tagline" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "image", name: "image", label: "Image" },
                  { type: "string", name: "color", label: "Gradient Color" },
                  { type: "string", name: "features", label: "Features", list: true },
                  { type: "string", name: "bestFor", label: "Best For" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "legalProtectionSection",
            label: "Legal Protection Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Item" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "desc", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "requirementsSection_2",
            label: "Requirements Section (2)",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Requirement" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "whoNeedsSponsorSection",
            label: "Who Needs Sponsor Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.label || "Item" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "desc", label: "Description", ui: { component: "textarea" } }
                ]
              },
              {
                type: "object",
                name: "ctaCard",
                label: "CTA Card",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "text", label: "Text" },
                  { type: "string", name: "buttonText", label: "Button Text" },
                  { type: "string", name: "whatsappMessage", label: "WhatsApp Message", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "flipCardsSection",
            label: "Flip Cards Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Cards",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.frontTitle || "Card" }) },
                fields: [
                  { type: "number", name: "id", label: "ID" },
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "frontTitle", label: "Front Title" },
                  { type: "string", name: "frontTag", label: "Front Tag" },
                  { type: "string", name: "backTitle", label: "Back Title" },
                  { type: "string", name: "backDescription", label: "Back Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "controlSection",
            label: "Control Guarantees Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.label || "Item" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              },
              { type: "string", name: "footerText", label: "Footer Text", ui: { component: "textarea" } }
            ]
          },
          {
            type: "object",
            name: "exitOptionsSection",
            label: "Exit Options Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.label || "Option" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "desc", label: "Description" }
                ]
              },
              { type: "string", name: "footerText", label: "Footer Text", ui: { component: "textarea" } }
            ]
          },
          {
            type: "object",
            name: "licensingSection",
            label: "Licensing Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Item" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "introSection",
            label: "Intro Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "image", name: "image", label: "Image" },
              { type: "string", name: "imageBadgeTitle", label: "Image Badge Title" },
              { type: "string", name: "imageBadgeText", label: "Image Badge Text" },
              { type: "string", name: "paragraphs", label: "Paragraphs", list: true, ui: { component: "textarea" } },
              { type: "string", name: "highlights", label: "Highlights", list: true }
            ]
          },
          {
            type: "object",
            name: "licenseTypesSection_2",
            label: "License Types Section (2)",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "License" }) },
                fields: [
                  { type: "string", name: "id", label: "ID" },
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "tagline", label: "Tagline" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "image", name: "image", label: "Image" },
                  { type: "string", name: "color", label: "Gradient Color" },
                  { type: "string", name: "features", label: "Features", list: true },
                  { type: "string", name: "bestFor", label: "Best For" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "servicesSection_2",
            label: "Services Section (2)",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Service" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "benefitsSection_2",
            label: "Benefits Section (2)",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.label || "Benefit" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "desc", label: "Description" },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              },
              {
                type: "object",
                name: "ctaCard",
                label: "CTA Card",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "text", label: "Text" },
                  { type: "string", name: "buttonText", label: "Button Text" },
                  { type: "string", name: "whatsappMessage", label: "WhatsApp Message", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "whoShouldConsiderSection",
            label: "Who Should Consider Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Item" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "image", name: "image", label: "Image" },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "whatIsSection_3",
            label: "What Is Section (3)",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "image", name: "image", label: "Image" },
              { type: "string", name: "imageBadgeTitle", label: "Image Badge Title" },
              { type: "string", name: "imageBadgeText", label: "Image Badge Text" },
              { type: "string", name: "paragraphs", label: "Paragraphs", list: true, ui: { component: "textarea" } },
              { type: "string", name: "highlights", label: "Highlights", list: true }
            ]
          },
          {
            type: "object",
            name: "benefitsSection_3",
            label: "Benefits Section (3)",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Benefit" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "audiencesSection",
            label: "Audiences Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Audiences",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Audience" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "tagline", label: "Tagline" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "image", name: "image", label: "Image" },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "jurisdictionsSection_2",
            label: "Jurisdictions Section (2)",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Jurisdictions",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Jurisdiction" }) },
                fields: [
                  { type: "string", name: "id", label: "ID" },
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "tagline", label: "Tagline" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "image", name: "image", label: "Image" },
                  { type: "string", name: "color", label: "Gradient Color" },
                  { type: "string", name: "features", label: "Features", list: true },
                  { type: "string", name: "bestFor", label: "Best For" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "activitiesSection_2",
            label: "Activities Section (2)",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.label || "Activity" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "processSection_3",
            label: "Process Section (3)",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "steps",
                label: "Steps",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Step" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "servicesSection_3",
            label: "Services Section (3)",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Services",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Service" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "documentsSection_3",
            label: "Documents Section (3)",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.label || "Document" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "desc", label: "Description" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "complianceSection_2",
            label: "Compliance Section (2)",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Item" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "maintenanceSection",
            label: "Maintenance Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.label || "Item" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              },
              { type: "string", name: "footerText", label: "Footer Text", ui: { component: "textarea" } }
            ]
          },
          {
            type: "object",
            name: "whyChooseUsSection_2",
            label: "Why Choose Us Section (2)",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.label || "Item" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "desc", label: "Description" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "growthStatsSection_2",
            label: "Growth Stats Section (2)",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.label || "Stat" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "value", label: "Value" },
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "faqsSection_2",
            label: "FAQs Section (2)",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "sidebarCard",
                label: "Sidebar Card",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "text", label: "Text", ui: { component: "textarea" } },
                  { type: "string", name: "whatsappMessage", label: "WhatsApp Message", ui: { component: "textarea" } }
                ]
              },
              {
                type: "object",
                name: "items",
                label: "FAQ Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.q || "FAQ" }) },
                fields: [
                  { type: "string", name: "q", label: "Question" },
                  { type: "string", name: "a", label: "Answer", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "relatedServicesSection_2",
            label: "Related Services Section (2)",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Services",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Service" }) },
                fields: [
                  { type: "string", name: "slug", label: "Slug" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "image", name: "image", label: "Image" },
                  { type: "string", name: "gradient", label: "Gradient" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "finalCTA_2",
            label: "Final CTA Section (2)",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              { type: "string", name: "chips", label: "Chips", list: true },
              { type: "string", name: "whatsappMessage", label: "WhatsApp Message", ui: { component: "textarea" } },
              { type: "string", name: "whatsappCardMessage", label: "WhatsApp Card Message", ui: { component: "textarea" } }
            ]
          },
          {
            type: "object",
            name: "whatIsSection_4",
            label: "What Is Section (4)",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "image", name: "image", label: "Image" },
              { type: "string", name: "imageBadgeTitle", label: "Image Badge Title" },
              { type: "string", name: "imageBadgeText", label: "Image Badge Text" },
              { type: "string", name: "paragraphs", label: "Paragraphs", list: true, ui: { component: "textarea" } },
              { type: "string", name: "highlights", label: "Highlights", list: true }
            ]
          },
          {
            type: "object",
            name: "benefitsSection_4",
            label: "Benefits Section (4)",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Benefit" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "visaTypesSection",
            label: "Visa Types Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Visa Types",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Visa" }) },
                fields: [
                  { type: "string", name: "id", label: "ID" },
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "tagline", label: "Tagline" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "image", name: "image", label: "Image" },
                  { type: "string", name: "color", label: "Gradient Color" },
                  { type: "string", name: "features", label: "Features", list: true },
                  { type: "string", name: "bestFor", label: "Best For" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "whoNeedsSection",
            label: "Who Needs Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.label || "Item" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "desc", label: "Description" },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              },
              {
                type: "object",
                name: "ctaCard",
                label: "CTA Card",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "text", label: "Text" },
                  { type: "string", name: "buttonText", label: "Button Text" },
                  { type: "string", name: "whatsappMessage", label: "WhatsApp Message", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "packageInclusionsSection",
            label: "Package Inclusions Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Item" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          }
        ]
      },
      // ============================================================
      // COLLECTION 13: Service Areas
      // ============================================================
      {
        name: "serviceAreas",
        label: "Service Areas",
        path: "src/content/service-areas",
        match: { include: "*" },
        format: "json",
        ui: { allowedActions: { create: true, delete: false } },
        fields: [
          { type: "string", name: "areaName", label: "Area Name" },
          { type: "string", name: "areaShort", label: "Area Short Name" },
          { type: "image", name: "heroImage", label: "Hero Image" },
          { type: "string", name: "heroBadge", label: "Hero Badge" },
          { type: "string", name: "heroTitle", label: "Hero Title" },
          { type: "string", name: "heroTitleHighlight", label: "Hero Highlight Word" },
          { type: "string", name: "heroSubtitle", label: "Hero Subtitle", ui: { component: "textarea" } },
          {
            type: "object",
            name: "stats",
            label: "Stats",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.label || "Stat" }) },
            fields: [
              { type: "string", name: "icon", label: "Icon" },
              { type: "string", name: "value", label: "Value" },
              { type: "string", name: "label", label: "Label" },
              { type: "string", name: "color", label: "Gradient Color" }
            ]
          },
          {
            type: "object",
            name: "whyChooseSection",
            label: "Why Choose Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "image", name: "image", label: "Image" },
              { type: "string", name: "imageBadgeTitle", label: "Image Badge Title" },
              { type: "string", name: "imageBadgeText", label: "Image Badge Text" },
              { type: "string", name: "paragraph", label: "Paragraph", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Item" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "desc", label: "Description", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "servicesSection",
            label: "Services Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Services",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Service" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "desc", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "packagesSection",
            label: "Packages Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Packages",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.name || "Package" }) },
                fields: [
                  { type: "string", name: "name", label: "Name" },
                  { type: "string", name: "price", label: "Price" },
                  { type: "string", name: "note", label: "Note" },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "whyChooseUsSection",
            label: "Why Choose Us Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "items", label: "Items", list: true }
            ]
          },
          {
            type: "object",
            name: "areaFaqsSection",
            label: "Area FAQs Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              {
                type: "object",
                name: "items",
                label: "FAQs",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.q || "FAQ" }) },
                fields: [
                  { type: "string", name: "q", label: "Question" },
                  { type: "string", name: "a", label: "Answer", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "quickAnswersSection",
            label: "Quick Answers Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              { type: "string", name: "relatedServicesTitle", label: "Related Services Title" },
              {
                type: "object",
                name: "items",
                label: "FAQs",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.q || "FAQ" }) },
                fields: [
                  { type: "string", name: "q", label: "Question" },
                  { type: "string", name: "a", label: "Answer", ui: { component: "textarea" } }
                ]
              },
              {
                type: "object",
                name: "relatedServices",
                label: "Related Services",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Service" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "desc", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" },
                  { type: "string", name: "link", label: "Link" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "finalCTA",
            label: "Final CTA",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              { type: "string", name: "primaryCta", label: "Primary CTA" },
              { type: "string", name: "secondaryCta", label: "Secondary CTA" },
              { type: "string", name: "whatsappMessage", label: "WhatsApp Message", ui: { component: "textarea" } }
            ]
          },
          {
            type: "object",
            name: "costSection",
            label: "Cost Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Cost Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.type || "Item" }) },
                fields: [
                  { type: "string", name: "type", label: "Type" },
                  { type: "string", name: "cost", label: "Cost" },
                  { type: "string", name: "bestFor", label: "Best For", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              },
              { type: "string", name: "estimateLabel", label: "Estimate Label" },
              { type: "string", name: "estimateValue", label: "Estimate Value" },
              { type: "string", name: "estimateNote", label: "Estimate Note", ui: { component: "textarea" } }
            ]
          },
          {
            type: "object",
            name: "whyDifcSection",
            label: "Why DIFC Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Item" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "desc", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "comparisonSection",
            label: "Comparison Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "headers", label: "Table Headers", list: true },
              {
                type: "object",
                name: "rows",
                label: "Comparison Rows",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.factor || "Row" }) },
                fields: [
                  { type: "string", name: "factor", label: "Factor" },
                  { type: "string", name: "difc", label: "DIFC" },
                  { type: "string", name: "mainland", label: "Mainland" },
                  { type: "string", name: "jafza", label: "JAFZA" },
                  { type: "string", name: "dmcc", label: "DMCC" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "jurisdictionsSection",
            label: "Jurisdictions Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Jurisdictions",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.name || "Jurisdiction" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "name", label: "Name" },
                  { type: "string", name: "bestFor", label: "Best For", ui: { component: "textarea" } },
                  { type: "string", name: "cost", label: "Cost" },
                  { type: "string", name: "notes", label: "Notes", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "costGuideSection",
            label: "Cost Guide Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "paragraph1", label: "Paragraph 1", ui: { component: "textarea" } },
              { type: "string", name: "paragraph2", label: "Paragraph 2", ui: { component: "textarea" } },
              { type: "string", name: "note", label: "Note", ui: { component: "textarea" } }
            ]
          },
          {
            type: "object",
            name: "licenseTypesSection",
            label: "License Types Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "License Types",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.name || "License" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "name", label: "Name" },
                  { type: "string", name: "desc", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "cost", label: "Cost" },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "officeOptionsSection",
            label: "Office Options Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Office Options",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Option" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "desc", label: "Description", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "comparisonSection_2",
            label: "Comparison Section (2)",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              {
                type: "object",
                name: "items",
                label: "Comparison Cards",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.name || "Card" }) },
                fields: [
                  { type: "string", name: "name", label: "Name" },
                  { type: "string", name: "desc", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" },
                  { type: "boolean", name: "highlight", label: "Highlight (Recommended)" }
                ]
              }
            ]
          }
        ]
      },
      // ============================================================
      // COLLECTION: Packages (Simple — creative-city.json)
      // ============================================================
      {
        name: "packages",
        label: "\u{1F4E6} Packages",
        path: "src/content/packages",
        match: { include: "creative-city" },
        // ✅ sirf creative-city.json
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: "string", name: "heroTitle", label: "Hero Title", required: true },
          { type: "string", name: "heroSubtitle", label: "Hero Subtitle", ui: { component: "textarea" } },
          { type: "string", name: "heroBadge", label: "Hero Badge" },
          { type: "image", name: "heroImage", label: "Hero Background Image" },
          // ---- Stats ----
          {
            type: "object",
            name: "stats",
            label: "Stats",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.label || "Stat" }) },
            fields: [
              { type: "string", name: "value", label: "Value" },
              { type: "string", name: "label", label: "Label" }
            ]
          },
          // ---- Packages ----
          {
            type: "object",
            name: "packages",
            label: "Packages",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.title || "Package" }) },
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "price", label: "Price" },
              { type: "string", name: "tagline", label: "Tagline" },
              { type: "string", name: "category", label: "Category" },
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "icon", label: "Icon Name" },
              { type: "string", name: "includes", label: "Includes", list: true }
            ]
          },
          // ---- FAQs ----
          {
            type: "object",
            name: "faqs",
            label: "FAQs",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.q || "FAQ" }) },
            fields: [
              { type: "string", name: "q", label: "Question" },
              { type: "string", name: "a", label: "Answer", ui: { component: "textarea" } }
            ]
          }
        ]
      },
      // ============================================================
      // COLLECTION 14: Packages Detail (renamed from duplicate "packages")
      // ============================================================
      {
        name: "packagesDetail",
        label: "\u{1F4E6} Packages (Detail)",
        path: "src/content/packages",
        match: { exclude: "creative-city" },
        // ✅ creative-city ko chhor kar baqi sab   
        format: "json",
        ui: { allowedActions: { create: true, delete: false } },
        fields: [
          { type: "string", name: "slug", label: "Slug" },
          {
            type: "object",
            name: "hero",
            label: "Hero Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              { type: "image", name: "image", label: "Hero Image" },
              { type: "string", name: "breadcrumbLabel", label: "Breadcrumb Label" },
              { type: "string", name: "ctaPrimaryText", label: "Primary CTA Text" },
              { type: "string", name: "ctaPrimaryLink", label: "Primary CTA Link" },
              { type: "string", name: "ctaSecondaryText", label: "Secondary CTA Text" },
              { type: "string", name: "ctaSecondaryMessage", label: "Secondary CTA WhatsApp Message", ui: { component: "textarea" } },
              { type: "string", name: "badges", label: "Hero Badges", list: true }
            ]
          },
          {
            type: "object",
            name: "stats",
            label: "Stats",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.label || "Stat" }) },
            fields: [
              { type: "string", name: "icon", label: "Icon" },
              { type: "string", name: "value", label: "Value" },
              { type: "string", name: "label", label: "Label" },
              { type: "string", name: "color", label: "Gradient Color" }
            ]
          },
          {
            type: "object",
            name: "whyChoose",
            label: "Why Choose Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Item" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "costTable",
            label: "Cost Table Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "rows",
                label: "Cost Rows",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.license || "Row" }) },
                fields: [
                  { type: "string", name: "license", label: "License" },
                  { type: "string", name: "cost", label: "Cost" },
                  { type: "string", name: "bestFor", label: "Best For", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" },
                  { type: "string", name: "icon", label: "Icon" }
                ]
              },
              { type: "string", name: "footerNote", label: "Footer Note", ui: { component: "textarea" } }
            ]
          },
          {
            type: "object",
            name: "comparison",
            label: "Comparison Table",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              { type: "string", name: "headers", label: "Table Headers", list: true },
              {
                type: "object",
                name: "rows",
                label: "Comparison Rows",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.factor || "Row" }) },
                fields: [
                  { type: "string", name: "factor", label: "Factor" },
                  { type: "string", name: "difc", label: "DIFC" },
                  { type: "string", name: "mainland", label: "Mainland" },
                  { type: "string", name: "jafza", label: "JAFZA" },
                  { type: "string", name: "dmcc", label: "DMCC" },
                  { type: "boolean", name: "highlight", label: "Highlight DIFC" },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "services",
            label: "Services Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Services",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Service" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "packages",
            label: "Packages Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Packages",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Package" }) },
                fields: [
                  { type: "string", name: "id", label: "ID" },
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "price", label: "Price" },
                  { type: "string", name: "tagline", label: "Tagline" },
                  { type: "string", name: "category", label: "Category" },
                  { type: "string", name: "color", label: "Gradient Color" },
                  { type: "string", name: "badge", label: "Badge" },
                  { type: "string", name: "badgeColor", label: "Badge Color" },
                  { type: "string", name: "includes", label: "Includes", list: true }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "process",
            label: "Process Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "steps",
                label: "Steps",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Step" }) },
                fields: [
                  { type: "string", name: "step", label: "Step Number" },
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "whyChooseUs",
            label: "Why Choose Us Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.label || "Item" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "desc", label: "Description", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "faqs",
            label: "FAQs Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "FAQs",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.q || "FAQ" }) },
                fields: [
                  { type: "string", name: "q", label: "Question" },
                  { type: "string", name: "a", label: "Answer", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "finalCTA",
            label: "Final CTA",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              { type: "string", name: "primaryCta", label: "Primary CTA" },
              { type: "string", name: "phone", label: "Phone" },
              { type: "string", name: "phoneHref", label: "Phone Link" },
              { type: "string", name: "whatsappMessage", label: "WhatsApp Message", ui: { component: "textarea" } },
              { type: "string", name: "badges", label: "Badges", list: true },
              {
                type: "object",
                name: "office",
                label: "Office Info",
                fields: [
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "line1", label: "Address Line 1" },
                  { type: "string", name: "line2", label: "Address Line 2" },
                  { type: "string", name: "mapLink", label: "Map Link" }
                ]
              },
              {
                type: "object",
                name: "hours",
                label: "Working Hours",
                fields: [
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "monFri", label: "Mon-Fri" },
                  { type: "string", name: "saturday", label: "Saturday" },
                  { type: "string", name: "sunday", label: "Sunday" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "intro",
            label: "Intro Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "image", name: "image", label: "Image" },
              { type: "string", name: "imageBadgeTitle", label: "Image Badge Title" },
              { type: "string", name: "imageBadgeText", label: "Image Badge Text" },
              { type: "string", name: "paragraph1", label: "Paragraph 1", ui: { component: "textarea" } },
              { type: "string", name: "paragraph2", label: "Paragraph 2", ui: { component: "textarea" } },
              { type: "string", name: "paragraph3", label: "Paragraph 3", ui: { component: "textarea" } },
              { type: "string", name: "features", label: "Features", list: true }
            ]
          },
          {
            type: "object",
            name: "customPackageCTA",
            label: "Custom Package CTA",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              { type: "string", name: "buttonText", label: "Button Text" },
              { type: "string", name: "whatsappMessage", label: "WhatsApp Message", ui: { component: "textarea" } }
            ]
          },
          {
            type: "object",
            name: "benefits",
            label: "Benefits Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Benefits",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Benefit" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "desc", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "businessIndustries",
            label: "Business Industries Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Industries",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Industry" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "desc", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "licenseTypes",
            label: "License Types Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "License Types",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "License" }) },
                fields: [
                  { type: "string", name: "id", label: "ID" },
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "tagline", label: "Tagline" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "image", name: "image", label: "Image" },
                  { type: "string", name: "color", label: "Gradient Color" },
                  { type: "string", name: "features", label: "Features", list: true },
                  { type: "string", name: "bestFor", label: "Best For" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "officeOptions",
            label: "Office Options Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Office Options",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Option" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "postSetupSupport",
            label: "Post-Setup Support Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              { type: "string", name: "footer", label: "Footer Text", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Support Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.label || "Item" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "desc", label: "Description" }
                ]
              }
            ]
          }
        ]
      },
      // ============================================================
      // COLLECTION 15: Mainland Pages
      // ============================================================
      {
        name: "mainland",
        label: "Mainland Pages",
        path: "src/content/mainland",
        match: { include: "*" },
        // ← YE
        format: "json",
        ui: { allowedActions: { create: true, delete: false } },
        fields: [
          { type: "string", name: "slug", label: "Slug" },
          {
            type: "object",
            name: "hero",
            label: "Hero Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              { type: "image", name: "image", label: "Hero Image" },
              { type: "string", name: "breadcrumbLabel", label: "Breadcrumb Label" },
              { type: "string", name: "breadcrumbParent", label: "Breadcrumb Parent" },
              { type: "string", name: "ctaPrimaryText", label: "Primary CTA Text" },
              { type: "string", name: "ctaPrimaryLink", label: "Primary CTA Link" },
              { type: "string", name: "ctaSecondaryText", label: "Secondary CTA Text" },
              { type: "string", name: "ctaSecondaryMessage", label: "Secondary CTA WhatsApp Message", ui: { component: "textarea" } },
              { type: "string", name: "badges", label: "Hero Badges", list: true }
            ]
          },
          {
            type: "object",
            name: "stats",
            label: "Stats",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.label || "Stat" }) },
            fields: [
              { type: "string", name: "icon", label: "Icon" },
              { type: "string", name: "value", label: "Value" },
              { type: "string", name: "label", label: "Label" },
              { type: "string", name: "color", label: "Gradient Color" }
            ]
          },
          {
            type: "object",
            name: "intro",
            label: "Intro Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "image", name: "image", label: "Image" },
              { type: "string", name: "imageBadgeTitle", label: "Image Badge Title" },
              { type: "string", name: "imageBadgeText", label: "Image Badge Text" },
              { type: "string", name: "paragraph1", label: "Paragraph 1", ui: { component: "textarea" } },
              { type: "string", name: "paragraph2", label: "Paragraph 2", ui: { component: "textarea" } },
              { type: "string", name: "paragraph3", label: "Paragraph 3", ui: { component: "textarea" } },
              { type: "string", name: "features", label: "Features", list: true }
            ]
          },
          {
            type: "object",
            name: "industriesSection",
            label: "Industries Carousel",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Industries",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Industry" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "image", name: "image", label: "Image" },
                  { type: "string", name: "color", label: "Gradient Color" },
                  { type: "string", name: "roles", label: "Roles", list: true }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "processSection",
            label: "Process Accordion",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "steps",
                label: "Steps",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Step" }) },
                fields: [
                  { type: "string", name: "step", label: "Step Number" },
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "benefits",
            label: "Benefits Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Benefits",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Benefit" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "emiratisationSection",
            label: "Emiratisation Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "paragraph1", label: "Paragraph 1", ui: { component: "textarea" } },
              { type: "string", name: "paragraph2", label: "Paragraph 2", ui: { component: "textarea" } },
              { type: "string", name: "paragraph3", label: "Paragraph 3", ui: { component: "textarea" } },
              {
                type: "object",
                name: "features",
                label: "Features",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.label || "Feature" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "desc", label: "Description" }
                ]
              },
              {
                type: "object",
                name: "visualCards",
                label: "Visual Cards",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Card" }) },
                fields: [
                  { type: "image", name: "image", label: "Image" },
                  { type: "string", name: "tag", label: "Tag" },
                  { type: "string", name: "title", label: "Title" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "whyChooseUsSection",
            label: "Why Choose Us Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Item" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "bulkOverseasSection",
            label: "Bulk + Overseas Section",
            fields: [
              {
                type: "object",
                name: "bulk",
                label: "Bulk Hiring Card",
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "tag", label: "Tag" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "image", name: "image", label: "Image" },
                  { type: "string", name: "gradient", label: "Gradient Overlay" },
                  { type: "string", name: "accentColor", label: "Accent Color Class" },
                  { type: "string", name: "tags", label: "Tags", list: true }
                ]
              },
              {
                type: "object",
                name: "overseas",
                label: "Overseas Hiring Card",
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "tag", label: "Tag" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "image", name: "image", label: "Image" },
                  { type: "string", name: "gradient", label: "Gradient Overlay" },
                  { type: "string", name: "accentColor", label: "Accent Color Class" },
                  { type: "string", name: "tags", label: "Tags", list: true }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "faqs",
            label: "FAQs Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "FAQs",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.q || "FAQ" }) },
                fields: [
                  { type: "string", name: "q", label: "Question" },
                  { type: "string", name: "a", label: "Answer", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "relatedServices",
            label: "Related Services",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Service" }) },
                fields: [
                  { type: "string", name: "slug", label: "Slug" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "image", name: "image", label: "Image" },
                  { type: "string", name: "gradient", label: "Gradient" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "finalCTA",
            label: "Final CTA",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              { type: "string", name: "primaryCta", label: "Primary CTA" },
              { type: "string", name: "phone", label: "Phone" },
              { type: "string", name: "phoneHref", label: "Phone Link" },
              { type: "string", name: "whatsappMessage", label: "WhatsApp Message", ui: { component: "textarea" } },
              { type: "string", name: "badges", label: "Badges", list: true },
              {
                type: "object",
                name: "office",
                label: "Office Info",
                fields: [
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "line1", label: "Address Line 1" },
                  { type: "string", name: "line2", label: "Address Line 2" },
                  { type: "string", name: "mapLink", label: "Map Link" }
                ]
              },
              {
                type: "object",
                name: "hours",
                label: "Working Hours",
                fields: [
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "monFri", label: "Mon-Fri" },
                  { type: "string", name: "saturday", label: "Saturday" },
                  { type: "string", name: "sunday", label: "Sunday" }
                ]
              }
            ]
          },
          // ---- Previously nested inside "hours" — now moved out as siblings ----
          {
            type: "object",
            name: "licenseTypes",
            label: "License Types Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "License Types",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "License" }) },
                fields: [
                  { type: "string", name: "id", label: "ID" },
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "image", name: "image", label: "Image" },
                  { type: "string", name: "color", label: "Gradient Color" },
                  { type: "string", name: "features", label: "Features", list: true },
                  { type: "string", name: "bestFor", label: "Best For" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "eligibilitySection",
            label: "Eligibility Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "paragraph1", label: "Paragraph 1", ui: { component: "textarea" } },
              { type: "string", name: "paragraph2", label: "Paragraph 2", ui: { component: "textarea" } },
              {
                type: "object",
                name: "groups",
                label: "Eligibility Groups",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Group" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              },
              {
                type: "object",
                name: "visualCards",
                label: "Visual Cards",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Card" }) },
                fields: [
                  { type: "image", name: "image", label: "Image" },
                  { type: "string", name: "tag", label: "Tag" },
                  { type: "string", name: "title", label: "Title" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "services",
            label: "Services Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Services",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Service" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "whatIsSection",
            label: "What Is Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "image", name: "image", label: "Image" },
              { type: "string", name: "imageBadgeTitle", label: "Image Badge Title" },
              { type: "string", name: "imageBadgeText", label: "Image Badge Text" },
              { type: "string", name: "paragraph1", label: "Paragraph 1", ui: { component: "textarea" } },
              { type: "string", name: "paragraph2", label: "Paragraph 2", ui: { component: "textarea" } },
              { type: "string", name: "paragraph3", label: "Paragraph 3", ui: { component: "textarea" } },
              { type: "string", name: "features", label: "Features", list: true }
            ]
          },
          {
            type: "object",
            name: "advantages",
            label: "Advantages Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Advantages",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Advantage" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "activityCategories",
            label: "Activity Categories",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Categories",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Category" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "examples", label: "Examples", list: true },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "emiratesSection",
            label: "Emirates Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Emirates",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.name || "Emirate" }) },
                fields: [
                  { type: "string", name: "name", label: "Name" },
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" },
                  { type: "image", name: "bg", label: "Background Image" },
                  { type: "string", name: "highlight", label: "Highlight Badge" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "setupProcessSection",
            label: "Setup Process Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "steps",
                label: "Steps",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Step" }) },
                fields: [
                  { type: "string", name: "step", label: "Step Number" },
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "whyChooseUsSimple",
            label: "Why Choose Us (Simple)",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.label || "Item" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "label", label: "Label" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "growthStatsSection",
            label: "Growth Stats Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.label || "Stat" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "value", label: "Value" },
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "whatIsVisa",
            label: "What Is Visa Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "image", name: "image", label: "Image" },
              { type: "string", name: "imageBadgeTitle", label: "Image Badge Title" },
              { type: "string", name: "imageBadgeText", label: "Image Badge Text" },
              { type: "string", name: "paragraph1", label: "Paragraph", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Item" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "documentsSection",
            label: "Documents Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Documents",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.label || "Document" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "desc", label: "Description" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "officeTypesSection",
            label: "Office Types Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Office Types",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Office Type" }) },
                fields: [
                  { type: "string", name: "id", label: "ID" },
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "short", label: "Short Tagline" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "image", name: "image", label: "Image" },
                  { type: "string", name: "color", label: "Gradient Color" },
                  { type: "string", name: "features", label: "Features", list: true },
                  { type: "string", name: "price", label: "Price Badge" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "simplifySection",
            label: "Simplify Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "steps",
                label: "Steps",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Step" }) },
                fields: [
                  { type: "string", name: "step", label: "Step Number" },
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "locationsSection",
            label: "Locations Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Locations",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.name || "Location" }) },
                fields: [
                  { type: "string", name: "id", label: "ID" },
                  { type: "string", name: "name", label: "Name" },
                  { type: "string", name: "tagline", label: "Tagline" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "image", name: "image", label: "Image" },
                  { type: "string", name: "color", label: "Gradient Color" },
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "features", label: "Features", list: true }
                ]
              }
            ]
          }
        ]
      },
      // ============================================================
      // HOME COLLECTION 1: Hero Section
      // ============================================================
      {
        name: "homeHero",
        label: "\u{1F3E0} Home \u2014 Hero",
        path: "src/content/home",
        match: { include: "hero" },
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          {
            type: "object",
            name: "badge",
            label: "Badge",
            fields: [
              { type: "string", name: "text", label: "Text" },
              { type: "boolean", name: "showPulse", label: "Show Pulse Dot" }
            ]
          },
          {
            type: "object",
            name: "heading",
            label: "Heading",
            fields: [
              { type: "string", name: "line1", label: "Line 1" },
              { type: "string", name: "line2Highlight", label: "Line 2 (Highlight)" },
              { type: "string", name: "line3", label: "Line 3" }
            ]
          },
          { type: "string", name: "subtext", label: "Subtext", ui: { component: "textarea" } },
          {
            type: "object",
            name: "video",
            label: "Background Video",
            fields: [
              { type: "string", name: "src", label: "Video Source" },
              { type: "string", name: "poster", label: "Poster Image" }
            ]
          },
          {
            type: "object",
            name: "ctaPrimary",
            label: "Primary CTA",
            fields: [
              { type: "string", name: "text", label: "Text" },
              { type: "string", name: "link", label: "Link" }
            ]
          },
          {
            type: "object",
            name: "ctaSecondary",
            label: "Secondary CTA",
            fields: [
              { type: "string", name: "text", label: "Text" },
              { type: "string", name: "message", label: "WhatsApp Message", ui: { component: "textarea" } }
            ]
          },
          { type: "string", name: "trustPills", label: "Trust Pills", list: true },
          {
            type: "object",
            name: "googleBadge",
            label: "Google Badge",
            fields: [
              { type: "string", name: "rating", label: "Rating" },
              { type: "string", name: "reviewsText", label: "Reviews Text" }
            ]
          },
          {
            type: "object",
            name: "floatingCards",
            label: "Floating Cards",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.title || "Card" }) },
            fields: [
              { type: "string", name: "icon", label: "Icon" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "price", label: "Price" },
              { type: "string", name: "tag", label: "Tag" },
              { type: "string", name: "tagColor", label: "Tag Color" },
              { type: "number", name: "delay", label: "Animation Delay" },
              {
                type: "object",
                name: "position",
                label: "Position",
                fields: [
                  { type: "string", name: "right", label: "Right" },
                  { type: "string", name: "top", label: "Top" }
                ]
              },
              { type: "number", name: "z", label: "Z-Index" }
            ]
          },
          {
            type: "object",
            name: "reviewsSection",
            label: "Reviews Section Header",
            fields: [
              { type: "string", name: "badgeText", label: "Badge Text" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Highlight Word" },
              { type: "string", name: "rating", label: "Rating" },
              { type: "string", name: "reviewsCountText", label: "Reviews Count Text" }
            ]
          },
          {
            type: "object",
            name: "reviews",
            label: "Reviews",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.name || "Review" }) },
            fields: [
              { type: "string", name: "name", label: "Name" },
              { type: "string", name: "initials", label: "Initials" },
              { type: "number", name: "rating", label: "Rating" },
              { type: "string", name: "date", label: "Date" },
              { type: "string", name: "text", label: "Review Text", ui: { component: "textarea" } },
              { type: "string", name: "color", label: "Gradient Color" }
            ]
          }
        ]
      },
      // ============================================================
      // HOME COLLECTION 2: Intro Section
      // ============================================================
      {
        name: "homeIntro",
        label: "\u{1F3E0} Home \u2014 Intro",
        path: "src/content/home",
        match: { include: "intro" },
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: "string", name: "badge", label: "Badge" },
          {
            type: "object",
            name: "heading",
            label: "Heading",
            fields: [
              { type: "string", name: "line1", label: "Line 1" },
              { type: "string", name: "highlight", label: "Highlight Word" },
              { type: "string", name: "line3", label: "Line 3" }
            ]
          },
          { type: "string", name: "paragraph1", label: "Paragraph 1", ui: { component: "textarea" } },
          { type: "string", name: "paragraph2BoldPart", label: "Paragraph 2 (Bold Part)" },
          { type: "string", name: "paragraph2Rest", label: "Paragraph 2 (Rest)", ui: { component: "textarea" } },
          { type: "string", name: "highlights", label: "Highlights", list: true },
          {
            type: "object",
            name: "ctaPrimary",
            label: "Primary CTA",
            fields: [
              { type: "string", name: "text", label: "Text" },
              { type: "string", name: "link", label: "Link" }
            ]
          },
          {
            type: "object",
            name: "ctaSecondary",
            label: "Secondary CTA",
            fields: [
              { type: "string", name: "text", label: "Text" },
              { type: "string", name: "link", label: "Link" }
            ]
          },
          {
            type: "object",
            name: "dashboardCard",
            label: "Dashboard Card",
            fields: [
              { type: "string", name: "brandLabel", label: "Brand Label" },
              { type: "string", name: "brandTitle", label: "Brand Title" },
              { type: "string", name: "statusLabel", label: "Status Label" },
              {
                type: "object",
                name: "awardBadge",
                label: "Award Badge",
                fields: [
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "value", label: "Value" }
                ]
              },
              {
                type: "object",
                name: "expertsBadge",
                label: "Experts Badge",
                fields: [
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "value", label: "Value" }
                ]
              },
              {
                type: "object",
                name: "steps",
                label: "Steps",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.label || "Step" }) },
                fields: [
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "status", label: "Status" },
                  { type: "string", name: "week", label: "Week Text" }
                ]
              },
              { type: "string", name: "progressLabel", label: "Progress Label" },
              { type: "string", name: "progressValue", label: "Progress Value" },
              { type: "number", name: "progressPercent", label: "Progress Percent" }
            ]
          },
          {
            type: "object",
            name: "bottomSectionTitle",
            label: "Bottom Section Title",
            fields: [
              { type: "string", name: "line1", label: "Line 1" },
              { type: "string", name: "highlight", label: "Highlight Word" }
            ]
          },
          {
            type: "object",
            name: "benefits",
            label: "Benefits",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.title || "Benefit" }) },
            fields: [
              { type: "string", name: "icon", label: "Icon" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              { type: "string", name: "gradient", label: "Gradient Classes" }
            ]
          }
        ]
      },
      // ============================================================
      // HOME COLLECTION 3: Services Section
      // ============================================================
      {
        name: "homeServices",
        label: "\u{1F3E0} Home \u2014 Services",
        path: "src/content/home",
        match: { include: "services" },
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: "string", name: "badge", label: "Badge" },
          {
            type: "object",
            name: "heading",
            label: "Heading",
            fields: [
              { type: "string", name: "line1", label: "Line 1" },
              { type: "string", name: "highlight", label: "Highlight Word" }
            ]
          },
          { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
          {
            type: "object",
            name: "services",
            label: "Services List",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.title || "Service" }) },
            fields: [
              { type: "string", name: "id", label: "ID" },
              { type: "string", name: "icon", label: "Icon" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "tagline", label: "Tagline" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              { type: "image", name: "image", label: "Image" },
              { type: "string", name: "features", label: "Features", list: true },
              { type: "string", name: "gradient", label: "Gradient Classes" },
              { type: "string", name: "glowColor", label: "Glow Color" },
              { type: "string", name: "accentColor", label: "Accent Text Class" },
              { type: "string", name: "bgAccent", label: "BG Accent Class" },
              { type: "string", name: "borderAccent", label: "Border Accent Class" },
              { type: "string", name: "number", label: "Number" }
            ]
          },
          {
            type: "object",
            name: "bottomCTA",
            label: "Bottom CTA",
            fields: [
              { type: "string", name: "question", label: "Question Text" },
              { type: "string", name: "buttonText", label: "Button Text" },
              { type: "string", name: "buttonLink", label: "Button Link" }
            ]
          }
        ]
      },
      // ============================================================
      // HOME COLLECTION 4: Specialized Services
      // ============================================================
      {
        name: "homeSpecializedServices",
        label: "\u{1F3E0} Home \u2014 Specialized Services",
        path: "src/content/home",
        match: { include: "specialized-services" },
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: "string", name: "badge", label: "Badge" },
          {
            type: "object",
            name: "heading",
            label: "Heading",
            fields: [
              { type: "string", name: "line1", label: "Line 1" },
              { type: "string", name: "highlight", label: "Highlight Word" }
            ]
          },
          { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
          { type: "string", name: "hoverHint", label: "Hover Hint Text" },
          {
            type: "object",
            name: "services",
            label: "Services",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.title || "Service" }) },
            fields: [
              { type: "string", name: "slug", label: "Slug" },
              { type: "string", name: "icon", label: "Icon" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              { type: "image", name: "image", label: "Image" },
              { type: "string", name: "gradient", label: "Gradient Classes" },
              { type: "string", name: "points", label: "Points", list: true }
            ]
          }
        ]
      },
      // ============================================================
      // HOME COLLECTION 5: Packages Section
      // ============================================================
      {
        name: "homePackages",
        label: "\u{1F3E0} Home \u2014 Packages",
        path: "src/content/home",
        match: { include: "packages" },
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: "string", name: "badge", label: "Badge" },
          {
            type: "object",
            name: "heading",
            label: "Heading",
            fields: [
              { type: "string", name: "line1", label: "Line 1" },
              { type: "string", name: "highlight", label: "Highlight Word" }
            ]
          },
          { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
          {
            type: "object",
            name: "toggle",
            label: "Toggle",
            fields: [
              { type: "string", name: "oneTimeLabel", label: "One-time Label" },
              { type: "string", name: "installmentLabel", label: "Installment Label" },
              { type: "string", name: "installmentSuffix", label: "Installment Suffix" }
            ]
          },
          {
            type: "object",
            name: "packages",
            label: "Packages List",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.name || "Package" }) },
            fields: [
              { type: "string", name: "id", label: "ID" },
              { type: "string", name: "name", label: "Name" },
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "price", label: "Price" },
              { type: "string", name: "currency", label: "Currency" },
              { type: "string", name: "period", label: "Period" },
              { type: "string", name: "tagline", label: "Tagline", ui: { component: "textarea" } },
              { type: "string", name: "icon", label: "Icon" },
              { type: "string", name: "gradient", label: "Gradient Classes" },
              { type: "string", name: "glowColor", label: "Glow Color" },
              { type: "string", name: "accentText", label: "Accent Text Class" },
              { type: "string", name: "accentBg", label: "Accent BG Class" },
              { type: "string", name: "accentBorder", label: "Accent Border Class" },
              { type: "string", name: "iconBg", label: "Icon BG Gradient" },
              { type: "image", name: "image", label: "Image" },
              { type: "string", name: "features", label: "Features", list: true },
              { type: "string", name: "cta", label: "CTA Text" },
              { type: "boolean", name: "highlighted", label: "Highlighted" }
            ]
          },
          {
            type: "object",
            name: "customPackageCTA",
            label: "Custom Package CTA",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              { type: "string", name: "primaryCta", label: "Primary CTA" },
              { type: "string", name: "secondaryCta", label: "Secondary CTA" },
              { type: "string", name: "phone", label: "Phone" },
              { type: "string", name: "phoneHref", label: "Phone Link" },
              { type: "string", name: "whatsappMessage", label: "WhatsApp Message", ui: { component: "textarea" } },
              { type: "image", name: "backgroundImage", label: "Background Image" }
            ]
          },
          {
            type: "object",
            name: "trustLine",
            label: "Trust Line",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.label || "Item" }) },
            fields: [
              { type: "string", name: "label", label: "Label" },
              { type: "string", name: "color", label: "Color" }
            ]
          }
        ]
      },
      // ============================================================
      // HOME COLLECTION 6: Process Section
      // ============================================================
      {
        name: "homeProcess",
        label: "\u{1F3E0} Home \u2014 Process",
        path: "src/content/home",
        match: { include: "process" },
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: "string", name: "badge", label: "Badge" },
          {
            type: "object",
            name: "heading",
            label: "Heading",
            fields: [
              { type: "string", name: "line1", label: "Line 1" },
              { type: "string", name: "highlight", label: "Highlight Word" }
            ]
          },
          { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
          { type: "string", name: "stepsLabel", label: "Steps Label Prefix" },
          { type: "string", name: "stepsLabelSuffix", label: "Steps Label Suffix" },
          {
            type: "object",
            name: "steps",
            label: "Steps",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.title || "Step" }) },
            fields: [
              { type: "string", name: "number", label: "Number" },
              { type: "string", name: "icon", label: "Icon" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              { type: "string", name: "gradient", label: "Gradient Classes" },
              { type: "string", name: "glow", label: "Glow Color" },
              { type: "image", name: "image", label: "Image" }
            ]
          },
          {
            type: "object",
            name: "bottomCTA",
            label: "Bottom CTA",
            fields: [
              { type: "string", name: "icon", label: "Icon" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              { type: "string", name: "primaryCta", label: "Primary CTA" },
              { type: "string", name: "secondaryCta", label: "Secondary CTA" },
              { type: "string", name: "phone", label: "Phone" },
              { type: "string", name: "phoneHref", label: "Phone Link" },
              { type: "string", name: "whatsappMessage", label: "WhatsApp Message", ui: { component: "textarea" } },
              { type: "image", name: "backgroundImage", label: "Background Image" },
              { type: "string", name: "trustIndicators", label: "Trust Indicators", list: true }
            ]
          }
        ]
      },
      // ============================================================
      // HOME COLLECTION 7: Trust Bar Section
      // ============================================================
      {
        name: "homeTrustBar",
        label: "\u{1F3E0} Home \u2014 Trust Bar",
        path: "src/content/home",
        match: { include: "trust-bar" },
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: "string", name: "badge", label: "Badge" },
          {
            type: "object",
            name: "heading",
            label: "Heading",
            fields: [
              { type: "string", name: "line1", label: "Line 1" },
              { type: "string", name: "line2Highlight", label: "Line 2 (Highlight)" }
            ]
          },
          { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
          {
            type: "object",
            name: "stats",
            label: "Stats",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.label || "Stat" }) },
            fields: [
              { type: "string", name: "icon", label: "Icon" },
              { type: "number", name: "value", label: "Value" },
              { type: "string", name: "suffix", label: "Suffix" },
              { type: "string", name: "label", label: "Label" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              { type: "string", name: "gradient", label: "Gradient Classes" },
              { type: "string", name: "glowColor", label: "Glow Color" }
            ]
          },
          {
            type: "object",
            name: "bottomTrust",
            label: "Bottom Trust Items",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.label || "Item" }) },
            fields: [
              { type: "string", name: "label", label: "Label" },
              { type: "string", name: "color", label: "Dot Color Class" }
            ]
          }
        ]
      },
      // ============================================================
      // HOME COLLECTION 8: Comparison Section
      // ============================================================
      {
        name: "homeComparison",
        label: "\u{1F3E0} Home \u2014 Comparison",
        path: "src/content/home",
        match: { include: "comparison" },
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: "string", name: "badge", label: "Badge" },
          {
            type: "object",
            name: "heading",
            label: "Heading",
            fields: [
              { type: "string", name: "line1", label: "Line 1" },
              { type: "string", name: "highlight", label: "Highlight Word" }
            ]
          },
          { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
          { type: "string", name: "vsLabel", label: "VS Label" },
          {
            type: "object",
            name: "zones",
            label: "Zones",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.name || "Zone" }) },
            fields: [
              { type: "string", name: "id", label: "ID" },
              { type: "string", name: "name", label: "Name" },
              { type: "string", name: "short", label: "Short" },
              { type: "string", name: "icon", label: "Icon" },
              { type: "string", name: "gradient", label: "Gradient Classes" },
              { type: "string", name: "glow", label: "Glow Color" },
              { type: "string", name: "accentText", label: "Accent Text Class" },
              { type: "string", name: "accentBg", label: "Accent BG Class" },
              { type: "string", name: "accentBorder", label: "Accent Border Class" },
              { type: "image", name: "image", label: "Image" },
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "tagline", label: "Tagline" },
              { type: "string", name: "bestFor", label: "Best For", ui: { component: "textarea" } },
              { type: "string", name: "highlight", label: "Highlight", ui: { component: "textarea" } },
              { type: "string", name: "limitation", label: "Limitation", ui: { component: "textarea" } },
              { type: "string", name: "ctaText", label: "CTA Text" },
              { type: "string", name: "whatsappMessage", label: "WhatsApp Message", ui: { component: "textarea" } },
              { type: "string", name: "watermark", label: "Watermark Number" }
            ]
          },
          { type: "string", name: "bestForLabel", label: "Best For Label" },
          {
            type: "object",
            name: "tableHeaders",
            label: "Table Headers",
            fields: [
              { type: "string", name: "features", label: "Features" },
              { type: "string", name: "freezone", label: "Free Zone" },
              { type: "string", name: "mainland", label: "Mainland" }
            ]
          },
          {
            type: "object",
            name: "features",
            label: "Features Table",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.label || "Feature" }) },
            fields: [
              { type: "string", name: "icon", label: "Icon" },
              { type: "string", name: "label", label: "Label" },
              {
                type: "object",
                name: "freezone",
                label: "Free Zone",
                fields: [
                  { type: "string", name: "value", label: "Value" },
                  { type: "number", name: "score", label: "Score (0-100)" }
                ]
              },
              {
                type: "object",
                name: "mainland",
                label: "Mainland",
                fields: [
                  { type: "string", name: "value", label: "Value" },
                  { type: "number", name: "score", label: "Score (0-100)" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "bottomCTA",
            label: "Bottom CTA",
            fields: [
              { type: "string", name: "icon", label: "Icon" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              { type: "string", name: "primaryCta", label: "Primary CTA" },
              { type: "string", name: "secondaryCta", label: "Secondary CTA" },
              { type: "string", name: "phone", label: "Phone" },
              { type: "string", name: "phoneHref", label: "Phone Link" },
              { type: "string", name: "whatsappMessage", label: "WhatsApp Message", ui: { component: "textarea" } },
              { type: "image", name: "backgroundImage", label: "Background Image" }
            ]
          }
        ]
      },
      // ============================================================
      // HOME COLLECTION 9: Contact Section
      // ============================================================
      {
        name: "homeContact",
        label: "\u{1F3E0} Home \u2014 Contact",
        path: "src/content/home",
        match: { include: "contact" },
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: "string", name: "badge", label: "Badge" },
          {
            type: "object",
            name: "heading",
            label: "Heading",
            fields: [
              { type: "string", name: "line1", label: "Line 1" },
              { type: "string", name: "highlight", label: "Highlight Word" }
            ]
          },
          { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
          {
            type: "object",
            name: "contactCards",
            label: "Contact Cards",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.label || "Card" }) },
            fields: [
              { type: "string", name: "icon", label: "Icon" },
              { type: "string", name: "label", label: "Label" },
              { type: "string", name: "value", label: "Value" },
              { type: "string", name: "sub", label: "Subtext" },
              { type: "string", name: "href", label: "Link" },
              { type: "string", name: "gradient", label: "Gradient Classes" },
              { type: "string", name: "glow", label: "Glow Color" }
            ]
          },
          {
            type: "object",
            name: "workingHoursCard",
            label: "Working Hours Card",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "timezoneLabel", label: "Timezone Label" },
              { type: "string", name: "todayBadge", label: "Today Badge" },
              {
                type: "object",
                name: "hours",
                label: "Hours",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.day || "Day" }) },
                fields: [
                  { type: "string", name: "day", label: "Day" },
                  { type: "string", name: "hours", label: "Hours" },
                  { type: "boolean", name: "active", label: "Is Today" },
                  { type: "boolean", name: "closed", label: "Is Closed" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "trustBadges",
            label: "Trust Badges",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.label || "Badge" }) },
            fields: [
              { type: "string", name: "icon", label: "Icon" },
              { type: "string", name: "label", label: "Label" },
              { type: "string", name: "sub", label: "Subtext" }
            ]
          },
          {
            type: "object",
            name: "form",
            label: "Form Section",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              { type: "string", name: "submitText", label: "Submit Button Text" },
              { type: "string", name: "privacyNote", label: "Privacy Note" },
              { type: "string", name: "successTitle", label: "Success Title" },
              { type: "string", name: "successMessage", label: "Success Message" },
              { type: "string", name: "whatsappNumber", label: "WhatsApp Number" },
              { type: "string", name: "whatsappSenderLine", label: "Sender Line" },
              {
                type: "object",
                name: "fields",
                label: "Form Fields",
                fields: [
                  { type: "object", name: "name", label: "Name Field", fields: [{ type: "string", name: "label", label: "Label" }, { type: "string", name: "placeholder", label: "Placeholder" }, { type: "boolean", name: "required", label: "Required" }] },
                  { type: "object", name: "email", label: "Email Field", fields: [{ type: "string", name: "label", label: "Label" }, { type: "string", name: "placeholder", label: "Placeholder" }, { type: "boolean", name: "required", label: "Required" }] },
                  { type: "object", name: "phone", label: "Phone Field", fields: [{ type: "string", name: "label", label: "Label" }, { type: "string", name: "placeholder", label: "Placeholder" }, { type: "boolean", name: "required", label: "Required" }] },
                  { type: "object", name: "nationality", label: "Nationality Field", fields: [{ type: "string", name: "label", label: "Label" }, { type: "string", name: "placeholder", label: "Placeholder" }, { type: "boolean", name: "required", label: "Required" }] },
                  { type: "object", name: "service", label: "Service Field", fields: [{ type: "string", name: "label", label: "Label" }, { type: "string", name: "placeholder", label: "Placeholder" }, { type: "boolean", name: "required", label: "Required" }] },
                  { type: "object", name: "message", label: "Message Field", fields: [{ type: "string", name: "label", label: "Label" }, { type: "string", name: "placeholder", label: "Placeholder" }, { type: "boolean", name: "required", label: "Required" }] }
                ]
              },
              { type: "string", name: "services", label: "Services Dropdown", list: true }
            ]
          },
          {
            type: "object",
            name: "map",
            label: "Map Section",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "address1", label: "Address Line 1" },
              { type: "string", name: "address2", label: "Address Line 2", ui: { component: "textarea" } },
              { type: "string", name: "directionsText", label: "Directions Text" },
              { type: "string", name: "directionsLink", label: "Directions Link" },
              { type: "string", name: "embedSrc", label: "Google Maps Embed URL", ui: { component: "textarea" } },
              { type: "string", name: "quickContactLabel", label: "Quick Contact Label" },
              { type: "string", name: "quickContactPhone", label: "Quick Contact Phone" },
              { type: "string", name: "quickContactMessage", label: "Quick Contact WhatsApp Message", ui: { component: "textarea" } }
            ]
          }
        ]
      },
      // ============================================================
      // HOME COLLECTION 10: FAQ Section
      // ============================================================
      {
        name: "homeFaq",
        label: "\u{1F3E0} Home \u2014 FAQ",
        path: "src/content/home",
        match: { include: "faq" },
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: "string", name: "badge", label: "Badge" },
          {
            type: "object",
            name: "heading",
            label: "Heading",
            fields: [
              { type: "string", name: "line1", label: "Line 1" },
              { type: "string", name: "highlight", label: "Highlight Word" }
            ]
          },
          { type: "string", name: "headingLine3", label: "Heading Line 3" },
          { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
          { type: "string", name: "searchPlaceholder", label: "Search Placeholder" },
          {
            type: "object",
            name: "contactCard",
            label: "Contact Card",
            fields: [
              { type: "string", name: "icon", label: "Icon" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              { type: "string", name: "whatsappText", label: "WhatsApp Text" },
              { type: "string", name: "whatsappMessage", label: "WhatsApp Message", ui: { component: "textarea" } },
              { type: "string", name: "callText", label: "Call Text" },
              { type: "string", name: "phone", label: "Phone" },
              { type: "string", name: "phoneHref", label: "Phone Link" },
              { type: "string", name: "statsResponseLabel", label: "Response Stat Label" },
              { type: "string", name: "statsResponseValue", label: "Response Stat Value" },
              { type: "string", name: "statsConsultLabel", label: "Consultation Stat Label" },
              { type: "string", name: "statsConsultValue", label: "Consultation Stat Value" }
            ]
          },
          { type: "string", name: "expandAllLabel", label: "Expand All Text" },
          { type: "string", name: "collapseAllLabel", label: "Collapse All Text" },
          { type: "string", name: "questionSingular", label: "Question (Singular)" },
          { type: "string", name: "questionPlural", label: "Questions (Plural)" },
          { type: "string", name: "noResultsTitle", label: "No Results Title" },
          { type: "string", name: "noResultsSubtitle", label: "No Results Subtitle" },
          { type: "string", name: "resetFiltersText", label: "Reset Filters Text" },
          {
            type: "object",
            name: "categories",
            label: "Categories",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.name || "Category" }) },
            fields: [
              { type: "string", name: "id", label: "ID" },
              { type: "string", name: "name", label: "Name" },
              { type: "string", name: "icon", label: "Icon" },
              { type: "number", name: "count", label: "Count" }
            ]
          },
          {
            type: "object",
            name: "faqs",
            label: "FAQs",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.q || "FAQ" }) },
            fields: [
              { type: "string", name: "category", label: "Category" },
              { type: "string", name: "q", label: "Question", ui: { component: "textarea" } },
              { type: "string", name: "a", label: "Answer", ui: { component: "textarea" } }
            ]
          },
          {
            type: "object",
            name: "bottomCTA",
            label: "Bottom CTA",
            fields: [
              { type: "string", name: "icon", label: "Icon" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "subtitle", label: "Subtitle" },
              { type: "string", name: "buttonText", label: "Button Text" },
              { type: "string", name: "whatsappMessage", label: "WhatsApp Message", ui: { component: "textarea" } }
            ]
          }
        ]
      },
      // ============================================================
      // ADGM Free Zone Collection
      // ============================================================
      {
        name: "adgm",
        label: "\u{1F3D9}\uFE0F ADGM Free Zone",
        path: "src/content/freezones",
        match: { include: "adgm" },
        // ← YE
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: "string", name: "slug", label: "Slug" },
          // ---------- HERO ----------
          {
            type: "object",
            name: "hero",
            label: "Hero Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              { type: "image", name: "image", label: "Hero Image" },
              { type: "string", name: "breadcrumbParent", label: "Breadcrumb Parent" },
              { type: "string", name: "breadcrumbLabel", label: "Breadcrumb Label" },
              { type: "string", name: "ctaPrimaryText", label: "CTA Primary Text" },
              { type: "string", name: "ctaPrimaryLink", label: "CTA Primary Link" },
              { type: "string", name: "ctaSecondaryText", label: "CTA Secondary Text" },
              { type: "string", name: "ctaSecondaryMessage", label: "CTA Secondary WhatsApp Message", ui: { component: "textarea" } },
              { type: "string", name: "badges", label: "Badges", list: true }
            ]
          },
          // ---------- STATS ----------
          {
            type: "object",
            name: "stats",
            label: "Stats",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.label || "Stat" }) },
            fields: [
              { type: "string", name: "icon", label: "Icon" },
              { type: "string", name: "value", label: "Value" },
              { type: "string", name: "label", label: "Label" },
              { type: "string", name: "color", label: "Gradient Color" }
            ]
          },
          // ---------- DASHBOARD CARD ----------
          {
            type: "object",
            name: "dashboardCard",
            label: "Dashboard Card",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "statusLabel", label: "Status Label" },
              { type: "string", name: "balanceLabel", label: "Balance Label" },
              { type: "string", name: "balanceValue", label: "Balance Value" },
              { type: "string", name: "balanceSubtext", label: "Balance Subtext" },
              {
                type: "object",
                name: "metrics",
                label: "Metrics",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.label || "Metric" }) },
                fields: [
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "value", label: "Value" },
                  { type: "string", name: "color", label: "Text Color Class" }
                ]
              },
              { type: "string", name: "chartLabel", label: "Chart Label" },
              { type: "string", name: "chartValue", label: "Chart Value" },
              { type: "number", name: "chartBars", label: "Chart Bars (0\u2013100)", list: true }
            ]
          },
          // ---------- WHY ADGM ----------
          {
            type: "object",
            name: "whyADGM",
            label: "Why ADGM Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Item" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- BEGIN JOURNEY ----------
          {
            type: "object",
            name: "beginJourney",
            label: "Begin Journey Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "image", name: "image", label: "Image" },
              { type: "string", name: "imageBadgeTitle", label: "Image Badge Title" },
              { type: "string", name: "imageBadgeText", label: "Image Badge Text" },
              { type: "string", name: "paragraph1", label: "Paragraph 1", ui: { component: "textarea" } },
              { type: "string", name: "paragraph2", label: "Paragraph 2", ui: { component: "textarea" } },
              { type: "string", name: "paragraph3", label: "Paragraph 3", ui: { component: "textarea" } },
              { type: "string", name: "features", label: "Features", list: true }
            ]
          },
          // ---------- LICENSE TYPES ----------
          {
            type: "object",
            name: "licenseTypes",
            label: "License Types Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "License Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "License" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "code", label: "Code" },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- VISA SERVICES ----------
          {
            type: "object",
            name: "visaServices",
            label: "Visa Services Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Visa Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Visa" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "stampColor", label: "Stamp Gradient" }
                ]
              }
            ]
          },
          // ---------- OFFICE SOLUTIONS ----------
          {
            type: "object",
            name: "officeSolutions",
            label: "Office Solutions Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "smallItems",
                label: "Small Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Item" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              },
              {
                type: "object",
                name: "largeItem",
                label: "Large Item",
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          // ---------- BUSINESS SUPPORT ----------
          {
            type: "object",
            name: "businessSupport",
            label: "Business Support Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Item" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          // ---------- STRATEGIC ADVANTAGES ----------
          {
            type: "object",
            name: "strategicAdvantages",
            label: "Strategic Advantages Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Item" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          // ---------- WHY CHOOSE US ----------
          {
            type: "object",
            name: "whyChooseUs",
            label: "Why Choose Us Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Item" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- FAQS ----------
          {
            type: "object",
            name: "faqs",
            label: "FAQs Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "FAQ Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.q || "FAQ" }) },
                fields: [
                  { type: "string", name: "q", label: "Question" },
                  { type: "string", name: "a", label: "Answer", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          // ---------- RELATED SERVICES ----------
          {
            type: "object",
            name: "relatedServices",
            label: "Related Services Section",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Service" }) },
                fields: [
                  { type: "string", name: "slug", label: "Slug" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "image", name: "image", label: "Image" },
                  { type: "string", name: "gradient", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- FINAL CTA ----------
          {
            type: "object",
            name: "finalCTA",
            label: "Final CTA Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              { type: "string", name: "primaryCta", label: "Primary CTA Text" },
              { type: "string", name: "phone", label: "Phone Number" },
              { type: "string", name: "phoneHref", label: "Phone Link (tel:)" },
              { type: "string", name: "whatsappMessage", label: "WhatsApp Message", ui: { component: "textarea" } },
              { type: "string", name: "badges", label: "Badges", list: true },
              {
                type: "object",
                name: "office",
                label: "Office Card",
                fields: [
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "line1", label: "Address Line 1" },
                  { type: "string", name: "line2", label: "Address Line 2" },
                  { type: "string", name: "mapLink", label: "Map Link" }
                ]
              },
              {
                type: "object",
                name: "hours",
                label: "Working Hours",
                fields: [
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "monFri", label: "Mon \u2013 Fri" },
                  { type: "string", name: "saturday", label: "Saturday" },
                  { type: "string", name: "sunday", label: "Sunday" }
                ]
              }
            ]
          }
        ]
      },
      // ============================================================
      // Ajman Free Zone Collection
      // ============================================================
      {
        name: "ajmanFreeZone",
        label: "\u{1F3D9}\uFE0F Ajman Free Zone",
        path: "src/content/freezones",
        match: { include: "ajman-free-zone" },
        // ← YE
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: "string", name: "slug", label: "Slug" },
          // ---------- HERO ----------
          {
            type: "object",
            name: "hero",
            label: "Hero Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              { type: "image", name: "image", label: "Hero Image" },
              { type: "string", name: "breadcrumbParent", label: "Breadcrumb Parent" },
              { type: "string", name: "breadcrumbLabel", label: "Breadcrumb Label" },
              { type: "string", name: "ctaPrimaryText", label: "CTA Primary Text" },
              { type: "string", name: "ctaPrimaryLink", label: "CTA Primary Link" },
              { type: "string", name: "ctaSecondaryText", label: "CTA Secondary Text" },
              { type: "string", name: "ctaSecondaryMessage", label: "CTA Secondary WhatsApp Message", ui: { component: "textarea" } },
              { type: "string", name: "badges", label: "Badges", list: true }
            ]
          },
          // ---------- STATS ----------
          {
            type: "object",
            name: "stats",
            label: "Stats",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.label || "Stat" }) },
            fields: [
              { type: "string", name: "icon", label: "Icon" },
              { type: "string", name: "value", label: "Value" },
              { type: "string", name: "label", label: "Label" },
              { type: "string", name: "color", label: "Gradient Color" }
            ]
          },
          // ---------- DASHBOARD CARD ----------
          {
            type: "object",
            name: "dashboardCard",
            label: "Dashboard Card",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "statusLabel", label: "Status Label" },
              { type: "string", name: "zoneLabel", label: "Zone Label" },
              { type: "string", name: "zoneValue", label: "Zone Value" },
              { type: "string", name: "statusBadge", label: "Status Badge" },
              {
                type: "object",
                name: "metrics",
                label: "Metrics",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.label || "Metric" }) },
                fields: [
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "value", label: "Value" },
                  { type: "string", name: "color", label: "Text Color Class" }
                ]
              }
            ]
          },
          // ---------- GROW BUSINESS ----------
          {
            type: "object",
            name: "growBusiness",
            label: "Grow Business Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "image", name: "image", label: "Image" },
              { type: "string", name: "imageBadgeTitle", label: "Image Badge Title" },
              { type: "string", name: "imageBadgeText", label: "Image Badge Text" },
              { type: "string", name: "paragraph1", label: "Paragraph 1", ui: { component: "textarea" } },
              { type: "string", name: "paragraph2", label: "Paragraph 2", ui: { component: "textarea" } },
              { type: "string", name: "paragraph3", label: "Paragraph 3", ui: { component: "textarea" } },
              { type: "string", name: "features", label: "Features", list: true }
            ]
          },
          // ---------- LICENSE TYPES ----------
          {
            type: "object",
            name: "licenseTypes",
            label: "License Types Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "License Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "License" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "code", label: "Code" },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- WHO SHOULD CONSIDER ----------
          {
            type: "object",
            name: "whoShouldConsider",
            label: "Who Should Consider Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              { type: "string", name: "footerNote", label: "Footer Note", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.label || "Item" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "label", label: "Label" }
                ]
              }
            ]
          },
          // ---------- INFRASTRUCTURE ----------
          {
            type: "object",
            name: "infrastructure",
            label: "Infrastructure Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "smallItems",
                label: "Small Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Item" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              },
              {
                type: "object",
                name: "largeItem",
                label: "Large Item",
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } }
                ]
              },
              {
                type: "object",
                name: "violetCard",
                label: "Violet Card",
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          // ---------- WHY DIFFERENT ----------
          {
            type: "object",
            name: "whyDifferent",
            label: "Why Different Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "image", name: "image", label: "Image" },
              { type: "string", name: "imageBadgeTitle", label: "Image Badge Title" },
              { type: "string", name: "imageBadgeText", label: "Image Badge Text" },
              { type: "string", name: "paragraph1", label: "Paragraph 1", ui: { component: "textarea" } },
              { type: "string", name: "paragraph2", label: "Paragraph 2", ui: { component: "textarea" } },
              { type: "string", name: "paragraph3", label: "Paragraph 3", ui: { component: "textarea" } },
              { type: "string", name: "features", label: "Features", list: true }
            ]
          },
          // ---------- GROWTH STATS ----------
          {
            type: "object",
            name: "growthStats",
            label: "Growth Stats Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Stats Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.label || "Stat" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "value", label: "Value" },
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- OUR SERVICES ----------
          {
            type: "object",
            name: "ourServices",
            label: "Our Services Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "image", name: "image", label: "Image" },
              { type: "string", name: "imageBadgeTitle", label: "Image Badge Title" },
              { type: "string", name: "imageBadgeText", label: "Image Badge Text" },
              { type: "string", name: "paragraph1", label: "Paragraph 1", ui: { component: "textarea" } },
              { type: "string", name: "paragraph2", label: "Paragraph 2", ui: { component: "textarea" } },
              { type: "string", name: "paragraph3", label: "Paragraph 3", ui: { component: "textarea" } },
              { type: "string", name: "features", label: "Features", list: true }
            ]
          },
          // ---------- FAQS ----------
          {
            type: "object",
            name: "faqs",
            label: "FAQs Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "FAQ Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.q || "FAQ" }) },
                fields: [
                  { type: "string", name: "q", label: "Question" },
                  { type: "string", name: "a", label: "Answer", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          // ---------- RELATED SERVICES ----------
          {
            type: "object",
            name: "relatedServices",
            label: "Related Services Section",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Service" }) },
                fields: [
                  { type: "string", name: "slug", label: "Slug" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "image", name: "image", label: "Image" },
                  { type: "string", name: "gradient", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- FINAL CTA ----------
          {
            type: "object",
            name: "finalCTA",
            label: "Final CTA Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              { type: "string", name: "primaryCta", label: "Primary CTA Text" },
              { type: "string", name: "phone", label: "Phone Number" },
              { type: "string", name: "phoneHref", label: "Phone Link (tel:)" },
              { type: "string", name: "whatsappMessage", label: "WhatsApp Message", ui: { component: "textarea" } },
              { type: "string", name: "badges", label: "Badges", list: true },
              {
                type: "object",
                name: "office",
                label: "Office Card",
                fields: [
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "line1", label: "Address Line 1" },
                  { type: "string", name: "line2", label: "Address Line 2" },
                  { type: "string", name: "mapLink", label: "Map Link" }
                ]
              },
              {
                type: "object",
                name: "hours",
                label: "Working Hours",
                fields: [
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "monFri", label: "Mon \u2013 Fri" },
                  { type: "string", name: "saturday", label: "Saturday" },
                  { type: "string", name: "sunday", label: "Sunday" }
                ]
              }
            ]
          }
        ]
      },
      // ============================================================
      // Business Activities Collection
      // ============================================================
      {
        name: "businessActivities",
        label: "\u{1F3AF} Business Activities",
        path: "src/content/freezones",
        match: { include: "business-activities" },
        // ← YE
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          // ---------- HERO ----------
          {
            type: "object",
            name: "hero",
            label: "Hero Section",
            fields: [
              { type: "image", name: "image", label: "Background Image" },
              { type: "string", name: "breadcrumbParent", label: "Breadcrumb Parent" },
              { type: "string", name: "breadcrumbLabel", label: "Breadcrumb Label" },
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              { type: "string", name: "ctaPrimaryText", label: "CTA Primary Text" },
              { type: "string", name: "ctaPrimaryLink", label: "CTA Primary Link" },
              { type: "string", name: "ctaSecondaryText", label: "CTA Secondary Text" },
              { type: "string", name: "ctaSecondaryMessage", label: "CTA Secondary WhatsApp Message", ui: { component: "textarea" } },
              { type: "string", name: "badges", label: "Badges", list: true }
            ]
          },
          // ---------- STATS ----------
          {
            type: "object",
            name: "stats",
            label: "Stats",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.label || "Stat" }) },
            fields: [
              { type: "string", name: "icon", label: "Icon" },
              { type: "string", name: "value", label: "Value" },
              { type: "string", name: "label", label: "Label" },
              { type: "string", name: "color", label: "Gradient Color" }
            ]
          },
          // ---------- DASHBOARD CARD ----------
          {
            type: "object",
            name: "dashboardCard",
            label: "Dashboard Card",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "statusLabel", label: "Status Label" },
              { type: "string", name: "totalLabel", label: "Total Label" },
              { type: "string", name: "totalValue", label: "Total Value" },
              { type: "string", name: "statusBadge", label: "Status Badge" },
              {
                type: "object",
                name: "metrics",
                label: "Metrics",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.label || "Metric" }) },
                fields: [
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "value", label: "Value" },
                  { type: "string", name: "color", label: "Text Color Class" }
                ]
              }
            ]
          },
          // ---------- EXPLORE SECTION ----------
          {
            type: "object",
            name: "exploreSection",
            label: "Explore Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "image", name: "image", label: "Image" },
              { type: "string", name: "imageBadgeTitle", label: "Image Badge Title" },
              { type: "string", name: "imageBadgeText", label: "Image Badge Text" },
              { type: "string", name: "paragraph1", label: "Paragraph 1", ui: { component: "textarea" } },
              { type: "string", name: "paragraph2", label: "Paragraph 2", ui: { component: "textarea" } },
              { type: "string", name: "paragraph3", label: "Paragraph 3", ui: { component: "textarea" } },
              { type: "string", name: "features", label: "Features", list: true }
            ]
          },
          // ---------- FREE ZONES SECTION ----------
          {
            type: "object",
            name: "freeZonesSection",
            label: "Free Zones Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Free Zone Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.name || "Zone" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "name", label: "Name" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "image", name: "image", label: "Image" },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- COMMON ACTIVITIES SECTION ----------
          {
            type: "object",
            name: "commonActivitiesSection",
            label: "Common Activities Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Activity Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Activity" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "image", name: "image", label: "Image" },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- WHY RIGHT ACTIVITY ----------
          {
            type: "object",
            name: "whyRightActivity",
            label: "Why Right Activity Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "image", name: "image", label: "Image" },
              { type: "string", name: "imageBadgeTitle", label: "Image Badge Title" },
              { type: "string", name: "imageBadgeText", label: "Image Badge Text" },
              { type: "string", name: "paragraph1", label: "Paragraph 1", ui: { component: "textarea" } },
              { type: "string", name: "paragraph2", label: "Paragraph 2", ui: { component: "textarea" } },
              { type: "string", name: "paragraph3", label: "Paragraph 3", ui: { component: "textarea" } },
              { type: "string", name: "features", label: "Features", list: true }
            ]
          },
          // ---------- MULTIPLE COMBOS ----------
          {
            type: "object",
            name: "multipleCombosSection",
            label: "Multiple Combos Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Combo Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.label || "Combo" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              },
              { type: "string", name: "footerNote", label: "Footer Note", ui: { component: "textarea" } }
            ]
          },
          // ---------- SETUP STEPS ----------
          {
            type: "object",
            name: "setupStepsSection",
            label: "Setup Steps Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "steps",
                label: "Steps",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Step" }) },
                fields: [
                  { type: "string", name: "step", label: "Step Number" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- DOCUMENTS ----------
          {
            type: "object",
            name: "documentsSection",
            label: "Documents Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              {
                type: "object",
                name: "items",
                label: "Document Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.label || "Document" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          // ---------- TRENDING ----------
          {
            type: "object",
            name: "trendingSection",
            label: "Trending Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Trending Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Item" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- FAQS ----------
          {
            type: "object",
            name: "faqs",
            label: "FAQs Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "FAQ Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.q || "FAQ" }) },
                fields: [
                  { type: "string", name: "q", label: "Question" },
                  { type: "string", name: "a", label: "Answer", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          // ---------- RELATED SERVICES ----------
          {
            type: "object",
            name: "relatedServices",
            label: "Related Services Section",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Service Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Service" }) },
                fields: [
                  { type: "string", name: "slug", label: "Slug" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "image", name: "image", label: "Image" },
                  { type: "string", name: "gradient", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- FINAL CTA ----------
          {
            type: "object",
            name: "finalCTA",
            label: "Final CTA Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              { type: "string", name: "primaryCta", label: "Primary CTA Text" },
              { type: "string", name: "whatsappMessage", label: "WhatsApp Message", ui: { component: "textarea" } },
              { type: "string", name: "phone", label: "Phone Number" },
              { type: "string", name: "phoneHref", label: "Phone Link (tel:)" },
              { type: "string", name: "badges", label: "Badges", list: true },
              {
                type: "object",
                name: "office",
                label: "Office Card",
                fields: [
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "line1", label: "Address Line 1" },
                  { type: "string", name: "line2", label: "Address Line 2" },
                  { type: "string", name: "mapLink", label: "Map Link" }
                ]
              },
              {
                type: "object",
                name: "hours",
                label: "Working Hours",
                fields: [
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "monFri", label: "Mon \u2013 Fri" },
                  { type: "string", name: "saturday", label: "Saturday" },
                  { type: "string", name: "sunday", label: "Sunday" }
                ]
              }
            ]
          }
        ]
      },
      // ============================================================
      // Dubai Design District (D3) Collection
      // ============================================================
      {
        name: "d3",
        label: "\u{1F3A8} Dubai Design District (D3)",
        path: "src/content/freezones",
        match: { include: "d3-free-zone" },
        // ← YE
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          // ---------- HERO ----------
          {
            type: "object",
            name: "hero",
            label: "Hero Section",
            fields: [
              { type: "image", name: "image", label: "Background Image" },
              { type: "string", name: "breadcrumbParent", label: "Breadcrumb Parent" },
              { type: "string", name: "breadcrumbLabel", label: "Breadcrumb Label" },
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              { type: "string", name: "ctaPrimaryText", label: "CTA Primary Text" },
              { type: "string", name: "ctaPrimaryLink", label: "CTA Primary Link" },
              { type: "string", name: "ctaSecondaryText", label: "CTA Secondary Text" },
              { type: "string", name: "ctaSecondaryMessage", label: "CTA Secondary WhatsApp Message", ui: { component: "textarea" } },
              { type: "string", name: "badges", label: "Badges", list: true }
            ]
          },
          // ---------- STATS ----------
          {
            type: "object",
            name: "stats",
            label: "Stats",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.label || "Stat" }) },
            fields: [
              { type: "string", name: "icon", label: "Icon" },
              { type: "string", name: "value", label: "Value" },
              { type: "string", name: "label", label: "Label" },
              { type: "string", name: "color", label: "Gradient Color" }
            ]
          },
          // ---------- DASHBOARD CARD ----------
          {
            type: "object",
            name: "dashboardCard",
            label: "Dashboard Card",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "totalLabel", label: "Total Label" },
              { type: "string", name: "totalValue", label: "Total Value" },
              { type: "string", name: "statusBadge", label: "Status Badge" },
              {
                type: "object",
                name: "metrics",
                label: "Metrics",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.label || "Metric" }) },
                fields: [
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "value", label: "Value" },
                  { type: "string", name: "color", label: "Text Color Class" }
                ]
              }
            ]
          },
          // ---------- START IN STYLE ----------
          {
            type: "object",
            name: "startInStyle",
            label: "Start In Style Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "smallCards",
                label: "Small Cards",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Card" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              },
              {
                type: "object",
                name: "largeCard",
                label: "Large Card",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "image", name: "image", label: "Image" }
                ]
              }
            ]
          },
          // ---------- ACTIVITIES SECTION ----------
          {
            type: "object",
            name: "activitiesSection",
            label: "Activities Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Activity Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Activity" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "image", name: "image", label: "Image" },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- WORKSPACES SECTION ----------
          {
            type: "object",
            name: "workspacesSection",
            label: "Workspaces Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Workspace Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Workspace" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- VISA SERVICES SECTION ----------
          {
            type: "object",
            name: "visaServicesSection",
            label: "Visa Services Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Visa Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Visa" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "stampColor", label: "Stamp Gradient" }
                ]
              }
            ]
          },
          // ---------- GROWTH SUPPORT SECTION ----------
          {
            type: "object",
            name: "growthSupportSection",
            label: "Growth Support Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Growth Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Item" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- STRATEGIC SECTION ----------
          {
            type: "object",
            name: "strategicSection",
            label: "Strategic Location Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "image", name: "image", label: "Image" },
              { type: "string", name: "imageBadgeTitle", label: "Image Badge Title" },
              { type: "string", name: "imageBadgeText", label: "Image Badge Text" },
              {
                type: "object",
                name: "items",
                label: "Location Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Item" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          // ---------- WHY CHOOSE US ----------
          {
            type: "object",
            name: "whyChooseUsSection",
            label: "Why Choose Us Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Item" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" },
                  { type: "image", name: "image", label: "Image" }
                ]
              }
            ]
          },
          // ---------- FAQS ----------
          {
            type: "object",
            name: "faqs",
            label: "FAQs Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "FAQ Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.q || "FAQ" }) },
                fields: [
                  { type: "string", name: "q", label: "Question" },
                  { type: "string", name: "a", label: "Answer", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          // ---------- RELATED SERVICES ----------
          {
            type: "object",
            name: "relatedServices",
            label: "Related Services Section",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Service Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Service" }) },
                fields: [
                  { type: "string", name: "slug", label: "Slug" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "image", name: "image", label: "Image" },
                  { type: "string", name: "gradient", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- FINAL CTA ----------
          {
            type: "object",
            name: "finalCTA",
            label: "Final CTA Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              { type: "string", name: "primaryCta", label: "Primary CTA Text" },
              { type: "string", name: "whatsappMessage", label: "WhatsApp Message", ui: { component: "textarea" } },
              { type: "string", name: "phone", label: "Phone Number" },
              { type: "string", name: "phoneHref", label: "Phone Link (tel:)" },
              { type: "string", name: "badges", label: "Badges", list: true },
              {
                type: "object",
                name: "office",
                label: "Office Card",
                fields: [
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "line1", label: "Address Line 1" },
                  { type: "string", name: "line2", label: "Address Line 2" },
                  { type: "string", name: "mapLink", label: "Map Link" }
                ]
              },
              {
                type: "object",
                name: "hours",
                label: "Working Hours",
                fields: [
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "monFri", label: "Mon \u2013 Fri" },
                  { type: "string", name: "saturday", label: "Saturday" },
                  { type: "string", name: "sunday", label: "Sunday" }
                ]
              }
            ]
          }
        ]
      },
      // ============================================================
      // DAFZA (Dubai Airport Free Zone) Collection
      // ============================================================
      {
        name: "dafza",
        label: "\u2708\uFE0F DAFZA Free Zone",
        path: "src/content/freezones",
        match: { include: "dafza-free-zone" },
        // ← YE
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: "image", name: "heroImage", label: "Hero Image" },
          { type: "string", name: "heroBadge", label: "Hero Badge" },
          { type: "string", name: "heroTitle", label: "Hero Title" },
          { type: "string", name: "heroTitleHighlight", label: "Hero Title Highlight" },
          { type: "string", name: "heroSubtitle", label: "Hero Subtitle", ui: { component: "textarea" } },
          { type: "string", name: "heroChips", label: "Hero Chips", list: true },
          // ---------- STATS ----------
          {
            type: "object",
            name: "stats",
            label: "Stats",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.label || "Stat" }) },
            fields: [
              { type: "string", name: "icon", label: "Icon" },
              { type: "string", name: "value", label: "Value" },
              { type: "string", name: "label", label: "Label" },
              { type: "string", name: "color", label: "Gradient Color" }
            ]
          },
          // ---------- WHY DAFZA ----------
          {
            type: "object",
            name: "whyDafzaSection",
            label: "Why DAFZA Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "cards",
                label: "Cards",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Card" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" },
                  { type: "string", name: "size", label: "Size (small | large | fullwidth)" }
                ]
              }
            ]
          },
          // ---------- TAKE OFF ----------
          {
            type: "object",
            name: "takeOffSection",
            label: "Take Off Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "image", name: "image", label: "Image" },
              { type: "string", name: "imageBadgeTitle", label: "Image Badge Title" },
              { type: "string", name: "imageBadgeText", label: "Image Badge Text" },
              { type: "string", name: "paragraphs", label: "Paragraphs", list: true, ui: { component: "textarea" } },
              { type: "string", name: "highlights", label: "Highlights", list: true }
            ]
          },
          // ---------- LICENSES ----------
          {
            type: "object",
            name: "licensesSection",
            label: "Licenses Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              { type: "string", name: "footerNote", label: "Footer Note", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "License Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "License" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "code", label: "Code" },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- VISA ----------
          {
            type: "object",
            name: "visaSection",
            label: "Visa Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Visa Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Visa" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "stampColor", label: "Stamp Gradient" }
                ]
              }
            ]
          },
          // ---------- WHY IDEAL ----------
          {
            type: "object",
            name: "whyIdealSection",
            label: "Why Ideal Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Item" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          // ---------- WHO SHOULD ----------
          {
            type: "object",
            name: "whoShouldSection",
            label: "Who Should Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              { type: "string", name: "scrollHint", label: "Scroll Hint" },
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Item" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "image", name: "image", label: "Image" },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- SUPPORT ----------
          {
            type: "object",
            name: "supportSection",
            label: "Support Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Support Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Item" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          // ---------- FAQS ----------
          {
            type: "object",
            name: "faqsSection",
            label: "FAQs Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "sidebarCard",
                label: "Sidebar Card",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "text", label: "Text", ui: { component: "textarea" } },
                  { type: "string", name: "whatsappMessage", label: "WhatsApp Message", ui: { component: "textarea" } }
                ]
              },
              {
                type: "object",
                name: "items",
                label: "FAQ Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.q || "FAQ" }) },
                fields: [
                  { type: "string", name: "q", label: "Question" },
                  { type: "string", name: "a", label: "Answer", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          // ---------- RELATED SERVICES ----------
          {
            type: "object",
            name: "relatedServicesSection",
            label: "Related Services Section",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Service Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Service" }) },
                fields: [
                  { type: "string", name: "slug", label: "Slug" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "image", name: "image", label: "Image" },
                  { type: "string", name: "gradient", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- FINAL CTA ----------
          {
            type: "object",
            name: "finalCTA",
            label: "Final CTA Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              { type: "string", name: "chips", label: "Chips", list: true },
              { type: "string", name: "whatsappMessage", label: "WhatsApp Message", ui: { component: "textarea" } },
              { type: "string", name: "whatsappCardMessage", label: "WhatsApp Card Message", ui: { component: "textarea" } }
            ]
          }
        ]
      },
      // ============================================================
      // Dubai Healthcare City (DHCC) Collection
      // ============================================================
      {
        name: "dhcc",
        label: "\u{1F3E5} Dubai Healthcare City (DHCC)",
        path: "src/content/freezones",
        match: { include: "dhcc-free-zone" },
        // ← YE
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          // ---------- HERO ----------
          {
            type: "object",
            name: "hero",
            label: "Hero Section",
            fields: [
              { type: "image", name: "image", label: "Background Image" },
              { type: "string", name: "breadcrumbParent", label: "Breadcrumb Parent" },
              { type: "string", name: "breadcrumbLabel", label: "Breadcrumb Label" },
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              { type: "string", name: "ctaPrimaryText", label: "CTA Primary Text" },
              { type: "string", name: "ctaPrimaryLink", label: "CTA Primary Link" },
              { type: "string", name: "ctaSecondaryText", label: "CTA Secondary Text" },
              { type: "string", name: "ctaSecondaryMessage", label: "CTA Secondary WhatsApp Message", ui: { component: "textarea" } },
              { type: "string", name: "badges", label: "Badges", list: true }
            ]
          },
          // ---------- STATS ----------
          {
            type: "object",
            name: "stats",
            label: "Stats",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.label || "Stat" }) },
            fields: [
              { type: "string", name: "icon", label: "Icon" },
              { type: "string", name: "value", label: "Value" },
              { type: "string", name: "label", label: "Label" },
              { type: "string", name: "color", label: "Gradient Color" }
            ]
          },
          // ---------- DASHBOARD CARD ----------
          {
            type: "object",
            name: "dashboardCard",
            label: "Dashboard Card",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "totalLabel", label: "Total Label" },
              { type: "string", name: "totalValue", label: "Total Value" },
              { type: "string", name: "statusBadge", label: "Status Badge" },
              {
                type: "object",
                name: "metrics",
                label: "Metrics",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.label || "Metric" }) },
                fields: [
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "value", label: "Value" },
                  { type: "string", name: "color", label: "Text Color Class" }
                ]
              }
            ]
          },
          // ---------- WHY DHCC ----------
          {
            type: "object",
            name: "whyDhcc",
            label: "Why DHCC Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "smallCards",
                label: "Small Cards",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Card" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              },
              {
                type: "object",
                name: "largeCard",
                label: "Large Card",
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "image", name: "image", label: "Image" }
                ]
              },
              {
                type: "object",
                name: "smallCard2",
                label: "Small Card 2",
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- WHO CAN OPEN ----------
          {
            type: "object",
            name: "whoCanOpenSection",
            label: "Who Can Open Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.label || "Item" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "label", label: "Label" }
                ]
              }
            ]
          },
          // ---------- LICENSES ----------
          {
            type: "object",
            name: "licensesSection",
            label: "Licenses Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              {
                type: "object",
                name: "items",
                label: "License Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "License" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "code", label: "Code" },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- DOCUMENTS ----------
          {
            type: "object",
            name: "documentsSectionDhcc",
            label: "Documents Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              {
                type: "object",
                name: "items",
                label: "Document Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.label || "Document" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          // ---------- SETUP PROCESS ----------
          {
            type: "object",
            name: "setupProcessSectionDhcc",
            label: "Setup Process Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "steps",
                label: "Steps",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Step" }) },
                fields: [
                  { type: "string", name: "step", label: "Step Number" },
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" },
                  { type: "image", name: "image", label: "Image" }
                ]
              }
            ]
          },
          // ---------- WHY TRUST US ----------
          {
            type: "object",
            name: "whyTrustUsSection",
            label: "Why Trust Us Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Item" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          // ---------- FAQS ----------
          {
            type: "object",
            name: "faqs",
            label: "FAQs Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "FAQ Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.q || "FAQ" }) },
                fields: [
                  { type: "string", name: "q", label: "Question" },
                  { type: "string", name: "a", label: "Answer", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          // ---------- RELATED SERVICES ----------
          {
            type: "object",
            name: "relatedServices",
            label: "Related Services Section",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Service Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Service" }) },
                fields: [
                  { type: "string", name: "slug", label: "Slug" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "image", name: "image", label: "Image" },
                  { type: "string", name: "gradient", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- FINAL CTA ----------
          {
            type: "object",
            name: "finalCTA",
            label: "Final CTA Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              { type: "string", name: "primaryCta", label: "Primary CTA Text" },
              { type: "string", name: "whatsappMessage", label: "WhatsApp Message", ui: { component: "textarea" } },
              { type: "string", name: "phone", label: "Phone Number" },
              { type: "string", name: "phoneHref", label: "Phone Link (tel:)" },
              { type: "string", name: "badges", label: "Badges", list: true },
              {
                type: "object",
                name: "office",
                label: "Office Card",
                fields: [
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "line1", label: "Address Line 1" },
                  { type: "string", name: "line2", label: "Address Line 2" },
                  { type: "string", name: "mapLink", label: "Map Link" }
                ]
              },
              {
                type: "object",
                name: "hours",
                label: "Working Hours",
                fields: [
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "monFri", label: "Mon \u2013 Fri" },
                  { type: "string", name: "saturday", label: "Saturday" },
                  { type: "string", name: "sunday", label: "Sunday" }
                ]
              }
            ]
          }
        ]
      },
      // ============================================================
      // Dubai Internet City (DIC) Collection
      // ============================================================
      {
        name: "dic",
        label: "\u{1F4BB} Dubai Internet City (DIC)",
        path: "src/content/freezones",
        match: { include: "dic" },
        // ← YE
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: "string", name: "slug", label: "Slug" },
          // ---------- HERO ----------
          {
            type: "object",
            name: "hero",
            label: "Hero Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              { type: "image", name: "image", label: "Background Image" },
              { type: "string", name: "breadcrumbParent", label: "Breadcrumb Parent" },
              { type: "string", name: "breadcrumbLabel", label: "Breadcrumb Label" },
              { type: "string", name: "ctaPrimaryText", label: "CTA Primary Text" },
              { type: "string", name: "ctaPrimaryLink", label: "CTA Primary Link" },
              { type: "string", name: "ctaSecondaryText", label: "CTA Secondary Text" },
              { type: "string", name: "ctaSecondaryMessage", label: "CTA Secondary WhatsApp Message", ui: { component: "textarea" } },
              { type: "string", name: "badges", label: "Badges", list: true }
            ]
          },
          // ---------- STATS ----------
          {
            type: "object",
            name: "stats",
            label: "Stats",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.label || "Stat" }) },
            fields: [
              { type: "string", name: "icon", label: "Icon" },
              { type: "string", name: "value", label: "Value" },
              { type: "string", name: "label", label: "Label" },
              { type: "string", name: "color", label: "Gradient Color" }
            ]
          },
          // ---------- DASHBOARD CARD ----------
          {
            type: "object",
            name: "dashboardCard",
            label: "Dashboard Card",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "statusLabel", label: "Status Label" },
              { type: "string", name: "totalLabel", label: "Total Label" },
              { type: "string", name: "totalValue", label: "Total Value" },
              { type: "string", name: "statusBadge", label: "Status Badge" },
              {
                type: "object",
                name: "metrics",
                label: "Metrics",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.label || "Metric" }) },
                fields: [
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "value", label: "Value" },
                  { type: "string", name: "color", label: "Text Color Class" }
                ]
              }
            ]
          },
          // ---------- BENEFITS SECTION ----------
          {
            type: "object",
            name: "benefitsSection",
            label: "Benefits Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "smallCards",
                label: "Small Cards",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Card" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              },
              {
                type: "object",
                name: "largeCard",
                label: "Large Card",
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              },
              {
                type: "object",
                name: "smallCard2",
                label: "Small Card 2",
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              },
              {
                type: "object",
                name: "smallCard3",
                label: "Small Card 3",
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- LICENSES SECTION ----------
          {
            type: "object",
            name: "licensesSection",
            label: "Licenses Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "License Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "License" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "code", label: "Code" },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- FACILITIES SECTION ----------
          {
            type: "object",
            name: "facilitiesSection",
            label: "Facilities Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Facility Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Facility" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "image", name: "image", label: "Image" }
                ]
              }
            ]
          },
          // ---------- HOW WE HELP SECTION ----------
          {
            type: "object",
            name: "howWeHelpSection",
            label: "How We Help Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "steps",
                label: "Steps",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Step" }) },
                fields: [
                  { type: "string", name: "step", label: "Step Number" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              },
              {
                type: "object",
                name: "ctaCard",
                label: "CTA Card",
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "ctaText", label: "CTA Text" },
                  { type: "string", name: "whatsappMessage", label: "WhatsApp Message", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          // ---------- DIGITAL SCALE SECTION ----------
          {
            type: "object",
            name: "digitalScaleSection",
            label: "Digital Scale Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "image", name: "image", label: "Image" },
              { type: "string", name: "imageBadgeTitle", label: "Image Badge Title" },
              { type: "string", name: "imageBadgeText", label: "Image Badge Text" },
              { type: "string", name: "intro", label: "Intro Paragraph", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Item" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          // ---------- ACTIVITIES CLOUD SECTION ----------
          {
            type: "object",
            name: "activitiesCloudSection",
            label: "Activities Cloud Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Activity Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.label || "Activity" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "label", label: "Label" }
                ]
              }
            ]
          },
          // ---------- FAQS ----------
          {
            type: "object",
            name: "faqs",
            label: "FAQs Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "FAQ Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.q || "FAQ" }) },
                fields: [
                  { type: "string", name: "q", label: "Question" },
                  { type: "string", name: "a", label: "Answer", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          // ---------- RELATED SERVICES ----------
          {
            type: "object",
            name: "relatedServices",
            label: "Related Services Section",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Service Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Service" }) },
                fields: [
                  { type: "string", name: "slug", label: "Slug" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "image", name: "image", label: "Image" },
                  { type: "string", name: "gradient", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- FINAL CTA ----------
          {
            type: "object",
            name: "finalCTA",
            label: "Final CTA Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              { type: "string", name: "primaryCta", label: "Primary CTA Text" },
              { type: "string", name: "phone", label: "Phone Number" },
              { type: "string", name: "phoneHref", label: "Phone Link (tel:)" },
              { type: "string", name: "whatsappMessage", label: "WhatsApp Message", ui: { component: "textarea" } },
              { type: "string", name: "badges", label: "Badges", list: true },
              {
                type: "object",
                name: "office",
                label: "Office Card",
                fields: [
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "line1", label: "Address Line 1" },
                  { type: "string", name: "line2", label: "Address Line 2" },
                  { type: "string", name: "mapLink", label: "Map Link" }
                ]
              },
              {
                type: "object",
                name: "hours",
                label: "Working Hours",
                fields: [
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "monFri", label: "Mon \u2013 Fri" },
                  { type: "string", name: "saturday", label: "Saturday" },
                  { type: "string", name: "sunday", label: "Sunday" }
                ]
              }
            ]
          }
        ]
      },
      // ============================================================
      // DMCC Free Zone Collection
      // ============================================================
      {
        name: "dmcc",
        label: "\u{1F3D9}\uFE0F DMCC Free Zone",
        path: "src/content/freezones",
        match: { include: "dmcc-free-zone" },
        // ← YE
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: "image", name: "heroImage", label: "Hero Image" },
          { type: "string", name: "heroBadge", label: "Hero Badge" },
          { type: "string", name: "heroTitle", label: "Hero Title" },
          { type: "string", name: "heroTitleHighlight", label: "Hero Title Highlight" },
          { type: "string", name: "heroSubtitle", label: "Hero Subtitle", ui: { component: "textarea" } },
          { type: "string", name: "heroChips", label: "Hero Chips", list: true },
          // ---------- STATS ----------
          {
            type: "object",
            name: "stats",
            label: "Stats",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.label || "Stat" }) },
            fields: [
              { type: "string", name: "icon", label: "Icon" },
              { type: "string", name: "value", label: "Value" },
              { type: "string", name: "label", label: "Label" },
              { type: "string", name: "color", label: "Gradient Color" }
            ]
          },
          // ---------- WHY DMCC ----------
          {
            type: "object",
            name: "whyDmccSection",
            label: "Why DMCC Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "cards",
                label: "Cards",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Card" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" },
                  { type: "string", name: "size", label: "Size (small | large)" }
                ]
              }
            ]
          },
          // ---------- BENEFITS ----------
          {
            type: "object",
            name: "benefitsSection",
            label: "Benefits Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Item" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" },
                  { type: "image", name: "image", label: "Image" }
                ]
              }
            ]
          },
          // ---------- LICENSES ----------
          {
            type: "object",
            name: "licensesSection",
            label: "Licenses Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "License Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "License" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "code", label: "Code" },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- REGISTRATION ----------
          {
            type: "object",
            name: "registrationSection",
            label: "Registration Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "steps",
                label: "Steps",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Step" }) },
                fields: [
                  { type: "string", name: "step", label: "Step Number" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- OFFICE ----------
          {
            type: "object",
            name: "officeSection",
            label: "Office Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Office Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Office" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- GLOBAL GROWTH ----------
          {
            type: "object",
            name: "globalGrowthSection",
            label: "Global Growth Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Item" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          // ---------- POST SETUP ----------
          {
            type: "object",
            name: "postSetupSection",
            label: "Post-Setup Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Item" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          // ---------- WHO SHOULD ----------
          {
            type: "object",
            name: "whoShouldSection",
            label: "Who Should Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Item" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "image", name: "image", label: "Image" },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- FAQS ----------
          {
            type: "object",
            name: "faqsSection",
            label: "FAQs Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "sidebarCard",
                label: "Sidebar Card",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "text", label: "Text", ui: { component: "textarea" } },
                  { type: "string", name: "whatsappMessage", label: "WhatsApp Message", ui: { component: "textarea" } }
                ]
              },
              {
                type: "object",
                name: "items",
                label: "FAQ Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.q || "FAQ" }) },
                fields: [
                  { type: "string", name: "q", label: "Question" },
                  { type: "string", name: "a", label: "Answer", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          // ---------- RELATED SERVICES ----------
          {
            type: "object",
            name: "relatedServicesSection",
            label: "Related Services Section",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Service Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Service" }) },
                fields: [
                  { type: "string", name: "slug", label: "Slug" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "image", name: "image", label: "Image" },
                  { type: "string", name: "gradient", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- FINAL CTA ----------
          {
            type: "object",
            name: "finalCTA",
            label: "Final CTA Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              { type: "string", name: "chips", label: "Chips", list: true },
              { type: "string", name: "whatsappMessage", label: "WhatsApp Message", ui: { component: "textarea" } },
              { type: "string", name: "whatsappCardMessage", label: "WhatsApp Card Message", ui: { component: "textarea" } }
            ]
          }
        ]
      },
      // ============================================================
      // Dubai CommerCity (DCC) Collection
      // ============================================================
      {
        name: "dcc",
        label: "\u{1F6D2} Dubai CommerCity (DCC)",
        path: "src/content/freezones",
        match: { include: "dubai-commer-city" },
        // ← YE
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: "image", name: "heroImage", label: "Hero Image" },
          { type: "string", name: "heroBadge", label: "Hero Badge" },
          { type: "string", name: "heroTitle", label: "Hero Title" },
          { type: "string", name: "heroTitleHighlight", label: "Hero Title Highlight" },
          { type: "string", name: "heroSubtitle", label: "Hero Subtitle", ui: { component: "textarea" } },
          { type: "string", name: "heroChips", label: "Hero Chips", list: true },
          // ---------- STATS ----------
          {
            type: "object",
            name: "stats",
            label: "Stats",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.label || "Stat" }) },
            fields: [
              { type: "string", name: "icon", label: "Icon" },
              { type: "string", name: "value", label: "Value" },
              { type: "string", name: "label", label: "Label" },
              { type: "string", name: "color", label: "Gradient Color" }
            ]
          },
          // ---------- LAUNCH SECTION ----------
          {
            type: "object",
            name: "launchSection",
            label: "Launch Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "image", name: "image", label: "Image" },
              { type: "string", name: "imageBadgeTitle", label: "Image Badge Title" },
              { type: "string", name: "imageBadgeText", label: "Image Badge Text" },
              { type: "string", name: "paragraphs", label: "Paragraphs", list: true, ui: { component: "textarea" } },
              { type: "string", name: "highlights", label: "Highlights", list: true }
            ]
          },
          // ---------- BENEFITS ----------
          {
            type: "object",
            name: "benefitsSection",
            label: "Benefits Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Benefit" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- LICENSES ----------
          {
            type: "object",
            name: "licensesSection",
            label: "Licenses Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "License Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "License" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "code", label: "Code" },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- OFFICE ----------
          {
            type: "object",
            name: "officeSection",
            label: "Office Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Office Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Office" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" },
                  { type: "string", name: "size", label: "Size (small | large)" }
                ]
              }
            ]
          },
          // ---------- DIGITAL SUPPORT ----------
          {
            type: "object",
            name: "digitalSupportSection",
            label: "Digital Support Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.label || "Item" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "label", label: "Label" }
                ]
              }
            ]
          },
          // ---------- LOGISTICS ----------
          {
            type: "object",
            name: "logisticsSection",
            label: "Logistics Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Logistics Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Item" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- ACTIVITIES ----------
          {
            type: "object",
            name: "activitiesSection",
            label: "Activities Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Activity Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Activity" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- ECO SECTION ----------
          {
            type: "object",
            name: "ecoSection",
            label: "Eco Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "image", name: "image", label: "Image" },
              { type: "string", name: "imageBadgeTitle", label: "Image Badge Title" },
              { type: "string", name: "imageBadgeText", label: "Image Badge Text" },
              { type: "string", name: "paragraphs", label: "Paragraphs", list: true, ui: { component: "textarea" } },
              {
                type: "object",
                name: "highlights",
                label: "Highlights",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.label || "Highlight" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "label", label: "Label" }
                ]
              }
            ]
          },
          // ---------- PARTNER ----------
          {
            type: "object",
            name: "partnerSection",
            label: "Partner Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.label || "Item" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "label", label: "Label" }
                ]
              },
              { type: "string", name: "footerText", label: "Footer Text", ui: { component: "textarea" } }
            ]
          },
          // ---------- GROWTH STATS ----------
          {
            type: "object",
            name: "growthStatsSection",
            label: "Growth Stats Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Stats Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.label || "Stat" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "value", label: "Value" },
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- FAQS ----------
          {
            type: "object",
            name: "faqsSection",
            label: "FAQs Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "sidebarCard",
                label: "Sidebar Card",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "text", label: "Text", ui: { component: "textarea" } },
                  { type: "string", name: "whatsappMessage", label: "WhatsApp Message", ui: { component: "textarea" } }
                ]
              },
              {
                type: "object",
                name: "items",
                label: "FAQ Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.q || "FAQ" }) },
                fields: [
                  { type: "string", name: "q", label: "Question" },
                  { type: "string", name: "a", label: "Answer", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          // ---------- RELATED SERVICES ----------
          {
            type: "object",
            name: "relatedServicesSection",
            label: "Related Services Section",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Service Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Service" }) },
                fields: [
                  { type: "string", name: "slug", label: "Slug" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "image", name: "image", label: "Image" },
                  { type: "string", name: "gradient", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- FINAL CTA ----------
          {
            type: "object",
            name: "finalCTA",
            label: "Final CTA Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              { type: "string", name: "chips", label: "Chips", list: true },
              { type: "string", name: "whatsappMessage", label: "WhatsApp Message", ui: { component: "textarea" } },
              { type: "string", name: "whatsappCardMessage", label: "WhatsApp Card Message", ui: { component: "textarea" } }
            ]
          }
        ]
      },
      // ============================================================
      // Dubai Knowledge Park (DKP) Collection
      // ============================================================
      {
        name: "dkp",
        label: "\u{1F393} Dubai Knowledge Park (DKP)",
        path: "src/content/freezones",
        match: { include: "dubai-knowledge-park" },
        // ← YE
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: "image", name: "heroImage", label: "Hero Image" },
          { type: "string", name: "heroBadge", label: "Hero Badge" },
          { type: "string", name: "heroTitle", label: "Hero Title" },
          { type: "string", name: "heroTitleHighlight", label: "Hero Title Highlight" },
          { type: "string", name: "heroSubtitle", label: "Hero Subtitle", ui: { component: "textarea" } },
          { type: "string", name: "heroChips", label: "Hero Chips", list: true },
          // ---------- STATS ----------
          {
            type: "object",
            name: "stats",
            label: "Stats",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.label || "Stat" }) },
            fields: [
              { type: "string", name: "icon", label: "Icon" },
              { type: "string", name: "value", label: "Value" },
              { type: "string", name: "label", label: "Label" },
              { type: "string", name: "color", label: "Gradient Color" }
            ]
          },
          // ---------- BUILD FUTURE SECTION ----------
          {
            type: "object",
            name: "buildFutureSection",
            label: "Build Future Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "image", name: "image", label: "Image" },
              { type: "string", name: "imageBadgeTitle", label: "Image Badge Title" },
              { type: "string", name: "imageBadgeText", label: "Image Badge Text" },
              { type: "string", name: "paragraphs", label: "Paragraphs", list: true, ui: { component: "textarea" } },
              { type: "string", name: "highlights", label: "Highlights", list: true }
            ]
          },
          // ---------- BENEFITS ----------
          {
            type: "object",
            name: "benefitsSection",
            label: "Benefits Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Benefit Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Benefit" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- BUSINESS TYPES ----------
          {
            type: "object",
            name: "businessTypesSection",
            label: "Business Types Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Business Type Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Type" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- OFFICE SECTION ----------
          {
            type: "object",
            name: "officeSection",
            label: "Office Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Office Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Office" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" },
                  { type: "string", name: "size", label: "Size (small | large)" }
                ]
              }
            ]
          },
          // ---------- LICENSING SECTION ----------
          {
            type: "object",
            name: "licensingSection",
            label: "Licensing Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Licensing Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Item" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- VISA SECTION ----------
          {
            type: "object",
            name: "visaSection",
            label: "Visa Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Visa Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.label || "Visa" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "label", label: "Label" }
                ]
              }
            ]
          },
          // ---------- WHY CHOOSE US ----------
          {
            type: "object",
            name: "whyChooseUsSection",
            label: "Why Choose Us Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              {
                type: "object",
                name: "items",
                label: "Why Choose Us Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.label || "Item" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "label", label: "Label" }
                ]
              },
              { type: "string", name: "footerText", label: "Footer Text", ui: { component: "textarea" } }
            ]
          },
          // ---------- EXPAND REACH ----------
          {
            type: "object",
            name: "expandReachSection",
            label: "Expand Reach Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.label || "Item" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "label", label: "Label" }
                ]
              },
              { type: "string", name: "footerText", label: "Footer Text", ui: { component: "textarea" } }
            ]
          },
          // ---------- GROWTH STATS ----------
          {
            type: "object",
            name: "growthStatsSection",
            label: "Growth Stats Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Stats Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.label || "Stat" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "value", label: "Value" },
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- COMPARISON ----------
          {
            type: "object",
            name: "comparisonSection",
            label: "Comparison Section",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "subtitle", label: "Subtitle" },
              {
                type: "object",
                name: "items",
                label: "Comparison Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.factor || "Factor" }) },
                fields: [
                  { type: "string", name: "factor", label: "Factor" },
                  { type: "string", name: "dkp", label: "DKP" },
                  { type: "string", name: "ifza", label: "IFZA" },
                  { type: "string", name: "dic", label: "DIC" }
                ]
              },
              { type: "string", name: "verdict", label: "Verdict", ui: { component: "textarea" } }
            ]
          },
          // ---------- FAQS ----------
          {
            type: "object",
            name: "faqsSection",
            label: "FAQs Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "sidebarCard",
                label: "Sidebar Card",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "text", label: "Text", ui: { component: "textarea" } },
                  { type: "string", name: "whatsappMessage", label: "WhatsApp Message", ui: { component: "textarea" } }
                ]
              },
              {
                type: "object",
                name: "items",
                label: "FAQ Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.q || "FAQ" }) },
                fields: [
                  { type: "string", name: "q", label: "Question" },
                  { type: "string", name: "a", label: "Answer", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          // ---------- RELATED SERVICES ----------
          {
            type: "object",
            name: "relatedServicesSection",
            label: "Related Services Section",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Service Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Service" }) },
                fields: [
                  { type: "string", name: "slug", label: "Slug" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "image", name: "image", label: "Image" },
                  { type: "string", name: "gradient", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- FINAL CTA ----------
          {
            type: "object",
            name: "finalCTA",
            label: "Final CTA Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              { type: "string", name: "chips", label: "Chips", list: true },
              { type: "string", name: "whatsappMessage", label: "WhatsApp Message", ui: { component: "textarea" } },
              { type: "string", name: "whatsappCardMessage", label: "WhatsApp Card Message", ui: { component: "textarea" } }
            ]
          }
        ]
      },
      // ============================================================
      // Dubai Media City (DMC) Collection
      // ============================================================
      {
        name: "dmc",
        label: "\u{1F4FA} Dubai Media City (DMC)",
        path: "src/content/freezones",
        match: { include: "dubai-media-city-free-zone" },
        // ← YE
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: "image", name: "heroImage", label: "Hero Image" },
          { type: "string", name: "heroBadge", label: "Hero Badge" },
          { type: "string", name: "heroTitle", label: "Hero Title" },
          { type: "string", name: "heroTitleHighlight", label: "Hero Title Highlight" },
          { type: "string", name: "heroSubtitle", label: "Hero Subtitle", ui: { component: "textarea" } },
          { type: "string", name: "heroChips", label: "Hero Chips", list: true },
          // ---------- HERO CARD ----------
          {
            type: "object",
            name: "heroCard",
            label: "Hero Card",
            fields: [
              { type: "string", name: "headerTitle", label: "Header Title" },
              { type: "string", name: "headerStatus", label: "Header Status" },
              { type: "string", name: "icon", label: "Icon" },
              { type: "string", name: "zoneLabel", label: "Zone Label" },
              { type: "string", name: "zoneValue", label: "Zone Value" },
              { type: "string", name: "statusBadge", label: "Status Badge" },
              { type: "string", name: "setupTimeLabel", label: "Setup Time Label" },
              { type: "string", name: "setupTimeValue", label: "Setup Time Value" },
              { type: "string", name: "taxLabel", label: "Tax Label" },
              { type: "string", name: "taxValue", label: "Tax Value" },
              { type: "string", name: "footerText", label: "Footer Text" }
            ]
          },
          // ---------- STATS ----------
          {
            type: "object",
            name: "stats",
            label: "Stats",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.label || "Stat" }) },
            fields: [
              { type: "string", name: "icon", label: "Icon" },
              { type: "string", name: "value", label: "Value" },
              { type: "string", name: "label", label: "Label" },
              { type: "string", name: "color", label: "Gradient Color" }
            ]
          },
          // ---------- WHY DMC ----------
          {
            type: "object",
            name: "whyDmcSection",
            label: "Why DMC Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "image", name: "image", label: "Image" },
              { type: "string", name: "imageBadgeTitle", label: "Image Badge Title" },
              { type: "string", name: "imageBadgeText", label: "Image Badge Text" },
              { type: "string", name: "paragraphs", label: "Paragraphs", list: true, ui: { component: "textarea" } },
              { type: "string", name: "highlights", label: "Highlights", list: true }
            ]
          },
          // ---------- LICENSES ----------
          {
            type: "object",
            name: "licensesSection",
            label: "Licenses Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "License Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "License" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "code", label: "Code" },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- WHO SHOULD ----------
          {
            type: "object",
            name: "whoShouldSection",
            label: "Who Should Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.label || "Item" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "label", label: "Label" }
                ]
              }
            ]
          },
          // ---------- SETUP STEPS ----------
          {
            type: "object",
            name: "setupStepsSection",
            label: "Setup Steps Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "steps",
                label: "Steps",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Step" }) },
                fields: [
                  { type: "string", name: "step", label: "Step Number" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "icon", label: "Icon" }
                ]
              }
            ]
          },
          // ---------- OFFICES ----------
          {
            type: "object",
            name: "officesSection",
            label: "Offices Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Office Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Office" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" },
                  { type: "string", name: "size", label: "Size (small | large)" }
                ]
              }
            ]
          },
          // ---------- LEGAL ENTITIES ----------
          {
            type: "object",
            name: "legalEntitiesSection",
            label: "Legal Entities Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Entity Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Entity" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- ACTIVITIES ----------
          {
            type: "object",
            name: "activitiesSection",
            label: "Activities Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Activity Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Activity" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          // ---------- VISA ----------
          {
            type: "object",
            name: "visaSection",
            label: "Visa Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Visa Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.label || "Visa" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "label", label: "Label" }
                ]
              },
              { type: "string", name: "footerText", label: "Footer Text", ui: { component: "textarea" } }
            ]
          },
          // ---------- WHY PARTNER ----------
          {
            type: "object",
            name: "whyPartnerSection",
            label: "Why Partner Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "image", name: "image", label: "Image" },
              { type: "string", name: "imageBadgeTitle", label: "Image Badge Title" },
              { type: "string", name: "imageBadgeText", label: "Image Badge Text" },
              { type: "string", name: "paragraphs", label: "Paragraphs", list: true, ui: { component: "textarea" } },
              { type: "string", name: "features", label: "Features", list: true }
            ]
          },
          // ---------- GROWTH STATS ----------
          {
            type: "object",
            name: "growthStatsSection",
            label: "Growth Stats Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Stats Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.label || "Stat" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "value", label: "Value" },
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- FAQS ----------
          {
            type: "object",
            name: "faqsSection",
            label: "FAQs Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "sidebarCard",
                label: "Sidebar Card",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "text", label: "Text", ui: { component: "textarea" } },
                  { type: "string", name: "whatsappMessage", label: "WhatsApp Message", ui: { component: "textarea" } }
                ]
              },
              {
                type: "object",
                name: "items",
                label: "FAQ Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.q || "FAQ" }) },
                fields: [
                  { type: "string", name: "q", label: "Question" },
                  { type: "string", name: "a", label: "Answer", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          // ---------- RELATED SERVICES ----------
          {
            type: "object",
            name: "relatedServicesSection",
            label: "Related Services Section",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Service Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Service" }) },
                fields: [
                  { type: "string", name: "slug", label: "Slug" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "image", name: "image", label: "Image" },
                  { type: "string", name: "gradient", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- FINAL CTA ----------
          {
            type: "object",
            name: "finalCTA",
            label: "Final CTA Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              { type: "string", name: "chips", label: "Chips", list: true },
              { type: "string", name: "whatsappMessage", label: "WhatsApp Message", ui: { component: "textarea" } },
              { type: "string", name: "whatsappCardMessage", label: "WhatsApp Card Message", ui: { component: "textarea" } }
            ]
          }
        ]
      },
      // ============================================================
      // Dubai Silicon Oasis (DSO) Collection
      // ============================================================
      {
        name: "dso",
        label: "\u{1F4A1} Dubai Silicon Oasis (DSO)",
        path: "src/content/freezones",
        match: { include: "dubai-silicon-oasis-free-zone" },
        // ← YE
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: "image", name: "heroImage", label: "Hero Image" },
          { type: "string", name: "heroBadge", label: "Hero Badge" },
          { type: "string", name: "heroTitle", label: "Hero Title" },
          { type: "string", name: "heroTitleHighlight", label: "Hero Title Highlight" },
          { type: "string", name: "heroSubtitle", label: "Hero Subtitle", ui: { component: "textarea" } },
          { type: "string", name: "heroChips", label: "Hero Chips", list: true },
          // ---------- HERO CIRCLES ----------
          {
            type: "object",
            name: "heroCircles",
            label: "Hero Circles",
            fields: [
              {
                type: "object",
                name: "primary",
                label: "Primary Circle",
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "value", label: "Value" },
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              },
              {
                type: "object",
                name: "secondary",
                label: "Secondary Circle",
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "value", label: "Value" },
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- STATS ----------
          {
            type: "object",
            name: "stats",
            label: "Stats",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.label || "Stat" }) },
            fields: [
              { type: "string", name: "icon", label: "Icon" },
              { type: "string", name: "value", label: "Value" },
              { type: "string", name: "label", label: "Label" },
              { type: "string", name: "color", label: "Gradient Color" }
            ]
          },
          // ---------- WHAT IS ----------
          {
            type: "object",
            name: "whatIsSection",
            label: "What Is Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "image", name: "image", label: "Image" },
              { type: "string", name: "imageBadgeTitle", label: "Image Badge Title" },
              { type: "string", name: "imageBadgeText", label: "Image Badge Text" },
              { type: "string", name: "paragraphs", label: "Paragraphs", list: true, ui: { component: "textarea" } },
              { type: "string", name: "highlights", label: "Highlights", list: true }
            ]
          },
          // ---------- BENTO ----------
          {
            type: "object",
            name: "bentoSection",
            label: "Bento Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              {
                type: "object",
                name: "largeCards",
                label: "Large Cards",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Large Card" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              },
              {
                type: "object",
                name: "smallCards",
                label: "Small Cards",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Small Card" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- SMART CITY ----------
          {
            type: "object",
            name: "smartCitySection",
            label: "Smart City Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Smart City Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Item" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          // ---------- SETUP STEPS ----------
          {
            type: "object",
            name: "setupStepsSection",
            label: "Setup Steps Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "steps",
                label: "Steps",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Step" }) },
                fields: [
                  { type: "string", name: "step", label: "Step Number" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- LICENSES ----------
          {
            type: "object",
            name: "licensesSection",
            label: "Licenses Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              {
                type: "object",
                name: "items",
                label: "License Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "License" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- ACTIVITIES ----------
          {
            type: "object",
            name: "activitiesSection",
            label: "Activities Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Activity Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.label || "Activity" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "label", label: "Label" }
                ]
              },
              {
                type: "object",
                name: "helperCard",
                label: "Helper Card",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "text", label: "Text", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          // ---------- WHO SHOULD ----------
          {
            type: "object",
            name: "whoShouldSection",
            label: "Who Should Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Who Should Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Item" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "image", name: "image", label: "Image" },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- FAQS ----------
          {
            type: "object",
            name: "faqsSection",
            label: "FAQs Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "sidebarCard",
                label: "Sidebar Card",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "text", label: "Text", ui: { component: "textarea" } },
                  { type: "string", name: "whatsappMessage", label: "WhatsApp Message", ui: { component: "textarea" } }
                ]
              },
              {
                type: "object",
                name: "items",
                label: "FAQ Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.q || "FAQ" }) },
                fields: [
                  { type: "string", name: "q", label: "Question" },
                  { type: "string", name: "a", label: "Answer", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          // ---------- RELATED SERVICES ----------
          {
            type: "object",
            name: "relatedServicesSection",
            label: "Related Services Section",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Service Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Service" }) },
                fields: [
                  { type: "string", name: "slug", label: "Slug" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "image", name: "image", label: "Image" },
                  { type: "string", name: "gradient", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- FINAL CTA ----------
          {
            type: "object",
            name: "finalCTA",
            label: "Final CTA Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              { type: "string", name: "chips", label: "Chips", list: true },
              { type: "string", name: "whatsappMessage", label: "WhatsApp Message", ui: { component: "textarea" } },
              { type: "string", name: "whatsappCardMessage", label: "WhatsApp Card Message", ui: { component: "textarea" } }
            ]
          }
        ]
      },
      // ============================================================
      // Dubai South Free Zone Collection
      // ============================================================
      {
        name: "dubaiSouth",
        label: "\u2708\uFE0F Dubai South Free Zone",
        path: "src/content/freezones",
        match: { include: "dubai-south-free-zone" },
        // ← YE
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: "image", name: "heroImage", label: "Hero Image" },
          { type: "string", name: "heroBadge", label: "Hero Badge" },
          { type: "string", name: "heroTitle", label: "Hero Title" },
          { type: "string", name: "heroTitleHighlight", label: "Hero Title Highlight" },
          { type: "string", name: "heroSubtitle", label: "Hero Subtitle", ui: { component: "textarea" } },
          { type: "string", name: "heroChips", label: "Hero Chips", list: true },
          // ---------- HERO CARDS ----------
          {
            type: "object",
            name: "heroCards",
            label: "Hero Cards",
            fields: [
              {
                type: "object",
                name: "primary",
                label: "Primary Card",
                fields: [
                  { type: "string", name: "badge", label: "Badge" },
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "value", label: "Value" },
                  { type: "string", name: "highlight", label: "Highlight" },
                  { type: "string", name: "highlightLabel", label: "Highlight Label" },
                  { type: "string", name: "footer", label: "Footer" },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              },
              {
                type: "object",
                name: "secondary",
                label: "Secondary Card",
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "value", label: "Value" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "subtext", label: "Subtext" },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              },
              {
                type: "object",
                name: "tertiary",
                label: "Tertiary Card",
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "value", label: "Value" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "subtext", label: "Subtext" },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- STATS ----------
          {
            type: "object",
            name: "stats",
            label: "Stats",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.label || "Stat" }) },
            fields: [
              { type: "string", name: "icon", label: "Icon" },
              { type: "string", name: "value", label: "Value" },
              { type: "string", name: "label", label: "Label" },
              { type: "string", name: "color", label: "Gradient Color" }
            ]
          },
          // ---------- WHAT IS ----------
          {
            type: "object",
            name: "whatIsSection",
            label: "What Is Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "image", name: "image", label: "Image" },
              { type: "string", name: "imageBadgeTitle", label: "Image Badge Title" },
              { type: "string", name: "imageBadgeText", label: "Image Badge Text" },
              { type: "string", name: "paragraphs", label: "Paragraphs", list: true, ui: { component: "textarea" } },
              { type: "string", name: "highlights", label: "Highlights", list: true }
            ]
          },
          // ---------- BENEFITS ----------
          {
            type: "object",
            name: "benefitsSection",
            label: "Benefits Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Benefit Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Benefit" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- SETUP STEPS ----------
          {
            type: "object",
            name: "setupStepsSection",
            label: "Setup Steps Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "steps",
                label: "Steps",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Step" }) },
                fields: [
                  { type: "string", name: "step", label: "Step Number" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "color", label: "Gradient Color" },
                  { type: "image", name: "image", label: "Image" }
                ]
              }
            ]
          },
          // ---------- WHY IDEAL ----------
          {
            type: "object",
            name: "whyIdealSection",
            label: "Why Ideal Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Item" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          // ---------- WHO SHOULD ----------
          {
            type: "object",
            name: "whoShouldSection",
            label: "Who Should Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Who Should Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Item" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              },
              { type: "string", name: "noteText", label: "Bottom Note Text", ui: { component: "textarea" } }
            ]
          },
          // ---------- WHY CHOOSE US ----------
          {
            type: "object",
            name: "whyChooseUsSection",
            label: "Why Choose Us Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.label || "Item" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "label", label: "Label" }
                ]
              },
              {
                type: "object",
                name: "stats",
                label: "Stats",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.label || "Stat" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "value", label: "Value" },
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "color", label: "Icon Gradient" },
                  { type: "string", name: "bg", label: "Background Gradient" }
                ]
              }
            ]
          },
          // ---------- FAQS ----------
          {
            type: "object",
            name: "faqsSection",
            label: "FAQs Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "sidebarCard",
                label: "Sidebar Card",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "text", label: "Text", ui: { component: "textarea" } },
                  { type: "string", name: "whatsappMessage", label: "WhatsApp Message", ui: { component: "textarea" } }
                ]
              },
              {
                type: "object",
                name: "items",
                label: "FAQ Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.q || "FAQ" }) },
                fields: [
                  { type: "string", name: "q", label: "Question" },
                  { type: "string", name: "a", label: "Answer", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          // ---------- RELATED SERVICES ----------
          {
            type: "object",
            name: "relatedServicesSection",
            label: "Related Services Section",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Service Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Service" }) },
                fields: [
                  { type: "string", name: "slug", label: "Slug" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "image", name: "image", label: "Image" },
                  { type: "string", name: "gradient", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- FINAL CTA ----------
          {
            type: "object",
            name: "finalCTA",
            label: "Final CTA Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              { type: "string", name: "chips", label: "Chips", list: true },
              { type: "string", name: "whatsappMessage", label: "WhatsApp Message", ui: { component: "textarea" } },
              { type: "string", name: "whatsappCardMessage", label: "WhatsApp Card Message", ui: { component: "textarea" } }
            ]
          }
        ]
      },
      // ============================================================
      // DUQE Free Zone Collection
      // ============================================================
      {
        name: "duqe",
        label: "\u{1F6A2} DUQE Free Zone",
        path: "src/content/freezones",
        match: { include: "duqe-free-zone" },
        // ← YE
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: "image", name: "heroImage", label: "Hero Image" },
          { type: "string", name: "heroBadge", label: "Hero Badge" },
          { type: "string", name: "heroTitle", label: "Hero Title" },
          { type: "string", name: "heroTitleHighlight", label: "Hero Title Highlight" },
          { type: "string", name: "heroSubtitle", label: "Hero Subtitle", ui: { component: "textarea" } },
          { type: "string", name: "heroChips", label: "Hero Chips", list: true },
          // ---------- HERO CARD ----------
          {
            type: "object",
            name: "heroCard",
            label: "Hero Card",
            fields: [
              { type: "string", name: "headerTitle", label: "Header Title" },
              { type: "string", name: "headerStatus", label: "Header Status" },
              { type: "string", name: "icon", label: "Icon" },
              { type: "string", name: "zoneLabel", label: "Zone Label" },
              { type: "string", name: "zoneValue", label: "Zone Value" },
              { type: "string", name: "statusBadge", label: "Status Badge" },
              { type: "string", name: "setupTimeLabel", label: "Setup Time Label" },
              { type: "string", name: "setupTimeValue", label: "Setup Time Value" },
              { type: "string", name: "taxLabel", label: "Process Label" },
              { type: "string", name: "taxValue", label: "Process Value" },
              { type: "string", name: "footerText", label: "Footer Text" }
            ]
          },
          // ---------- STATS ----------
          {
            type: "object",
            name: "stats",
            label: "Stats",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.label || "Stat" }) },
            fields: [
              { type: "string", name: "icon", label: "Icon" },
              { type: "string", name: "value", label: "Value" },
              { type: "string", name: "label", label: "Label" },
              { type: "string", name: "color", label: "Gradient Color" }
            ]
          },
          // ---------- WHAT IS ----------
          {
            type: "object",
            name: "whatIsSection",
            label: "What Is Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "image", name: "image", label: "Image" },
              { type: "string", name: "imageBadgeTitle", label: "Image Badge Title" },
              { type: "string", name: "imageBadgeText", label: "Image Badge Text" },
              { type: "string", name: "paragraphs", label: "Paragraphs", list: true, ui: { component: "textarea" } },
              { type: "string", name: "highlights", label: "Highlights", list: true }
            ]
          },
          // ---------- ADVANTAGES ----------
          {
            type: "object",
            name: "advantagesSection",
            label: "Advantages Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Advantage Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Item" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- SETUP STEPS ----------
          {
            type: "object",
            name: "setupStepsSection",
            label: "Setup Steps Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "steps",
                label: "Steps",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Step" }) },
                fields: [
                  { type: "string", name: "step", label: "Step Number" },
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- ACTIVITIES ----------
          {
            type: "object",
            name: "activitiesSection",
            label: "Activities Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Activity Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.label || "Activity" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- LICENSES ----------
          {
            type: "object",
            name: "licensesSection",
            label: "Licenses Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "License Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "License" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- WHO SHOULD ----------
          {
            type: "object",
            name: "whoShouldSection",
            label: "Who Should Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Who Should Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Item" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- LOCATION ----------
          {
            type: "object",
            name: "locationSection",
            label: "Location Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "image", name: "image", label: "Image" },
              { type: "string", name: "imageBadgeTitle", label: "Image Badge Title" },
              { type: "string", name: "imageBadgeText", label: "Image Badge Text" },
              { type: "string", name: "paragraphs", label: "Paragraphs", list: true, ui: { component: "textarea" } },
              {
                type: "object",
                name: "features",
                label: "Features",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.label || "Feature" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "label", label: "Label" }
                ]
              }
            ]
          },
          // ---------- GROWTH STATS ----------
          {
            type: "object",
            name: "growthStatsSection",
            label: "Growth Stats Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Stats Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.label || "Stat" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "value", label: "Value" },
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- FAQS ----------
          {
            type: "object",
            name: "faqsSection",
            label: "FAQs Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "sidebarCard",
                label: "Sidebar Card",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "text", label: "Text", ui: { component: "textarea" } },
                  { type: "string", name: "whatsappMessage", label: "WhatsApp Message", ui: { component: "textarea" } }
                ]
              },
              {
                type: "object",
                name: "items",
                label: "FAQ Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.q || "FAQ" }) },
                fields: [
                  { type: "string", name: "q", label: "Question" },
                  { type: "string", name: "a", label: "Answer", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          // ---------- RELATED SERVICES ----------
          {
            type: "object",
            name: "relatedServicesSection",
            label: "Related Services Section",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Service Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Service" }) },
                fields: [
                  { type: "string", name: "slug", label: "Slug" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "image", name: "image", label: "Image" },
                  { type: "string", name: "gradient", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- FINAL CTA ----------
          {
            type: "object",
            name: "finalCTA",
            label: "Final CTA Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              { type: "string", name: "chips", label: "Chips", list: true },
              { type: "string", name: "whatsappMessage", label: "WhatsApp Message", ui: { component: "textarea" } },
              { type: "string", name: "whatsappCardMessage", label: "WhatsApp Card Message", ui: { component: "textarea" } }
            ]
          }
        ]
      },
      // ============================================================
      // Dubai World Trade Centre (DWTC) Collection
      // ============================================================
      {
        name: "dwtc",
        label: "\u{1F451} Dubai World Trade Centre (DWTC)",
        path: "src/content/freezones",
        match: { include: "dwtc-free-zone" },
        // ← YE
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: "image", name: "heroImage", label: "Hero Image" },
          { type: "string", name: "heroBadge", label: "Hero Badge" },
          { type: "string", name: "heroTitle", label: "Hero Title" },
          { type: "string", name: "heroTitleHighlight", label: "Hero Title Highlight" },
          { type: "string", name: "heroSubtitle", label: "Hero Subtitle", ui: { component: "textarea" } },
          { type: "string", name: "heroChips", label: "Hero Chips", list: true },
          // ---------- HERO CARD ----------
          {
            type: "object",
            name: "heroCard",
            label: "Hero Card",
            fields: [
              { type: "string", name: "headerTitle", label: "Header Title" },
              { type: "string", name: "headerStatus", label: "Header Status" },
              { type: "string", name: "icon", label: "Icon" },
              { type: "string", name: "zoneLabel", label: "Zone Label" },
              { type: "string", name: "zoneValue", label: "Zone Value" },
              { type: "string", name: "statusBadge", label: "Status Badge" },
              { type: "string", name: "setupTimeLabel", label: "Setup Time Label" },
              { type: "string", name: "setupTimeValue", label: "Setup Time Value" },
              { type: "string", name: "taxLabel", label: "Tax Label" },
              { type: "string", name: "taxValue", label: "Tax Value" },
              { type: "string", name: "footerText", label: "Footer Text" }
            ]
          },
          // ---------- STATS ----------
          {
            type: "object",
            name: "stats",
            label: "Stats",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.label || "Stat" }) },
            fields: [
              { type: "string", name: "icon", label: "Icon" },
              { type: "string", name: "value", label: "Value" },
              { type: "string", name: "label", label: "Label" },
              { type: "string", name: "color", label: "Gradient Color" }
            ]
          },
          // ---------- WHY DWTC ----------
          {
            type: "object",
            name: "whyDwtcSection",
            label: "Why DWTC Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "smallCards",
                label: "Small Cards",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Card" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              },
              {
                type: "object",
                name: "largeCard",
                label: "Large Card",
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "image", name: "image", label: "Image" },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              },
              {
                type: "object",
                name: "transportCard",
                label: "Transport Card",
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- SERVICES ----------
          {
            type: "object",
            name: "servicesSection",
            label: "Services Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Service Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Service" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- PACKAGES ----------
          {
            type: "object",
            name: "packagesSection",
            label: "Packages Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Package Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.name || "Package" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "name", label: "Name" },
                  { type: "string", name: "badge", label: "Badge (optional)" },
                  { type: "string", name: "price", label: "Price" },
                  { type: "string", name: "currency", label: "Currency" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" },
                  { type: "boolean", name: "highlighted", label: "Highlighted" }
                ]
              }
            ]
          },
          // ---------- WHY CHOOSE US ----------
          {
            type: "object",
            name: "whyChooseUsSection",
            label: "Why Choose Us Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Item" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          // ---------- FAQS ----------
          {
            type: "object",
            name: "faqsSection",
            label: "FAQs Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "sidebarCard",
                label: "Sidebar Card",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "text", label: "Text", ui: { component: "textarea" } },
                  { type: "string", name: "whatsappMessage", label: "WhatsApp Message", ui: { component: "textarea" } }
                ]
              },
              {
                type: "object",
                name: "items",
                label: "FAQ Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.q || "FAQ" }) },
                fields: [
                  { type: "string", name: "q", label: "Question" },
                  { type: "string", name: "a", label: "Answer", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          // ---------- RELATED SERVICES ----------
          {
            type: "object",
            name: "relatedServicesSection",
            label: "Related Services Section",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Service Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Service" }) },
                fields: [
                  { type: "string", name: "slug", label: "Slug" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "image", name: "image", label: "Image" },
                  { type: "string", name: "gradient", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- FINAL CTA ----------
          {
            type: "object",
            name: "finalCTA",
            label: "Final CTA Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              { type: "string", name: "chips", label: "Chips", list: true },
              { type: "string", name: "whatsappMessage", label: "WhatsApp Message", ui: { component: "textarea" } },
              { type: "string", name: "whatsappCardMessage", label: "WhatsApp Card Message", ui: { component: "textarea" } }
            ]
          }
        ]
      },
      // ============================================================
      // Fujairah Creative City (FCC) Collection
      // ============================================================
      {
        name: "fcc",
        label: "\u{1F3A8} Fujairah Creative City (FCC)",
        path: "src/content/freezones",
        match: { include: "fujairah-creative-city-free-zone" },
        // ← YE
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: "image", name: "heroImage", label: "Hero Image" },
          { type: "string", name: "heroBadge", label: "Hero Badge" },
          { type: "string", name: "heroTitle", label: "Hero Title" },
          { type: "string", name: "heroTitleHighlight", label: "Hero Title Highlight" },
          { type: "string", name: "heroSubtitle", label: "Hero Subtitle", ui: { component: "textarea" } },
          { type: "string", name: "heroChips", label: "Hero Chips", list: true },
          // ---------- HERO CARD ----------
          {
            type: "object",
            name: "heroCard",
            label: "Hero Card",
            fields: [
              { type: "string", name: "headerTitle", label: "Header Title" },
              { type: "string", name: "headerStatus", label: "Header Status" },
              { type: "string", name: "icon", label: "Icon" },
              { type: "string", name: "zoneLabel", label: "Zone Label" },
              { type: "string", name: "zoneValue", label: "Zone Value" },
              { type: "string", name: "statusBadge", label: "Status Badge" },
              { type: "string", name: "setupTimeLabel", label: "Setup Time Label" },
              { type: "string", name: "setupTimeValue", label: "Setup Time Value" },
              { type: "string", name: "taxLabel", label: "Tax Label" },
              { type: "string", name: "taxValue", label: "Tax Value" },
              { type: "string", name: "footerText", label: "Footer Text" }
            ]
          },
          // ---------- STATS ----------
          {
            type: "object",
            name: "stats",
            label: "Stats",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.label || "Stat" }) },
            fields: [
              { type: "string", name: "icon", label: "Icon" },
              { type: "string", name: "value", label: "Value" },
              { type: "string", name: "label", label: "Label" },
              { type: "string", name: "color", label: "Gradient Color" }
            ]
          },
          // ---------- START ----------
          {
            type: "object",
            name: "startSection",
            label: "Start Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "image", name: "image", label: "Image" },
              { type: "string", name: "imageBadgeTitle", label: "Image Badge Title" },
              { type: "string", name: "imageBadgeText", label: "Image Badge Text" },
              { type: "string", name: "paragraphs", label: "Paragraphs", list: true, ui: { component: "textarea" } },
              { type: "string", name: "highlights", label: "Highlights", list: true }
            ]
          },
          // ---------- ACTIVITIES ----------
          {
            type: "object",
            name: "activitiesSection",
            label: "Activities Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Activity Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Activity" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "image", name: "image", label: "Image" },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- LICENSES ----------
          {
            type: "object",
            name: "licensesSection",
            label: "Licenses Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "License Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "License" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "code", label: "Code" },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- WORKSPACES ----------
          {
            type: "object",
            name: "workspacesSection",
            label: "Workspaces Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "largeCard",
                label: "Large Card",
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              },
              {
                type: "object",
                name: "secondaryCards",
                label: "Secondary Cards",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Card" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              },
              {
                type: "object",
                name: "bottomCards",
                label: "Bottom Cards",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Card" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- VISA ----------
          {
            type: "object",
            name: "visaSection",
            label: "Visa Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "image", name: "image", label: "Image" },
              { type: "string", name: "imageBadgeTitle", label: "Image Badge Title" },
              { type: "string", name: "imageBadgeText", label: "Image Badge Text" },
              { type: "string", name: "paragraphs", label: "Paragraphs", list: true, ui: { component: "textarea" } },
              { type: "string", name: "features", label: "Features", list: true }
            ]
          },
          // ---------- POST SETUP ----------
          {
            type: "object",
            name: "postSetupSection",
            label: "Post-Setup Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Item" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- WHY CHOOSE US ----------
          {
            type: "object",
            name: "whyChooseUsSection",
            label: "Why Choose Us Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Item" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          // ---------- FAQS ----------
          {
            type: "object",
            name: "faqsSection",
            label: "FAQs Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "sidebarCard",
                label: "Sidebar Card",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "text", label: "Text", ui: { component: "textarea" } },
                  { type: "string", name: "whatsappMessage", label: "WhatsApp Message", ui: { component: "textarea" } }
                ]
              },
              {
                type: "object",
                name: "items",
                label: "FAQ Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.q || "FAQ" }) },
                fields: [
                  { type: "string", name: "q", label: "Question" },
                  { type: "string", name: "a", label: "Answer", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          // ---------- RELATED SERVICES ----------
          {
            type: "object",
            name: "relatedServicesSection",
            label: "Related Services Section",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Service Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Service" }) },
                fields: [
                  { type: "string", name: "slug", label: "Slug" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "image", name: "image", label: "Image" },
                  { type: "string", name: "gradient", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- FINAL CTA ----------
          {
            type: "object",
            name: "finalCTA",
            label: "Final CTA Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              { type: "string", name: "chips", label: "Chips", list: true },
              { type: "string", name: "whatsappMessage", label: "WhatsApp Message", ui: { component: "textarea" } },
              { type: "string", name: "whatsappCardMessage", label: "WhatsApp Card Message", ui: { component: "textarea" } }
            ]
          }
        ]
      },
      // ============================================================
      // Hamriyah Free Zone (HFZA) Collection
      // ============================================================
      {
        name: "hfza",
        label: "\u{1F3ED} Hamriyah Free Zone (HFZA)",
        path: "src/content/freezones",
        match: { include: "hamriyah-free-zone" },
        // ← YE
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: "image", name: "heroImage", label: "Hero Image" },
          { type: "string", name: "heroBadge", label: "Hero Badge" },
          { type: "string", name: "heroTitle", label: "Hero Title" },
          { type: "string", name: "heroTitleHighlight", label: "Hero Title Highlight" },
          { type: "string", name: "heroSubtitle", label: "Hero Subtitle", ui: { component: "textarea" } },
          { type: "string", name: "heroChips", label: "Hero Chips", list: true },
          // ---------- HERO CARD ----------
          {
            type: "object",
            name: "heroCard",
            label: "Hero Card",
            fields: [
              { type: "string", name: "headerTitle", label: "Header Title" },
              { type: "string", name: "headerStatus", label: "Header Status" },
              { type: "string", name: "icon", label: "Icon" },
              { type: "string", name: "zoneLabel", label: "Zone Label" },
              { type: "string", name: "zoneValue", label: "Zone Value" },
              { type: "string", name: "statusBadge", label: "Status Badge" },
              { type: "string", name: "setupTimeLabel", label: "Setup Time Label" },
              { type: "string", name: "setupTimeValue", label: "Setup Time Value" },
              { type: "string", name: "taxLabel", label: "Tax Label" },
              { type: "string", name: "taxValue", label: "Tax Value" },
              { type: "string", name: "footerText", label: "Footer Text" },
              { type: "string", name: "color", label: "Gradient Color" }
            ]
          },
          // ---------- STATS ----------
          {
            type: "object",
            name: "stats",
            label: "Stats",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.label || "Stat" }) },
            fields: [
              { type: "string", name: "icon", label: "Icon" },
              { type: "string", name: "value", label: "Value" },
              { type: "string", name: "label", label: "Label" },
              { type: "string", name: "color", label: "Gradient Color" }
            ]
          },
          // ---------- READY SECTION ----------
          {
            type: "object",
            name: "readySection",
            label: "Ready Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "image", name: "image", label: "Image" },
              { type: "string", name: "imageBadgeTitle", label: "Image Badge Title" },
              { type: "string", name: "imageBadgeText", label: "Image Badge Text" },
              { type: "string", name: "paragraphs", label: "Paragraphs", list: true, ui: { component: "textarea" } },
              { type: "string", name: "highlights", label: "Highlights", list: true }
            ]
          },
          // ---------- FORMATION SECTION ----------
          {
            type: "object",
            name: "formationSection",
            label: "Formation Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              { type: "string", name: "structuresTitle", label: "Structures Title" },
              {
                type: "object",
                name: "structures",
                label: "Structures",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Structure" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "code", label: "Code" },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              },
              { type: "string", name: "licensesTitle", label: "Licenses Title" },
              {
                type: "object",
                name: "licenses",
                label: "Licenses",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "License" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- REGISTER SECTION ----------
          {
            type: "object",
            name: "registerSection",
            label: "Register Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "image", name: "image", label: "Image" },
              { type: "string", name: "imageBadgeTitle", label: "Image Badge Title" },
              { type: "string", name: "imageBadgeText", label: "Image Badge Text" },
              { type: "string", name: "paragraphs", label: "Paragraphs", list: true, ui: { component: "textarea" } },
              { type: "string", name: "features", label: "Features", list: true }
            ]
          },
          // ---------- FACILITIES ----------
          {
            type: "object",
            name: "facilitiesSection",
            label: "Facilities Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Facility Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Facility" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "image", name: "image", label: "Image" },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              },
              {
                type: "object",
                name: "helperCard",
                label: "Helper Card",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "text", label: "Text", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          // ---------- SECTORS ----------
          {
            type: "object",
            name: "sectorsSection",
            label: "Sectors Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Sector Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.label || "Sector" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "label", label: "Label" }
                ]
              },
              { type: "string", name: "footerText", label: "Footer Text", ui: { component: "textarea" } }
            ]
          },
          // ---------- VISA ----------
          {
            type: "object",
            name: "visaSection",
            label: "Visa Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "image", name: "image", label: "Image" },
              { type: "string", name: "imageBadgeTitle", label: "Image Badge Title" },
              { type: "string", name: "imageBadgeText", label: "Image Badge Text" },
              { type: "string", name: "paragraphs", label: "Paragraphs", list: true, ui: { component: "textarea" } },
              { type: "string", name: "features", label: "Features", list: true }
            ]
          },
          // ---------- DIGITAL SERVICES ----------
          {
            type: "object",
            name: "digitalServicesSection",
            label: "Digital Services Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Digital Service Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Service" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- WHY CHOOSE US ----------
          {
            type: "object",
            name: "whyChooseUsSection",
            label: "Why Choose Us Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Item" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          // ---------- FAQS ----------
          {
            type: "object",
            name: "faqsSection",
            label: "FAQs Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "sidebarCard",
                label: "Sidebar Card",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "text", label: "Text", ui: { component: "textarea" } },
                  { type: "string", name: "whatsappMessage", label: "WhatsApp Message", ui: { component: "textarea" } }
                ]
              },
              {
                type: "object",
                name: "items",
                label: "FAQ Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.q || "FAQ" }) },
                fields: [
                  { type: "string", name: "q", label: "Question" },
                  { type: "string", name: "a", label: "Answer", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          // ---------- RELATED SERVICES ----------
          {
            type: "object",
            name: "relatedServicesSection",
            label: "Related Services Section",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Service Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Service" }) },
                fields: [
                  { type: "string", name: "slug", label: "Slug" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "image", name: "image", label: "Image" },
                  { type: "string", name: "gradient", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- FINAL CTA ----------
          {
            type: "object",
            name: "finalCTA",
            label: "Final CTA Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              { type: "string", name: "chips", label: "Chips", list: true },
              { type: "string", name: "whatsappMessage", label: "WhatsApp Message", ui: { component: "textarea" } },
              { type: "string", name: "whatsappCardMessage", label: "WhatsApp Card Message", ui: { component: "textarea" } }
            ]
          }
        ]
      },
      // ============================================================
      // IFZA Free Zone Collection
      // ============================================================
      {
        name: "ifza",
        label: "\u{1F3D9}\uFE0F IFZA Free Zone",
        path: "src/content/freezones",
        match: { include: "ifza-free-zone" },
        // ← YE
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: "image", name: "heroImage", label: "Hero Image" },
          { type: "string", name: "heroBadge", label: "Hero Badge" },
          { type: "string", name: "heroTitle", label: "Hero Title" },
          { type: "string", name: "heroTitleHighlight", label: "Hero Title Highlight" },
          { type: "string", name: "heroSubtitle", label: "Hero Subtitle", ui: { component: "textarea" } },
          { type: "string", name: "heroChips", label: "Hero Chips", list: true },
          // ---------- HERO CARDS ----------
          {
            type: "object",
            name: "heroCards",
            label: "Hero Cards",
            fields: [
              {
                type: "object",
                name: "primary",
                label: "Primary Card",
                fields: [
                  { type: "string", name: "badge", label: "Badge" },
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "value", label: "Value" },
                  { type: "string", name: "highlight", label: "Highlight" },
                  { type: "string", name: "highlightLabel", label: "Highlight Label" },
                  { type: "string", name: "footer", label: "Footer" },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              },
              {
                type: "object",
                name: "secondary",
                label: "Secondary Card",
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "value", label: "Value" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "subtext", label: "Subtext" },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- STATS ----------
          {
            type: "object",
            name: "stats",
            label: "Stats",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.label || "Stat" }) },
            fields: [
              { type: "string", name: "icon", label: "Icon" },
              { type: "string", name: "value", label: "Value" },
              { type: "string", name: "label", label: "Label" },
              { type: "string", name: "color", label: "Gradient Color" }
            ]
          },
          // ---------- WHY IFZA ----------
          {
            type: "object",
            name: "whyIfzaSection",
            label: "Why IFZA Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "primaryCard",
                label: "Primary Card",
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              },
              {
                type: "object",
                name: "secondaryCards",
                label: "Secondary Cards",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Card" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- BENEFITS ----------
          {
            type: "object",
            name: "benefitsSection",
            label: "Benefits Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              {
                type: "object",
                name: "items",
                label: "Benefit Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Benefit" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" },
                  { type: "image", name: "image", label: "Image" }
                ]
              }
            ]
          },
          // ---------- LICENSES ----------
          {
            type: "object",
            name: "licensesSection",
            label: "Licenses Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "License Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "License" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "code", label: "Code" },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- OFFICE OPTIONS ----------
          {
            type: "object",
            name: "officeOptionsSection",
            label: "Office Options Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Office Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Option" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- COMPLIANCE ----------
          {
            type: "object",
            name: "complianceSection",
            label: "Compliance Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Compliance Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Item" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          // ---------- WHY IDEAL ----------
          {
            type: "object",
            name: "whyIdealSection",
            label: "Why Ideal Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Item" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- WHO SHOULD ----------
          {
            type: "object",
            name: "whoShouldSection",
            label: "Who Should Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              {
                type: "object",
                name: "items",
                label: "Who Should Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Item" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "image", name: "image", label: "Image" },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- HOW WE HELP ----------
          {
            type: "object",
            name: "howWeHelpSection",
            label: "How We Help Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              {
                type: "object",
                name: "steps",
                label: "Steps",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Step" }) },
                fields: [
                  { type: "string", name: "step", label: "Step Number" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- COST & TIMELINE ----------
          {
            type: "object",
            name: "costTimelineSection",
            label: "Cost & Timeline Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "costBreakdown",
                label: "Cost Breakdown",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.item || "Cost Item" }) },
                fields: [
                  { type: "string", name: "item", label: "Item" },
                  { type: "string", name: "cost", label: "Cost" },
                  { type: "string", name: "notes", label: "Notes" },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              },
              {
                type: "object",
                name: "year1Total",
                label: "Year 1 Total",
                fields: [
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "subtext", label: "Subtext" },
                  { type: "string", name: "fromLabel", label: "From Label" },
                  { type: "string", name: "minValue", label: "Min Value" },
                  { type: "string", name: "maxValue", label: "Max Value" }
                ]
              },
              { type: "string", name: "timelineBadge", label: "Timeline Badge" },
              { type: "string", name: "timelineTitle", label: "Timeline Title" },
              {
                type: "object",
                name: "timeline",
                label: "Timeline",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Timeline Item" }) },
                fields: [
                  { type: "string", name: "day", label: "Day" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              },
              { type: "string", name: "comparisonTitle", label: "Comparison Title" },
              { type: "string", name: "comparisonSubtitle", label: "Comparison Subtitle" },
              {
                type: "object",
                name: "comparisonHeaders",
                label: "Comparison Headers",
                fields: [
                  { type: "string", name: "factor", label: "Factor Column" },
                  { type: "string", name: "ifza", label: "IFZA Column" },
                  { type: "string", name: "rakez", label: "Rakez Column" },
                  { type: "string", name: "meydan", label: "Meydan Column" }
                ]
              },
              {
                type: "object",
                name: "comparison",
                label: "Comparison Rows",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.factor || "Row" }) },
                fields: [
                  { type: "string", name: "factor", label: "Factor" },
                  { type: "string", name: "ifza", label: "IFZA" },
                  { type: "string", name: "rakez", label: "Rakez" },
                  { type: "string", name: "meydan", label: "Meydan" }
                ]
              },
              { type: "string", name: "verdictLabel", label: "Verdict Label" },
              { type: "string", name: "verdictText", label: "Verdict Text", ui: { component: "textarea" } }
            ]
          },
          // ---------- FAQS ----------
          {
            type: "object",
            name: "faqsSection",
            label: "FAQs Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "sidebarCard",
                label: "Sidebar Card",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "text", label: "Text", ui: { component: "textarea" } },
                  { type: "string", name: "whatsappMessage", label: "WhatsApp Message", ui: { component: "textarea" } }
                ]
              },
              {
                type: "object",
                name: "items",
                label: "FAQ Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.q || "FAQ" }) },
                fields: [
                  { type: "string", name: "q", label: "Question" },
                  { type: "string", name: "a", label: "Answer", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          // ---------- RELATED SERVICES ----------
          {
            type: "object",
            name: "relatedServicesSection",
            label: "Related Services Section",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Service Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Service" }) },
                fields: [
                  { type: "string", name: "slug", label: "Slug" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "image", name: "image", label: "Image" },
                  { type: "string", name: "gradient", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- FINAL CTA ----------
          {
            type: "object",
            name: "finalCTA",
            label: "Final CTA Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              { type: "string", name: "chips", label: "Chips", list: true },
              { type: "string", name: "whatsappMessage", label: "WhatsApp Message", ui: { component: "textarea" } },
              { type: "string", name: "whatsappCardMessage", label: "WhatsApp Card Message", ui: { component: "textarea" } }
            ]
          }
        ]
      },
      // ============================================================
      // JAFZA (Jebel Ali Free Zone) Collection
      // ============================================================
      {
        name: "jafza",
        label: "\u{1F6A2} JAFZA Free Zone",
        path: "src/content/freezones",
        match: { include: "jafza-free-zone" },
        // ← YE
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: "image", name: "heroImage", label: "Hero Image" },
          { type: "string", name: "heroBadge", label: "Hero Badge" },
          { type: "string", name: "heroTitle", label: "Hero Title" },
          { type: "string", name: "heroTitleHighlight", label: "Hero Title Highlight" },
          { type: "string", name: "heroSubtitle", label: "Hero Subtitle", ui: { component: "textarea" } },
          { type: "string", name: "heroChips", label: "Hero Chips", list: true },
          // ---------- STATS ----------
          {
            type: "object",
            name: "stats",
            label: "Stats",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.label || "Stat" }) },
            fields: [
              { type: "string", name: "icon", label: "Icon" },
              { type: "string", name: "value", label: "Value" },
              { type: "string", name: "label", label: "Label" },
              { type: "string", name: "color", label: "Gradient Color" }
            ]
          },
          // ---------- WHY JAFZA ----------
          {
            type: "object",
            name: "whyJafzaSection",
            label: "Why JAFZA Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Item" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" },
                  { type: "string", name: "size", label: "Size (small | large)" }
                ]
              }
            ]
          },
          // ---------- SERVICES ----------
          {
            type: "object",
            name: "servicesSection",
            label: "Services Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Service Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Service" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          // ---------- LICENSES ----------
          {
            type: "object",
            name: "licensesSection",
            label: "Licenses Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "License Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "License" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "code", label: "Code" },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- INFRASTRUCTURE ----------
          {
            type: "object",
            name: "infrastructureSection",
            label: "Infrastructure Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              { type: "image", name: "image", label: "Background Image" },
              {
                type: "object",
                name: "items",
                label: "Infrastructure Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Item" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" },
                  { type: "string", name: "size", label: "Size (small | large)" }
                ]
              }
            ]
          },
          // ---------- LIQUIDATION ----------
          {
            type: "object",
            name: "liquidationSection",
            label: "Liquidation Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "image", name: "image", label: "Image" },
              { type: "string", name: "imageBadgeTitle", label: "Image Badge Title" },
              { type: "string", name: "imageBadgeText", label: "Image Badge Text" },
              { type: "string", name: "paragraphs", label: "Paragraphs", list: true, ui: { component: "textarea" } },
              { type: "string", name: "highlights", label: "Highlights", list: true }
            ]
          },
          // ---------- OFFSHORE ----------
          {
            type: "object",
            name: "offshoreSection",
            label: "Offshore Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Offshore Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Item" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          // ---------- WHY CHOOSE US ----------
          {
            type: "object",
            name: "whyChooseUsSection",
            label: "Why Choose Us Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Item" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          // ---------- COST BREAKDOWN ----------
          {
            type: "object",
            name: "costBreakdownSection",
            label: "Cost Breakdown Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Cost Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.item || "Cost Item" }) },
                fields: [
                  { type: "string", name: "item", label: "Item" },
                  { type: "string", name: "cost", label: "Cost" },
                  { type: "string", name: "notes", label: "Notes" },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              },
              { type: "string", name: "yearTotalLabel", label: "Year Total Label" },
              { type: "string", name: "yearTotalNote", label: "Year Total Note", ui: { component: "textarea" } },
              { type: "string", name: "yearTotalFrom", label: "Year Total From" }
            ]
          },
          // ---------- COMPARISON ----------
          {
            type: "object",
            name: "comparisonSection",
            label: "Comparison Section",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "subtitle", label: "Subtitle" },
              {
                type: "object",
                name: "items",
                label: "Comparison Rows",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.factor || "Factor" }) },
                fields: [
                  { type: "string", name: "factor", label: "Factor" },
                  { type: "string", name: "jafza", label: "JAFZA" },
                  { type: "string", name: "dmcc", label: "DMCC" },
                  { type: "string", name: "ifza", label: "IFZA" }
                ]
              },
              { type: "string", name: "verdict", label: "Verdict", ui: { component: "textarea" } }
            ]
          },
          // ---------- SETUP STEPS ----------
          {
            type: "object",
            name: "setupStepsSection",
            label: "Setup Steps Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "steps",
                label: "Steps",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Step" }) },
                fields: [
                  { type: "string", name: "step", label: "Step Number" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- FAQS ----------
          {
            type: "object",
            name: "faqsSection",
            label: "FAQs Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "sidebarCard",
                label: "Sidebar Card",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "text", label: "Text", ui: { component: "textarea" } },
                  { type: "string", name: "whatsappMessage", label: "WhatsApp Message", ui: { component: "textarea" } }
                ]
              },
              {
                type: "object",
                name: "items",
                label: "FAQ Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.q || "FAQ" }) },
                fields: [
                  { type: "string", name: "q", label: "Question" },
                  { type: "string", name: "a", label: "Answer", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          // ---------- RELATED SERVICES ----------
          {
            type: "object",
            name: "relatedServicesSection",
            label: "Related Services Section",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Service Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Service" }) },
                fields: [
                  { type: "string", name: "slug", label: "Slug" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "image", name: "image", label: "Image" },
                  { type: "string", name: "gradient", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- FINAL CTA ----------
          {
            type: "object",
            name: "finalCTA",
            label: "Final CTA Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              { type: "string", name: "chips", label: "Chips", list: true },
              { type: "string", name: "whatsappMessage", label: "WhatsApp Message", ui: { component: "textarea" } },
              { type: "string", name: "whatsappCardMessage", label: "WhatsApp Card Message", ui: { component: "textarea" } }
            ]
          }
        ]
      },
      // ============================================================
      // KIZAD (Khalifa Industrial Zone Abu Dhabi) Collection
      // ============================================================
      {
        name: "kizad",
        label: "\u{1F3ED} KIZAD Abu Dhabi",
        path: "src/content/freezones",
        match: { include: "kizad-free-zone" },
        // ← YE
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: "image", name: "heroImage", label: "Hero Image" },
          { type: "string", name: "heroBadge", label: "Hero Badge" },
          { type: "string", name: "heroTitle", label: "Hero Title" },
          { type: "string", name: "heroTitleHighlight", label: "Hero Title Highlight" },
          { type: "string", name: "heroSubtitle", label: "Hero Subtitle", ui: { component: "textarea" } },
          { type: "string", name: "heroChips", label: "Hero Chips", list: true },
          // ---------- STATS ----------
          {
            type: "object",
            name: "stats",
            label: "Stats",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.label || "Stat" }) },
            fields: [
              { type: "string", name: "icon", label: "Icon" },
              { type: "string", name: "value", label: "Value" },
              { type: "string", name: "label", label: "Label" },
              { type: "string", name: "color", label: "Gradient Color" }
            ]
          },
          // ---------- WHAT IS ----------
          {
            type: "object",
            name: "whatIsSection",
            label: "What Is Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "image", name: "image", label: "Image" },
              { type: "string", name: "imageBadgeTitle", label: "Image Badge Title" },
              { type: "string", name: "imageBadgeText", label: "Image Badge Text" },
              { type: "string", name: "paragraphs", label: "Paragraphs", list: true, ui: { component: "textarea" } },
              { type: "string", name: "highlights", label: "Highlights", list: true }
            ]
          },
          // ---------- WHY KIZAD ----------
          {
            type: "object",
            name: "whyKizadSection",
            label: "Why KIZAD Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Item" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- BENEFITS ----------
          {
            type: "object",
            name: "benefitsSection",
            label: "Benefits Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.label || "Item" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "label", label: "Label" }
                ]
              },
              { type: "string", name: "footerText", label: "Footer Text", ui: { component: "textarea" } }
            ]
          },
          // ---------- FACILITIES ----------
          {
            type: "object",
            name: "facilitiesSection",
            label: "Facilities Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Facility Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Facility" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" },
                  { type: "string", name: "size", label: "Size (small | large)" }
                ]
              }
            ]
          },
          // ---------- SETUP STEPS ----------
          {
            type: "object",
            name: "setupStepsSection",
            label: "Setup Steps Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "steps",
                label: "Steps",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Step" }) },
                fields: [
                  { type: "string", name: "step", label: "Step Number" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "icon", label: "Icon" }
                ]
              }
            ]
          },
          // ---------- INDUSTRIES ----------
          {
            type: "object",
            name: "industriesSection",
            label: "Industries Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Industry Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.label || "Industry" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- LOCATION ----------
          {
            type: "object",
            name: "locationSection",
            label: "Location Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "image", name: "image", label: "Image" },
              { type: "string", name: "imageBadgeTitle", label: "Image Badge Title" },
              { type: "string", name: "imageBadgeText", label: "Image Badge Text" },
              { type: "string", name: "paragraphs", label: "Paragraphs", list: true, ui: { component: "textarea" } },
              {
                type: "object",
                name: "features",
                label: "Features",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.label || "Feature" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "label", label: "Label" }
                ]
              }
            ]
          },
          // ---------- COST BREAKDOWN ----------
          {
            type: "object",
            name: "costBreakdownSection",
            label: "Cost Breakdown Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Cost Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.component || "Cost Item" }) },
                fields: [
                  { type: "string", name: "component", label: "Component" },
                  { type: "string", name: "cost", label: "Cost" },
                  { type: "string", name: "notes", label: "Notes" }
                ]
              }
            ]
          },
          // ---------- COMPARISON ----------
          {
            type: "object",
            name: "comparisonSection",
            label: "Comparison Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Comparison Rows",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.factor || "Factor" }) },
                fields: [
                  { type: "string", name: "factor", label: "Factor" },
                  { type: "string", name: "kizad", label: "KIZAD" },
                  { type: "string", name: "jafza", label: "JAFZA" },
                  { type: "string", name: "ifza", label: "IFZA" }
                ]
              },
              { type: "string", name: "ctaText", label: "CTA Text" },
              { type: "string", name: "ctaSubtext", label: "CTA Subtext", ui: { component: "textarea" } }
            ]
          },
          // ---------- GROWTH STATS ----------
          {
            type: "object",
            name: "growthStatsSection",
            label: "Growth Stats Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Stats Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.label || "Stat" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "value", label: "Value" },
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- FAQS ----------
          {
            type: "object",
            name: "faqsSection",
            label: "FAQs Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "sidebarCard",
                label: "Sidebar Card",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "text", label: "Text", ui: { component: "textarea" } },
                  { type: "string", name: "whatsappMessage", label: "WhatsApp Message", ui: { component: "textarea" } }
                ]
              },
              {
                type: "object",
                name: "items",
                label: "FAQ Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.q || "FAQ" }) },
                fields: [
                  { type: "string", name: "q", label: "Question" },
                  { type: "string", name: "a", label: "Answer", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          // ---------- RELATED SERVICES ----------
          {
            type: "object",
            name: "relatedServicesSection",
            label: "Related Services Section",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Service Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Service" }) },
                fields: [
                  { type: "string", name: "slug", label: "Slug" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "image", name: "image", label: "Image" },
                  { type: "string", name: "gradient", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- FINAL CTA ----------
          {
            type: "object",
            name: "finalCTA",
            label: "Final CTA Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              { type: "string", name: "chips", label: "Chips", list: true },
              { type: "string", name: "whatsappMessage", label: "WhatsApp Message", ui: { component: "textarea" } },
              { type: "string", name: "whatsappCardMessage", label: "WhatsApp Card Message", ui: { component: "textarea" } }
            ]
          }
        ]
      },
      // ============================================================
      // Meydan Free Zone Collection
      // ============================================================
      {
        name: "meydan",
        label: "\u{1F3C7} Meydan Free Zone",
        path: "src/content/freezones",
        match: { include: "meydan-free-zone" },
        // ← YE
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: "image", name: "heroImage", label: "Hero Image" },
          { type: "string", name: "heroBadge", label: "Hero Badge" },
          { type: "string", name: "heroTitle", label: "Hero Title" },
          { type: "string", name: "heroTitleHighlight", label: "Hero Title Highlight" },
          { type: "string", name: "heroSubtitle", label: "Hero Subtitle", ui: { component: "textarea" } },
          { type: "string", name: "heroChips", label: "Hero Chips", list: true },
          // ---------- STATS ----------
          {
            type: "object",
            name: "stats",
            label: "Stats",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.label || "Stat" }) },
            fields: [
              { type: "string", name: "icon", label: "Icon" },
              { type: "string", name: "value", label: "Value" },
              { type: "string", name: "label", label: "Label" },
              { type: "string", name: "color", label: "Gradient Color" }
            ]
          },
          // ---------- WHY MEYDAN ----------
          {
            type: "object",
            name: "whyMeydanSection",
            label: "Why Meydan Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Item" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" },
                  { type: "string", name: "size", label: "Size (small | large)" }
                ]
              }
            ]
          },
          // ---------- READY TO LAUNCH ----------
          {
            type: "object",
            name: "readyToLaunchSection",
            label: "Ready To Launch Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "image", name: "image", label: "Image" },
              { type: "string", name: "imageBadgeTitle", label: "Image Badge Title" },
              { type: "string", name: "imageBadgeText", label: "Image Badge Text" },
              { type: "string", name: "paragraphs", label: "Paragraphs", list: true, ui: { component: "textarea" } },
              { type: "string", name: "highlights", label: "Highlights", list: true }
            ]
          },
          // ---------- LICENSES ----------
          {
            type: "object",
            name: "licensesSection",
            label: "Licenses Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "License Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "License" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "code", label: "Code" },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- KEY BENEFITS ----------
          {
            type: "object",
            name: "keyBenefitsSection",
            label: "Key Benefits Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              {
                type: "object",
                name: "items",
                label: "Benefit Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Benefit" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- SETUP STEPS ----------
          {
            type: "object",
            name: "setupStepsSection",
            label: "Setup Steps Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "steps",
                label: "Steps",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Step" }) },
                fields: [
                  { type: "string", name: "step", label: "Step Number" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "color", label: "Gradient Color" },
                  { type: "image", name: "image", label: "Image" }
                ]
              }
            ]
          },
          // ---------- DOCUMENTS ----------
          {
            type: "object",
            name: "documentsSection",
            label: "Documents Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              {
                type: "object",
                name: "items",
                label: "Document Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.label || "Document" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          // ---------- WHY CHOOSE US ----------
          {
            type: "object",
            name: "whyChooseUsSection",
            label: "Why Choose Us Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Item" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- FAQS ----------
          {
            type: "object",
            name: "faqsSection",
            label: "FAQs Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "sidebarCard",
                label: "Sidebar Card",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "text", label: "Text", ui: { component: "textarea" } },
                  { type: "string", name: "whatsappMessage", label: "WhatsApp Message", ui: { component: "textarea" } }
                ]
              },
              {
                type: "object",
                name: "items",
                label: "FAQ Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.q || "FAQ" }) },
                fields: [
                  { type: "string", name: "q", label: "Question" },
                  { type: "string", name: "a", label: "Answer", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          // ---------- RELATED SERVICES ----------
          {
            type: "object",
            name: "relatedServicesSection",
            label: "Related Services Section",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Service Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Service" }) },
                fields: [
                  { type: "string", name: "slug", label: "Slug" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "image", name: "image", label: "Image" },
                  { type: "string", name: "gradient", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- FINAL CTA ----------
          {
            type: "object",
            name: "finalCTA",
            label: "Final CTA Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              { type: "string", name: "chips", label: "Chips", list: true },
              { type: "string", name: "whatsappMessage", label: "WhatsApp Message", ui: { component: "textarea" } },
              { type: "string", name: "whatsappCardMessage", label: "WhatsApp Card Message", ui: { component: "textarea" } }
            ]
          }
        ]
      },
      // ============================================================
      // RAKEZ Free Zone Collection
      // ============================================================
      {
        name: "rakez",
        label: "\u{1F3D9}\uFE0F RAKEZ Free Zone",
        path: "src/content/freezones",
        match: { include: "rakez-free-zone" },
        // ← YE
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: "image", name: "heroImage", label: "Hero Image" },
          { type: "string", name: "heroBadge", label: "Hero Badge" },
          { type: "string", name: "heroTitle", label: "Hero Title" },
          { type: "string", name: "heroTitleHighlight", label: "Hero Title Highlight" },
          { type: "string", name: "heroSubtitle", label: "Hero Subtitle", ui: { component: "textarea" } },
          { type: "string", name: "heroChips", label: "Hero Chips", list: true },
          // ---------- STATS ----------
          {
            type: "object",
            name: "stats",
            label: "Stats",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.label || "Stat" }) },
            fields: [
              { type: "string", name: "icon", label: "Icon" },
              { type: "string", name: "value", label: "Value" },
              { type: "string", name: "label", label: "Label" },
              { type: "string", name: "color", label: "Gradient Color" }
            ]
          },
          // ---------- INTRO ----------
          {
            type: "object",
            name: "introSection",
            label: "Intro Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "image", name: "image", label: "Image" },
              { type: "string", name: "imageBadgeTitle", label: "Image Badge Title" },
              { type: "string", name: "imageBadgeText", label: "Image Badge Text" },
              { type: "string", name: "paragraphs", label: "Paragraphs", list: true, ui: { component: "textarea" } },
              { type: "string", name: "highlights", label: "Highlights", list: true }
            ]
          },
          // ---------- WHY CHOOSE ----------
          {
            type: "object",
            name: "whyChooseSection",
            label: "Why Choose Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Item" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- LICENSE TYPES ----------
          {
            type: "object",
            name: "licenseTypesSection",
            label: "License Types Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "License Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "License" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "code", label: "Code" },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- FACILITIES ----------
          {
            type: "object",
            name: "facilitiesSection",
            label: "Facilities Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Facility Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Facility" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" },
                  { type: "string", name: "size", label: "Size (small | large)" }
                ]
              }
            ]
          },
          // ---------- VISA SERVICES ----------
          {
            type: "object",
            name: "visaServicesSection",
            label: "Visa Services Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Visa Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.label || "Visa" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "label", label: "Label" }
                ]
              }
            ]
          },
          // ---------- FORMATION SERVICES ----------
          {
            type: "object",
            name: "formationServicesSection",
            label: "Formation Services Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Formation Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.label || "Item" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "label", label: "Label" }
                ]
              }
            ]
          },
          // ---------- TAX BENEFITS ----------
          {
            type: "object",
            name: "taxBenefitsSection",
            label: "Tax Benefits Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Tax Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.label || "Item" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "detail", label: "Detail" }
                ]
              }
            ]
          },
          // ---------- DIGITAL SERVICES ----------
          {
            type: "object",
            name: "digitalServicesSection",
            label: "Digital Services Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Digital Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Item" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              },
              { type: "string", name: "footerText", label: "Footer Text", ui: { component: "textarea" } }
            ]
          },
          // ---------- POST LICENSE SUPPORT ----------
          {
            type: "object",
            name: "postLicenseSupportSection",
            label: "Post-License Support Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Support Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.label || "Item" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "label", label: "Label" }
                ]
              }
            ]
          },
          // ---------- BUSINESS ACTIVITIES ----------
          {
            type: "object",
            name: "businessActivitiesSection",
            label: "Business Activities Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Activity Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.label || "Activity" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- GROWTH STATS ----------
          {
            type: "object",
            name: "growthStatsSection",
            label: "Growth Stats Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Stats Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.label || "Stat" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "value", label: "Value" },
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- FAQS ----------
          {
            type: "object",
            name: "faqsSection",
            label: "FAQs Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "sidebarCard",
                label: "Sidebar Card",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "text", label: "Text", ui: { component: "textarea" } },
                  { type: "string", name: "whatsappMessage", label: "WhatsApp Message", ui: { component: "textarea" } }
                ]
              },
              {
                type: "object",
                name: "items",
                label: "FAQ Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.q || "FAQ" }) },
                fields: [
                  { type: "string", name: "q", label: "Question" },
                  { type: "string", name: "a", label: "Answer", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          // ---------- RELATED SERVICES ----------
          {
            type: "object",
            name: "relatedServicesSection",
            label: "Related Services Section",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Service Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Service" }) },
                fields: [
                  { type: "string", name: "slug", label: "Slug" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "image", name: "image", label: "Image" },
                  { type: "string", name: "gradient", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- FINAL CTA ----------
          {
            type: "object",
            name: "finalCTA",
            label: "Final CTA Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              { type: "string", name: "chips", label: "Chips", list: true },
              { type: "string", name: "whatsappMessage", label: "WhatsApp Message", ui: { component: "textarea" } },
              { type: "string", name: "whatsappCardMessage", label: "WhatsApp Card Message", ui: { component: "textarea" } }
            ]
          }
        ]
      },
      // ============================================================
      // SAIF Free Zone Collection
      // ============================================================
      {
        name: "saif",
        label: "\u2708\uFE0F SAIF Free Zone",
        path: "src/content/freezones",
        match: { include: "saif-free-zone" },
        // ← YE
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: "image", name: "heroImage", label: "Hero Image" },
          { type: "string", name: "heroBadge", label: "Hero Badge" },
          { type: "string", name: "heroTitle", label: "Hero Title" },
          { type: "string", name: "heroTitleHighlight", label: "Hero Title Highlight" },
          { type: "string", name: "heroSubtitle", label: "Hero Subtitle", ui: { component: "textarea" } },
          { type: "string", name: "heroChips", label: "Hero Chips", list: true },
          // ---------- STATS ----------
          {
            type: "object",
            name: "stats",
            label: "Stats",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.label || "Stat" }) },
            fields: [
              { type: "string", name: "icon", label: "Icon" },
              { type: "string", name: "value", label: "Value" },
              { type: "string", name: "label", label: "Label" },
              { type: "string", name: "color", label: "Gradient Color" }
            ]
          },
          // ---------- WHY SAIF ----------
          {
            type: "object",
            name: "whySaifSection",
            label: "Why SAIF Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Item" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" },
                  { type: "string", name: "size", label: "Size (small | large)" }
                ]
              }
            ]
          },
          // ---------- LICENSES ----------
          {
            type: "object",
            name: "licensesSection",
            label: "Licenses Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "License Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "License" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "code", label: "Code" },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- HOW WE HELP ----------
          {
            type: "object",
            name: "howWeHelpSection",
            label: "How We Help Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "steps",
                label: "Steps",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Step" }) },
                fields: [
                  { type: "string", name: "step", label: "Step Number" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "color", label: "Gradient Color" },
                  { type: "image", name: "image", label: "Image" }
                ]
              }
            ]
          },
          // ---------- DIGITAL GROWTH ----------
          {
            type: "object",
            name: "digitalGrowthSection",
            label: "Digital Growth Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Digital Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Item" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- LIQUIDATION ----------
          {
            type: "object",
            name: "liquidationSection",
            label: "Liquidation Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "image", name: "image", label: "Image" },
              { type: "string", name: "imageBadgeTitle", label: "Image Badge Title" },
              { type: "string", name: "imageBadgeText", label: "Image Badge Text" },
              { type: "string", name: "paragraphs", label: "Paragraphs", list: true, ui: { component: "textarea" } },
              { type: "string", name: "highlights", label: "Highlights", list: true }
            ]
          },
          // ---------- ACTIVITIES ----------
          {
            type: "object",
            name: "activitiesSection",
            label: "Activities Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Activity Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Activity" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- FAQS ----------
          {
            type: "object",
            name: "faqsSection",
            label: "FAQs Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "sidebarCard",
                label: "Sidebar Card",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "text", label: "Text", ui: { component: "textarea" } },
                  { type: "string", name: "whatsappMessage", label: "WhatsApp Message", ui: { component: "textarea" } }
                ]
              },
              {
                type: "object",
                name: "items",
                label: "FAQ Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.q || "FAQ" }) },
                fields: [
                  { type: "string", name: "q", label: "Question" },
                  { type: "string", name: "a", label: "Answer", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          // ---------- RELATED SERVICES ----------
          {
            type: "object",
            name: "relatedServicesSection",
            label: "Related Services Section",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Service Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Service" }) },
                fields: [
                  { type: "string", name: "slug", label: "Slug" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "image", name: "image", label: "Image" },
                  { type: "string", name: "gradient", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- FINAL CTA ----------
          {
            type: "object",
            name: "finalCTA",
            label: "Final CTA Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              { type: "string", name: "chips", label: "Chips", list: true },
              { type: "string", name: "whatsappMessage", label: "WhatsApp Message", ui: { component: "textarea" } },
              { type: "string", name: "whatsappCardMessage", label: "WhatsApp Card Message", ui: { component: "textarea" } }
            ]
          }
        ]
      },
      // ============================================================
      // SHAMS Free Zone Collection
      // ============================================================
      {
        name: "shams",
        label: "\u{1F3AC} SHAMS Free Zone",
        path: "src/content/freezones",
        match: { include: "shams-free-zone" },
        // ← YE
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: "image", name: "heroImage", label: "Hero Image" },
          { type: "string", name: "heroBadge", label: "Hero Badge" },
          { type: "string", name: "heroTitle", label: "Hero Title" },
          { type: "string", name: "heroTitleHighlight", label: "Hero Title Highlight" },
          { type: "string", name: "heroSubtitle", label: "Hero Subtitle", ui: { component: "textarea" } },
          { type: "string", name: "heroChips", label: "Hero Chips", list: true },
          // ---------- STATS ----------
          {
            type: "object",
            name: "stats",
            label: "Stats",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.label || "Stat" }) },
            fields: [
              { type: "string", name: "icon", label: "Icon" },
              { type: "string", name: "value", label: "Value" },
              { type: "string", name: "label", label: "Label" },
              { type: "string", name: "color", label: "Gradient Color" }
            ]
          },
          // ---------- WHY SHAMS ----------
          {
            type: "object",
            name: "whyShamsSection",
            label: "Why SHAMS Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Item" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" },
                  { type: "string", name: "size", label: "Size (small | large)" }
                ]
              }
            ]
          },
          // ---------- READY TO LAUNCH ----------
          {
            type: "object",
            name: "readyToLaunchSection",
            label: "Ready To Launch Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "image", name: "image", label: "Image" },
              { type: "string", name: "imageBadgeTitle", label: "Image Badge Title" },
              { type: "string", name: "imageBadgeText", label: "Image Badge Text" },
              { type: "string", name: "paragraphs", label: "Paragraphs", list: true, ui: { component: "textarea" } },
              { type: "string", name: "highlights", label: "Highlights", list: true }
            ]
          },
          // ---------- LICENSES ----------
          {
            type: "object",
            name: "licensesSection",
            label: "Licenses Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "License Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "License" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "code", label: "Code" },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- WORKSPACES ----------
          {
            type: "object",
            name: "workspacesSection",
            label: "Workspaces Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Workspace Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Workspace" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- HOW WE HELP ----------
          {
            type: "object",
            name: "howWeHelpSection",
            label: "How We Help Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "steps",
                label: "Steps",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Step" }) },
                fields: [
                  { type: "string", name: "step", label: "Step Number" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- ACTIVITIES ----------
          {
            type: "object",
            name: "activitiesSection",
            label: "Activities Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Activity Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.label || "Activity" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "label", label: "Label" }
                ]
              },
              { type: "string", name: "footerText", label: "Footer Text", ui: { component: "textarea" } }
            ]
          },
          // ---------- VISA SERVICES ----------
          {
            type: "object",
            name: "visaServicesSection",
            label: "Visa Services Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Visa Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Visa" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "stampColor", label: "Stamp Gradient" }
                ]
              }
            ]
          },
          // ---------- TAX ADVANTAGES ----------
          {
            type: "object",
            name: "taxAdvantagesSection",
            label: "Tax Advantages Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Tax Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Item" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          // ---------- FAQS ----------
          {
            type: "object",
            name: "faqsSection",
            label: "FAQs Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "sidebarCard",
                label: "Sidebar Card",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "text", label: "Text", ui: { component: "textarea" } },
                  { type: "string", name: "whatsappMessage", label: "WhatsApp Message", ui: { component: "textarea" } }
                ]
              },
              {
                type: "object",
                name: "items",
                label: "FAQ Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.q || "FAQ" }) },
                fields: [
                  { type: "string", name: "q", label: "Question" },
                  { type: "string", name: "a", label: "Answer", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          // ---------- RELATED SERVICES ----------
          {
            type: "object",
            name: "relatedServicesSection",
            label: "Related Services Section",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Service Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Service" }) },
                fields: [
                  { type: "string", name: "slug", label: "Slug" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "image", name: "image", label: "Image" },
                  { type: "string", name: "gradient", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- FINAL CTA ----------
          {
            type: "object",
            name: "finalCTA",
            label: "Final CTA Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              { type: "string", name: "chips", label: "Chips", list: true },
              { type: "string", name: "whatsappMessage", label: "WhatsApp Message", ui: { component: "textarea" } },
              { type: "string", name: "whatsappCardMessage", label: "WhatsApp Card Message", ui: { component: "textarea" } }
            ]
          }
        ]
      },
      // ============================================================
      // UAQ Free Trade Zone Collection
      // ============================================================
      {
        name: "uaq",
        label: "\u{1F3D9}\uFE0F UAQ Free Zone",
        path: "src/content/freezones",
        match: { include: "uaq-free-zone" },
        // ← YE
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: "image", name: "heroImage", label: "Hero Image" },
          { type: "string", name: "heroBadge", label: "Hero Badge" },
          { type: "string", name: "heroTitle", label: "Hero Title" },
          { type: "string", name: "heroTitleHighlight", label: "Hero Title Highlight" },
          { type: "string", name: "heroSubtitle", label: "Hero Subtitle", ui: { component: "textarea" } },
          { type: "string", name: "heroChips", label: "Hero Chips", list: true },
          // ---------- STATS ----------
          {
            type: "object",
            name: "stats",
            label: "Stats",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.label || "Stat" }) },
            fields: [
              { type: "string", name: "icon", label: "Icon" },
              { type: "string", name: "value", label: "Value" },
              { type: "string", name: "label", label: "Label" },
              { type: "string", name: "color", label: "Gradient Color" }
            ]
          },
          // ---------- INTRO ----------
          {
            type: "object",
            name: "introSection",
            label: "Intro Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "image", name: "image", label: "Image" },
              { type: "string", name: "imageBadgeTitle", label: "Image Badge Title" },
              { type: "string", name: "imageBadgeText", label: "Image Badge Text" },
              { type: "string", name: "paragraphs", label: "Paragraphs", list: true, ui: { component: "textarea" } },
              { type: "string", name: "highlights", label: "Highlights", list: true }
            ]
          },
          // ---------- WHY CHOOSE ----------
          {
            type: "object",
            name: "whyChooseSection",
            label: "Why Choose Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Item" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- FORMATION SERVICES ----------
          {
            type: "object",
            name: "formationServicesSection",
            label: "Formation Services Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Formation Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.label || "Item" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "label", label: "Label" }
                ]
              },
              { type: "string", name: "footerText", label: "Footer Text", ui: { component: "textarea" } }
            ]
          },
          // ---------- LICENSE TYPES ----------
          {
            type: "object",
            name: "licenseTypesSection",
            label: "License Types Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "License Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "License" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "code", label: "Code" },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- FACILITIES ----------
          {
            type: "object",
            name: "facilitiesSection",
            label: "Facilities Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Facility Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Facility" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "color", label: "Gradient Color" },
                  { type: "string", name: "size", label: "Size (small | large)" }
                ]
              }
            ]
          },
          // ---------- TAX BENEFITS ----------
          {
            type: "object",
            name: "taxBenefitsSection",
            label: "Tax Benefits Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Tax Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.label || "Item" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "detail", label: "Detail" }
                ]
              }
            ]
          },
          // ---------- VISA SERVICES ----------
          {
            type: "object",
            name: "visaServicesSection",
            label: "Visa Services Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Visa Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.label || "Visa" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "label", label: "Label" }
                ]
              }
            ]
          },
          // ---------- SUPPORT SERVICES ----------
          {
            type: "object",
            name: "supportServicesSection",
            label: "Support Services Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Support Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.label || "Item" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "label", label: "Label" }
                ]
              }
            ]
          },
          // ---------- GROWTH STATS ----------
          {
            type: "object",
            name: "growthStatsSection",
            label: "Growth Stats Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Stats Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.label || "Stat" }) },
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "value", label: "Value" },
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "color", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- FAQS ----------
          {
            type: "object",
            name: "faqsSection",
            label: "FAQs Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "sidebarCard",
                label: "Sidebar Card",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "text", label: "Text", ui: { component: "textarea" } },
                  { type: "string", name: "whatsappMessage", label: "WhatsApp Message", ui: { component: "textarea" } }
                ]
              },
              {
                type: "object",
                name: "items",
                label: "FAQ Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.q || "FAQ" }) },
                fields: [
                  { type: "string", name: "q", label: "Question" },
                  { type: "string", name: "a", label: "Answer", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          // ---------- RELATED SERVICES ----------
          {
            type: "object",
            name: "relatedServicesSection",
            label: "Related Services Section",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Service Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Service" }) },
                fields: [
                  { type: "string", name: "slug", label: "Slug" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "image", name: "image", label: "Image" },
                  { type: "string", name: "gradient", label: "Gradient Color" }
                ]
              }
            ]
          },
          // ---------- FINAL CTA ----------
          {
            type: "object",
            name: "finalCTA",
            label: "Final CTA Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              { type: "string", name: "chips", label: "Chips", list: true },
              { type: "string", name: "whatsappMessage", label: "WhatsApp Message", ui: { component: "textarea" } },
              { type: "string", name: "whatsappCardMessage", label: "WhatsApp Card Message", ui: { component: "textarea" } }
            ]
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
