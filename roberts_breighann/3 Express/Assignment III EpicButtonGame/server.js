// npm install express body-parser express-session

var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');

var app = express();
app.use(bodyParser.urlencoded());
app.use(session({secret: 'codingdojorocks'}));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/static"));

app.get('/', function(request, response) {
  response.render('index');
});

app.post('/result', function(req, res) {
 console.log("POST DATA", req.body);

 res.render('result', { body: req.body } );
});

var server = app.listen(8000, function() {
  console.log("listening on port 8000");
});
var io = require('socket.io').listen(server)

var count = 0;
io.sockets.on('connection', function (socket) {
  console.log("WE ARE USING SOCKETS!");
  console.log(socket.id);

  socket.on('page_load', function(){
    console.log('test');
    console.log(count);
    socket.emit('page_return', {count: count});
  });
  socket.on('button_pushed', function(){
    count++;
    io.emit('count_return', {count: count});
  });
  socket.on('reset', function(){
    count = 0;
    io.emit('reset_return', {count: count});
  });
})
