require('../models/product.js');
var mongoose 		= require('mongoose'),
	Products		= mongoose.model('Products');


function productsController(){
	this.index = function(req,res){
		return Products.find({}, function(err, result){
			if(err){
				return res.json({errors: err});
			};
			res.json({data: result});
		})
	};

	this.create = function(req,res){
		return Products.create(req.body, function(err, result){
			if(err){
				return res.json({errors: err});
			};
			res.json({data: result});
		})
	};
}

module.exports = new productsController();