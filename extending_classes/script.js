class Animal {
    constructor(species, weight, height) {
        this.species = String(species)
        this.weight = Number(weight)
        this.height = Number(height)
    }
    getInfo() {
        console.log(
            this.species + 
            " weighs " + this.weight + 
            " and is " + this.height + " tall"
        )
    }
    speak() {
        console.log("I SAY A THING")
    }
    
}

class Cat extends Animal {
    constructor(species, weight, height) {
        super(species, weight, height)


        this.color = "Grey"
    }

    sleep() {
        console.log(this.species + " is sleeping for 16 hours a day")
        return this
    }
    speak() {
        console.log("MEOW")
        return this
    }
}

class Dog extends Animal {
    constructor(species, weight, height) {
        super(species, weight, height)


        this.color = "Grey"
    }

    sleep() {
        console.log(this.species + " is sleeping for 8 hours a day")
        return this
    }
    speak() {
        console.log("I am a dog!")
        return this
    }
}
/*
const tiger = new Animal("Tiger", 200, 36)
tiger.getInfo()
*/
const zephyr = new Cat("cat", 13, 13)
zephyr.sleep().speak()

const juuh = new Dog("dog", 1010, 9)
juuh.sleep().speak()