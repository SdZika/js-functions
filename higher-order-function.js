function repeatOperation(func, num) {
    for (let i=0; i < num; i++) {
        func(); //why we do not need return
    }
}

function myFunc() {
    console.log("Hello");
}

repeatOperation(myFunc, 6);