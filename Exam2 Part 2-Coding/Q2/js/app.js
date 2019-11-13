const car = {
    make: 'default',
    model: 'default',
    color: 'default',
    drive: function(speed) {
        console.log(`The ${this.color} ${this.make} ${this.model} is driving at ${speed} mph`);
    },
    stop: function() {
        console.log(`The ${this.color} ${this.make} ${this.model} is stopping`);

    }
}

//Derived Object Using Object. Create Method
const RedHondaAccord = Object.create(car);
RedHondaAccord.color = 'red';
RedHondaAccord.make = 'Honda';
RedHondaAccord.model = 'Accord';
RedHondaAccord.drive(200);

//Question 2.2 using Function Contructor

function Car() {
    this.make = 'default';
    this.model = 'default';
    this.color = 'default';
}
Car.prototype.drive = function(speed) {
    console.log(`The ${this.color} ${this.make} ${this.model} is driving at ${speed} mph`);
}
Car.prototype.stop = function() {
        console.log(`The ${this.color} ${this.make} ${this.model} is stopping`);
    }
    //Now Deriving the object 
const RedHondaAccord1 = new Car();
RedHondaAccord1.color = 'red';
RedHondaAccord1.make = 'Honda';
RedHondaAccord1.model = 'Accord';
RedHondaAccord1.drive(300);