app.factory('friendsFactory', function($http, $q){
	var friends = [];
	var friend = [];

	var factory = {};

	factory.create = function(newfriend, callback){
		var newret;
		$http.post('/friends', newfriend)
			.then(function(ret){
				newret = ret;
			})
			.then(factory.index())
			.then(function(){
				if (typeof(callback) == 'function'){
						callback(newret.data);
				}
			})
	};
	factory.update = function(info, callback){
		var url = '/friends/' + info._id;
		$http.put(url, info).then(function(ret){
			if(ret.error){
				console.log(ret.error);
			} else {
				callback(ret);
			}
		});
	};
	factory.index = function(){
		return $http.get('/friends').then(function(returned_data){
				friends = returned_data.data;
				return returned_data;
			});
	};
	factory.delete = function(id){
		return $http.delete('/friends/' + id)
			.then(function(err){
				if(err.error){
					console.log(err.error);
				}
				return err;
			})
			// .then(factory.index())
			// .then(function(index_data){
			// 	console.log(index_data);
			// 	if (typeof(callback) == 'function'){
			// 		callback(index_data);
			// 	}
			// })
	};
	factory.getFriend = function(id, callback){
		if (friends.length == 0){
			factory.index().then(function(){
				factory.getFriend(id, callback);
			});
		} else {
			for (var i = 0; i < friends.length; i++){
				if (friends[i]._id == id){
					friend = friends[i];
					break;
				}
			}
			callback(friend);
		}
	};

	return factory;
});
