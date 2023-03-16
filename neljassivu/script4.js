var url = prompt("Give me link you monkey");
var text = document.getElementById("text");

if(!url.startsWith("http")) {
    url = "https://" + url + ".com";
}
document.getElementById("text").innerHTML = "<a href='" + url + "'>" + url + "</a>";