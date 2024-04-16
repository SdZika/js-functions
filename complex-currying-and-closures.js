function createMathOp(operation) {
    return function(a, b){
        switch(operation) {
            case "+":
                return a + b;
            case "-":
                return a - b;
            case "*":
                return a * b;
            case "/":
                return a / b;
        }
    }
}


let myOperation = createMathOp("*");
let resultOfOperation = myOperation(6, 5);
console.log(resultOfOperation);
