angular.module('app')
.controller('editController', ['$scope','friendsFactory', '$routeParams', function($scope, friendsFactory, $routeParams) {

	// $scope.friends = [];
	$scope.friend = [];

	// var index = function(){
	//  	friendsFactory.index(function(returnedData){
	// 		$scope.friends = returnedData;
	// 	});
	// };
	// index();

	// (function($routeParams){
	// 	console.log($routeParams)
	// 	$scope.friend = $scope.friends[$routeParams]	
	// 	console.log($scope.friend)
	// })();
	

	// friendsFactory.show($routeParams.id, function(returnedData){
	// 	$scope.friend = returnedData;
	// 	console.log($scope.friend);
	// });

	// friendsFactory.show($scope.friends.data[id]._id, index);



	friendsFactory.getFriend($routeParams, function(data){
		$scope.friend = data;
	})

}]);