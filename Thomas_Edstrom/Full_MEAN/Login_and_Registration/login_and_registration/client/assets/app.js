angular.module('app', ['ngRoute'])
.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'partials/index.html',
		controller: 'indexController',
		controllerAs: 'idxCtrl',
		// resolve: {
		// 	getFriends: idxCtrl.getFriends
		// }
	})
	.when('/home', {
		templateUrl: 'partials/home.html',
		controller: 'homeController',
		controllerAs: 'homeCtrl'
	})
	.otherwise({
		redirectTo: '/'
	});
});