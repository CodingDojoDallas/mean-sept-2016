app.controller('showController', function($scope, friendsFactory, $route){
	
	var showFriend = function(){
		friendsFactory.getFriend($route.current.params.id, function(retFriend){
			$scope.friend = retFriend;
		});
	}
	showFriend();

	$scope.delete = function(id){
		friendsFactory.delete(id).then(function(){
			friendsFactory.index()
			.then(function(returnedData){
				$scope.friends = returnedData.data;
			})
		})
	}
})
