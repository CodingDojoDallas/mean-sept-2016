angular.module('app')
.factory('usersFactory', ['$http', '$q', function($http, $q) {

	// var users = [];

	var current_user = null;

	function UsersFactory(){
		var self = this;
////////// httpPromise
		function httpPromise(httpRequest){
			var myPromise = $q.defer();
			httpRequest
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
			return myPromise.promise;
		}


////////// Create
		this.create = function(newuser){
			var newPromise = httpPromise($http.post('/register', newuser))
			newPromise.then(function(res){
				current_user = res;
				console.log("==================")
				console.log(current_user)
				console.log("==================")
			})
			.catch(function(error){
				console.log(error)
			})
			console.log(newPromise)
			return newPromise;
		};


////////// Login
		this.login = function(user){
			var newPromise = httpPromise($http.post('/login', user))
			newPromise.then(function(res){
				current_user = res;
				console.log("==================")
				console.log(current_user)
				console.log("==================")
				return res;
			})
			.catch(function(error){
				console.log(error)
			})
			return newPromise;
		};
		
////////// Get User
		this.getUser = function(callback){
			callback(current_user);
		}


////////// Initialize Users in Factory
		// this.index = function(){
		// 	return $http.get('/users')
		// 	.then(function(returned_data){
		// 		users = returned_data.data
		// 		return returned_data
		// 	})
		// };

////////// Get all Users
		// this.getUsers = function(callback){
		// 	if(users.length === 0){
		// 		self.index()
		// 		.then(function(){
		// 			callback(users);
		// 		});	
		// 	}else{
		// 		callback(users);
		// 	};
		// };

////////// Get one User
		// this.getUser = function(idx, callback){
		// 	if(users.length === 0){
		// 		Promise(self.index())
		// 		.then(function(){
		// 			callback(users[idx]);
		// 		})
		// 	}else{
		// 		callback(users[idx]);
		// 	}
		// };





////////// Update
		// this.update = function(){ // what parameters do we need?
		//   // Your code here
		// };

////////// Destroy
		// this.delete = function(id){
		// 	users = [];
		// 	return httpPromise($http.delete('/users/' + id))
		// };

////////// Show
		// this.show = function(id, callback){
		// 	$http.get('/users/' + id)
		// 	.then(function(returned_data){
		// 		user = returned_data.data;
		// 		callback(user);
		// 	})
		// 	.catch(function(err){
		// 		console.log(err);
		// 	})
		// };


	}
	return new UsersFactory();
}]);