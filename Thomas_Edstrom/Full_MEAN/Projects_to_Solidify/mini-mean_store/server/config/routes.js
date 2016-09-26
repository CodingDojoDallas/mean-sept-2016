var customers 	= require('../controllers/customers.js'),
	products	= require('../controllers/products.js'),
	orders		= require('../controllers/orders.js');

module.exports = function(app){
	app.get('/customers/index', customers.index);
	app.post('/customers/create', customers.create);
	app.post('/customers/delete/:id', customers.delete);

	app.get('/products/index', products.index);
	app.post('/products/create', products.create);

	app.get('/orders/index', orders.index);
	app.post('/orders/create', orders.create);
}