'use strict';

var Root = require('./controllers/root');
var Task = require('./controllers/task');

exports.register = function (plugin, options, next) {
	plugin.route(Root);
	plugin.route(Task);

	next();
};

exports.register.attributes = {
	name : 'api',
	version : 1.0
};
