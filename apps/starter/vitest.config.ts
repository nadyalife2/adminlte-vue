import { defineConfig } from 'vitest/config'

// The server utils are framework-free pure functions, so a plain node env is
// enough — no Nuxt runtime needed.
export default defineConfig({
  test: {
    environment: 'node',
    include: ['test/**/*.test.ts'],
  },
})
