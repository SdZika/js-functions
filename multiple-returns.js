function processUserInput(input) {
    if (typeof input !== "number") {
        return "Bad input";
    } else if (input < 10) {
        return "Input is less than 10"
    } else if (input <= 20) {
        return "Input is between 10 and 20";
    } else {
        return "Input is greater than 20";
    }
}
console.log(processUserInput(10));