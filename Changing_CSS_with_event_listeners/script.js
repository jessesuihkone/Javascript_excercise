var bgColor = document.querySelector(".js-bg-color")
var textColor = document.querySelector(".js-text-color")

bgColor.addEventListener('keyup', function(event) {
    console.log("bg color", event.target.value)
    var body = document.querySelector("body")
    body.style.backgroundColor = event.target.value
});

textColor.addEventListener('keyup', function(event) {
    console.log("text color", event.target.value)
});
