var path = require('path');
var fs = require('fs');

module.exports = function(request, response){
	var req = path.parse(request.url);
	var filePath = '.'+req.dir+'/'+req.base;
	var ext = req.ext.slice(1);
	fs.access(path, fs.F_OK, function(err) {
		if (!err) {
			
		} else {
			response.writeHead(404);
			response.end('File not found');
		}
	});
	fs.readFile(filePath, function(errors, contents){
		response.writeHead
	})
}

else if (
			path.parse(request.url).dir === '/cars' 
			|| path.parse(request.url).dir === '/cats'){
		var req = path.parse(request.url);
		var filePath = './images'+req.dir+'/'+req.base;
		var ext = req.ext;
		ext = ext.slice(1);
		fs.readFile(filePath, function(errors, contents){
			response.writeHead(200, {'Content-Type': 'images/'+ext});
			response.write(contents);
			response.end();
		})
	} else {
		response.writeHead(404);
		response.end('File not found');
	}