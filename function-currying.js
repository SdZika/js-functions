function add(x) {
    return function(y) {
        return function(z) {
            return x + y + z;
        }
    }
}

let addone = add(1);
let addtwo = addone(2);
let addthree = addtwo(3);
console.log(addthree);