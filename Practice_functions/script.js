function doMath(num) {
    num = Number(num);
    if(num) {
        var newNumber = (num + 100) / 4;
        return newNumber;
    } else {
        return false;
    }
}


var customNum = doMath("Kalob");
console.log(customNum);

var customNum = doMath(30);
console.log(customNum);

var customNum = doMath(50);
console.log(customNum);

var customNum = doMath(60);
console.log(customNum);

var customNum = doMath(65);
console.log(customNum);

var customNum = doMath(70);
console.log(customNum);

var customNum = doMath(75);
console.log(customNum);

var customNum = doMath(80);
console.log(customNum);



function $(id) {
    console.log("Id is:", id)
    return document.getElementById(id)
}

var title = $("title");
title.innerText = "Custom inner text";




// Celsius to fahrenheit
function cToF(c_num) {
    var fahrenheit = (c_num * 1.8) +32;
    return fahrenheit;
}

var zero = cToF(0); console.log(zero);