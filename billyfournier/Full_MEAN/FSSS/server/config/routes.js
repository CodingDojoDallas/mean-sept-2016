console.log('**** routes');
var mongoose = require('mongoose');
// WE NEED TO ADD a few lines of code up here!
// What is this 'friends' object we are referencing below??
require('../controllers/friends.js');
module.exports = function(app){
  app.get('/friends', friendsController.index);
  app.get('/friends/:id', friendsController.show);
  app.post('/friends', friendsController.create);
  app.put('/friends/:id', friendsController.update);
  app.delete('/friends/:id', friendsController.delete);
}
//
// module.exports = function(app){
//   app.get('/friends', friends.index);
//   app.get('/friends/:id', friends.show);
//   app.post('/friends', friends.create);
//   app.put('/friends/:id', friends.update);
//   app.delete('/friends/:id', friends.delete);
// }
// this adds route listeners to friends for 5 of the 7 RESTful routes, excluding new and edit.
