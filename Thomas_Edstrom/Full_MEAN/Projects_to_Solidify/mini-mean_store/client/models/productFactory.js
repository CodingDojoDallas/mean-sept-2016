angular.module('app')
.factory('productFactory', ['$http', '$q', function($http, $q) {

	var products = [];

	function productFactory(){
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

////////// Initialize Products in Factory
		this.index = function(){
			var newPromise = httpPromise($http.get('/products/index'))

			newPromise.then(function(ret){
				products = ret.data
				return ret
			})
			return newPromise
		};

////////// Create
		this.create = function(newproduct){
			var newPromise = httpPromise($http.post('/products/create', newproduct))

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
			var newPromise = httpPromise($http.delete('/products/delete' + id))
			newPromise.then(
				function(res){
					self.index();
				},
				function(err){
					return err;
				})
			return newPromise; 
		};

	return new productFactory();
}]);