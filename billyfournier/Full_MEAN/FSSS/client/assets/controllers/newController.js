myApp.controller('newController', function($scope, friendsFactory, $location, $routeParams) {
  console.log('newContoller()');
  var self = this;

  var index = function(){
              friendsFactory.index(function(returnedData){
                console.log('index()');
                self.friends = returnedData.friends;
              });
  };
  index();

  self.create = function(newFriend){
    console.log('newController.create()');

    friendsFactory.create(newFriend, function(returnData){
      if(returnData.error){ console.log(returnData); }
      index();
      $location.path('/');
    });
  }

  self.delete = function(friend_id){
    console.log('delete()');
    friendsFactory.delete(friend_id, function(returnData){
      if(returnData.error){ console.log(returnData); }
      index();
    });
  }

  // console.log($routeParams);
  self.show = function(){
    console.log('show()');
    console.log($routeParams);
    friendsFactory.show($routeParams.id, function(returnData){
      console.log(returnData);
      console.log('test***');
      self.friend = returnData;
    })
  }

/*
  OUR $scope.create function goes here <-- $scope because we need to access this method
  with ng-submit or ng-click (from the form in the previous assignment).
  Want to all of the friends when we get back?  We can re-run index.
*/
});
