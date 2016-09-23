var mongoose = require('mongoose'),
	express = require('express'),
	bp = require('body-parser'),
	path = require('path'),
	models_path = path.join(__dirname, '../models'),
	root = __dirname,
	port = process.env.PORT || 8000,
	app = express();

app.use(express.static(path.join(root, 'client')));
app.use(express.static(path.join(root, 'bower_components')));
app.use(bp.json());

require(path.join(root, 'server/config/mongoose.js'));
require(path.join(root, 'server/config/routes.js'))(app);

app.listen(port, function() {
	console.log('server running on port 8000');
})

