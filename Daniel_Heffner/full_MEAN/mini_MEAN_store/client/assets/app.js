// Create the angular module, inject ngRoute to handle partials
var app = angular.module('miniStoreApp', ['ngRoute']);

// Configure the angular routes (partials and controllers)
app.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: '/partials/dashboard.html',
			controller: 'dashboardController',
			controllerAs: 'dC'
		})
		.when('/orders', {
			templateUrl: '/partials/orders.html',
			controller: 'ordersController',
			controllerAs: 'oC'
		})
		.when('/customers', {
			templateUrl: '/partials/customers.html',
			controller: 'customersController',
			controllerAs: 'cC'
		})
		.when('/products', {
			templateUrl: '/partials/products.html',
			controller: 'productsController',
			controllerAs: 'pC'
		})
		.otherwise({
			redirectTo: '/'
		})
})
