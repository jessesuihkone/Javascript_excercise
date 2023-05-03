//var arr = ["Kalob", "Nathan", "Zephyr", "Prairie", "Henry", "Veto", "Maya"]



//let [kalob, nathan, zephyr, ...rest] = arr

//var fullName = prompt("What is your FULL name?")

//let [firstName, lastName] = fullName.split(' ')

//console.log(firstName, " is the first name")
//console.log(lastName, " is the last name")

//console.log(rest)

const person = {
    "name": "Kalob",
    'age': 30,
    'cats': 2,
    'food': "pizza",
}

let {
    first_name_for_the_user: firstName,
    food
} = person
console.log("Name is ", name)
console.log("Food is ", food)