var carColor = document.getElementById("carColor")

const car = {
    model:"M4 " ,
    power:"431 Hp",
    engineDisplacement:"3.0 V6" ,
    make:"BMW",
    productionYear:"2015",

    makeAndModel : function() {
        return this.productionYear + " " + this.make + " " + this.model;
    }

};

document.getElementById("car").innerHTML = car.makeAndModel();
document.getElementById("carPower").innerHTML = car.engineDisplacement + " producing " + car.power;