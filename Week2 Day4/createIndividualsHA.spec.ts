import { chromium, test } from "@playwright/test"

test("To launch a browser", async ({page}) => {

// launch the browser
await page.goto("https://login.salesforce.com")
// enter username
await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com')
// click login
await page.locator("[id='Login']").click()
// enter password
await page.locator('#password').fill('TestLeaf@2025')
// click login
await page.locator("[id='Login']").click()
// click on toggle menu button
await page.locator("//div[@class='slds-icon-waffle']").click()
// click view all
await page.locator("//button[text()='View All']").click()
// click on individuals
await page.locator("//p[text()='Individuals']").click()
// click on dropdown icon in the Individuals tab
await page.locator("//span[text()='Individuals List']").click()
// click on new individual
await page.locator("//span[text()='New Individual']").click()
// enter last name
await page.locator('//input[@placeholder="Last Name"]').fill('Sheeba')
// Click save
await page.locator("//span[text()='Save']").click()
// verify individuals name created
let individualName = await page.locator("//span[@class='toastMessage slds-text-heading--small forceActionsText']").textContent()
console.log(individualName)
})
