
var mongoose = require('mongoose');

module.exports = function(app){

  app.get("/", function(req, res){
  	// Message.find({}, false, true).populate('_comments').exec(function(err, messages){
    Message.find({}).populate('_comments').exec(function(err, messages){

  	      res.render('index.ejs', {messages: messages});
  	});
  });

  app.post("/message", function(req, res){
  	var newMessage = new Message({name: req.body.name, message: req.body.message});
  	newMessage.save(function(err){
  		if(err){
  			console.log(err);
  			res.render('index.ejs', {errors: newMessage.errors});
  		} else {
  			console.log("success");
  			res.redirect('/');
  		}
  	});
  });

  app.post("/comment/:id", function(req, res){
  	var message_id = req.params.id;
  	Message.findOne({_id: message_id}, function(err, message){
  		var newComment = new Comment({name: req.body.name, text: req.body.comment});
  		newComment._message = message._id;
  		Message.update({_id: message._id}, {$push: {"_comments": newComment}}, function(err){

  		});
  		newComment.save(function(err){
  			if(err){
  				console.log(err);
  				res.render('index.ejs', {errors: newComment.errors});
  			} else {
  				console.log("comment added");
  				res.redirect("/");
  			}
  		});
  	});
  });
};
