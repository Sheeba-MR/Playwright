// base is the alias name for test
import { test as base } from "@playwright/test"
// importing all pages
import { LoginSF } from "../Pages/loginSFHA"
import { HomeSF } from "../Pages/homeSFHA"
import { LeadSF } from "../Pages/leadSFHA"

type myFixtures={ // type keyword defines the type of myFixtures
    //key:value
    loginSFfix:LoginSF // provides object for the loginpage class
    homeSFfix:HomeSF // provides object for the welcomepage class
    leadSFfix:LeadSF // provides object for the homepage class
}

// creating object for class inside the fixture

// base is the word we are using instead of test "playwright test"
// extend() - method allows to create custom fixtures in addition to Playwright's built-in fixtures
export const test = base.extend<myFixtures>({

    // fixture for login page
    // use - is the object it returns fixture and new page 
    // loginSFfix - is the name of the custom fixture
    // Playwright provides the built-in page fixture to your custom fixture. 
    // You extract that page object and use it to create your POM object.
    loginSFfix:async({page}, use) => {
        // creating object
        let lSF = new LoginSF(page) // pass the page reference here
        // giving new page reference
        // below line tells Playwright to provide the LoginPage object 
        // to the test through the loginfix fixture
        await use(lSF) // this line is used to get new page

    },

    // fixture for home page
    homeSFfix:async({page}, use) => {
        // creating object
        let hSF = new HomeSF(page) // pass the page reference here
        // giving new page reference
        await use(hSF) // this line is used to get new page

    },

    // fixture for lead page
    leadSFfix:async({page}, use) => {
        // creating object
        let lSF = new LeadSF(page) // pass the page reference here
        // giving new page reference
        await use(lSF) // this line is used to get new page

    }

})