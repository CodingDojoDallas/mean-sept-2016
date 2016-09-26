// Require mongoose and use it to get relevant models
var mongoose = require('mongoose'),
	Order = mongoose.model('Orders');

// Declare the controller
function OrdersController(){};

// Controller methods as prototypes (following good OOP practice)
OrdersController.prototype.index = function(req, res){
	Order.find({}, function(err, data){
		if(err){
			res.json(err);
		} else {
			res.json(data);
		}
	});
}
OrdersController.prototype.create = function(req, res){
	var newOrder = new Order({ customer: req.body.customer, product: req.body.product, quantity: req.body.quantity })
	newOrder.save(function(err, data){
		if(err){
			res.json(err);
		} else {
			res.json(data);
		}
	});
}
OrdersController.prototype.recent = function(req, res){
	Order.find({}).sort('-createdAt').limit(3).exec(function(err, data){
		if(err){
			res.json(err);
		} else {
			res.json(data);
		}
	})
}
OrdersController.prototype.delete = function(req, res){
	Order.remove({_id: req.params.id}, function(err, data){
		if(err){
			res.json(err);
		} else {
			res.json(data);
		}
	})
}

// Finally, export the controller
module.exports = new OrdersController();
