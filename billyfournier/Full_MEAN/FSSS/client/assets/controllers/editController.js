myApp.controller('editController', ['$scope','friendsFactory', function($scope, friendsFactory) {
  var self = this;
  /*
    GET A FRIEND FROM THE FACTORY, This is a one time thing when we load this partial -
    so we didn't set a variable so we could reuse it -
    we just run the friendsFactory method directly.
  */

  friendsFactory.getFriend(function(returnedData){
    console.log(this.friend);
  });
  /*
    OUR $scope.update function goes here <-- $scope because we need to access this method
    with ng-submit or ng-click (from the form in the previous assignment).  Want to see
    all of the friends when we get back including the updated on??
    See Index in the previous controller.
  */
}]);
