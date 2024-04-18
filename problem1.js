/*Palindrome Checker
Objective: Write a function to check if a given string is a palindrome (reads the same backward as forward, ignoring spaces, punctuation, and capitalization).

Approach: Normalize the string by removing non-alphanumeric characters and converting it to lowercase. Then, compare the string to its reverse to determine if it's a palindrome.*/

let myWord = "Ana voli Milovana";

function palindromeCheck(str) {
    let myString = str.toLowerCase().split(" ").join("");
    let reverseString = "";
     for (let i = myString.length-1;  i >=0; i--) {
        reverseString += myString[i];
     }
     if (reverseString === myString) {
        return true
     } else {
        return false}

}
console.log(palindromeCheck(myWord));

function isPalindrome(str) {
    str = str.replace(/[\W_]/g, '').toLowerCase();
    return str === str.split('').reverse().join('');
}

console.log(isPalindrome(myWord));