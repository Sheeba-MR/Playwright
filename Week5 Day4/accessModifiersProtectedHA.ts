class protect extends BankAccount {
    // creating a public method to access the protected property of the parent class
    public accessAccountBalance() {
        console.log(this.accountBalance)
    }
}

// object creation
let protectObj = new protect()
// accessing protected property
protectObj.accessAccountBalance()


/*
Public:
    used when the method or property will be used with other class
    eg: login, logout, add to cart
*/

/*
Private:
    Used when we want to hide implementation details of property or method
    eg: api key

*/

/*
Protected:
    Used when the parent class and the child class needs to access property or method
    eg: account number
*/