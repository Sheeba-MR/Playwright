import {test,expect} from "@playwright/test"

test('Window handling', async({page,context}) => {
    // launch the browser
    await page.goto("http://leaftaps.com/opentaps/control/main")
    // enter username
    await page.locator("#username").fill('Demosalesmanager')
    // enter password
    await page.locator("[id='password']").fill("crmsfa")
    // click submit
    await page.locator('.decorativeSubmit').click()
    // click CRM/SFA
    await page.locator('text=CRM/SFA').click()
    // click leads
    await page.locator("[href = '/crmsfa/control/leadsMain']").click()
    // click merge leads
    await page.getByRole('link', {name:'Merge Leads'}).click()
    // Click From Lead widget
    // Select the first resulting lead id
    // creating the listener and click action and resolving the promise
    let [newPage1] = await Promise.all([context.waitForEvent('page'), page.locator('//img[@alt="Lookup"]').first().click()])
    await newPage1.locator('//a[@class="linktext"]').first().click()
    // come to the main page to select "To Lead Widget"
    await page.bringToFront()
    // Click To Lead widget
    // Select the second resulting lead id
    // creating the listener and click action and resolving the promise
    let [newPage2] = await Promise.all([context.waitForEvent('page'), page.locator('//img[@alt="Lookup"]').nth(1).click()])
    await newPage2.waitForLoadState('domcontentloaded')
    await newPage2.locator('(//a[@class="linktext"])[6]').click()
    
    // Get the message and type of the alert
    page.on('dialog', async(alert) => {
        let alertType = alert.type()
        console.log("The type of the alert is: ", alertType)
        alert.accept() // accept the alert
        let alertMessage = alert.message()
        console.log("The alert message is: ", alertMessage)
    })
    

    // click merge button
    await page.locator("//a[text()='Merge']").click()

    // assert the title of the page
    let title = await page.title()
    console.log("The title of the page is: ", title)
    await expect(page).toHaveTitle('View Lead | opentaps CRM')

})


