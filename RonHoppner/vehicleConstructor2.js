function VehicleConstructor(name, wheels, pax, speed){

	this.name = name;
	this.wheels = wheels;
	this.pax = pax;
	this.speed = speed;
	var distance_traveled = 0;
	var updateDistanceTraveled = function(){
		distance_traveled += speed;
		console.log(distance_traveled)
	}
	this.makeNoise = function(){
		console.log('vehicle noises');
	}
	this.move = function(){
		updateDistanceTraveled();
		console.log('various noises and such.');
	}
	this.checkMiles = function(){
		console.log('Current vehicle miles: ' + distance_traveled);
	}
}

var car = new VehicleConstructor('car', 4, 4, 10);
car.makeNoise();
car.move();
car.move();
car.checkMiles();

var bike = new VehicleConstructor('Schwin', 2, 1);
bike.makeNoise();

var sedan = new VehicleConstructor('Corolla', 4, 1);
console.log(sedan.pax);
sedan.makeNoise = function(){
	console.log('Sedan noises.');
}
sedan.makeNoise();

sedan.pickupPax = function(riders){
	this.pax += riders;
}
sedan.pickupPax(3);
console.log(sedan.pax);

var bus = new VehicleConstructor('Bus', 6, 35);
console.log(bus.pax);
bus.makeNoise = function(){
	console.log('Guy barfing in the back noises...Gross.')
}
bus.makeNoise();

bus.pickupPax = function(riders){
	this.pax += riders;
}
bus.pickupPax(10);
console.log(bus.pax);


