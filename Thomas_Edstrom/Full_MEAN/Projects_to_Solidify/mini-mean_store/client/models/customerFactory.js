angular.module('app')
.factory('customerFactory', ['$http', '$q', function($http, $q) {

	var customers = [];

	function customerFactory(){
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

////////// Initialize Customers in Factory
		this.index = function(){
			var newPromise = httpPromise($http.get('/customers/index'))

			newPromise.then(function(ret){
				customers = ret.data
				return ret
			})
			return newPromise
		};

////////// Create
		this.create = function(newcustomer){
			var newPromise = httpPromise($http.post('/customers/create', newcustomer))

			newPromise.then(
				function(res){
					return self.index();
				},
				function(err){
					return err;
				})
			return newPromise;
		};
	

////////// Destroy
		this.delete = function(id){
			var newPromise = httpPromise($http.post('/customers/delete/' + id))
			newPromise.then(
				function(res){
					return self.index();
				},
				function(err){
					return err;
				})
			return newPromise; 
		};
	}
	return new customerFactory();
}]);