// vite.config.js
import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '.', // project root (default)
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'index.html'),
        security: resolve(__dirname, 'security.html'),
        compliance: resolve(__dirname, 'compliance.html'),
        architecture: resolve(__dirname, 'architecture.html'),
        developers: resolve(__dirname, 'developers.html'),
        shamwaripay: resolve(__dirname, 'shamwaripay.html'),
        digitalassets: resolve(__dirname, 'digitalassets.html'),
        digitalcertificates: resolve(__dirname, 'digitalcertificates.html'),
        currencies: resolve(__dirname, 'currencies.html'),
        subscriptions: resolve(__dirname, 'subscriptions.html'),
        solutions: resolve(__dirname, 'solutions.html'),
        accounts: resolve(__dirname, 'accounts.html'),
        personal: resolve(__dirname, 'personal.html'),
        banks: resolve(__dirname, 'banks.html'),
        government: resolve(__dirname, 'government.html'),
        fspmfi: resolve(__dirname, 'fspmfi.html'),
        merchants: resolve(__dirname, 'merchants.html'),
        roadmap: resolve(__dirname, 'roadmap.html'),
        pricing: resolve(__dirname, 'pricing.html'),
        privacy: resolve(__dirname, 'privacy.html'),
        cookies: resolve(__dirname, 'cookies.html'),
        termsandconditions: resolve(__dirname, 'termsandconditions.html'),
      },
    },
  },
})
