var mongoose = require( 'mongoose' ),
    express  = require( 'express' ),
    bp       = require('body-parser'),
    path     = require( 'path' ),
    root     = __dirname,
    port     = process.env.PORT || 8000,
    app      = express(),
    cookieParser = require('cookie-parser'),
    session	 = require('express-session'),
    passport = require('passport'),
    Strategy = require('passport-local').Strategy;


// CONFIG PASSPORT strategy
passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      if (!user.verifyPassword(password)) { return done(null, false); }
      return done(null, user);
    });
  }
));

// CONFIG PASSPORT session persistence
passport.serializeUser(function(user, cb) {
  cb(null, user.id);
});

passport.deserializeUser(function(id, cb) {
  db.users.findById(id, function (err, user) {
    if (err) { return cb(err); }
    cb(null, user);
  });
});


// CONFIG
app.use(require('morgan')('combined'));
app.use( express.static( path.join( root )));
app.use( express.static( path.join( root, 'client' )));
app.use( express.static( path.join( root, 'bower_components' )));
app.use(bp.json());
app.use(cookieParser());
app.use(session({secret: 'secret',
                saveUninitialized: true,
                resave: true}));
app.use(passport.initialize());
app.use(passport.session());

require("./server/config/routes.js")(app);
require("./server/config/mongoose.js");




app.listen( port, function() {
	console.log( `server running on port ${ port }` );
});


