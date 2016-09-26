// initialize the factory
app.factory('customersFactory', function($http){
	
	// variable for client-side data storage
	var customers = [];

	// set up factory constructor
	function CustomersFactory(){};

	// set up methods using prototype syntax
	CustomersFactory.prototype.index = function() {
		return $http.get('/customers').then(function(ret){
			customers = ret.data;
			return ret;
		})
	};
	CustomersFactory.prototype.recent = function() {
		return $http.get('/customers/recent').then(function(ret){
			if (ret.errors){
				console.log(ret);
				return ret;
			} else {
				return ret;
			}
		})
	};
	CustomersFactory.prototype.create = function(newCustomer) {
		return $http.post('/customers', newCustomer).then(function(ret){
			return ret;
		})
	};
	CustomersFactory.prototype.delete = function(id) {
		return $http.delete('/customers/' + id).then(function(ret){
			if (ret.error){
				console.log(ret.error);
			}
			return ret;
		})
	};
	CustomersFactory.prototype.getCustomers = function() {
		return new Promise(function(resolve, reject){
			if (customers.length == 0){
				$http.get('/customers').then(function(ret){
					customers = ret.data;
					resolve(customers);
				})
			} else {
				resolve(customers);
			}
		})
	};

	// return the factory for use in controller
	return new CustomersFactory();
})
