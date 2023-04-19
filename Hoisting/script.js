(function getPerson() {
    
    if(myName === undefined) {
        myName = "Kalob"
    }

    console.log("Var not set yet", myName)
    var myName = "Kalob"
    console.log("Var is set", myName)
})();

console.log("Name is", myName)

function getMonk(monkName) {
    if(monkName === undefined) {
        monkName = "Monk"
    }
    console.log("A thing", monkName)
    var monkName = "Whatever"
}