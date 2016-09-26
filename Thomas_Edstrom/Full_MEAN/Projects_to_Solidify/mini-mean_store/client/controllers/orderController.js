angular.module('app')
.controller('orderController', ['$scope', '$location', 'customerFactory', 'productFactory', 'orderFactory', function($scope, $location, customerFactory, productFactory, orderFactory) {

	$scope.error = null;

	var index = function(){
		customerFactory.index()
		.then(function(res){
			$scope.customers = res.data.data;
		})
		productFactory.index()
		.then(function(res){
			$scope.products = res.data.data;
		})
		orderFactory.index()
		.then(function(res){
			$scope.orders = res.data.data;
		})
	};
	index();

	$scope.create = function(newOrder){
		var order = {};
		order.product = $scope.products[newOrder.product]
		order.customer = $scope.customers[newOrder.customer]
		order.qty = newOrder.qty
		orderFactory.create(order).then(
			function(res){
				index();
				$scope.newOrder = {};
			},
			function(err){
				$scope.error = err.data.errors;
				console.log("===========controller error")
				console.log(err.data.errors)
			}
		);
	};	


}]);