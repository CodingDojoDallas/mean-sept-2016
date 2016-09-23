angular.module('app', ['ngRoute'])
.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'partials/index.html',
		controller: 'indexController',
		controllerAs: 'idxCtrl'
	})
	.when('/new', {
		templateUrl: 'partials/new.html',
		controller: 'newController',
		controllerAs: 'newCtrl'
	})
	.when('/edit', {
		templateUrl: 'partials/edit.html',
		controller: 'editController',
		controllerAs: 'editCtrl'
	})
	.otherwise({
		redirectTo: '/'
	});
});