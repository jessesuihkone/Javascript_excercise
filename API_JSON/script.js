var falcon = document.getElementById("millenium")
var falcon2 = document.getElementById("millenium2")
var falcon3 = document.getElementById("millenium-pilots")


    fetch('https://swapi.dev/api/starships/10/')
    .then(function(response) {
        return response.json()
    })
    .then(function(res) {
        millenium = res
        millenium.pilots.forEach(function(url, index) {
            falcon3.innerText = ("First pilot: " + url)
        })
    })
    .then(function(res) {
        falcon.innerText = millenium.name + (" had ") + millenium.pilots.length + (" pilots")
        
        fetch('https://swapi.dev/api/films/1/')
        .then(function(response) {
            return response.json()
        })
        .then(function(res) {
            film1 = res
            falcon2.innerText = ("Featured the first time in this film: " + film1.title)
        })

    })

