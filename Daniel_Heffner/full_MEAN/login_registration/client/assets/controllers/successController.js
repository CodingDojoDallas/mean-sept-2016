app.controller('successController', function($scope, userFactory, $location){
	
	userFactory.checkUser(function(user){
		if (user.birthday){
			$scope.user = user;
		} else {
			$location.url('/');
		}
	})

	$scope.logout = function(){
		userFactory.logout(function(){
			$location.url('/');
		})
	}
	
})