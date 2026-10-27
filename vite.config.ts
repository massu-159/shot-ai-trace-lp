import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/shot-ai-trace-lp/',
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        terms: resolve(__dirname, 'terms.html'),
        privacy: resolve(__dirname, 'privacy.html'),
        tokushoho: resolve(__dirname, 'tokushoho.html'),
        // 英語版（特定商取引法に基づく表記は日本語版のみ）
        en: resolve(__dirname, 'en/index.html'),
        enTerms: resolve(__dirname, 'en/terms.html'),
        enPrivacy: resolve(__dirname, 'en/privacy.html'),
      },
    },
  },
})
