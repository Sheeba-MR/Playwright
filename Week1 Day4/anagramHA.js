// find the length of the last word

let s = "hello world" // initialization of string 
let split = s.split(" ") // spliting the string into array based on space 
console.log(split) // printing the split of string 
let lastWord = split[split.length-1] // getting the last word in the array using index 
console.log(lastWord) // printing the last word 
let len = lastWord.length // finding length of the last word 
console.log(len) // length of the last word

// trim and then find the length of the last word

let str = " fly me to the moon " // initialization of string 
let trm = str.trim() // triming to remove the space before and after
console.log("After trim: " +trm) // after trim output
let splt = trm.split(" ") // spliting the trimed output
console.log(splt) // printing 
let lastWord1 = splt[splt.length-1] // getting the last word in the array using index
console.log(lastWord1) // printing the last word 
let lenth = lastWord1.length // finding length of the last word 
console.log(lenth) // length of the last word

// anagram

function isAnagram(str1, str2) {
    // removed space
    let removeSpace1 = str1.replace(" ", "")
    console.log("Space removed for string1: "+removeSpace1)
    let removeSpace2 = str2.replace(" ", "")
    console.log("Space removed for string2: "+removeSpace2)
    // converted to lower case
    let lowerCase1 = removeSpace1.toLowerCase()
    console.log("String1 to lowercase: "+lowerCase1)
    let lowerCase2 = removeSpace2.toLowerCase()
    console.log("String2 to lowercase: "+lowerCase2)
    // splited both strings
    let split1 = lowerCase1.split("")
    console.log("Split string1: "+split1)
    let split2 = lowerCase2.split("")
    console.log("Split string1: "+split2)
    // sorted both strings
    let sort1 = split1.sort()
    console.log("Sort string1: "+sort1)
    let sort2 = split2.sort()
    console.log("Sort string2: "+sort2)
    // joined the strings
    let join1 = sort1.join("")
    console.log("Join string1: "+join1)
    let join2 = sort2.join("")
    console.log("Join string2: "+join2)
    // comparing the sorted string
    return join1 === join2
}
console.log(isAnagram('Listen', 'Silent'))
console.log(isAnagram('Hello', 'World'))