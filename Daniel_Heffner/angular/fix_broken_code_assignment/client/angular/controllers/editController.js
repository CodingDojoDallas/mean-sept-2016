app.controller('editController', ['$scope', 'userFactory', '$location', '$routeParams', function($scope, userFactory, $location, rParams) {
	
	var self = this;
	/* Public Properties */
	this.controlValue = "Current Name:";
	/* Public Methods */
	this.getUser = function() {
		userFactory.show(rParams.id, function passedToUserFactoryShow(user) {
			$scope.user = user;
		})
	}
	this.updateUser = function(){
		userFactory.update($scope.users, rParams.id, function passedToUserFactoryUpdate(userFromFactory){
			$scope.user = userFromFactory;
			self.controlValue = "Updated Name: "
		});
	}
	/* on load time */
	this.getUser();
}]);
