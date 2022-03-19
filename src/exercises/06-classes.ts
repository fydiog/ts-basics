
//typescript basics

class Vehicle{
    constructor
        (
        public type:string,
        public wheels:number,
        )
    {}

    printVehicle() {
        return `${this.type} with ${this.wheels} wheels`
    }
}

const v1 = new Vehicle('Truck', 6)

console.log(v1.printVehicle())

class Car extends Vehicle {
    constructor(
        public brand:string,
        public model:string,
        public hp:number,
        ) {super('Car', 4)}
}

const car = new Car('BMW', 'M4', 500)

console.log(car)