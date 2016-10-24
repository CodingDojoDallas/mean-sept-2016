// Require mongoose in order to create a schema
var mongoose = require('mongoose');

// Set up the schema
var ordersSchema = new mongoose.Schema({
	customer: {
		type: String,
		required: true
	},
	product: {
		type: String,
		required: true
	},
	quantity: {
		type: Number,
		min: 0,
		required: true
	}
}, {timestamps: true})

// Create the model using the model method from Mongoose
mongoose.model('Orders', ordersSchema);
