angular.module('app')
.controller('homeController', ['$scope','usersFactory', '$location', function($scope, usersFactory, $location) {

	$scope.getCurrentUser = function(){
		usersFactory.getUser(function(data){
			$scope.current_user = data.data.data;
		})
		console.log("==================")
		console.log($scope.current_user);
	}
	$scope.getCurrentUser();

	
	// console.log('==================')
	// console.log('THIS IS THE SESSION USER')
	// console.log(req.session.user)
	// console.log('==================')
}]);