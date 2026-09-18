import {test,expect,chromium} from "@playwright/test"

test("Decathlon", async({page}) =>  {
    // load the url
    await page.goto("https://www.decathlon.in/")
    // Verify the user is navigated to the Decathlon home page
    await expect(page.getByRole('link', {name:'Decathlon Home'})).toBeVisible()
    // Click on the Search icon on the home page
    let search = page.locator('//input[@type="search"]')
    await search.click()
    // Verify the search input field is enabled
    await expect(search).toBeEnabled()
    // Enter the product name as "shoes" in the search field
    await search.fill('shoes')
    // Press Enter to search the product
    await search.press('Enter')
    // Capture and print the page title in the console
    let title = await page.title()
    console.log("The title of the webpage is: ",title)
    // Verify the page title is displayed as "Search | shoes".
    expect(title).toStrictEqual('Search | shoes')
    // Click on the sport category
    await page.locator("//span[text()='Sport']").click()
    // Click on the "Running" category filter
    await page.getByRole('checkbox', {name: 'Running 29'}).click()
    // Click on the gender category
    await page.locator("//span[text()='Gender']").click()
    // Click on the "Men" gender filter
    await page.getByRole('checkbox', {name: 'Men 18'}).click()
    // Click on the shoe size category"
    await page.locator("//span[text()='Size']").click()
    // Click on the shoe size filter "UK 10.5"
    await page.getByRole('checkbox', {name: 'Uk 10.5 - eu 45 1'}).click()
    // Click on the "Most relevant" sorting dropdown
    await page.locator("//span[text()='Most relevant']").click()
    // Select "Price: Low to High" from the sorting options
    await page.locator("//span[text()='Price (low → high) ']").click()
    // Click on the first product from the displayed product list
    await page.getByAltText('Men Running Daily Foam Cushion Shoes, Jogflow 190.1 - Black').click()
    // Select the shoe size "UK 10.5 - EU 45" on the product detail page
    await page.locator("//span[text()='10.5']").click()
    // Click on the "Add to Cart" button
    await page.locator("//span[text()='Add to cart']").click()
    // Click on the Cart option
    await page.locator("//span[text()='Cart']").click()
    //adding wait
    await page.waitForTimeout(3000)
    // Fetch the total cart value
    let value = await page.locator('//div[@data-test-id="cart:cart-checkout-total-price"]').innerText()
    // Print the total cart amount in the console
    console.log("The price of the shoe is: ", value)

})