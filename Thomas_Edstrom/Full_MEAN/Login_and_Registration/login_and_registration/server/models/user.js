var mongoose = require('mongoose'),
	uniqueValidator = require('mongoose-unique-validator'),
	bcrypt = require('bcrypt'),

	UserSchema = new mongoose.Schema({
		email: {
			type: String,
			lowercase: true,
			required: [true, "Email is required"],
			unique: [true, "That email address is already taken"],
			validate: {
				validator: function(email){
					return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test( email );
				},
				message: `{VALUE} is not a valid email address`
			},
		},
		name: {
			first: {
				type: String,
				required: [true, "Your first name is required"],
				trim: true,
			},
			last: {
				type: String,
				required: [true, "Your last name is required"],
				trim: true,
			},
		},
		password: {
			type: String,
			required: [true, "Password required"],
			minlength: [8, "Password must be at least 8 characters"],
			maxlength: [32, "Password cannot exceed 32 characters"],
			// validate: {
			// 	validator: function( value ) {
			// 		return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,32}/.test( value );
			// 	},
			// 	message: "Password failed validation, you must have at least 1 number, uppercase and special character"
			// },	
		},
		birthdate: {
			type: Date,
			required: [true, "Birthdate required"],
			validate: {
				validator: function( birthday ) {
					return (Date.now() > birthday)
				},
				message: "Birthdate must be before today's date."
			}
		}
	}, {timestamps: {
		createdAt: 'created_at',
		updatedAt: 'updated_at'
		}
	})

	Users = mongoose.model('Users', UserSchema);

UserSchema.plugin(uniqueValidator);
// UserSchema.plugin(require('mongoose-bcrypt'));

// Full Name
UserSchema.virtual( 'name.full' ).get(function(){
	return this.name.first + " " + this.name.last;
})

// Encrypt Passwords
UserSchema.pre('save', function(done) {
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
    done();
});


// FAILED PASSWORD VALIDATION METHODS BELOW HERE

// Validate Password
// UserSchema.methods.validPassword = function(password) {
//     return bcrypt.compare(password, this.password);
// };


// UserSchema.methods.comparePassword = function(candidatePassword, password){
//     return bcrypt.compare(candidatePassword, password)
// };


// UserSchema.methods.generateHash = function(password) {
//     return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
// };

// UserSchema.pre('save', function(done) {
//     this.password = this.generateHash(this.password);
//     done();
// });









