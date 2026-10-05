class BankAccount {
    public accountNumber: number = 23
    private accountHolder: string = "Sheeba"
    protected accountBalance: number = 100000

    public deposit(){
        console.log("Public Deposit method")
    }

    private withdraw(){
        console.log("Private Withdraw method")
    }

    // way to access private property outside the class by using public method
    public accessAccountHolder(){
        console.log(this.accountHolder)
    }

    // way to access private method outside the class by using public method
    public accessWithdraw(){
        this.withdraw()
    }
}

// object creation
let bank = new BankAccount()
// accessing public method
bank.deposit()
// accessing public property
console.log(bank.accountNumber)
// accessing private property
bank.accessAccountHolder()
// accessing private method
bank.accessWithdraw()

