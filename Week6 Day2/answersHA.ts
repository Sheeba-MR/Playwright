/* Answers

1) Why was verifyPage() placed inside an Interface?
        As the verifyPage() method is common for both loginPage and productPage, I 
        have placed the verifyPage() method in interface (PageRules). 

2) Can an Interface contain method implementation?
    interface PageRules {
        verifyPage() {
        console.log("Verify");
        }
    }
    What happens?
        Interface should not have implemented methods. Any class that implements the 
        interface (PageRules) should implement the unimplemented method present in the 
        interface (PageRules)
        If we try to implement the method in interface, we will get compile time error

3) What keyword is used to follow Interface rules?
        We have to export the interface file and then we have to use implements 
        keyword

4) Why was waitForPageLoad() implemented inside BasePage?
        waitForPageLoad() method was implemented inside the abstract class (BasePage)
        because to provide common functionality to its child classes

5) Can we create an object for BasePage?
    const bp = new BasePage()
    Why or why not?
        We can't create object for abstract class (BasePage) because it has abstract
        methods without implementation of methods

6) What keyword is used to inherit from an Abstract Class?
        We use extends keyword






*/