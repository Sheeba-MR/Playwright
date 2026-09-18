import {test,expect,chromium} from "@playwright/test"

test("PVR", async({page}) =>  {
    // load the url
    await page.goto("https://www.pvrcinemas.com/")
    // Select the required city
    await page.getByRole('heading', {name: 'Chennai'}).click()
    // Click on the Cinema option
    await page.locator("//span[text()='Cinema']").click()
    // Click on the Select Cinema dropdown
    await page.locator("//div[@id='cinema']").click()
    // Select any available cinema from the list
    await page.locator("//span[contains(text(),'Virugambakkam')]").click()
    // Select any available date (Today / Tomorrow / Upcoming)
    await page.locator('//li[@class="p-dropdown-item"]').nth(0).click()
    // Select any available movie from the movie list
    await page.locator('//li[@class="p-dropdown-item"]').nth(0).click()
    // Select any available show time
    await page.locator('//li[@class="p-dropdown-item"]').nth(0).click()
    // Click on the Submit button
    await page.getByRole('button', {name: 'Submit'}).click()
    // Accept the consent / cookie popup if displayed
    // Accept any additional confirmation popup if displayed
    await page.getByRole('button', {name: 'Accept'}).click()
    // Select any available seat from the seating layout
    let seat = await page.locator("//span[@class='seat-current-pvr']").nth(0)
    seat.click()
    // Verify the selected seat information is displayed
    expect(seat).toBeVisible
    // Verify the total ticket amount is displayed
    await page.locator("//div[@class='grand-prices']").click()
    // Verify the page title is displayed correctly
    await page.waitForTimeout(5000)
    let title = await page.title()
    console.log(title)
    expect(title).toContain('PVR Cinemas')
    // Click on the Proceed button
    await page.getByRole('button', {name: 'Proceed'}).click()
})