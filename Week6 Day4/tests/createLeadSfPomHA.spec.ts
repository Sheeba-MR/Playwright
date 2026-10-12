// import fixture file - this import test is from customFixtureHA.ts
import {test} from "../../../helper/customFixtureHA" 

import dotenv from "dotenv"


// configure the env file - data parameterization
dotenv.config({path:'Data/createLeadSFHA.env'})



//test('create lead using POM',async ({page}) => {
// instead of using page fixture (above line) we are using custom fixture in line 19
// below line is the custom page fixture
test('create lead in SF using POM',async ({
        loginSFfix,
        homeSFfix,
        leadSFfix,
}) => {

    

//create object for all pages(login, welcome, home, lead, homelead, createlead, verifylead)
//let l=new LoginPage(page)
// data parameterization
await loginSFfix.loadUrl(process.env.sf_url as string)
await loginSFfix.loginCredentials(process.env.sf_username as string,process.env.sf_password as string)
await homeSFfix.clickMenu()
await homeSFfix.clickViewAll()
await homeSFfix.enterLeads(process.env.sf_searchbox as string)
await homeSFfix.clickLeads()
await leadSFfix.clickNewLead()
await leadSFfix.selectSalutaion()
await leadSFfix.lastName(process.env.sf_lastname as string)
await leadSFfix.companyName(process.env.sf_companyname as string)
await leadSFfix.clickSave()
    
})