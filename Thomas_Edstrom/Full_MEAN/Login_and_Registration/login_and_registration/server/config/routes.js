var users = require('../controllers/users.js');

module.exports = function(app){
	app.post('/register', users.create);
	app.post('/login', users.login);

	// app.get('/users', users.index);
	// app.get('/users/:id', users.show);
	// app.post('/users', users.create);
	// app.put('/users/:id', users.update);
	// app.delete('/users/:id', users.delete);
}