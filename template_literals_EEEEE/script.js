const food = prompt("Favorite food")
const animal = prompt("Favorite animal")
const name = prompt("My name")


let spar = `My name is ${name} and my favorite animal is ${animal}. Also my favorite food is ${food}`

document.getElementById("output").innerHTML = spar;