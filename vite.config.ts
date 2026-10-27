import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import Sitemap from 'vite-plugin-sitemap' // ✅ Import karein

export default defineConfig({
  plugins: [
    react(),
    // ✅ Sitemap plugin add karein
    Sitemap({
      hostname: 'https://www.setupzonedubai.ae',
      dynamicRoutes: [
        '/',
        '/about',
        '/contact',
        '/blog',
        '/privacy-policy',
        '/calculator',
        // Services
        '/services/company-formation',
        '/services/mainland-company-formation',
        '/services/free-zone-company-setup',
        '/services/offshore-company-setup',
        '/services/company-registration',
        '/services/ecommerce-license',
        '/services/golden-visa-services',
        '/services/residence-visa',
        '/services/dependent-visa',
        '/services/local-corporate-sponsor',
        '/services/local-business-partner',
        '/services/corporate-tax-vat',
        '/services/bank-account',
        '/services/accounting',
        '/services/digital-marketing',
        '/services/web-development',
        '/services/seo',
        '/services/compliance',
        '/services/pro-services',
        '/services/golden-visa',
        // Free Zones
        '/free-zones/ifza',
        '/free-zones/dmcc',
        '/free-zones/meydan',
        '/free-zones/dubai-south',
        '/free-zones/dubai-silicon-oasis',
        '/free-zones/dubai-airport-free-zone',
        '/free-zones/adgm',
        '/free-zones/jafza',
        '/free-zones/shams',
        '/free-zones/saif',
        '/free-zones/dubai-healthcare-city',
        '/free-zones/dubai-design-district',
        '/free-zones/dubai-internet-city',
        '/free-zones/dwtc',
        '/free-zones/fujairah-creative-city',
        '/free-zones/hamriyah',
        '/free-zones/ajman-free-zone',
        '/free-zones/dubai-media-city',
        '/free-zones/dubai-knowledge-park',
        '/free-zones/dubai-commercity',
        '/free-zones/kizad',
        '/free-zones/duqe',
        '/free-zones/uaq-free-zone',
        '/free-zones/rakez',
        '/free-zones/locations',
        '/free-zones/business-activities',
        // Mainland
        '/mainland/mainland-activities',
        '/mainland/hiring-employee-management',
        '/mainland/office-space-solutions',
        '/mainland/mainland-visa',
        '/mainland/launch-operate-expand',
        // Packages
        '/packages/ifza-setup-package',
        '/packages/spc-setup-package',
        '/packages/difc-company-setup',
        '/packages/creative-city-setup',
        '/packages/shams-setup-package',
        '/packages/srtip-setup-package',
        '/packages/meydan-setup-package',
        '/packages/rakez-setup-package',
        '/packages/jafza-setup-package',
        // Service Areas
        '/service-areas/business-bay',
        '/service-areas/dubai-marina',
        '/service-areas/jvc',
        '/service-areas/al-barsha',
        '/service-areas/silicon-oasis',
        '/service-areas/trade-center',
        '/service-areas/difc',
        '/service-areas/downtown-dubai',
      ],
      generateRobotsTxt: true, // robots.txt bhi ban jayegi
    }),
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  server: {
    watch: {
      usePolling: true,
    },
    proxy: {
      '/api': {
        target: 'http://localhost:4002',
        changeOrigin: true,
      },
    },
  },

  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-dom/client',
      'react-router-dom',
      'react-icons',
      'tinacms',
      '@tinacms/cli',
    ],
    exclude: ['@tinacms/app'],
    esbuildOptions: {
      target: 'es2020',
    },
  },

  cacheDir: 'node_modules/.vite-cache',
})