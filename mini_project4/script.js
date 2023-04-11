var tipAmount = prompt("Bill amount:");
var tip = prompt("Tip percent:");




function tipCalc(totalTip, tip, returnTipOnly) {
    tip = tip / 100;
    var tipAmount = totalTip * tip;
    totalTip = totalTip + tipAmount;
    if(returnTipOnly) {
      return tipAmount
    }
  return (totalTip);
}

var totalBill = tip(25, 10);
console.log(totalTip)

var totalTip = tip(25, 10, true);
console.log(totalTip)