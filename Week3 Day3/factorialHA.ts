// function for factorial
function factorial(n:number) {
    let result:number = 1
    for(let i:number = 1; i<=n; i++) {
        result = result*i
    }
    console.log(result)

}
factorial(5)