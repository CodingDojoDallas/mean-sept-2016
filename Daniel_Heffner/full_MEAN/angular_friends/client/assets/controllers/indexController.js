app.controller('indexController', function($scope, friendsFactory, $location){

	this.search = {};

	var index = function(){
		friendsFactory.index()
			.then(function(returnedData){
				$scope.friends = returnedData.data;
			});
	};
	index();

	$scope.delete = function(id){
		friendsFactory.delete(id).then(function(){
			friendsFactory.index()
			.then(function(returnedData){
				$scope.friends = returnedData.data;
			})
		})
	}
})
