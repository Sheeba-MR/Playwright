import {test,expect} from "@playwright/test"

test('to upload multiple file',async ({page}) => {

// load the url
await page.goto('https://www.leafground.com/file.xhtml')
// click advanced upload choose button
// Multiple file upload
let multipleUpload = page.locator('input[type="file"]').nth(1)
// step 4: upload the file - using relative path
await multipleUpload.setInputFiles(['Data/img1.jpeg','Data/img2.jpeg'])
// verify both files are uploaded
await page.waitForTimeout(3000)
await expect(page.getByText('img1.jpeg')).toBeVisible()
await expect(page.getByText('img2.jpeg')).toBeVisible()

})