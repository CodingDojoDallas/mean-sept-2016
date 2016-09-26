app.factory('userFactory', function($http){
	var user = {};

	function UserFactory(){}

	UserFactory.prototype.register = function(newUser){
		return $http.post('/register', newUser).then(function(ret){
			if(ret.errors){
				return ret;
			} else {
				user = ret.data;
				return user;
			}
		})
	}

	UserFactory.prototype.checkUser = function(callback){
		callback(user);
	}

	UserFactory.prototype.login = function(attempt){
		return $http.post('/login', attempt).then(function(ret){
			if(ret.errors || ret.data.pwmatch == false){
				return ret;
			} else {
				user = ret.data;
				return user;
			}
		})
	}

	UserFactory.prototype.logout = function(callback){
		user = {};
		callback();
	}

	return new UserFactory();
})
