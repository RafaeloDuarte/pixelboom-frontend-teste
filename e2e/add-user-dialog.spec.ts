// tests/e2e/add-user-dialog.spec.ts
import { test, expect } from "@playwright/test"

test("add user dialog opens and shows fields", async ({ page }) => {
  await page.goto("/usuarios")

  await page.getByRole("button", { name: "+ Adicionar" }).click()

  await expect(page.getByText("Adicionar usuário")).toBeVisible()
  await expect(page.getByLabel("Nome completo")).toBeVisible()
  await expect(page.getByLabel("Telefone")).toBeVisible()
  await expect(page.getByLabel("WhatsApp")).toBeVisible()
})
