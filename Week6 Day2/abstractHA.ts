// Create an abstract class named as BasePage
export abstract class BasePage {
    // add below implemented methods
    waitForPageLoad(): void {
        console.log("Waiting for page to load")
    }

    getPageTitle(): void {
        console.log("Getting page title")
    }
}
