var input = prompt("What course are you taking?");
var inputLower = input.toLocaleLowerCase();

var text = document.getElementById("text");

if(inputLower == "javascript for beginners") {
    text.innerHTML = "<strong>WELCOME</strong> to JavaScript for <strong>Beginners</strong>";
}