import path from 'node:path'
import { defineConfig, splitVendorChunkPlugin } from 'vite'

const isDev = process.env.NODE_ENV === 'development'

export default defineConfig({
  build: {},
  plugins: [splitVendorChunkPlugin()],
  define: {
    __DEV__: isDev,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
