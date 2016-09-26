angular.module('app', ['ngRoute'])
.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'index.html',
		controller: 'indexController'
	})
	.otherwise({
		redirectTo: '/'
	});
});