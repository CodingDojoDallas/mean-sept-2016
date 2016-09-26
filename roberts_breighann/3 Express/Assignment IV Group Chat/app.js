// npm install --save express body-parser express-session ejs socket.io

var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');

var app = express();
app.use(bodyParser.urlencoded());
app.use(session({secret: 'bar21kryptonight'}));

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
var chat_users = [];
var chat_messages = [];
io.sockets.on('connection', function (socket) {
  console.log("We are using sockets.");
  console.log(socket.id);

  socket.on('retrieve_messages', function(){
    io.emit('return_messages', {messages: chat_messages})
  })
  socket.on('user_joined', function(new_user){
    console.log(new_user);
    chat_users.push(new_user);
    io.emit('get_users', {users: chat_users});
  });
  socket.on('new_chat', function(new_chat){
    console.log(new_chat);
    chat_messages.push(new_chat);
    io.emit('update_chat', new_chat)
  });
});
