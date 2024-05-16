/*Finding the First Non-Repeating Character in a String. The goal is to find the first character in a string that does not repeat.*/

function firstNonRepeatingCharacter(s) {
    //make array of given strings
    let arrayOfString = s.split("");
    //take first letter in array
    for (let j = 0; j < arrayOfString.length; j++) {
        let letter = arrayOfString[j];
        let counter = 0;
        //loop through array to see if there is duplicate
        for (let i = 0; i < arrayOfString.length; i++){
            if (letter === arrayOfString[i]) {
                counter += 1;
                
            }
        }
        if (counter === 1) {
            return letter;
        };
    }
}
    
const testString = "swiss";
console.log("The first non-repeating character is:", firstNonRepeatingCharacter(testString)); // Output: "w"
