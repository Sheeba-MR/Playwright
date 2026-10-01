import {test,expect} from "@playwright/test"

// test.describe() - groups the tests
test.describe('Test Annotations', async ()=>{
    // test.use() - sets the storage state for all tests in this describe block
    test.use({
    storageState: 'Data/sf_login.json'
    });

    // test.only() - runs only this test
    test.only('Test_Only', async ({page})=>{
        await page.goto('https://orgfarm-e0a099853d-dev-ed.develop.lightning.force.com/lightning/n/devedapp__Welcome')
        await expect(page).toHaveURL(/salesforce/);
    })   

    // test.slow() - marks the test as slow
    test('Test_Slow', async ({page})=>{
        test.slow()
        // navigate to the page
       // click on toggle menu button
       await page.locator("//div[@class='slds-icon-waffle']").click()
      // click view all
       await page.locator("//button[text()='View All']").click()
    })
    
    test.fail('Test_Fail', async ({page})=>{
        throw new Error('Invalid session')
    })

})

