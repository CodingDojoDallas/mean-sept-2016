angular.module('app')
.controller('productController', ['$scope', '$location', 'customerFactory', 'productFactory', 'orderFactory', function($scope, $location, customerFactory, productFactory, orderFactory) {

	$scope.newProduct = {image: 'http://'};

	var index = function(){
		productFactory.index()
		.then(function(res){
			$scope.products = res.data.data;
			console.log($scope.products);
		})
	};
	index();


	$scope.create = function(newProduct){
		productFactory.create(newProduct)
		.then(function(res){
			index();	
		})
		$scope.newProduct = {image: 'http://'};
	}


}]);