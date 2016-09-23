console.log('Friends Factory');
myApp.factory('friendsFactory', function($http,$routeParams) {
  // constructor for our factory
  var friends = [];
  var friend = [];

  function FriendsFactory(){
    var _this = this;

    this.create = function(newFriend,callback){
      console.log('create() in Friends Factory');
      $http.post('/friends', newFriend).then(function(returned_data){
        // console.log(returned_data.data);
        if (typeof(callback) == 'function'){
          callback(returned_data.data);
        }
      });
    };

    this.update = function(){ // what parameters do we need?
      // Your code here
    };

    this.index = function(callback){
      //call this method if you want to update or set the friends variable
      $http.get('/friends').then(function(returned_data){
        friends = returned_data.data;
        callback(friends);
      });
    };
     //Note: this can be shortened to $http.get('/friends').then(callback);
     //But only if you only want to run the callback from the controller.
    this.delete = function(id, callback){// what parameters do we need?
        // Your code here
        console.log('delete() in Friend Factory');
        console.log(id);
        $http.delete('/friends/'+id).then(function(returned_data){
          console.log('response from delete()');
          if (typeof(callback) == 'function'){
            callback(returned_data.data);
          }
        });
    };
    this.show = function(id,callback){// what parameters do we need?
        // Your code here
        console.log(id + ' this is the id');
        $http.get('/friends/'+id).then(function(returned_data){
          console.log('response from show()');
          console.log(returned_data.data);
          if (typeof(callback) == 'function'){
            callback(returned_data.data.friend[0]);
          }
        })
    };

    // Sometimes you might not want to make a DB call, and just get the information stored in the factory.
    this.getFriends = function(callback){
      callback(friends);
    };


    this.getFriend = function(callback){
        console.log('getFriend()');

        console.log(friends);
        // friend = friends.friends[$routeParams.index];
        // console.log(friend);
        callback(friend);
    };

  }

  // console.log(new FriendsFactory());
  return new FriendsFactory();
});
