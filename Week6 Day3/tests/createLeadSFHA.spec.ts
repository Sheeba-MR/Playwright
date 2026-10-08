
import {test} from "@playwright/test"
import { VerifyLeadPageSF } from "../../../Pages/verifyLeadSF"

test('create lead using POM',async ({page}) => {



//create object for verifyLeadSF page

let vl=new VerifyLeadPageSF(page)
await vl.loadUrl("https://login.salesforce.com")
await vl.loginCredentials("sheebajebin23.f4fb5806db5d@agentforce.com","$H33b@23")
await vl.clickMenu()
await vl.clickViewAll()
await vl.enterLeads()
await vl.clickLeads()
await vl.selectSalutaion()
await vl.lastName()
await vl.companyName()
await vl.clickSave()
await vl.verifyLeadSF()

    
})