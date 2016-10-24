// Requiring mongoose to handle the mongoose controllers? experiment with commenting this out?
var mongoose = require('mongoose');

// load any controllers that will be used for routes
var Customers = require('./../controllers/customers.js');
var Orders = require('./../controllers/orders.js');
var Products = require('./../controllers/products.js');

// Exports a function that takes the express app as an argument, sets the routes
module.exports = function(app){
	// Customers controller
	app.get('/customers', Customers.index);
	app.post('/customers', Customers.create);
	app.get('/customers/recent', Customers.recent);
	app.delete('/customers/:id', Customers.delete);
	// Orders controller
	app.get('/orders', Orders.index);
	app.post('/orders', Orders.create);
	app.get('/orders/recent', Orders.recent);
	app.delete('/orders/:id', Orders.delete);
	// Products controller
	app.get('/products', Products.index);
	app.get('/products/recent', Products.recent);
	app.put('/products/:id', Products.update);
	app.post('/products', Products.create);
	app.delete('/products/:id', Products.delete);
}
