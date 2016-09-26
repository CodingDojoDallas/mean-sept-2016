angular.module('app')
.controller('dashboardController', ['$scope', '$location', 'customerFactory', 'productFactory', 'orderFactory', '$moment', function($scope, $location, customerFactory, productFactory, orderFactory, $momemt) {

	$scope.time = new Date();
	$scope.orderlimit = 3;
	$scope.custlimit = 3;
	$scope.prodlimit = 4;

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


}]);