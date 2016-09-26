var mongoose = require('mongoose'),

OrderSchema = new mongoose.Schema({
	product: {
		type: Object,
	},
	customer: {
		type: Object,
	},
	qty: {
		type: Number,
	}
}, {timestamps: {
	createdAt: 'created_at',
	updatedAt: 'updated_at'
	}
})

Orders = mongoose.model('Orders', OrderSchema);