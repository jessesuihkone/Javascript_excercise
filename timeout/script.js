console.log("First console log")
setTimeout(function() {
    console.log("Time out!")
    const body = document.querySelector("body")
    body.style.backgroundColor = "coffee"
    body.style.color = "mediumspringgreen"
}, 3000)
console.log("Second console log")