import { test, expect } from "@playwright/test"
import dotenv from 'dotenv'

// path of the env file
dotenv.config({path:`Data/marketing.env`})

// read the value and store in the variable
let Marketing=process.env.m_search as string
let Firstname=process.env.m_firstname as string
let Lastname=process.env.m_lastname as string   
let Company=process.env.m_company as string
let Opportunity=process.env.m_opportunity as string

test.use(
        {
            storageState:'Data/sf_login.json' 
        }
    )

test("Marathon 3", async ({page}) => {
    
// launch the browser
await page.goto("https://orgfarm-e0a099853d-dev-ed.develop.lightning.force.com/lightning/n/devedapp__Welcome")
// click on toggle menu button
await page.locator("//div[@class='slds-icon-waffle']").click()
// click view all
await page.locator("//button[text()='View All']").click()
await page.waitForTimeout(3000)
// enter marketing
await page.locator("//input[@placeholder='Search apps or items...']").fill(Marketing)
// wait for 8 seconds
await page.waitForTimeout(8000)
// click on marketing
await page.locator("//p[@class='slds-truncate']").click()
// click on leads tab
await page.locator("//span[text()='Leads']").click()
// Click on the New button to create a lead
await page.getByRole('button', {name:'New'}).click()
// click Salutation
await page.getByRole('button', {name:'Salutation'}).click()
// select salutation as Mrs
await page.locator("//span[@title='Mrs.']").click()
// First Name
await page.getByRole('textbox', {name:'First Name'}).fill(Firstname)
// Last Name
await page.getByRole('textbox', {name:'Last Name'}).fill(Lastname)
// Company
await page.getByRole('textbox', {name:'Company'}).fill(Company)
// Click on the Save button
await page.getByRole('button', {name:'Save'}).click()
// confirmation message should also be displayed and verified
let message = await page.locator("//span[@class='toastMessage slds-text-heading--small forceActionsText']").textContent()
console.log(message)
expect(message).toContain("was created.")
// click on the dropdown
await page.locator("//span[text()='Show more actions']").click()
// click on convert
await page.locator("//span[text()='Convert']").click()
// Click on the Opportunity Name input field, clear and enter a new opportunity name
let opportunityName = page.getByRole('button', {name:'Infosys-'})
await opportunityName.click()
await opportunityName.fill(Opportunity)
// click conver button
await page.getByRole('button', {name:'Convert'}).click()
// Click on the Go to Leads button
await page.getByRole('button', {name:'Go to Leads'}).click()
// Search the verified lead name in the Search box
await page.getByRole('button', {name:'Search'}).fill(Firstname)
// verify the text ‘No items to display
expect(page.getByText("We searched the objects you use most and didn't find any matches for ").isVisible())
// Navigate to the Opportunities tab
await page.locator("//span[text()='Opportunities']").first().click()
// search for the opportunity linked with the converted lead
let searchOpportunity = page.getByRole('searchbox', {name:'Search this list...'})
await searchOpportunity.fill(Firstname)
await searchOpportunity.press('Enter')
// click on the created opportunity name
page.locator("//div[@class='slds-truncate'].nth(1)").click()
// verify the opportunity name
let verifyOpportunity= await page.locator("//h1[text()='Opportunities']").textContent()
console.log(verifyOpportunity)
expect(verifyOpportunity).toContain("Opportunities")
})