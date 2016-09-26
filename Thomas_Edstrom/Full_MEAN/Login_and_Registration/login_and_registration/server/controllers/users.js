var mongoose = require('mongoose');
require('../models/user.js');
var Users = mongoose.model('Users');
var bcrypt = require('bcrypt');


function usersController(){
	// this.index = function(req,res){
	// 	Users.find({}, function(err, result){
	// 		if(err){
	// 			console.log(err);
	// 			res.json({errors: err});
	// 			return;
	// 		};
	// 		res.json({data: result});
	// 	})
	// };
	this.create = function(req,res){
		return Users.create(req.body, function(err, result){
			if(err){
				console.log("==================")
				console.log(err);
				return res.json({errors: err});
			};
			res.json({data: result});
		})
	};


	this.login = function(req,res){
		Users.findOne({email: req.body.email}, function(err, result){
			if(err){
				return res.json({errors: err});
			}
			if (bcrypt.compareSync(req.body.password, result.password)){
				return res.json({data: result})
			} else {
				return res.json({
					errors: {
						login_reg: {
							message: "user name and/or password is invalid",
							kind: "what didn't work",
							path: "reference to the schema's name",
							value: "cause of the initial error"
						}
					},
					name: "Validation error"
				});		
			};
		});
	};

	// this.update = function(req,res){
	// 	Users.update({ id: req.params.id }, req.body, function(err, result){
	// 		if(err){
	// 			console.log(err);
	// 			res.json({errors: err});
	// 			return;
	// 		};
	// 		res.json({data: result});
	// 	});
	// };
	// this.delete = function(req,res){
	// 	Users.remove({"_id": req.params.id}, function(err, result){
	// 		if(err){
	// 			console.log(err);
	// 			res.json({errors: err});
	// 			return;
	// 		};
	// 		res.json({data: result});
	// 	});
	// };
	// this.show = function(req,res){
	// 	Users.find({ "_id": req.params.id }, function(err, result) {
	// 		if(err){
	// 			console.log(err);
	// 			res.json({errors: err});
	// 			return;
	// 		};
	// 		res.json({data: result[0]});
	// 	});
	// };
}

module.exports = new usersController();