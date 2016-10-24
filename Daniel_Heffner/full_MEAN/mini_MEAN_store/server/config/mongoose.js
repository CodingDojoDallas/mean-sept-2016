// import mongoose and utilities
var mongoose = require('mongoose'),
	fs = require('fs'),
	path = require('path');

// this is looking promising...
mongoose.Promise = require('bluebird');

// connect to the database
mongoose.connect('mongodb://localhost/mini_store_db');

// defining path to models
var models_path = path.join(__dirname, './../models');

// using fs and path to find and load all models
fs.readdirSync(models_path).forEach(function(file){
	if(file.indexOf('.js') > 0){
		require(models_path + '/' + file);
	}
})
