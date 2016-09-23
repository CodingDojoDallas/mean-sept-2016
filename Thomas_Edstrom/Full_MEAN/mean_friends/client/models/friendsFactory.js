angular.module('app')
.factory('friendsFactory', ['$http', '$q', function($http, $q) {

	var friends = [];

	function FriendsFactory(){

		var self = this;

////////// httpPromise
		function httpPromise(httpRequest){
			var myPromise = $q.defer()
			return httpRequest
			.then(function(response){
				if(response.data.errors){
					return myPromise.reject(response);
				}else{
					return myPromise.resolve(response);
				}
			})
			.catch(function(response){
				myPromise.reject(response);
			})
		}
		

////////// Initialize Friends in Factory
		this.index = function(){
			return $http.get('/friends')
			.then(function(returned_data){
				friends = returned_data.data
				return returned_data
			})
		};

////////// Get all Friends
		this.getFriends = function(callback){
			if(friends.length === 0){
				self.index()
				.then(function(){
					callback(friends);
				});	
			}else{
				callback(friends);
			};
		};

////////// Get one Friend
		this.getFriend = function(idx, callback){
			if(friends.length === 0){
				Promise(self.index())
				.then(function(){
					callback(friends[idx]);
				})
			}else{
				callback(friends[idx]);
			}
			console.log(friends)
			console.log(friends.data[idx])
		};




////////// Create
		this.create = function(newfriend){
			friends = [];
			return httpPromise($http.post('/friends', newfriend))
		};

////////// Update
		this.update = function(){ // what parameters do we need?
		  // Your code here
		};

////////// Destroy
		this.delete = function(id){
			friends = [];
			return httpPromise($http.delete('/friends/' + id))
		};

////////// Show
		this.show = function(id, callback){
			$http.get('/friends/' + id)
			.then(function(returned_data){
				friend = returned_data.data;
				callback(friend);
			})
			.catch(function(err){
				console.log(err);
			})
		};


	}
	return new FriendsFactory();
}]);