var course = "Javascript for Beginners";

function doAthing() {
    // this is a LOCAL variable
    var teacher = "Kalob Taulien"
    console.log("!!!", teacher)
    console.log("!!!", course)

}
//Exec. the function 
doAthing(course)
//Console.log

console.log("OUT OF SCOPE:", teacher)