function configureDevice(id) {
    return function(command) {
        return `Device ${id} exsecute: ${command}`;
    }
}

let myDewice = configureDevice("001");
let myExsecute = myDewice("robot");
console.log(myExsecute);