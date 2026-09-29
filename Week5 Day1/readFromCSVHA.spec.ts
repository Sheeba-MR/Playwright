import {test, expect} from "@playwright/test"

import {parse} from "csv-parse/sync"

import fs from 'fs' 

// converting csv data to object
let value:any[]=parse(fs.readFileSync('Utils/loginData.csv','utf-8'),{columns:true,skip_empty_lines:true})

// iterating test data
for(let details of value){

test(`Read data from csv file ${details.tcid}`,async ({page}) => {

// launch the browser
await page.goto("https://leaftaps.com/opentaps/control/main")
// enter username
await page.locator('#username').fill(details.username)
// enter password
await page.locator('#password').fill(details.password)
// click login
await page.locator(".decorativeSubmit").click()
// Verify that the CRM/SFA home page is displayed successfully
await expect(page).toHaveTitle(/Leaftaps - TestLeaf Automation Platform/)

    
})

}