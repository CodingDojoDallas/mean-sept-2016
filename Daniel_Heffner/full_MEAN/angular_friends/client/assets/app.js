var app = angular.module('friendsApp', ['ngRoute']);

app.config(function ($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'partials/index.html',
			controller: 'indexController',
			controllerAs: 'iC'
		})
		.when('/new', {
			templateUrl: 'partials/new.html',
			controller: 'newController',
			controllerAs: 'nC'
		})
		.when('/edit/:id', {
			templateUrl: 'partials/edit.html',
			controller: 'editController',
			controllerAs: 'eC'
		})
		.when('/show/:id', {
			templateUrl: 'partials/show.html',
			controller: 'showController'
		})
		.otherwise({
			redirectTo: '/'
		})
})
