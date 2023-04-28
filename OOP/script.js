class Person {
    constructor(name, coode, animal) {
        this.name = name
        this.coode = Number(coode)
        this.animal = animal
    }

    makeSound() {
        document.getElementById("output").innerHTML =
            this.name +  "'s favorite animal is " + this.animal + " and their credit card pin code is: " + this.coode
        
    }
}

const jonni = new Person("Jonni", 1030, "Penguins")
const sonni = new Person("Sonni", 9928, "Dogs")
const monni = new Person("Monni", 3337, "Cats")


jonni.makeSound()
sonni.makeSound()
monni.makeSound()