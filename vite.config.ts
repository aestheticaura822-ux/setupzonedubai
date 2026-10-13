// File: vite.config.ts

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  server: {
    watch: {
      usePolling: true,
    },
    // ✅ NAYA — Translation API proxy (backend on port 4002)
    proxy: {
      '/api': {
        target: 'http://localhost:4002',
        changeOrigin: true,
      },
    },
  },

  optimizeDeps: {
    // ✅ Pehle se optimize ho rahe packages
    include: [
      'react',
      'react-dom',
      'react-dom/client',
      'react-router-dom',
      'react-icons',
      // ✅ TinaCMS ko bhi add karo
      'tinacms',
      '@tinacms/cli',
    ],
    // ✅ TinaCMS ke heavy app ko exclude karo
    // Isse Windows pe file-lock error nahi aayega
    exclude: ['@tinacms/app'],
    // ✅ Windows pe parallel processing slow karo
    esbuildOptions: {
      target: 'es2020',
    },
  },

  // ✅ Vite cache ko custom path pe le jao (Windows friendly)
  cacheDir: 'node_modules/.vite-cache',
})