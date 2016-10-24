// Require mongoose and use it to get relevant models
var mongoose = require('mongoose'),
	Product = mongoose.model('Product');

// Declare the controller
function ProductsController(){};

// Controller methods as prototypes (following good OOP practice)
ProductsController.prototype.index = function(req, res){
	Product.find({}, function(err, data){
		if(err){
			res.json(err);
		} else {
			res.json(data);
		}
	});
}
ProductsController.prototype.create = function(req, res){
	var newProduct = new Product({ 
		name: req.body.name,
		imageURL: req.body.imageURL,
		description: req.body.description,
		quantity: req.body.quantity
	})
	newProduct.save(function(err, data){
		if(err){
			res.json(err);
		} else {
			res.json(data);
		}
	});
}
ProductsController.prototype.recent = function(req, res){
	Product.find({}).sort('-createdAt').limit(5).exec(function(err, data){
		if(err){
			res.json(err);
		} else {
			res.json(data);
		}
	})
}
ProductsController.prototype.update = function(req, res){
	var updateQty;
	Product.findOne({_id: req.params.id}, function(err, data){
		if(err){
			res.json(err);
		} else {
			updateQty = data.quantity;
		}
	})
	.then(function(){
		console.log('math: ' + updateQty + ' + ' + req.body.change + ' = ' + (updateQty+req.body.change));
		updateQty += req.body.change;
		Product.findOneAndUpdate({_id: req.params.id}, {quantity: updateQty}, {runValidators: true}, function(err, data){
			if(err){
				res.json(err);
			} else {
				res.json(data);
			}
		})
	})
}
ProductsController.prototype.delete = function(req, res){
	Product.remove({_id: req.params.id}, function(err, data){
		if(err){
			res.json(err);
		} else {
			res.json(data);
		}
	})
}

// Finally, export the controller
module.exports = new ProductsController();
