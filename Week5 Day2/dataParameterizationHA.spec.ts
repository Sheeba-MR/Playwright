import {test} from "@playwright/test"

import dotenv from 'dotenv'

let filename=process.env.envfile || "createLeadQa" || 'createLeadProd' 
dotenv.config({path:`Data/${filename}.env`})

// read the value and store in the variable
let URL=process.env.cl_url as string
let Username=process.env.cl_username as string
let Password=process.env.cl_password as string
let CompanyName=process.env.cl_companyname as string
let FirstName=process.env.cl_firstname as string
let LastName=process.env.cl_lastname as string
let Source=process.env.cl_source as string
let Marketing=process.env.cl_marketing as string
let Industry=Number(process.env.cl_industry )
let Currency=process.env.cl_currency as string
let Country=process.env.cl_country as string
let State=process.env.cl_state as string

test('Read data from env file', async ({page}) => {

// load the url    
await page.goto(URL)
// enter username
await page.locator('#username').fill(Username)
// enter password
await page.locator('#password').fill(Password)
// click login
await page.locator('.decorativeSubmit').click()
// click crm/sfa
await page.getByRole('link',{name:'CRM/SFA'}).click()
// click leads
await page.locator("//a[text()='Leads']").click()
// click create leads
await page.locator("//a[text()='Create Lead']").click()
// enter company name
await page.locator('#createLeadForm_companyName').fill(CompanyName)
// enter first name
await page.locator('#createLeadForm_firstName').fill(FirstName)
// enter last name
await page.locator("[id='createLeadForm_lastName']").fill(LastName)
// Select Direct Mail from the Source dropdown using label
await page.locator('#createLeadForm_dataSourceId').selectOption({label:Source})
// Select Demo Marketing Campaign from the Marketing Campaign dropdown using value
await page.locator('#createLeadForm_marketingCampaignId').selectOption({value:Marketing})
// Get the count and print all the values in the Marketing Campaign dropdown
let marketingdd = await page.locator('#createLeadForm_marketingCampaignId').allTextContents()
    for (let mdd of marketingdd) {
       console.log(mdd)
    }
console.log("No of options in the marketing dropdown is: ", marketingdd.length)
// Select General Services from the Industry dropdown using index
await page.locator('#createLeadForm_industryEnumId').selectOption({index:Industry})
// Select INR from the Preferred Currency dropdown
await page.locator('#createLeadForm_currencyUomId').selectOption({value:Currency})
// Select India from the Country dropdown
await page.locator('#createLeadForm_generalCountryGeoId').selectOption({label:Country})
// Select any state from the State dropdown
await page.locator('#createLeadForm_generalStateProvinceGeoId').selectOption({label:State})
// Get the count of all states and print the values in the console  
let stateDropdown = await page.locator('#createLeadForm_generalStateProvinceGeoId').allTextContents()
    for (let sdd of stateDropdown) {
       console.log(sdd)
    }
console.log("No of options in the marketing dropdown is: ", stateDropdown.length)
// Click Create Lead
await page.locator('.smallSubmit').click()

})