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
// click on individuals tab
await page.locator("(//span[text()='Individuals'])[1]").click()
// search the individual name
let individualName = page.locator("//input[@name='Individual-search-input']")
// type the name in the search box
await individualName.fill("Sheeba")
// after typing the name press enter
await individualName.press('Enter')
// click on downarrow icon
await page.locator("//span[text()='Show Actions']").click()
// select edit
await page.locator("//a[@title='Edit']").click()
// click salutation
await page.locator("(//span[text()='--None--'])[1]").click()
// select salutation as Mr
await page.locator("//a[@title='Mr.']").click()
// enter the firstname
await page.locator('//input[@placeholder="First Name"]').fill("Jebin")
// click save
await page.locator("//span[text()='Save']").click()
// verify individuals name edited
let editIndividualName = await page.locator("//span[@class='toastMessage slds-text-heading--small forceActionsText']").textContent()
console.log(editIndividualName)
})