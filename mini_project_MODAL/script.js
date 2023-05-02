var modal = document.getElementById("modal")

var btn = document.getElementById("openBtn")

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
  }

span.onclick = function() {
    modal.style.display = "";
}

window.onclick = function(event) {
    if (event.target)
}

