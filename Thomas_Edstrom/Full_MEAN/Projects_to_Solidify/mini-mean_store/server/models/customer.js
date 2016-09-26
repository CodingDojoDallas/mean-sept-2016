var mongoose = require('mongoose'),

CustomerSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "A name is required"],
		unique: [true, "That name is already taken"],
		trim: true,
	}
}, {timestamps: {
	createdAt: 'created_at',
	updatedAt: 'updated_at'
	}
})

Customers = mongoose.model('Customers', CustomerSchema);