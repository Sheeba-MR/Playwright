// function to reverse the string
function reverseString(str) {
    let character = str.split(""); // initialization of the word
    console.log("Splited character: " + character) // split the string to character
    let reverse = "" //initialization the empty string the store the reverse
    for (let i = character.length - 1; i>=0; i--) { //to reverse we have to decrement
        reverse = reverse + character[i] // storing index of the reversed string
    }
    console.log("The reversed string: "+reverse) // printing the output
    return reverse // used to send the value where ever called - reverse is a local variable
}
reverseString('sheeba') // calling the reverse string function
reverseString('madam') // calling the reverse string function


// function to check palindrome
function pallindrome(str) {
    let palindromeCheck = reverseString(str)
    if (str === palindromeCheck) { // condition to check pallindrome or not
        console.log(str + " is a palindrome")
    }
    else {
        console.log(str + " is not a palindrome")
    }
}
pallindrome('sheeba') // calling the palindrome function
pallindrome('madam') // calling the palindrome function