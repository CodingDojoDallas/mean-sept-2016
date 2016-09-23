angular.module('app')
.factory('friendsFactory', ['$http', function($http) {

	var friends = [];
	var friend = [];

	function FriendsFactory(){

		var _this = this;

		this.create = function(newfriend,callback){
			$http.post('/friends', newfriend)
			.then(function(returned_data){
				if (typeof(callback) == 'function'){
					callback(returned_data.data);
				}
			});
		};

		this.update = function(){ // what parameters do we need?
		  // Your code here
		};

		this.index = function(callback){
			$http.get('/friends')
			.then(function(returned_data){
				friends = returned_data.data;
				callback(friends);
			})
			.catch(function(err){
				console.log(err);
			})
		};

		this.delete = function(){// what parameters do we need?
			// Your code here
		};

		this.show = function(){// what parameters do we need?
			// Your code here
		};

		// Sometimes you might not want to make a DB call, and just get the information stored in the factory.
		this.getFriends = function(callback){
			callback(friends);
		};

		this.getFriend = function(callback){
			callback(friend);
		};

	}
	return new FriendsFactory();
}]);