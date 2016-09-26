angular.module('app', ['ngRoute', 'angular-momentjs'])
.config(function($momentProvider){
	$momentProvider
	.asyncLoading(false)
	.scriptUrl('//cdnjs.cloudflare.com/ajax/libs/moment.js/2.5.1/moment.min.js');
})
.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'partials/dashboard.html',
		controller: 'dashboardController',
		controllerAs: 'dashCtrl',
	})
	.when('/products', {
		templateUrl: 'partials/products.html',
		controller: 'productController',
		controllerAs: 'pdctCtrl'
	})
	.when('/orders', {
		templateUrl: 'partials/orders.html',
		controller: 'orderController',
		controllerAs: 'ordersCtrl'
	})
	.when('/customers', {
		templateUrl: 'partials/customers.html',
		controller: 'customerController',
		controllerAs: 'cstCtrl'
	})
	.otherwise({
		redirectTo: '/'
	});
});