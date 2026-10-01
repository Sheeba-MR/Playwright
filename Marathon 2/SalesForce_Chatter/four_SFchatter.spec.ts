import { test, expect } from "@playwright/test"
import dotenv from 'dotenv'

// path of the env file
dotenv.config({path:`Data/chatter.env`})

// read the value and store in the variable
let Service=process.env.c_search as string
let Firstname=process.env.c_firstname as string
let Lastname=process.env.c_lastname as string
let Accountname=process.env.c_accountname as string
let Accountnumber=process.env.c_accountnumber as string
let Subject=process.env.c_subject as string
let Description=process.env.c_description as string
let Update=process.env.c_update as string


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
// Type ‘Service’ in the search box 
await page.locator("//input[@placeholder='Search apps or items...']").fill(Service)
// wait for 8 seconds
await page.waitForTimeout(8000)
// click on the Service link
await page.getByRole('link', { name: 'Service' }).click()
// Navigate to the Cases tab from the Service dashboard
await page.getByRole('link', { name: 'Cases' }).click()
// Click on the New button to create a new case
await page.getByRole('button', { name: 'New' }).click()
// Click on the Search Contacts input field in Contact Name
await page.getByRole('combobox', { name: 'Contact Name' }).click()
// Click on the New Contact link
await page.getByRole('option', { name: 'Add New Contact' }).click()
await page.waitForTimeout(3000)
// Fill in all the mandatory fields (Salutation, First Name, Last Name)
await page.getByRole('option', { name: 'Salutation' }).click()
await page.locator("//span[text()='Mrs.']").click()
await page.getByRole('textbox', { name: 'First Name' }).fill(Firstname)
await page.getByRole('textbox', { name: 'Last Name' }).fill(Lastname)
// Click on the Save button
await page.getByRole('button', { name: 'Save' }).click()
// assertion to verify that the contact is created
let contactMessage = await page.locator("//span[@class='toastMessage slds-text-heading--small forceActionsText']").textContent()
expect(contactMessage).toContain("was created.")
// in new Click Search Accounts input field in Account Name
page.waitForTimeout(3000)
await page.getByRole('combobox', { name: 'Account Name' }).click()
// click on the New Account link
await page.locator("//span[text()='New Account']").click()
// Fill in all the mandatory fields (Account Name, Account Number)
await page.getByRole('textbox', { name: 'Account  Name' }).fill(Accountname)
await page.getByRole('textbox', { name: 'Account  Number' }).fill(Accountnumber)
// Select the Rating dropdown and choose the option ‘Hot’
await page.getByRole('combobox', { name: 'Rating' }).click()
await page.locator("//span[text()='Hot']").click()
// Click on the Save button
await page.getByRole('button', { name: 'Save' }).click()
// verify that the account is created
let accountMessage = await page.locator("//span[@class='toastMessage slds-text-heading--small forceActionsText']").textContent()
expect(accountMessage).toContain("was created.") 
// Select the Status dropdown icon and choose the value as New   
page.waitForTimeout(3000)
await page.getByRole('combobox', { name: 'Status' }).click()
await page.locator("//span[text()='New']").click()
// Select the Priority dropdown icon and choose the value as ‘High
await page.getByRole('combobox', { name: 'Priority' }).click()
await page.locator("//span[text()='High']").click()
// Select the Case Origin dropdown icon and choose the value as ‘Email
await page.getByRole('combobox', { name: 'Case Origin' }).click()
await page.locator("//span[text()='Email']").click()
// Fill in the Subject input field as ‘Product Return Request’ 
await page.getByRole('textbox', { name: 'Subject' }).fill(Subject)
// Description input field as ‘Requesting a return for a defective product’
await page.getByRole('textbox', { name: 'Description' }).fill(Description)
// Click on the Save button
await page.getByRole('button', { name: 'Save' }).click()
// verify that the case is created
let caseMessage = await page.locator("//span[@class='toastMessage slds-text-heading--small forceActionsText']").textContent()
expect(caseMessage).toContain("was created.")
// click edit the Status under Details category
await page.getByRole('button', { name: 'Edit Status' }).click()
// choose the ‘Escalated’ option from the dropdown
await page.getByRole('combobox', { name: 'Status' }).click()
await page.locator("//span[text()='Escalated']").click()
// Click on the Save button
await page.getByRole('button', { name: 'Save' }).click()
// click on share an update input field and enter a valid data
let update = page.locator("//span[text()='Share an update...']")
update.click()
update.fill(Update)
// click on the Share button
await page.getByRole('button', { name: 'Share' }).click()
// Click on the dropdown icon and choose the Like on Chatter option
await page.getByRole('button', { name: 'Actions for this Feed Item' }).click()
await page.waitForTimeout(3000)
await page.locator("//span[text()='Like on Chatter']").click()
// Navigate to the Chatter tab and verify the post liked by the user
let likeMessage = await page.locator("//span[@class='toastMessage slds-text-heading--small forceActionsText']").textContent()
expect(likeMessage).toContain("was liked.")
})