// to skip authentication
import {test} from "@playwright/test"

test('auth file to skip the login', async ({page}) => {
// launch the browser
await page.goto('https://login.salesforce.com/')
// username
await page.locator('#username').fill('sheebajebin23.f4fb5806db5d@agentforce.com')
// click
await page.locator('#Login').click()
// password
await page.locator('#password').fill('$H33b@23')
// login
await page.locator('#Login').click()
// waiting for otp
await page.waitForTimeout(15000)
// after login capture credetial and create data folder and json file automatically
await page.context().storageState({path:'Data/sf_login.json'})
    
})