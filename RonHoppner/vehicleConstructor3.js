function VehicleConstructor(name, wheels, pax, speed){

	this.name = name;
	this.wheels = wheels;
	this.pax = pax;
	this.speed = speed;
	this.distance_traveled = 0;
	this.updateDistanceTraveled = function(){
		this.distance_traveled += speed;
		console.log("Distance traveled: " + this.distance_traveled)
	}
	this.makeNoise = function(){
		console.log('Conditionally appropriate vehicle noises.');
	}
	this.move = function(){
		this.updateDistanceTraveled();
		console.log('various noises and such.');
	}
	this.checkMiles = function(){
		console.log('Current vehicle miles: ' + this.distance_traveled);
	}
	this.pickupPax = function(riders){
		this.pax += riders;
	}
	this.getVIN = function(){
		this.VIN = Math.random() * 100000000000000000;
		console.log(this.VIN);
	}
}

// Seems silly to use Prototype. Platform says prototype is how objects share properties and methods. Why would we do that here when everything we're creating are instances of the same object???


var car = new VehicleConstructor('car', 4, 4, 10);
car.makeNoise();
car.move();
car.move();
car.checkMiles();

var bike = new VehicleConstructor('Schwin', 2, 1);
bike.makeNoise();

var sedan = new VehicleConstructor('Corolla', 4, 1);
console.log(sedan.pax);
sedan.makeNoise();
sedan.pickupPax(3);
console.log("Sedan pax count: " + sedan.pax);
sedan.getVIN();

var bus = new VehicleConstructor('Bus', 6, 35);
console.log(bus.pax);
bus.makeNoise = function(){
	console.log('Guy barfing in the back noises...Gross.')
}
bus.makeNoise();

bus.pickupPax(10);
console.log(bus.pax);
bus.getVIN();














