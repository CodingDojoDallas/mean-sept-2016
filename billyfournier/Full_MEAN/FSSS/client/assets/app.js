var myApp = angular.module('myApp', ['ngRoute']);
console.log('test');
myApp.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/home.html'
    })
    .when('/new',{
      templateUrl: 'partials/new.html',
      // contoller: ,
    })
    .when('/edit/:index', {
      templateUrl: 'partials/edit.html',
      controller: 'editController as EC'
    })
    .when('/show/:id', {
      templateUrl: 'partials/show.html',
      controller: 'newController as NC'
    })
    .otherwise({
      redirectTo: '/'
    });
});
