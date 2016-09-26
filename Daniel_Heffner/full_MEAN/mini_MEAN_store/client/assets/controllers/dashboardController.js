app.controller('dashboardController', function($scope, customersFactory, productsFactory, ordersFactory){

	var self = this;

	this.search = {};
	$scope.limits = {
		product: 4,
		order: 3,
		customers: 3
	}
	this.products = [];
	this.orders = [];
	this.customers = [];

	customersFactory.getCustomers().then(function(ret){
		self.customers = ret;
		ordersFactory.getOrders().then(function(ret){
			self.orders = ret;
			productsFactory.getProducts().then(function(ret){
				self.products = ret;
				$scope.$apply();
			})
		})
	})

	this.more = function(key){
		switch(key){
			case 'product':
				$scope.limits.product += 4;
				break;
			case 'order':
				$scope.limits[key] += 2;
				break;
			case 'customers':
				$scope.limits[key] += 2;
				break;
		}
	}

})
