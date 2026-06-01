import { test, expect, type Page } from '@playwright/test'

async function login(page: Page, email = 'admin@example.com') {
  await page.goto('/login')
  await page.fill('input[type=email]', email)
  await page.fill('input[type=password]', 'password')
  await page.click('button[type=submit]')
  await page.waitForURL('/')
}

test('redirects unauthenticated users to /login', async ({ page }) => {
  await page.goto('/users')
  await expect(page).toHaveURL(/\/login\?redirect=/)
})

test('logs in and lands on the dashboard', async ({ page }) => {
  await login(page)
  await expect(page.locator('h3.mb-0').first()).toHaveText('Dashboard')
})

test('RBAC: admin can open /admin and sees the Users menu', async ({ page }) => {
  await login(page, 'admin@example.com')
  await expect(page.locator('.app-sidebar')).toContainText('Administration')
  await page.goto('/admin')
  await expect(page.locator('h3.mb-0').first()).toHaveText('Administration')
})

test('RBAC: editor is blocked from /admin and the item is hidden', async ({ page }) => {
  await login(page, 'editor@example.com')
  await expect(page.locator('.app-sidebar')).not.toContainText('Administration')
  await page.goto('/admin')
  await expect(page.locator('body')).toContainText('403')
})

test('Users: create flows through to the detail page', async ({ page }) => {
  await login(page)
  await page.goto('/users/new')
  await page.fill('#f-name', 'E2E Person')
  await page.fill('#f-email', `e2e.${Date.now()}@example.com`)
  await page.selectOption('#f-role', 'Editor')
  await page.click('button[type=submit]')
  await page.waitForURL(/\/users\/\d+$/)
  await expect(page.locator('h3.mb-0').first()).toHaveText('E2E Person')
})

test('Users: server-side search filters the list', async ({ page }) => {
  await login(page)
  await page.goto('/users')
  await expect(page.locator('tbody tr')).toHaveCount(10)
  await page.fill('input[type=search]', 'sarah')
  await expect(page.locator('tbody tr td:nth-child(2)').first()).toContainText(/sarah/i)
})

test('i18n: switching to Spanish translates the menu', async ({ page }) => {
  await login(page)
  await expect(page.locator('.app-sidebar')).toContainText('Dashboard')
  await page.locator('.nav-item.dropdown a[title="Language"]').click()
  await page.getByRole('link', { name: 'Español' }).click()
  await expect(page.locator('.app-sidebar')).toContainText('Panel')
})
