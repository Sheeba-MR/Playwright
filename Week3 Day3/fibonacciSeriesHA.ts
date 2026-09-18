// creating the function for fibonacci
function fibonacci(n: number): number {
    // initialize first number
    let firstNumber: number = 0
    // initialize second number
    let secondNumber: number = 1
    for (let i:number=0; i<n; i++) {
        let nextNumber: number = firstNumber+secondNumber
        firstNumber = secondNumber
        secondNumber = nextNumber
    }
    return firstNumber
}

console.log(fibonacci(4))
console.log(fibonacci(7))
console.log(fibonacci(8))
