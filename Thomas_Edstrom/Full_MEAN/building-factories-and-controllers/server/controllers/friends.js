var mongoose = require('mongoose');
require('../models/friend.js');
var Friends = mongoose.model('Friends')

function friendsController(){
	this.index = function(req,res){
		Friends.find({}, function(err, result){
			if(err){ console.log(err) };
			res.json({data: result});
		})
	};
	this.create = function(req,res){
		Friends.create(req.body, function(err, result){
			if(err) { console.log(err) };
			res.json({data: result})
		});
	};
	this.update = function(req,res){
		Rabbit.update({ _id: req.params.id }, req.body, function(err, result){
			if (err) { console.log(err); }
			res.json({data: result})
		});
	};
	this.delete = function(req,res){
		Friends.remove({ _id: req.params.id }, function(err, result){
			if(err) { console.log(err) };
			res.json({data: result})
		});
	};
	this.show = function(req,res){
		Friends.find({ _id: req.params.id }, function(err, result) {
			if (err) { console.log(err); }
			res.json({ data: result[0] });
		});
	};
}

module.exports = new friendsController();