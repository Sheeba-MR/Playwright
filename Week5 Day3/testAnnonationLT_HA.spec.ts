import {test,expect} from "@playwright/test"

import dotenv from 'dotenv'

dotenv.config({path:`Data/createLeadQa.env`})

// read the value and store in the variable
let URL=process.env.cl_url as string
let Username=process.env.cl_username as string
let Password=process.env.cl_password as string

test('Test annotation for LeafTaps', async ({page}) => {
    // load the url    
    await page.goto(URL)
    // enter username
    await page.locator('#username').fill(Username)
    // enter password
    await page.locator('#password').fill(Password)
    // click login
    await page.locator('.decorativeSubmit').click()
})

// test.fail() - marks the test as expected to fail
test.fail('Test Invalid login', async () => {
    throw new Error('Invalid login')
})

// test.skip() - marks the test as skipped
test.fixme('Test Incomplete', async () => {
    console.log('Fixme - incomplete test')
})

// test.skip() - marks the test as skipped
test.skip('Optional', async () => {
    console.log('Skip - test skipped')
})