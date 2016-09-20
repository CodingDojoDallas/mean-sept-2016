console.log('friends controller');

var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');

function FriendsController(){
	this.index = function(req, res){
		Friend.find({}, function(err, friends){
			if (err){
				console.log(err);
				res.json({error: err});
			} else {
				res.json(friends);
			}
		})
	};
	this.create = function(req, res){
		var newFriend = new Friend({first_name: req.body.first_name, last_name: req.body.last_name, birthday: req.body.birthday});
		newFriend.save(function(err, friend){
			if (err){ 
				console.log(err);
				res.json({error: err});
			} else {
				res.json(friend);
			}
		})
	};
	this.update = function(req, res){
		Friend.update({_id: req.params.id}, {first_name: req.body.first_name, last_name: req.body.last_name, birthday: req.body.birthday}, function(err, friend){
			if (err){
				console.log(err);
				res.json({error: err});
			} else {
				console.log(friend);
				res.json(friend);
			}
		})
	};
	this.delete = function(req, res){
		Friend.remove({_id: req.params.id}, function(err){
			if (err){
				console.log(err);
				res.json({error: err});
			} else {
				res.json({error: null});
			}
		})
	};
	this.show = function(req, res){
		Friend.find({_id: req.params.id}, function(err, friend){
			if (err){
				console.log(err);
				res.json({error: err});
			} else {
				friend = friend[0];
				res.json(friend);
			}
		})
		res.json({placeholder: 'show'});
	};
}
module.exports = new FriendsController();
