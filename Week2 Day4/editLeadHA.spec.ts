// import chromium and test
import {test,chromium} from "@playwright/test"

test("Dropdown test", async({page}) => {
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
    // click create lead button
    await page.locator('.smallSubmit').click()
    // click edit
    await page.locator("//a[text()='Edit']").click()
    // change the company name
    await page.locator('//input[@id="updateLeadForm_companyName"]').fill('Infosys Ltd')
    // click update 
    await page.locator('//input[@value="Update"]').click()
})