function sum(...args) {
    let result=0;
    for (let i=0; i < args.length; i++) {
        result +=i;
    };
    return result;
}
console.log(sum(1,2,3,4,5));