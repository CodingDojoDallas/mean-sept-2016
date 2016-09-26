angular.module('app')
.factory('orderFactory', ['$http', '$q', function($http, $q) {

	var orders = [];

	function orderFactory(){
		var self = this;

////////// httpPromise
		function httpPromise(httpRequest){
			var myPromise = $q.defer();
			httpRequest.then(
				function(res){
					if(res.data.errors){
						return myPromise.reject(res);
					}else{
						return myPromise.resolve(res);
					}
				},
				function(err){
					myPromise.reject(err);
				}
			);
			return myPromise.promise;
		}

////////// Initialize Orders in Factory
		this.index = function(){
			var newPromise = httpPromise($http.get('/orders/index'))

			newPromise.then(function(ret){
				orders = ret.data
				return ret
			})
			return newPromise
		};

////////// Create
		this.create = function(neworder){
			var newPromise = httpPromise($http.post('/orders/create', neworder))

			newPromise.then(
				function(res){
					self.index();
				},
				function(err){
					return err;
				})
			return newPromise;
		};
	}

////////// Destroy
		this.delete = function(id){
			var newPromise = httpPromise($http.delete('/orders/delete' + id))
			newPromise.then(
				function(res){
					self.index();
				},
				function(err){
					return err;
				})
			return newPromise; 
		};

	return new orderFactory();
}]);