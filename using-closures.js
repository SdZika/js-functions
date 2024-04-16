function createCounter() {
    let myCount = 0;
        return function() {
            return myCount++;
        };
}

const counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());


