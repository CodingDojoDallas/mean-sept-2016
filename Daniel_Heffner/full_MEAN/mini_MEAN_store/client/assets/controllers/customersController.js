// declare the controller
app.controller('customersController', function($scope, $location, customersFactory){

	// instead of $scope
	var self = this;

	//declare variables
	this.search = '';
	this.newCustomer = {};
	this.newErrors = {};
	this.customers = [];

	// get stuff from database
	customersFactory.getCustomers().then(function(ret){
		self.customers = ret;
		$scope.$apply();
	})

	// write function-ality 
	this.create = function(){
		this.newErrors = {};
		customersFactory.create(self.newCustomer)
			.then(function(data){
				self.newCustomer = {};
				if(data.data.errors){	/*Error Handling*/
					var errors = data.data.errors;
					for (key in errors){
						self.newErrors[key] = errors[key].message;
					}
				} else {  /* update customers on page */
					customersFactory.index().then(function(ret){
						self.customers = ret.data;
					})
				}
			})
	};
	this.delete = function(id){
		customersFactory.delete(id).then(function(ret){
			if(ret.errors){
				console.log(ret.errors);
			} else {
				customersFactory.index().then(function(ret){
					self.customers = ret.data;
				})
			}
		})
	}

})

