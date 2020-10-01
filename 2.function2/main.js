  
//did not extract reverseString method in function1 for brevity
function reverseString(message){
    return message.split("").reverse().join("");
}

function palindrome(message){
    return message == reverseString(message)
}
console.log(palindrome('hello'));   // return false
console.log(palindrome('abcba'));   // return true