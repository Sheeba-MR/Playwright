// union - type alias
type paymentMethod = "UPI" | "CreditCard" | "Paypal"

// creating a function
function makePayment(method:paymentMethod) {
    if(method === "UPI") {
        console.log("This is UPI payment")
    }
    else if (method === "CreditCard") {
        console.log("This is credit card payment")
    }
    else if (method === "Paypal") {
        console.log("This is paypal payment")
    }
    else {
        console.log("Invalid payment")
    }

}
// calling the function
makePayment("UPI")
makePayment("CreditCard")