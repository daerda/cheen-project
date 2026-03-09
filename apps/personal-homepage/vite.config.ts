import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig(({ mode }) => ({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  base: mode === 'production' ? '/cheen-project/' : './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true
  }
}))
