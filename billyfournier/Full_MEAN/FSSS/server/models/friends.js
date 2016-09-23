console.log('**** model linked');
var mongoose = require('mongoose');

var FriendsSchema = new mongoose.Schema({
  fname: String,
  lname: String
})
var Friends = mongoose.model('Friends', FriendsSchema);
