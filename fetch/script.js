/*
let luke = {}

console.log("Before")
fetch('https://swapi.dev/api/people/1/')
    .then(function(response) {
        console.log("Then #1")
        return response.json()
    })
    .then(function(res) {
        console.log("Then #2")
        luke = res
        console.log(luke)
    })
console.log("After")
console.log("LUKE",luke)
*/

fetch('https://swapi.dev/api/people/1/')
    .then(function(response) {
        return response.json()
    })
    .then(function(res) {
        luke = res
        // const[movie1, movie2, movie3, ...movies] = luke.films // arr
        // console.log(movie2)
        luke.films.forEach(function(url, index) {
            console.log(index, url)
        })
    })