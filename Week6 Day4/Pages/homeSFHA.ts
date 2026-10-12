import { Wrapper } from "../helper/wrapperHA"
// extending wrapper (parent class) to child class
export class HomeSF extends Wrapper{

    // click on toggle menu button
    async clickMenu() {
        await this.click("//div[@class='slds-icon-waffle']")
    }
    // click view all
    async clickViewAll() {
        await this.click("//button[text()='View All']")
    }
    //enter leads in search box
    async enterLeads(lead:string) {
        await this.clearAndFill('//input[@class="slds-input"]',lead)
    }
    // click leads
    async clickLeads() {
        await this.click('//span[@class="label-display"]')
    }
}