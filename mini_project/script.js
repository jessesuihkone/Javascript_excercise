var num1 = prompt("Give me your age");
num1 = Number(num1);

var tex = document.getElementById("tax")

if(!num1) {
    alert("not a number")
}

if(num1 > 18) {
    tex.innerHTML = "You are over 18";
}

if(num1 === 18) {
    tex.innerHTML = "You are 18";
}

if(num1 < 18) {
    tex.innerHTML = "You are under 18";
}