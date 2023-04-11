
// Change title class text
var title = document.querySelector(".title")
title.innerText = "Changed title"


// Change texts that are "small"
var small = document.querySelector("small")
small.innerText = "miniteksti"


// Change links inner text
var a = document.querySelector("a")
a.innerText = "Link text"

var paal = prompt("List part number 9")

// Change list properties
var lis = document.querySelectorAll("li")
lis[0].innerText = "ANYTHING I WANT"
lis[4].innerHTML = "<a href='#'>HI HI HI HI</a>"

lis[8].innerText = paal;

