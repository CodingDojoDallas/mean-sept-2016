console.log('**** friends controller');
var mongoose = require('mongoose');
// var Friends = mongoose.model('friends');

// WE NEED TO ADD A FEW lines of code here!
// How does a controller talk to mongoose and get a model?
// Build out the methods in the friendsControllers below

var Friends = mongoose.model('Friends')     // Lets us use Friends table

function FriendsController(){
  this.index = function(req,res){
    console.log('index()');
    Friends.find({},function(err, friends){
      if(err){
        res.json({error: err});
      }
      else {
        res.json({friends: friends})
      }
    });
  };


  this.create = function(req,res){
    console.log('create()');
    console.log(req.body);
    var newFriend = new Friends(req.body);
    newFriend.save(function(err){
      if(err){
        res.json({error: err});
      }
      else {
        res.json({success: 'success'})
      }
    });
  };


  this.update = function(req,res){
    //your code here
    res.json({placeholder:'update'});
  };

  this.delete = function(req,res){

    console.log('delete()');
    console.log(req.params.id);
    Friends.remove({_id: req.params.id}, function(err){
      if(err){
        res.json({error: err});
      }
      else {
        res.json({success:'Successfully removed user'});
      }
    });
  };

  this.show = function(req,res){
    console.log(req.params.id);
    Friends.find({_id: req.params.id}, function(err, friend) {
      console.log('show()');
      console.log(JSON.stringify(friend));
      if(err){
        console.log('error');
        res.json({error: err});
      }
      else {
        console.log('return friend');
        res.json({friend: friend});
      }
    })
  };
}
friendsController = new FriendsController(); // what does this export?
module.exports = friendsController;

// module.exports = new FriendsController(); // what does this export?
