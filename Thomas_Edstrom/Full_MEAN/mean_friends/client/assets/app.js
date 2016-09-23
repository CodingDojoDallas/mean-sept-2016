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
	.when('/new', {
		templateUrl: 'partials/new.html',
		controller: 'newController',
		controllerAs: 'newCtrl'
	})
	.when('/edit/:id', {
		templateUrl: 'partials/edit.html',
		controller: 'editController',
		controllerAs: 'editCtrl'
	})
	.otherwise({
		redirectTo: '/'
	});
});