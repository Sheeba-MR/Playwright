import { LoginPageSF } from "./loginSF";

export class HomePageSF extends LoginPageSF{

// click on toggle menu button
async clickMenu() {
    await this.page.locator("//div[@class='slds-icon-waffle']").click()
}
// click view all
async clickViewAll() {
    await this.page.locator("//button[text()='View All']").click()
}
//enter leads in search box
async enterLeads() {
    await this.page.getByRole('combobox', {name: 'Search apps or items...'}).fill('leads')
}
// click leads
async clickLeads() {
    await this.page.getByRole('link', {name: 'Leads'}).click()
}
}