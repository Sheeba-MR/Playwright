import { test, expect } from "@playwright/test";

test('Assertions', async ({page}) => {
    // load the page
    await page.goto('https://leafground.com/input.xhtml')
    // validate a disabled textbox
    let disable = page.locator('//input[@placeholder="Disabled"]')
    await expect(disable).toBeDisabled()
    // validate an enabled textbox
    let name = page.locator('//input[@placeholder="Babu Manickam"]')
    await expect(name).toBeEnabled()
    await expect(name).toBeEditable()
    await name.fill("Sheeba")
    // soft assertion practice
    await expect.soft(name).toBeDisabled()
    console.log("Soft assertion")
    // use fill to check how the soft assertion handles
    await name.fill("Sheeba Jebin")
})

