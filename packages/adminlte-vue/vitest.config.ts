import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

// Test-only config, intentionally separate from vite.config.ts (which is set up
// for library mode: dts emit, externals, lib entries). Here we just need the
// Vue SFC compiler and a DOM so composables that touch document/localStorage run.
export default defineConfig({
  plugins: [vue()],
  test: {
    environment: 'jsdom',
    environmentOptions: { jsdom: { url: 'http://localhost/' } },
    globals: true,
    setupFiles: ['./vitest.setup.ts'],
    include: ['src/**/*.{test,spec}.ts'],
  },
})
