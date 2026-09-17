import {test,expect} from "@playwright/test"

test("Learn playwright locators", async ({page}) => {

    // load the url
    await page.goto("https://leaftaps.com/opentaps/control/main")
    // 1) getByRole() - enter the username
    await page.getByRole('textbox', {name: 'Username'}).fill('Demosalesmanager')
    // 2) getByLabel() - enter password
    await page.getByLabel('Password').fill('crmsfa')
    // click submit
    await page.getByRole('button').click()
    // 3) getByText() - click crm/sfa
    await page.getByText('CRM/SFA').click()
    // Click Leads - getByText() with exact true condition
    await page.getByText('Leads', {exact: true}).click()
    // Click Create Lead
    await page.getByRole('link', {name:"Create Lead"}).click()
    // Fill the Company Name
    await page.locator('#createLeadForm_companyName').fill('Infosys')
    // Fill the First Name
    await page.locator('#createLeadForm_firstName').fill('Sheeba')
    // Fill the Last Name
    await page.locator('#createLeadForm_lastName').fill('Jebin')
    // Fill the Salutation
    await page.locator('//input[@name="personalTitle"]').fill('Mrs')
    // Fill the Title
    await page.locator('//input[contains(@name,"ProfTitle")]').fill('Senior QA')
    // Fill the Annual Revenue
    await page.locator('#createLeadForm_annualRevenue').fill('1200000')
    // Fill the Department
    await page.locator('//input[@name="departmentName"]').fill('Testing')
    // Fill the Phone Number
    await page.locator('#createLeadForm_primaryPhoneNumber').fill('8903126287')
    // Click Create Lead button
    await page.locator('.smallSubmit').click()
})