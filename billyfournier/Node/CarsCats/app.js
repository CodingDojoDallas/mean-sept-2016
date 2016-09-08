var http = require('http');
var fs = require('fs');
var path = require('path');

var server = http.createServer(function (request, response){
	console.log('client request URL: ', request.url);
	// HTML requests
	if(request.url === '/cars'){
		fs.readFile('./views/cars.html', 'utf8', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(contents);
			response.end();
		})
	} else if(request.url === '/cats'){
		fs.readFile('./views/cats.html', 'utf8', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(contents);
			response.end();
		})
	} else if(request.url === '/cars/new'){
		fs.readFile('./views/newcar.html', 'utf8', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(contents);
			response.end();
		})
	} else if(request.url === '/stylesheets/style.css'){  // stylesheet requests
		fs.readFile('./stylesheets/style.css', 'utf8', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'text/css'});
			response.write(contents);
			response.end();
		})
	} else if (
			path.parse(request.url).dir === '/cars' 
			|| path.parse(request.url).dir === '/cats'){
	// else if(request.url === '/cars/c1.png'){
		var req = path.parse(request.url);
		var filePath = './images'+req.dir+'/'+req.base;
		var ext = req.ext;
		ext = ext.slice(1);
		console.log(ext);
		fs.readFile(filePath, function(errors, contents){
			response.writeHead(200, {'Content-Type': 'images/'+ext});
			response.write(contents);
			response.end();
		})
	} else {
		response.writeHead(404);
		response.end('File not found');
	}

	// image requests
});

server.listen(7077);

console.log("Running in localhost at port 7077");
