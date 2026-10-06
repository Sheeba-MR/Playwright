// Create a subclass named LoginPage
import { BasePage } from "./methodOverridingParentHA";

class LoginPage extends BasePage{
    // Override the performCommonTasks() method in the LoginPage class
    performCommonTasks() {
        console.log("Child class - Perform common task method") //prints child class method
        super.performCommonTasks() // prints parent class method
    }
}

// create object
let lp = new LoginPage()
lp.clickElement()
lp.enterText()
lp.findElement()
lp.performCommonTasks()