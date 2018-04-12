class Vehicle {
    constructor(manufacturer, numberOfWheels) {
        this.numberOfWheels = numberOfWheels;
        this.manufacturer = manufacturer;
    }
    aboutVehicle() {
        console.log("Vehicle made by manufacturer " + this.manufacturer + " has " + this.numberOfWheels + " wheels.");
    }
}

class Truck extends Vehicle {
    constructor(manufacturer, numberOfWheels, numberOfDoors, hasBed) {
        super(manufacturer, numberOfWheels);
        this.numberOfDoors = numberOfDoors;
        this.hasBed = hasBed;
    }
    aboutVehicle() {
        console.log("Truck made by manufacturer " + this.manufacturer + " has " + this.numberOfWheels + " wheels, has " + this.numberOfDoors + " doors, and has a bed: " + this.hasBed + ".");
    }
}

class Sedan extends Vehicle {
    constructor(manufacturer, numberOfWheels, size, mpg) {
        super(manufacturer, numberOfWheels);
        this.size = size;
        this.mpg = mpg;
    }
    aboutVehicle() {
        console.log(this.size + " Sedan made by manufacturer " + this.manufacturer + " has " + this.numberOfWheels + " wheels and gets " + this.mpg + "mpg.");
    }
}

class Motorcycle extends Vehicle {
    constructor(manufacturer, numberOfWheels, hasHandleBars, hasSteeringWheel, hasDoors) { //, goesInReverse) {
        super(manufacturer, numberOfWheels);
        this.hasHandleBars = hasHandleBars;          // should be passed in as true
        this.hasSteeringWheel = hasSteeringWheel;    // should be passed in as true
        this.hasDoors = hasDoors;                    // should be passed in as false
        // this.goesInReverse = goesInReverse;
    }
    aboutVehicle() {
        console.log("Motorcycle made by manufacturer " + this.manufacturer + " has " + this.numberOfWheels + " wheels, has handle bars: " + this.hasHandleBars + ", has steering wheel: " + this.hasSteeringWheel + ", and has doors: " + this.hasDoors + ".");
    }
}

// class Coupe extends Vehicle {
//     constructor(manufacturer, numberOfWheels) {
//         super(manufacturer, numberOfWheels);
//     }
//     aboutVehicle() {
//         console.log("Coupe made by " + this.manufacturer + " has " + this.numberOfWheels + " wheels.");
//     }
// }

let v1 = new Vehicle("A", 4);                           // manufacturer, numberOfWheels
let v2 = new Truck("B", 4, 4, true);                    // manufacturer, numberOfWheels, numberOfDoors, hasBed
let v3 = new Sedan("C", 4, "Small", 30);                // manufacturer, numberOfWheels, size, mpg
let v4 = new Motorcycle("D", 2, true, false, false);    // manufacturer, numberOfWheels, hasHandleBars, hasSteeringWheel, hasDoors

v1.aboutVehicle();
v2.aboutVehicle();
v3.aboutVehicle();
v4.aboutVehicle();