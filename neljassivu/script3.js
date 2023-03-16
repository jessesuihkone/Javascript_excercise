var input = prompt("What is your age?");
var inputLower = input.toLocaleLowerCase();

var text = document.getElementById("text");

if(input <= "18") {
    text.innerHTML = "You are underage";
} else {
    text.innerHTML = "Welcome to this website!";
}