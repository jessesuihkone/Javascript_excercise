const h1 = document.querySelector("h1")
const letters = h1.innerText.split('')
let html = ""


// Define RandColor() to make randomized color
const randColor = () =>  {
    return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
}

letters.forEach(letter => {
    let classes = ''
    if(letter !== ' ') {
        classes = 'letter js-letter'
    }
    html = html + `<span class='${classes}'>${letter}</span>`
})

h1.innerHTML = html
const jsLetters = document.querySelectorAll(".js-letter")
jsLetters.forEach(node => {
    
    node.addEventListener("mouseover", function(event) {
        this.classList.add("active")
        node.style.color = randColor();
    })
    node.addEventListener("mouseout", function(event) {
        this.classList.remove("active")
    })
})


























/*
var header1 = document.getElementById("header1").innerText;


var charac = header1.split("");

var f = charac[0];
var i = charac[1];
var n = charac[2];
var a = charac[3];
var l = charac[4];
var space = charac[5];
var p = charac[6];
var r = charac[7];
var o = charac[8];
var j = charac[9];
var e = charac[10];
var c = charac[11];
var t = charac[12];

ftitle = [f + i + n + a + l + space + p + r + o + j + e + c + t];

//const element = document.getElementById("header1");

ftitle.forEach(charac => {
    console.log("leter")
    .addEventListener("mouseover", myFunction);  
});



function myFunction() {
    
  }
*/