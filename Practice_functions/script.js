function doMath(num) {
    num = Number(num);
    if(num) {
        var newNumber = (num + 100) / 3;
        return newNumber;
    } else {
        return false;
    }
}


var customNum = doMath(343);
console.log(customNum);