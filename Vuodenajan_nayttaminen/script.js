var text = document.getElementById("text");


var season = prompt("What month are you born in?")
var seasonLower = season.toLowerCase()


if (seasonLower == "january" || seasonLower == "february" || seasonLower == "december") {
    text.innerText = "winter";
} else if (seasonLower == "june" || seasonLower == "july" || seasonLower == "august") {
    text.innerText = "summer";
} else if (seasonLower == "march" || seasonLower == "april" || seasonLower == "may") {
    text.innerText = "spring";
} else if (seasonLower == "september" || seasonLower == "october" || seasonLower == "november") {
    text.innerText = "autumn";
} else {
    text.innerText = "That isn't a month you absolute monkey"
}