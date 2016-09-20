app.controller('newController', function($scope, friendsFactory, $location){

	var self = this;
	this.friend = {}

	var index = function(){
		friendsFactory.index(function(returnedData){
			$scope.friends = returnedData;
		});
	};
	index();

	this.create = function(){
		friendsFactory.create(self.friend, function(newFriend){
			var url = '/show/' + newFriend._id;
			$location.url(url);
		});
	};
})
