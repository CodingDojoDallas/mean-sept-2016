// Setting up the express app
var express = require('express'),
	app = express();

// Setting up two express utilities
var path = require('path'),
	bp = require('body-parser');

// Setting up serving static files to index.html
app.use(express.static(path.join(__dirname, './client')));
app.use(express.static(path.join(__dirname, './bower_components')))

// Setting up body-parser to read requests and serve back JSON
app.use(bp.urlencoded({ extended: true }));
app.use(bp.json());

// run mongoose setup
require('./server/config/mongoose.js');

//load routes
require('./server/config/routes.js')(app);

// run the app
app.listen(8000, function(){
	console.log('running on port 8000');
})
