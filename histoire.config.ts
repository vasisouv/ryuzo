import { defineConfig } from 'histoire'
import { HstVue } from '@histoire/plugin-vue'

export default defineConfig({
  plugins: [
    HstVue(),
  ],
  setupFile: 'histoire.setup.ts',
  vite: {
    server: {
      port: 3334,
    },
  },
})
