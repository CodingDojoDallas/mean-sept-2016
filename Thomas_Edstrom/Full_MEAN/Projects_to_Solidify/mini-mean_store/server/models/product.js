var mongoose = require('mongoose'),

ProductSchema = new mongoose.Schema({
	product: {
		type: String,
	},
	image: {
		type: String,
	},
	qty: {
		type: Number,
	},
	description: {
		type: String,
	}
}, {timestamps: {
	createdAt: 'created_at',
	updatedAt: 'updated_at'
	}
})

Products = mongoose.model('Products', ProductSchema);