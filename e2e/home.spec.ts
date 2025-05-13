// e2e/home.spec.ts
import { test, expect } from '@playwright/test'

test('home page has text', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByText(/Click me/i)).toBeVisible()
})
