var idxCtrl = angular.module('app')
.controller('indexController', ['$scope','friendsFactory', '$timeout', function($scope, friendsFactory, $timeout) {

	// $scope.friends = data;

	// Populate $scope.friends
	var getFriends = function(){
		friendsFactory.getFriends(function(data){
			console.log('internal method')
			$scope.friends = data.data
			console.log($scope.friends)
		})
	}

	// var getFriends = function(){
	// 	$scope.friends = data.data
	// 	console.log('internal method')
	// }
	getFriends();

	$scope.delete = function(id){
		friendsFactory.delete($scope.friends[id]._id);
		getFriends();
	}

}]);

// var data = [];

// idxCtrl.getFriends = function(friendsFactory){
// 	return new Promise((resolve, reject) => {
// 		friendsFactory.getFriends(function(data){
// 			console.log('external method');
// 			data = data.data;
// 			console.log(data);
// 			return resolve(data);
// 		})
// 	})
// }