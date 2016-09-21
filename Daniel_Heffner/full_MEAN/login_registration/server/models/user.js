var mongoose = require('mongoose');

// REGEXes
var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
var passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!\s){8,32}/;

// BCRYPT
var bcrypt = require('bcrypt'),
	saltRounds = 10;

var UserSchema = new mongoose.Schema({
	email: {
		type: String, 
		required: [true, 'You must have an email to log in!'],
		unique: true,
		trim: true,
		validate: {
			validator: function(emailStr){
				return emailRegex.test(emailStr);
			},
			message: 'This is not a valid email address'
		}
	},
	first_name: {
		type: String,
		required: [true, 'First name is required'],
		trim: true,
	},
	last_name: {
		type: String,
		required: [true, 'Last name is required'],
		trim: true
	},
	password: {
		type: String,
		required: [true, 'You need a password to log in!'],
		validate: {
			validator: function(pass){
				return passRegex.test(pass);
			},
			message: 'Passwords must contain at least one lowercase letter, one uppercase letter, and one number, and they cannot contain spaces. They must be at least 8 characters long and no more than 32 characters long.'
		}
	},
	birthday: {
		type: Date,
		required: [true, 'Is it creepy that we need to know your birthday?']
	},
}, {timestamps: true});


UserSchema.pre('save', function(next){
	var user = this;
	bcrypt.hash(this.password, saltRounds, function(err, hash){
		if (err) return next(err);
		user.password = hash;
		next();
	});
});

UserSchema.methods.comparePassword = function(attempt, hash, callback){
	bcrypt.compare(attempt, hash, function(err, res){
		if (err) return callback(err);
		return callback(res);
	})
}

mongoose.model('User', UserSchema);
