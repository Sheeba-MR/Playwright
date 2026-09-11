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
// click sales
await page.locator("//p[text()='Sales']").click()
// click on leads tab
await page.locator("(//span[text()='Leads'])[1]").click()
// click on new
await page.locator('//a[@title="New"]').click()
// Select Salutation dropdown
await page.locator('//button[@name="salutation"]').click()
// select the salutaion option
await page.locator("(//span[text()='Mrs.'])[3]").click()
// Enter the Last Name
await page.locator('//input[@name="lastName"]').fill("Sheeba M R")
//Enter the Company Name
await page.locator('//input[@name="Company"]').fill("Infosys")
// click save
await page.locator('//button[@name="SaveEdit"]').click()
// Verify Leads name created
let leadName = await page.locator("//span[@class='toastMessage slds-text-heading--small forceActionsText']").textContent()
console.log(leadName)
})