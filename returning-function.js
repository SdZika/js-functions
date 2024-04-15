function makeMultiplier(num){
    return function(multiplier) {
        return num * multiplier;
    }
}

const multiplierNum = makeMultiplier(2);

console.log(multiplierNum);

console.log(multiplierNum(4));