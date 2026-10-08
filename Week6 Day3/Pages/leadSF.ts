import { HomePageSF } from "./homeSF";

export class LeadPageSF extends HomePageSF{
    // click new to create lead
    async clickNewLead() {
        await this.page.getByRole('button', {name: 'New'}).click()
    }
    // Enter all mandatory Lead fields
    // Select Salutation 
    async selectSalutaion() {
        await this.page.locator('//button[@name="salutation"]').click()
        await this.page.locator("(//span[text()='Mrs.'])[3]").click()
    }
    // Enter the Last Name
    async lastName() {
        await this.page.locator('//input[@name="lastName"]').fill("Sheba M R")
    }
    //Enter the Company Name
    async companyName() {
        await this.page.locator('//input[@name="Company"]').fill("Infosys")
    }
    // click save
    async clickSave() {
        await this.page.locator('//button[@name="SaveEdit"]').click()
    }
}