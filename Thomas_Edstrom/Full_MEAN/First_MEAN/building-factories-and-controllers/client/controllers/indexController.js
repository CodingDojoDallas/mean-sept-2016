angular.module('app')
.controller('indexController', ['$scope','friendsFactory', function($scope, friendsFactory) {

	$scope.friends = [];

	var index = function(){
	 	friendsFactory.index(function(returnedData){
			$scope.friends = returnedData;
			console.log($scope.friends);
		});
	};
	index();


}]);
