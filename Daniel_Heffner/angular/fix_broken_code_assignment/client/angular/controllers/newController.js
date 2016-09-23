app.controller('newController', ['$scope','userFactory', '$location', function($scope, userFactory, $location) {
	var self = this;
	this.user = { 'name': '' };

	this.addUser = function(){
		userFactory.create(self.user);
		$location.url('/');
	}
}]);
