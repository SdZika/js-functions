/*Finding the First Non-Repeating Character in a String. The goal is to find the first character in a string that does not repeat.*/

function firstNonRepeatingCharacter(s) {
    //make array of given strings
    //let arrayOfString = s.split("");
    //take first letter in array
    for (let j = 0; j < s.length; j++) {
        //let letter = s[j];
        let counter = 0;
        //loop through array to see if there is duplicate
        for (let i = 0; i < s.length; i++){
            if (s[j] === s[i]) {
                counter += 1;
                
            }
        }
        if (counter === 1) {
            return s[j];
        };
    }
}
    
const testString = "ssbbvvkktdduomarko";
console.log("The first non-repeating character is:", firstNonRepeatingCharacter(testString)); // Output: "w"
