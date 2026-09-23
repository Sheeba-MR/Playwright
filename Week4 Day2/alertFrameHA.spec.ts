import {test, expect} from "@playwright/test" 

test('Alert and Frame', async({page}) => {
    // load the url
    await page.goto('https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm')
    // Ensure the webpage elements are fully loaded
    await page.waitForLoadState('domcontentloaded')
    // Switch to the iFrame containing the "Try it" button
    let frame = page.frameLocator("[id='iframeResult']")
    // click the try it button
    frame.locator("//button[text()='Try it']").click()
    // handle the alert
    page.on('dialog', async (alert) => {
        console.log("The alert message is: ", alert.message())
        // click ok in the alert
        await alert.accept()
    })
    // Verify that the message is displayed on the webpage "You pressed OK!"
    let getAlertText = frame.getByText("You pressed OK!")
    await expect(getAlertText).toHaveText("You pressed OK!")
})