angular.module('app')
.controller('customerController', ['$scope', '$location', 'customerFactory', 'productFactory', 'orderFactory', function($scope, $location, customerFactory, productFactory, orderFactory) {

	$scope.error = null;

	var index = function(){
		customerFactory.index()
		.then(function(res){
			$scope.customers = res.data.data;
		})
	};
	index();


	$scope.create = function(newCustomer){
		customerFactory.create(newCustomer).then(
			function(res){
				index();
				$scope.newCustomer = {};
				$scope.error = null;
			},
			function(err){
				$scope.error = "Sorry, that user already exists"
				console.log(err)
			});
	}


	$scope.delete = function(id){
		custID = $scope.customers[id]._id;
		customerFactory.delete(custID).then(function(res){
			index();	
		})
	}

}]);