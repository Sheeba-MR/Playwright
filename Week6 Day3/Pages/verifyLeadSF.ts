import { expect } from "@playwright/test";
import { LeadPageSF } from "./leadSF"

export class VerifyLeadPageSF extends LeadPageSF{
    // Verify the created Lead
    async verifyLeadSF() {
        let leadNameSF = await this.page.locator("//span[@class='toastMessage slds-text-heading--small forceActionsText']").textContent()
        console.log(leadNameSF)
        expect(leadNameSF).toBe('Sheba M R')
    
    }

    

}