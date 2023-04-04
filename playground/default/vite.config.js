import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '~bootstrap': fileURLToPath(new URL('node_modules/bootstrap', import.meta.url))
    }
  },
  experimental: {
    renderBuiltUrl(filename, { hostId, hostType, type }) {
      return './' + filename
    }
  },
  server: {
    hmr: {
      usePolling: true
    }
  }
})
