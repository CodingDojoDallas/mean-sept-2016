var idxCtrl = angular.module('app')
.controller('indexController', ['$scope','usersFactory', '$location', function($scope, usersFactory, $location) {

	$scope.regErrors = null;
	$scope.loginErrors = null;

	$scope.register = function(newuser){
		usersFactory.create(newuser)
		.then(function(res){
			$scope.regErrors = null;
			$scope.loginErrors = null;
			$location.url('/home');
		})
		.catch(function(res){
			$scope.regErrors = res.data.errors.errors;
		})	
	};

	$scope.login = function(user){
		usersFactory.login(user)
		.then(function(){
			$location.url('/home');
		})
		.catch(function(res){
			$scope.loginErrors = res.data.errors.login_reg.message;
			console.log('==================')
			console.log('login catch:')
			console.log(res.data.errors.login_reg.message);
			console.log(res);
			console.log('==================')
			console.log($scope.loginErrors);
		})
	};


}]);