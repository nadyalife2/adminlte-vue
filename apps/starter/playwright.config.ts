import { defineConfig, devices } from '@playwright/test'

// E2E against the production build. Run `pnpm --filter adminlte-starter build`
// first, then `pnpm --filter adminlte-starter test:e2e` (the webServer boots the
// Nitro output and is reused if one is already running).
const PORT = Number(process.env.E2E_PORT) || 3030

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  use: {
    baseURL: `http://localhost:${PORT}`,
    trace: 'on-first-retry',
  },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
  webServer: {
    command: `node .output/server/index.mjs`,
    env: { PORT: String(PORT) },
    url: `http://localhost:${PORT}/login`,
    reuseExistingServer: !process.env.CI,
    timeout: 60_000,
  },
})
