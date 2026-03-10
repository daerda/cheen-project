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
  server: {
    host: true,  // 允许局域网访问
    port: 5173   // 可选：指定端口
  },
  base: mode === 'production' ? '/cheen-project/' : './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true
  }
}))
