var mongoose = require('mongoose'),
	uniqueValidator = require('mongoose-unique-validator'),
	bcrypt = require('bcrypt'),

TokenSchema = new mongoose.Schema({
	token: {
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
	user: {

	}
	}, {timestamps: {
		createdAt: 'created_at',
		updatedAt: 'updated_at'
		}
	}
})

Tokens = mongoose.model('Tokens', TokenSchema);
