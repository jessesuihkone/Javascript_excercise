//variables
var bgColor = document.querySelector(".js-bg-color")
var textColor = document.querySelector(".js-text-color")
var body = document.querySelector("body")

//default colors and borders
body.style.backgroundColor = "navajowhite"
body.style.borderRadius = "30px"

bgColor.style.borderRadius = "20px"
bgColor.style.color = "white"
bgColor.style.backgroundColor = "black"

/*
body.style.color = "mediumspringgreen"
body.style.backgroundColor = "black"

bgColor.style.backgroundColor = "black"
bgColor.style.color = "white"

textColor.style.backgroundColor = "black"
textColor.style.color = "white"
*/

// console log input to background color box
bgColor.addEventListener('keyup', function(event) {
    console.log("bg color", event.target.value)
    body.style.backgroundColor = event.target.value
});
// console log input to text color box
textColor.addEventListener('keyup', function(event) {
    console.log("text color", event.target.value)
    body.style.color = event.target.value
});

// specify what colors change background color
bgColor.addEventListener('keyup', function(event) {
    var color = event.target.value
    switch(color) {
        case 'red':
        case 'white':
        case 'blue':
            body.style.backgroundColor = color
            break
        default:
            body.style.backgroundColor = "mediumspringgreen"
            break
    }
});

