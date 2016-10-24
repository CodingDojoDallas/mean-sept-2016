// Require mongoose in order to create a schema
var mongoose = require('mongoose');

// Require plugin to get pre-save unique validation
var uniqueValidator = require('mongoose-unique-validator');

// Set up the schema
var customersSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Name required'],
		unique: true
	}
}, {timestamps: true})

// Apply unique validation plugin
customersSchema.plugin(uniqueValidator);

// Create the model using the model method from Mongoose
mongoose.model('Customer', customersSchema);
