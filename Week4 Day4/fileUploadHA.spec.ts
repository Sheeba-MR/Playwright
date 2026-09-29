import { chromium, test, expect } from "@playwright/test"

test("File upload", async ({page, context}) => {

// launch the browser
await page.goto("https://login.salesforce.com")
// enter username
await page.locator('#username').fill('sheebajebin23.f4fb5806db5d@agentforce.com')
// click login
await page.locator("[id='Login']").click()
// enter password
await page.locator('#password').fill('$H33b@23')
// click login
await page.locator("[id='Login']").click()
// click on App Launcher icon
await page.locator("//div[@class='slds-icon-waffle']").click()
// click view all
await page.locator("//button[text()='View All']").click()
// Enter Accounts in App Launcher search box
await page.getByRole('combobox',{name:"Search apps or items..."}).fill('accounts')
// Click Accounts
await page.waitForLoadState('domcontentloaded')
await page.locator("//a[@class='al-tab-item']").click()
// click new
await page.getByRole('button',{name:"New"}).click()
// Enter Account Name
await page.getByRole('textbox',{name:"Account Name"}).fill('Sheeba Jebin')
// Select the Rating dropdown
await page.getByText('Rating',{exact:true}).click()
// Select Warm from the Rating dropdown
await page.locator("(//span[text()='Warm'])[1]").click()
// Select Prospect from the Type dropdown
await page.getByRole('combobox',{name:'Type'}).click()
await page.getByText('Prospect', {exact:true}).click()
// Select Banking from the Industry dropdown
await page.getByRole('combobox',{name:'Industry'}).click()
await page.getByText('Banking', {exact:true}).click()
// Select Public from the Ownership dropdown
await page.getByRole('combobox',{name:'Ownership'}).click()
await page.getByText('Public', {exact:true}).click()
// Click Save
await page.locator("//button[text()='Save']").click()
// Assert the Account created
let message = await page.locator("//span[@class='toastMessage slds-text-heading--small forceActionsText']").innerText()
console.log(message)
expect(message).toContain('created')
// Upload files
// step 1: create the event listener
let fileupload=page.waitForEvent('filechooser')
// step 2: trigger the click action
await page.getByRole('button',{name:'Upload Files'}).click()
// step 3: resolve the promise of event listener
const upload=await fileupload
// step 4: upload the file - using relative path
await upload.setFiles('Data/download.jpeg')
await page.waitForTimeout(5000)
// Click Done and assert the uploaded file
await page.locator("//span[text()='Done']").click()
await expect(page.getByText(/file was added to the Account\./)).toBeVisible()

})