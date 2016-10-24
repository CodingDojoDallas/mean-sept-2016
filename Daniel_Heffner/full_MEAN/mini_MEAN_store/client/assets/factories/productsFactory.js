// initialize the factory
app.factory('productsFactory', function($http){
	
	// variable for client-side data storage
	var products = [];

	// set up factory constructor
	function ProductsFactory(){};

	// set up methods using prototype syntax
	ProductsFactory.prototype.index = function() {
		return $http.get('/products').then(function(ret){
			products = ret.data;
			return ret;
		})
	};
	ProductsFactory.prototype.create = function(newProduct) {
		return $http.post('/products', newProduct).then(function(ret){
			return ret;
		})
	};
	ProductsFactory.prototype.delete = function(id) {
		return $http.delete('/products/' + id).then(function(ret){
			if (ret.error){
				console.log(ret.error);
			}
			return ret;
		})
	};
	ProductsFactory.prototype.update = function(id, change) {
		return $http.put('/products/' + id, {change: change}).then(function(ret){
			var updateRet = ret;
			$http.get('/products').then(function(ret){
				products = ret.data;
			})
			return updateRet;
		})
	};
	ProductsFactory.prototype.getProducts = function() {
		return new Promise(function(resolve, reject){
			if (products.length == 0){
				$http.get('/products').then(function(ret){
					products = ret.data;
					resolve(products);
				})
			} else {
				resolve(products);
			}
		})
	};

	// return the factory for use in controller
	return new ProductsFactory();
})

