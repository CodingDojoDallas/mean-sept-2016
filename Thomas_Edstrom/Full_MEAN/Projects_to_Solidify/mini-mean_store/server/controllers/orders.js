require('../models/order.js');
require('../models/product.js');
var mongoose 		= require('mongoose'),
	Orders			= mongoose.model('Orders');
	Products		= mongoose.model('Products');


function ordersController(){
	this.index = function(req,res){
		return Orders.find({}, function(err, result){
			if(err){
				return res.json({errors: err});
			};
			res.json({data: result});
		})
	};

	this.create = function(req,res){
		return new Promise(function(resolve, reject){
			Products.findOne({_id: req.body.product._id}, function(err, result){
				if(req.body.qty > result.qty){
					reject({errors: "requested more than was available"})
				}else{
					result.qty -= req.body.qty;
					result.save(function(err, res){
						if(err){console.log(err)}
						else{console.log(res)};
					});
					resolve(res);
				}
			})	
		})
		.then(
			function(res){
				Orders.create(req.body, function(err, result){
					if(err){
						return res.json({errors: err});
					};
					res.json({data: result});
				})		
			},
			function(err){
				return res.json(err);
			}
		)
		
	};
}

module.exports = new ordersController();