// declare the controller
app.controller('ordersController', function($scope, $location, ordersFactory, customersFactory, productsFactory){

	// instead of $scope
	var self = this;

	//declare variables
	this.search = '';
	this.customers = [];
	this.orders = [];
	this.products = [];

	//new product form
	this.newOrder = {};
	this.formErrors = {};

	// get stuff from databases
	ordersFactory.getOrders().then(function(ret){
		self.orders = ret;
	})
	customersFactory.getCustomers().then(function(ret){
		self.customers = ret;
	})
	productsFactory.getProducts().then(function(ret){
		self.products = ret;
		$scope.$apply();
	})

	// write function-ality 
	this.create = function(){
		this.formErrors = {};
		if(!(this.newOrder.quantity)){
			this.formErrors.quantity = 'Orders must be for at least 1 quantity';
		}
		if(!(this.newOrder.product)){
			this.formErrors.product = 'Orders must have a product';
		}
		if(!(this.newOrder.customer)){
			this.formErrors.customer = 'Orders must have a customer';
		}
		if(this.formErrors.customer || this.formErrors.product || this.formErrors.quantity){
			return;
		}
		if(this.newOrder.product.quantity < this.newOrder.quantity){
			this.formErrors.quantity = 'Can\'t order more than we have!';
			return;
		}
		var thisID = self.newOrder.product._id;
		var thisOrder = {
			product: self.newOrder.product.name,
			customer: self.newOrder.customer.name,
			quantity: self.newOrder.quantity
		}
		ordersFactory.create(thisOrder)
			.then(function(data){
				if(data.data.errors){
					var errors = data.data.errors;
					for (key in errors){
						self.formErrors[key] = errors[key].message;
						console.log(key + ': ' + errors[key].message);
					}
				} else {
					productsFactory.update(thisID, -thisOrder.quantity).then(function(ret){
						if(ret.data.errors){
							ordersFactory.delete(thisID).then(function(ret){
								if(ret.data.errors){
									console.log(ret.data.errors);
								}
							})
						} else {
							ordersFactory.index().then(function(ret){
								self.orders = ret.data;
							})
						}
					})
				}
			})
	};
})
