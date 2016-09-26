// Require mongoose and use it to get relevant models
var mongoose = require('mongoose'),
	Customer = mongoose.model('Customer');

// Declare the controller
function CustomersController(){};

// Controller methods as prototypes (following good OOP practice)
CustomersController.prototype.index = function(req, res){
	Customer.find({}, function(err, data){
		if(err){
			res.json(err);
		} else {
			res.json(data);
		}
	});
}
CustomersController.prototype.create = function(req, res){
	var newCustomer = new Customer({ name: req.body.name })
	newCustomer.save(function(err, data){
		if(err){
			res.json(err);
		} else {
			res.json(data);
		}
	});
}
CustomersController.prototype.recent = function(req, res){
	Customer.find({}).sort('-createdAt').limit(3).exec(function(err, data){
		if(err){
			res.json(err);
		} else {
			res.json(data);
		}
	})
}
CustomersController.prototype.delete = function(req, res){
	Customer.remove({_id: req.params.id}, function(err, data){
		if(err){
			res.json(err);
		} else {
			res.json(data);
		}
	})
}

// Finally, export the controller
module.exports = new CustomersController();
