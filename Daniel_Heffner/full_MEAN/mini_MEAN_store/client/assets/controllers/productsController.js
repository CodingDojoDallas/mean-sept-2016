// declare the controller
app.controller('productsController', function($scope, $location, productsFactory){

	// instead of $scope
	var self = this;

	//declare variables
	this.search = {};
	this.newProduct = {};
	this.formErrors = {};
	this.updates = {};
	this.updateErrors = {};
	this.products = [];

	// get stuff from database
	productsFactory.getProducts().then(function(ret){
		self.products = ret;
		$scope.$apply();
	})

	// write function-ality 
	this.create = function(){
		this.formErrors = {};
		productsFactory.create(self.newProduct)
			.then(function(data){
				if(data.data.errors){	/*Error Handling*/
					var errors = data.data.errors;
					for (key in errors){
						self.formErrors[key] = errors[key].message;
					}
				} else {  /* update products on page */
					productsFactory.index().then(function(ret){
						self.products = ret.data;
						self.newProduct = {};
					})
				}
			})
	};
	this.update = function(id){
		this.updateErrors = {};
		var thisID = id;
		productsFactory.update(id, this.updates[id])
			.then(function(ret){
				if(ret.errors){
					self.updateErrors[thisID] = ret.errors.quantity.message;
				} else {
					productsFactory.index().then(function(ret){
						self.products = ret.data;
						self.updates[thisID] = '';
					})
				}
			})
	}

})
