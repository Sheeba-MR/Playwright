// import chromium, webkit and test
import { chromium, webkit, test } from "@playwright/test"

//creating a test for edge
test ("Launch edge browser", async() => {
    // launching edge browser
    const browserEdge = await chromium.launch({headless:false, channel:"msedge"})
    // creating new browser context for edge
    const contextEdge = await browserEdge.newContext()
    // creating new page for edge
    const pageEdge = await contextEdge.newPage()
    // loading the url in edge
    await pageEdge.goto("https://www.redbus.in")
    // printing the title of the web page in edge 
    console.log("The title of the page in Edge: ", await pageEdge.title())
    // printing the url of the page in edge
    console.log("The URL of the page in Edge: ", pageEdge.url())
})

// creating a test for webkit
test ("Launch webkit browser", async() => {
    // launching webkit browser
    const browserWebkit = await webkit.launch({headless: false})
    // creating new browser context for webkit
    const contextWebkit = await browserWebkit.newContext()
    // creating new page for webkit
    const pageWebkit = await contextWebkit.newPage()
    // loading the url in webkit
    await pageWebkit.goto("https://www.flipkart.com")
    // printing the title of the web page in webkit
    console.log("The title of the page in Webkit: ", await pageWebkit.title())
    // printing the url of the page in edge
    console.log("The URL of the page in Edge: ", pageWebkit.url())
})