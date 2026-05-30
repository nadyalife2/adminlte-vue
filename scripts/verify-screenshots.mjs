// Visual verification: capture Vue demo pages and the original AdminLTE 4 dist
// pages side-by-side (light theme, forced before any script runs).
//
// Usage:
//   node scripts/verify-screenshots.mjs '[{"name":"index","vue":"/","orig":"/index.html"}]'
//
// Vue demo must run on :3000, original dist served on :8899.
import { chromium } from 'playwright'

const VUE = process.env.VUE_BASE || 'http://localhost:3000'
const ORIG = process.env.ORIG_BASE || 'http://localhost:8899'
const OUT = process.env.OUT_DIR || '/tmp/lte-verify'

const targets = JSON.parse(process.argv[2] || '[]')
if (!targets.length) {
  console.error('No targets given.')
  process.exit(1)
}

const browser = await chromium.launch()
const ctx = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 1,
  colorScheme: 'light',
})
// Force light theme deterministically before page scripts run (both storage keys).
await ctx.addInitScript(() => {
  try {
    localStorage.setItem('theme', 'light') // original AdminLTE (Bootstrap pattern)
    localStorage.setItem('lte-theme', 'light') // adminlte-vue useColorMode
  } catch {}
})
const page = await ctx.newPage()

async function shoot(url, file) {
  await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 })
  await page.evaluate(() => document.documentElement.setAttribute('data-bs-theme', 'light'))
  await page.waitForTimeout(2500) // let ApexCharts / async widgets settle
  await page.screenshot({ path: file, fullPage: true })
}

for (const t of targets) {
  await shoot(VUE + t.vue, `${OUT}/${t.name}-vue.png`)
  await shoot(ORIG + t.orig, `${OUT}/${t.name}-orig.png`)
  console.log('captured', t.name)
}

await browser.close()
