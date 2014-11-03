'use strict';

var root = require('./controllers/root');

exports.register = function (plugin, options, next) {
	plugin.route(root);

	next();
}

exports.register.attributes = {
	name : 'api',
	version : 1.0
};
