// Require mongoose in order to create a schema
var mongoose = require('mongoose');

// Require plugin to get pre-save unique validation
var uniqueValidator = require('mongoose-unique-validator');

// Set up the schema
var productsSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Products must have names'],
		unique: true
	},
	imageURL: {
		type: String,
		required: [true, 'Images are required']
	},
	description: {
		type: String,
		required: [true, 'Please describe the product']
	},
	quantity: {
		type: Number,
		min: 0,
		required: [true, 'Products must have some inventory']
	}
}, {timestamps: true})

// Apply unique validation plugin
productsSchema.plugin(uniqueValidator);

// Create the model using the model method from Mongoose
mongoose.model('Product', productsSchema);
