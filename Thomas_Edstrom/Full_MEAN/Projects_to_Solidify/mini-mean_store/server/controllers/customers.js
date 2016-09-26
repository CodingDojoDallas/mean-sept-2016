require('../models/customer.js');
var mongoose 		= require('mongoose'),
	uniqueValidator = require('mongoose-unique-validator'),
	Customers 		= mongoose.model('Customers');


function customersController(){
	this.index = function(req,res){
		return Customers.find({}, function(err, result){
			if(err){
				return res.json({errors: err});
			};
			res.json({data: result});
		})
	};

	this.create = function(req,res){
		return Customers.create(req.body, function(err, result){
			if(err){
				return res.json({errors: err});
			};
			res.json({data: result});
		})
	};

	this.delete = function(req,res){
		Customers.remove({"_id": req.params.id}, function(err, result){
			if(err){
				return res.json({errors: err});
			};
			res.json({data: result});
		});
	};
}

module.exports = new customersController();