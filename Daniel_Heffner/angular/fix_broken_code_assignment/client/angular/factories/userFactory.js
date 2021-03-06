app.factory('userFactory', function() {
	var users = [{
			name: "mike"
		}];

	var factory = {}
		
	factory.index = function(functionPassedByControllerAsAnArgToIndex) {
		if (typeof(functionPassedByControllerAsAnArgToIndex) === 'function') {
			functionPassedByControllerAsAnArgToIndex(users);
		}
	};
		/*
			Creates a newUser by pushing the newUser argument into the users array
			then runs the callback to return the updated array to controllers
		*/
	factory.create = function(newUser, functionPassedByControllerAsAnArgToCreate) {
		if (typeof(newUser) === 'object') {
			users.push(newUser);
		}
		if (typeof(functionPassedByControllerAsAnArgToCreate) === 'function') {
			functionPassedByControllerAsAnArgToCreate(users);
		}
	};
		/* perhaps a comment here about what this does would help us understand it! */
	factory.update = function(updateUser, idx, functionPassedByControllerAsAnArgToUpdate) {
		if (users[idx]) {
			for (var key in updateUser) {
				users[idx][key] = updateUser[key];
			}
		}
		if (typeof(functionPassedByControllerAsAnArgToUpdate) === 'function') {
			functionPassedByControllerAsAnArgToUpdate(users[idx]);
		}
	}
	factory.show = function(idx, functionPassedByControllerAsAnArgToShow) {
		if (typeof(functionPassedByControllerAsAnArgToShow) === 'function') {
			functionPassedByControllerAsAnArgToShow(users[idx]);
		}
	}
	factory.delete = function(idx, functionPassedByControllerAsAnArgToDelete) {
		if (users[idx]) {
			users.splice(idx, 1);
		}
		if (typeof(functionPassedByControllerAsAnArgToDelete) === 'function') {
			functionPassedByControllerAsAnArgToDelete(users);
		}
	}
	
	/*
	What is this factory returning?  Could we extend this code to be reused?
	*/
	return factory;
});
