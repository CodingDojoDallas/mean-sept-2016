var mongoose = require('mongoose');
var FriendSchema = new mongoose.Schema({
	name: String,
})
var Friends = mongoose.model('Friends', FriendSchema);