var btn = document.querySelector(".js-button")
var totalClicks = 0
btn.addEventListener('click', function(event) {
    totalClicks = totalClicks + 1;


    document.getElementById("totalClicks").innerText = 
    "Total clicks: " + totalClicks;
})