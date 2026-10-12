import { Wrapper } from "../helper/wrapperHA";

// extending wrapper (parent class) to child class
export class LeadSF extends Wrapper{
    // click new to create lead
    async clickNewLead() {
        await this.click("//button[text()='New']")
    }
    // Enter all mandatory Lead fields
    // Select Salutation 
    async selectSalutaion() {
        await this.click('//button[@name="salutation"]')
        await this.click("(//span[text()='Mrs.'])[3]")
    }
    // Enter the Last Name
    async lastName(lastname:string) {
        await this.clearAndFill('//input[@name="lastName"]', lastname)
    }
    //Enter the Company Name
    async companyName(companyname: string) {
        await this.clearAndFill('//input[@name="Company"]',companyname)
    }
    // click save
    async clickSave() {
        await this.click('//button[@name="SaveEdit"]')
    }
}