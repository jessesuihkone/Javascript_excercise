var bgColor = document.querySelector(".js-bg-color")
var textColor = document.querySelector(".js-text-color")
var body = document.querySelector("body")

bgColor.addEventListener('keyup', function(event) {
    console.log("bg color", event.target.value)
    body.style.backgroundColor = event.target.value
});

textColor.addEventListener('keyup', function(event) {
    console.log("text color", event.target.value)
    body.style.color = event.target.value
});
