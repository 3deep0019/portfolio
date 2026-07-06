import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: './',
  plugins: [vue(), tailwindcss()],
  build: {
    rolldownOptions: {
      onLog(level, log, defaultHandler) {
        if (log.code === 'INVALID_ANNOTATION') return
        defaultHandler(level, log)
      },
    },
  },
})
