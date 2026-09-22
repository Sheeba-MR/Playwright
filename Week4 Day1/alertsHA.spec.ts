import {test} from "@playwright/test"

test('Alerts', async({page}) => {
    // load the url
    await page.goto("https://www.leafground.com/alert.xhtml")
    
    // handle alert
    page.on ('dialog', async dialog => {
        console.log("The alert message is: ", dialog.message())
        // send "playwright" using the accept() method
        await dialog.accept('Playwright')
    })
    
    // Click on "Prompt Dialog"
    await page.locator("//span[text()='Show']").nth(4).click()

})