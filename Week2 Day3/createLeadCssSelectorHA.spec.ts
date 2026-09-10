// import chromium and test
import { chromium, test } from "@playwright/test"

test("To launch a browser", async ({page}) => {
    // launch the browser
    await page.goto("http://leaftaps.com/opentaps/control/main")
    // enter username
    await page.locator("#username").fill('democsr2')
    // enter password
    await page.locator("[id='password']").fill("crmsfa")
    // click submit
    await page.locator('.decorativeSubmit').click()
    // click CRM/SFA
    await page.locator('text=CRM/SFA').click()
    // click leads
    await page.locator("[href = '/crmsfa/control/leadsMain']").click()
    // click create lead
    await page.locator("[href = '/crmsfa/control/createLeadForm']").click()
    // enter company name
    await page.locator('#createLeadForm_companyName').fill('Infosys')
    // enter first name
    await page.locator('#createLeadForm_firstName').fill('Sheeba')
    // enter last name
    await page.locator("[id='createLeadForm_lastName']").fill('M R')
    // enter salutation
    await page.locator("[id='createLeadForm_personalTitle']").fill('Mrs')
    // enter title
    await page.locator('#createLeadForm_generalProfTitle').fill('Tester')
    // enter annual revenue
    await page.locator("[id='createLeadForm_annualRevenue']").fill('0')
    // enter department
    await page.locator("[name='departmentName']").fill('QA')
    // locate the Source dropdown
    await page.locator('#createLeadForm_dataSourceId').click()
    // Iterate through all options in the Source dropdown and print in console
    let dropdown = await page.locator('#createLeadForm_dataSourceId option').allTextContents()
    for (let dd of dropdown) {
       console.log(dd)
    }
    // enter the phone number
    await page.locator('#createLeadForm_primaryPhoneNumber').fill('8903126287')
    // click create lead button
    await page.locator('.smallSubmit').click()

})