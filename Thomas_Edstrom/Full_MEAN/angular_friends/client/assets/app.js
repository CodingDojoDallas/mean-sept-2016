console.log('app is being used');


angular.module('app', ['ngRoute'])
.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'index.html',
		controller: 'FriendsController'
	})
	.when('/new', {
		templateUrl: 'partials/new.html',
		controller: 'newController'
	})
	.when('/edit', {
		templateUrl: 'partials/edit.html',
		controller: 'editController'
	})
	.otherwise({
		redirectTo: '/'
	});
});
