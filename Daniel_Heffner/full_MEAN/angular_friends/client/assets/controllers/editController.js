app.controller('editController', function($scope, friendsFactory, $location, $route){

	friendsFactory.getFriend($route.current.params.id, function(retFriend){
		$scope.friend = retFriend;
		var bday = new Date(retFriend.birthday);
		$scope.friend.birthday = bday;
	})

	this.update = function(){
		friendsFactory.update($scope.friend, function(returnFriend){
			$scope.friend = returnFriend;
			$location.url('/');
		})
	}

})
