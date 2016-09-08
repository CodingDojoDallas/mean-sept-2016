function VehicleConstructor(name, wheels, pax){

	var vehicle = {};
	vehicle.name = name;
	vehicle.wheels = wheels;
	vehicle.pax = pax;
	vehicle.makeNoise = function(){
		console.log('Bike noises');
	}
	return vehicle;
}

var bike = VehicleConstructor('Schwin', 2, 1);
bike.makeNoise();

var sedan = VehicleConstructor('Corolla', 4, 1);
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

var bus = VehicleConstructor('Bus', 6, 35);
console.log(bus.pax);
bus.makeNoise = function(){
	console.log('Guy barfing in the back noises.')
}
bus.makeNoise();

bus.pickupPax = function(riders){
	this.pax += riders;
}
bus.pickupPax(10);
console.log(bus.pax);