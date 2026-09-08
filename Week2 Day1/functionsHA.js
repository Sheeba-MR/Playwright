// Task 1: Function declaration
function userProfile(name) { // creating the function using function declaration
    console.log("Hello", name)
}
userProfile("Sheeba") // passing the argument

// Task 2: Arrow function
let double = (a)=>(a*2)  // creating the function using arrow function
console.log(double(100)) 

// Task 3: Anonymous function
let setTime = function anonymousFunction() { // creating anonymous function
    console.log("This message is delayed by 2 seconds")
}
setTimeout(setTime, 2000) // setting delay for the function

// Task 4: Call back function
function getUserData (cb) {
    setTimeout(cb,3000) // setting delay for the callBack function
}
function callBack () {
    console.log("Call Back function") 
}
getUserData (callBack) // calling the function