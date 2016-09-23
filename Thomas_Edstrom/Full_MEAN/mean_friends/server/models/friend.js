var mongoose = require('mongoose');
var FriendSchema = new mongoose.Schema({
	first_name: String,
	last_name: String,
	birthday: Date,
})
var Friends = mongoose.model('Friends', FriendSchema);