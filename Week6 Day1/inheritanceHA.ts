// Define a class `WebComponent`
class WebComponent {
    //A constructor that initializes a `selector` property
    constructor(selector:string) {
        console.log("The given selector is: ", selector)
    }
    // create a click()` method that prints simulating a click
    click():void {
        console.log("Simulating a parent click")
    }
    // create a focus() method that prints focusing on the component
    focus():void {
        console.log("Focusing on the component")
    }
}

// define a class Button
class Button extends WebComponent {
    // Override the `click()` method
    click():void {
        console.log("Simulating a child click")
        super.click() // prints parent click method
    } 
}

// define a class TextInput
class TextInput extends WebComponent {
    // property `value` initialized to an empty string
    value:string=""
    // enterText(text: string) method that sets `value` and prints a message simulating text entry
    enterText(text: string) {
        console.log(text)
    }
}

// Define a function testComponents to demonstrate the usage of the classes
function testComponents() {
    // Instantiate the `Button` and `TextInput` classes with example selectors
    let but = new Button("login")
    let text = new TextInput("Sheeba")
    // Use the instances to simulate clicking the button and entering text into the text input
    but.click()
    text.enterText("Simulating text entry")
}
// calling the function
testComponents()