import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  server: {
    port: 3000
  },
  resolve: {
    alias: [
      {
        find: '~',
        replacement: resolve(__dirname, '../src')
      }
    ]
  }
})
