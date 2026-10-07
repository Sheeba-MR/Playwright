// Create a class named: LoginPage
// Extend BasePage and Implement PageRules

import { BasePage } from "./abstractHA"

class LoginPage extends BasePage implements PageRules {
    // implement verifyPage() (method is from interface)
    verifyPage(): void {
        console.log("Login Page Verified")
    }

    // add below methods
    enterUsername(): void {
        console.log("Username entered")
    }
    enterPassword(): void {
        console.log("Password entered")
    }
    clickLogin(): void {
        console.log("Login button clicked")
    }
    
}

// Create an object for LoginPage
let lp = new LoginPage()
// Call waitForPageLoad()
lp.waitForPageLoad()
// Call verifyPage()
lp.verifyPage()
// Call enterUsername()
lp.enterUsername()
// Call enterPassword()
lp.enterPassword()
// Call clickLogin()
lp.clickLogin()
// Call getPageTitle()
lp.getPageTitle()