angular.module('app')
.controller('newController', ['$scope','friendsFactory', '$location', function($scope, friendsFactory, $location) {

	$scope.friends = [];

	var index = function(){
	 	friendsFactory.index(function(returnedData){
			$scope.friends = returnedData;
			console.log($scope.friends);
		});
	};
	index();

	$scope.create = function(friend, index){
		console.log(friend);
		friendsFactory.create(friend);
		$location.url('/');
	}


}]);