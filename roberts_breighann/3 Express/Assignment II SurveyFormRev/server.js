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
//
// app.get("/users", function (request, response){
//     // hard-coded user data
//     var users_array = [
//         {name: "Michael", email: "michael@codingdojo.com"},
//     ];
//     response.render('users', {users: users_array});
// });
//
app.post('/result', function(req, res) {
 console.log("POST DATA", req.body);

 res.render('result', { body: req.body } );
});

var server = app.listen(8000, function() {
  console.log("listening on port 8000");
});
var io = require('socket.io').listen(server)

io.sockets.on('connection', function (socket) {
  console.log("We are using socket.");
  console.log(socket.id);
  //all the socket code goes in here!
  // The server listens for an event 'posting_form' and when this event gets triggered,
  // organizes all the emitted information to form a single message and sends this single message
  // with the event called 'updated_message'.
  // It also EMITs an event called 'random_number' with random number between 1-1000.
  socket.on('posting_form', function(data){
    var msg = '';
    var tmp;
    for ( mssg in data['form']){
      console.log(data['form'][mssg]);
      tmp = data['form'][mssg]
      msg += tmp['name'] + ' ' + tmp['value'] + ', ';
    }
    socket.emit('update_message', {res: msg});
    socket.emit('random_number', {num: (Math.random()*1000)});
  });
})
