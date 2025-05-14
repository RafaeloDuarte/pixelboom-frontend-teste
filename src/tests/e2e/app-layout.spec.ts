import { test, expect } from "@playwright/test"

test("layout renders with sidebar and header", async ({ page }) => {
  await page.goto("/usuarios")

  await expect(page.getByRole("navigation")).toBeVisible()
  await expect(page.getByRole("banner")).toBeVisible()
})