// initialize the factory
app.factory('ordersFactory', function($http){
	
	// variable for client-side data storage
	var orders = [];

	// set up factory constructor
	function OrdersFactory(){};

	// set up methods using prototype syntax
	OrdersFactory.prototype.index = function() {
		return $http.get('/orders').then(function(ret){
			orders = ret.data;
			return ret;
		})
	};
	OrdersFactory.prototype.recent = function() {
		return $http.get('/orders/recent').then(function(ret){
			if (ret.errors){
				console.log(ret);
				return ret;
			} else {
				return ret;
			}
		})
	};
	OrdersFactory.prototype.create = function(newOrder) {
		return $http.post('/orders', newOrder).then(function(ret){
			return ret;
		})
	};
	OrdersFactory.prototype.getOrders = function() {
		return new Promise(function(resolve, reject){
			if (orders.length == 0){
				$http.get('/orders').then(function(ret){
					orders = ret.data;
					resolve(orders);
				})
			} else {
				resolve(orders);
			}
		})
	};
	OrdersFactory.prototype.delete = function(id) {
		return $http.delete('/orders' + id).then(function(ret){
			return ret;
		})
	};

	// return the factory for use in controller
	return new OrdersFactory();
})
